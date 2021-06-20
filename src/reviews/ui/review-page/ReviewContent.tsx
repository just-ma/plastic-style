import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Review } from '../../models/types';
import { REVIEWS_PATH } from '../../routes';

import styles from './ReviewContent.module.scss';

type ComponentProps = {
  review: Review;
};

export default function ReviewContent({ review: { author, createdAt, content } }: ComponentProps): React.ReactElement {
  const dateLabel = useMemo((): string => {
    if (!createdAt) {
      return '';
    }

    const date = new Date(createdAt * 1000);
    const label = new Intl.DateTimeFormat('en-US').format(date);

    return label;
  }, [createdAt]);

  return (
    <div className={styles.ReviewContent}>
      <div className={styles.header}>
        <span>{`by ${author}`}</span>
        <div>{dateLabel}</div>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <Link className={styles.link} to={REVIEWS_PATH}>
          {'< MORE REVIEWS'}
        </Link>
      </div>
    </div>
  );
}
