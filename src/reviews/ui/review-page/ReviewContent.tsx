import React from 'react';

import { getDateLabel } from '../../../common/utils';
import { reviewsPath } from '../../routes';
import { Review } from '../../models/types';

import TitledParagraph from '../../../common/ui/TitledParagraph';
import FooterLink from '../../../common/ui/FooterLink';

type ComponentProps = {
  className?: string;
  review: Review;
};

export default function ReviewContent({
  className,
  review: { reviewId, author, createdAt, content },
}: ComponentProps): React.ReactElement {
  return (
    <div className={className}>
      <TitledParagraph
        leftTitle={`by ${author}`}
        rightTitle={createdAt ? getDateLabel(createdAt) : ''}
        content={content}
      />
      <FooterLink to={reviewsPath(reviewId)}>{'< MORE REVIEWS'}</FooterLink>
    </div>
  );
}
