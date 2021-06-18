import React, { useEffect, useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { listReviews } from '../graphql/queries';
import { createReview, deleteReview } from '../graphql/mutations';
import { Review } from '../reviews/models/types';

import ReviewListItem from '../reviews/ui/review-list-item/ReviewListItem';

function Admin(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>([]);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | undefined>(undefined);

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    fetchReviews();
  }, []);

  const handleCreateReview = async (): Promise<void> => {
    if (!title || !artist || !author || !content || !image) {
      return;
    }

    await Storage.put(image.name, image);
    const src = await Storage.get(image.name);

    const review = {
      title,
      artist,
      author,
      content,
      src,
      createdAt: Math.round(new Date().getTime() / 1000),
    };

    const apiData: any = await API.graphql({
      query: createReview,
      variables: { input: review },
    });

    setReviews((prev) => [...prev, apiData.data.createReview]);
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
    <div style={{ padding: 30 }}>
      <h1>MAKE REVIEW</h1>
      <div>
        <div>
          <label>title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>artist</label>
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}></input>
        </div>
        <div>
          <label>author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        </div>
        <div>
          <label>content</label>
          <input type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></input>
        </div>
        <div>
          <label>img</label>
          <input type="file" value={image ? undefined : ''} onChange={(e) => setImage(e.target.files?.[0])}></input>
        </div>
        <button onClick={handleCreateReview}>create review</button>
      </div>
      <br />
      <div style={{ overflowY: 'auto', height: 600 }}>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} style={{ width: 800, marginBottom: 50 }}>
            <button style={{ marginBottom: 20 }} onClick={() => handleDeleteReview(review.id)}>
              delete review
            </button>
            <ReviewListItem review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuthenticator(Admin);
