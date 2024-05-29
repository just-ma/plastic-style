import React from 'react';

import { reviewPagePath } from '../routes';
import { Review } from '../models/types';

import ArticleCard from '../../common/ui/ArticleCard';
import { useLocation } from 'react-router-dom';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { reviewId, artist, title, image, author, createdAt },
}: ComponentProps): React.ReactElement {
  const location = useLocation();

  const link: string = reviewPagePath(reviewId);
  const preLink = `${location.pathname}#${reviewId}`;

  return (
    <ArticleCard
      id={reviewId}
      headerProps={{
        title,
        subtitle: author,
        secondaryTitle: artist,
      }}
      image={image}
      link={link}
      preLink={preLink}
      timestamp={createdAt}
      symbol="✎"
    />
  );
}
