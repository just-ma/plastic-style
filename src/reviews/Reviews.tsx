import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import { listReviews } from '../graphql/queries';
import { Review } from './models/types';

import ReviewListItem from './ui/review-list-item/ReviewListItem';

export default function Reviews(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>([]);

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewListItem key={index} review={review} />
      ))}
    </div>
  );
}
