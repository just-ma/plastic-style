import React, { useEffect } from 'react';

import { Review } from './models/types';
import { MOCK_REVIEWS } from './models/constants';

import ReviewListItem from './ui/ReviewListItem';

export default function Reviews(): React.ReactElement {
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
      {MOCK_REVIEWS.map((review: Review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </div>
  );
}
