import React from 'react';

import { Review } from '../models/types';
import { reviewPagePath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { id, artist, title, src, content },
}: ComponentProps): React.ReactElement {
  return (
    <PageListItem
      id={id}
      title={title}
      secondaryTitle={artist}
      src={src}
      description={content}
      link={reviewPagePath(id)}
      linkLabel={'READ MORE >'}
    />
  );
}
