import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { MOCK_REVIEWS } from '../../Reviews';
import AlbumCover from '../AlbumCover';
import Header from '../Header';
import Divider from './Divider';

import styles from './ReviewPage.module.scss';

type RouteParams = {
  reviewId: string;
};

export default function ReviewPage(): React.ReactElement {
  const { reviewId } = useParams<RouteParams>();

  const { artist, title, author, dateCreated, src, content } = MOCK_REVIEWS[0];

  const dateLabel = useMemo(() => {
    const date = new Date(dateCreated * 1000);
    const label = new Intl.DateTimeFormat('en-US').format(date);

    return label;
  }, [dateCreated]);

  return (
    <div className={styles.ReviewPage}>
      <div className={styles.staticContainer}>
        <div className={styles.infoCard}>
          <div className={styles.header}>
            <Header artist={artist} title={title} />
          </div>
          <div className={styles.thumbnail}>
            <AlbumCover src={src} />
          </div>
          <div className={styles.metaContainer}>
            <span>{author}</span>
            <span>{dateLabel}</span>
          </div>
        </div>
        <div className={styles.divider}>
          <Divider />
        </div>
      </div>
      <p className={styles.contentContainer}>{content}</p>
    </div>
  );
}
