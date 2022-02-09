import React, { useEffect } from 'react';

import { ModelReviewConnection } from '../API';
import useQueryData from '../common/hooks/useQueryData';
import { listReviews } from '../graphql/queries';

import ReviewListItem from './ui/ReviewListItem';

export default function Reviews(): React.ReactElement {
  const { data } = useQueryData<{
    listReviews: ModelReviewConnection | undefined;
  }>({ query: listReviews });

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
      {data?.listReviews?.items
        .sort((a, b) => (b?.createdAt || 0) - (a?.createdAt || 0))
        .map((review) => (review ? <ReviewListItem key={review.id} review={review} /> : null))}
    </div>
  );
}
