import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import { listReviews } from '../graphql/queries';
import { Review } from './models/types';
import { MOCK_REVIEWS } from './models/constants';

import ReviewListItem from './ui/ReviewListItem';

export default function Reviews(): React.ReactElement {
  const [reviews, setReviews] = useState<ReadonlyArray<Review>>(MOCK_REVIEWS);

  const fetchReviews = async (): Promise<void> => {
    const apiData: any = await API.graphql({ query: listReviews });
    setReviews(apiData.data.listReviews.items);
  };

  useEffect((): void => {
    //fetchReviews();
  }, []);

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [reviews]);

  return (
    <div>
      {reviews.map((review: Review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </div>
  );
}
