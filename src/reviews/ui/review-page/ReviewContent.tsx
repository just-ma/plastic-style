import React from 'react';
import { Link } from 'react-router-dom';

import { getDateLabel } from '../../../common/utils';
import { reviewsPath } from '../../routes';
import { Review } from '../../models/types';

import TitledParagraph from '../../../common/ui/TitledParagraph';

import styles from './ReviewContent.module.scss';

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
      <div className={styles.footer}>
        <Link className={styles.link} to={reviewsPath(reviewId)}>
          {'< MORE REVIEWS'}
        </Link>
      </div>
    </div>
  );
}
