import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { Review } from '../../models/types';
import { reviewPagePath } from '../../routes';
import useResponsive from '../../../common/hooks/useResponsive';

import AlbumCover from '../AlbumCover';
import Header from '../Header';
import Divider from './Divider';

import styles from './ReviewListItem.module.scss';

type ComponentProps = {
  review: Review;
};

export default function ReviewListItem({
  review: { id, artist, title, src, content },
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div id={id} className={classnames(styles.ReviewListItem, isMobile && styles.mobile)}>
      <Link className={styles.row} to={reviewPagePath(id)}>
        <div className={styles.thumbnail}>
          <AlbumCover src={src} />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <Header artist={artist} title={title} fullWidth />
          </div>
          {!isMobile && <p className={styles.contentContainer}>{content}</p>}
          <div className={styles.link}>{'Read More >'}</div>
        </div>
      </Link>
      <div className={styles.divider}>
        <Divider />
      </div>
    </div>
  );
}
