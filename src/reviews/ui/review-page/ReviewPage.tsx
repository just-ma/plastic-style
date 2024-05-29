import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { reviewsPath } from '../../routes';
import { REVIEWS } from '../../models/constants';

import ArticlePage from '../../../common/ui/ArticlePage';

type ComponentProps = {
  id?: string;
};

type RouteParams = {
  reviewId: string;
};

export default function ReviewPage({ id }: ComponentProps): React.ReactElement | null {
  const { reviewId = id } = useParams<RouteParams>();

  const review = REVIEWS.find((review) => review.reviewId === reviewId);

  if (!review) {
    return <Navigate to={reviewsPath()} />;
  }

  const { artist, title, image, author, createdAt, content } = review;

  return (
    <ArticlePage
      image={image}
      headerProps={{ title: `${artist} - ${title}`, subtitle: author }}
      timestamp={createdAt}
      content={content}
    />
  );
}
