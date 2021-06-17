import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { listReviews } from '../graphql/queries';
import { createReview, deleteReview } from '../graphql/mutations';
import { Review } from '../reviews/models/types';

import ReviewListItem from '../reviews/ui/review-list-item/ReviewListItem';

type FormData = Omit<Review, 'id' | 'createdAt'>;

const DEFAULT_FORM: FormData = {
  title: '',
  artist: '',
  author: '',
  src: '',
  content: '',
};

function Admin(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>([]);
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM);

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    fetchReviews();
  }, []);

  const handleCreateReview = async (): Promise<void> => {
    const { title, artist, author, src, content } = formData;

    if (!title || !artist || !author || !src || !content) {
      return;
    }

    const review = { ...formData, createdAt: new Date().getTime() / 1000 };

    const apiData: any = await API.graphql({
      query: createReview,
      variables: { input: review },
    });
    setReviews((prev) => [...prev, apiData.data.createReview]);
    setFormData(DEFAULT_FORM);
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
        {Object.keys(DEFAULT_FORM).map((key) => {
          const value = key as keyof FormData;

          return (
            <div key={key}>
              <label>{value}</label>
              <input
                type="text"
                value={formData[value]}
                onChange={(val) => setFormData((prev) => ({ ...prev, [value]: val.target.value }))}
              ></input>
            </div>
          );
        })}
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
