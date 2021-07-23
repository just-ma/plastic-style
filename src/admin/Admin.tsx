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
import styles from './admin.module.scss';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  picture: yup
    .mixed()
    .required('You need to provide a file')
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0].size <= 2000000;
    })
    .test('type', 'We only support jpeg', (value) => {
      return value && value[0].type === 'image/jpeg';
    }),
});

function Admin(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>(MOCK_REVIEWS);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  // const [image, setImage] = useState<File | undefined>(undefined);
  const [image, setImage] = useState<any>('');

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

  const fileValidation = (e: any) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    if (!imageFile) {
      setImage({ invalidImage: 'Please select image.' });
      alert('INVALID asoufhasfh');
      // return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setImage({ invalidImage: 'Please select valid image.' });
      // alert('INVALID');
      // return false;
    }

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage({ selectedFile: imageFile, invalidImage: null });
        return true;
      };
      img.onerror = () => {
        setImage({ invalidImage: 'Invalid image content.' });
        return false;
      };
      // img.src = e.target.result;  //debugger
    };
    reader.readAsDataURL(imageFile);
  };

  // const { register, handleSubmit, errors } = useForm({
  //   validationSchema: schema,
  // });

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };

  return (
    <div>
      <div>
        <Button
          className={styles.createButton}
          // style={{ margin: '0 auto', display: 'flex', height: 60, borderRadius: 15, backgroundColor: 'purple' }}
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
            {/* <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                id="file"
                accept="image/*"
                // hidden
                // value={image ? undefined : ''}
                value={image}
                onChange={(e) => setImage(e.target.files?.[0])}
                // onChange={(e) => fileValidation(e)}
              />
            </Button> */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <input ref={register} type="file" name="picture" />
              {errors.picture && <p>{errors.picture.message}</p>}
              <button>Submit</button>
            </form> */}
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
      <div className={styles.reviewsSection}>
        <h2 className={styles.reviewsHeader}>{image}</h2>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewContent}>
            <Button
              className={styles.deleteButton}
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
