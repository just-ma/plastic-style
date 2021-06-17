import React from 'react';

import { Review } from '../../models/types';
import { reviewPagePath } from '../../routes';

import AlbumCover from '../AlbumCover';
import Header from '../Header';
import Divider from './Divider';
import ReadMore from './ReadMore';

import styles from './ReviewListItem.module.scss';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { id, artist, title, src, content },
}: ComponentProps): React.ReactElement {
  return (
    <>
      <div className={styles.ReviewListItem}>
        <div className={styles.thumbnail}>
          <AlbumCover src={src} />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <Header artist={artist} title={title} fullWidth />
          </div>
          <p className={styles.contentContainer}>{content}</p>
          <ReadMore link={reviewPagePath(id)} />
        </div>
      </div>
      <div className={styles.divider}>
        <Divider />
      </div>
    </>
  );
}
