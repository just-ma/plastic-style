import React from 'react';
import { Link } from 'react-router-dom';

import { Review } from '../../models/types';
import { reviewsPath } from '../../routes';

import AuthoredParagraph from '../../../common/ui/AuthoredParagraph';

import styles from './ReviewContent.module.scss';

type ComponentProps = {
  className?: string;
  review: Review;
};

export default function ReviewContent({
  className,
  review: { id, author, createdAt, content },
}: ComponentProps): React.ReactElement {
  return (
    <div className={className}>
      <AuthoredParagraph author={author} date={createdAt} content={content} />
      <div className={styles.footer}>
        <Link className={styles.link} to={reviewsPath(id)}>
          {'< MORE REVIEWS'}
        </Link>
      </div>
    </div>
  );
}
