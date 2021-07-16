import React, { useEffect, useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { listReviews } from '../graphql/queries';
import { createReview, deleteReview } from '../graphql/mutations';
import { Review } from '../reviews/models/types';
import { MOCK_REVIEWS } from '../reviews/models/constants';

import ReviewListItem from '../reviews/ui/ReviewListItem';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './Admin.module.scss';

function Admin(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>(MOCK_REVIEWS);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | undefined>(undefined);

  // Pop Up Form State
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Pop Up Form State

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    //fetchReviews();
  }, []);

  const handleCreateReview = async (): Promise<void> => {
    if (!title || !artist || !author || !content || !image) {
      return;
    }

    const fileName = `${artist} - ${title}`;

    await Storage.put(fileName, image);
    const srcRaw = await Storage.get(fileName);
    let src = srcRaw;

    if (typeof srcRaw === 'string') {
      src = srcRaw.split('?')[0];
    }

    const review = {
      title,
      artist,
      author,
      content,
      src,
    };

    const apiData: any = await API.graphql({
      query: createReview,
      variables: { input: review },
    });

    setReviews((prev) => [apiData.data.createReview, ...prev]);
    setTitle('');
    setArtist('');
    setAuthor('');
    setContent('');
    setImage(undefined);
  };

  const handleDeleteReview = async (id: string): Promise<void> => {
    await API.graphql({
      query: deleteReview,
      variables: { input: { id } },
    });
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <div>
      <div>
        <Button
          style={{ margin: '0 auto', display: 'flex', height: 60, borderRadius: 15, backgroundColor: 'purple' }}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClickOpen}
        >
          Create Review
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Review Form</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="title"
              type="text"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="artist"
              label="artist"
              type="text"
              fullWidth
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="author"
              label="author"
              type="text"
              fullWidth
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="content"
              label="content"
              multiline
              rows={14}
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                hidden
                value={image ? undefined : ''}
                onChange={(e) => setImage(e.target.files?.[0])}
              />
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleCreateReview();
                handleClose();
              }}
              color="primary"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <br />
      <div style={{ overflowY: 'auto', height: 600 }}>
        <h2 style={{ margin: 20 }}>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} style={{ width: 800, marginBottom: 50 }}>
            <Button
              style={{ margin: 20, borderRadius: 15, backgroundColor: 'rgba(113, 12, 245, 0.777)' }}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                handleDeleteReview(review.id);
              }}
            >
              Delete Review
            </Button>
            <ReviewListItem review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuthenticator(Admin);
