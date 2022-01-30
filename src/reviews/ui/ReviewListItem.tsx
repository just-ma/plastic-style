import React from 'react';

import { Review } from '../models/types';
import { reviewPagePath, reviewsPath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { id, artist, title, image, content },
}: ComponentProps): React.ReactElement {
  const link: string = reviewPagePath(id);
  const preLink: string = reviewsPath(id);

  return (
    <PageListItem
      id={id}
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
