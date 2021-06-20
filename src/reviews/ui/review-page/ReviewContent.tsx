import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Review } from '../../models/types';
import { reviewsPath } from '../../routes';

import styles from './ReviewContent.module.scss';

type ComponentProps = {
  className?: string;
  review: Review;
};

export default function ReviewContent({
  className,
  review: { id, author, createdAt, content },
}: ComponentProps): React.ReactElement {
  const dateLabel = useMemo((): string => {
    if (!createdAt) {
      return '';
    }

    const date = new Date(createdAt * 1000);
    const label = new Intl.DateTimeFormat('en-US').format(date);

    return label;
  }, [createdAt]);

  return (
    <div className={className}>
      <div className={styles.header}>
        <span>{`by ${author}`}</span>
        <div>{dateLabel}</div>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <Link className={styles.link} to={reviewsPath(id)}>
          {'< MORE REVIEWS'}
        </Link>
      </div>
    </div>
  );
}
