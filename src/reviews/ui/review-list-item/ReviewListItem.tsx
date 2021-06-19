import React from 'react';
import classnames from 'classnames';

import { Review } from '../../models/types';
import { reviewPagePath } from '../../routes';
import useResponsive from '../../../common/hooks/useResponsive';

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
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.ReviewListItem, isMobile && styles.mobile)}>
      <div className={styles.row}>
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
    </div>
  );
}
