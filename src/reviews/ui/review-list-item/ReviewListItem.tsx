import React from 'react';
import { reviewPagePath } from '../../routes';

import AlbumCover from '../AlbumCover';
import Header from '../Header';
import Divider from './Divider';
import ReadMore from './ReadMore';

import styles from './ReviewListItem.module.scss';

type ComponentProps = {
  reviewId: string;
  artist: string;
  title: string;
  author: string;
  dateCreated: number;
  src: string;
  content: string;
};

export default function ReviewListItem({
  reviewId,
  artist,
  title,
  author,
  dateCreated,
  src,
  content,
}: ComponentProps): React.ReactElement {
  return (
    <>
      <div className={styles.ReviewListItem}>
        <div className={styles.thumbnail}>
          <AlbumCover src={src} />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <Header artist={artist} title={title} />
          </div>
          <p className={styles.contentContainer}>{content}</p>
          <ReadMore link={reviewPagePath(reviewId)} />
        </div>
      </div>
      <div className={styles.divider}>
        <Divider />
      </div>
    </>
  );
}
