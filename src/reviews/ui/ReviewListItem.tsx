import React from 'react';

import { reviewPagePath, reviewsPath } from '../routes';
import { Review } from '../models/types';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { reviewId, artist, title, image, content },
}: ComponentProps): React.ReactElement {
  const link: string = reviewPagePath(reviewId);
  const preLink: string = reviewsPath(reviewId);

  return (
    <PageListItem
      id={reviewId}
      title={title}
      secondaryTitle={artist}
      image={image}
      description={content}
      link={link}
      linkLabel="READ MORE >"
      preLink={preLink}
    />
  );
}
