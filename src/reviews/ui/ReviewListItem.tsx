import React from 'react';

import { reviewPagePath, reviewsPath } from '../routes';
import { Review } from '../models/types';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { reviewId, artist, title, image, content, author },
}: ComponentProps): React.ReactElement {
  const link: string = reviewPagePath(reviewId);
  const preLink: string = reviewsPath(reviewId);

  return (
    <PageListItem
      id={reviewId}
      headerProps={{
        title,
        subtitle: author,
        secondaryTitle: artist,
      }}
      image={image}
      description={content}
      link={link}
      linkLabel="READ MORE >"
      preLink={preLink}
    />
  );
}
