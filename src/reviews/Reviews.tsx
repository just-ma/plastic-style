import React, { useEffect } from 'react';

import { ModelReviewConnection } from '../API';
import useQueryData from '../common/hooks/useQueryData';
import { listReviews } from '../graphql/queries';
import { REVIEWS } from './models/constants';

import ReviewListItem from './ui/ReviewListItem';

export default function Reviews(): React.ReactElement {
  // const { data } = useQueryData<{
  //   listReviews: ModelReviewConnection | undefined;
  // }>({ query: listReviews });

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div>
      {[...REVIEWS]
        .sort((a, b) => (b?.createdAt || 0) - (a?.createdAt || 0))
        .map((review) => (review ? <ReviewListItem key={review.reviewId} review={review} /> : null))}
    </div>
  );
}
