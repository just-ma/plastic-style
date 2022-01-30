import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { Review } from '../../models/types';
import { MOCK_REVIEWS } from '../../models/constants';
import { reviewsPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Thumbnail from '../../../common/ui/Thumbnail';
import Header from '../../../common/ui/Header';
import Divider from '../../../common/ui/Divider';
import ReviewContent from './ReviewContent';

import styles from './ReviewPage.module.scss';

type ComponentProps = {
  id?: string;
};

type RouteParams = {
  reviewId: string;
};

export default function ReviewPage({ id }: ComponentProps): React.ReactElement {
  const { reviewId = id } = useParams<RouteParams>();
  const { isMobile } = useResponsive();

  const review: Review | undefined = MOCK_REVIEWS.find((r) => r.id === reviewId);

  if (!review) {
    return <Redirect to={reviewsPath()} />;
  }

  const { artist, title, image } = review;

  return (
    <div className={classnames(styles.ReviewPage, isMobile && styles.mobile)}>
      {isMobile ? (
        <div className={styles.mobileHeader}>
          <TitleDisplay title={title} secondaryTitle={artist} image={image} />
          <Divider />
        </div>
      ) : (
        <div className={styles.staticContainer}>
          <div className={styles.infoCard}>
            <div className={styles.header}>
              <Header title={title} secondaryTitle={artist} />
            </div>
            <div className={styles.thumbnail}>
              <Thumbnail src={image} fullWidth={isMobile} />
            </div>
          </div>
          <div className={styles.divider}>
            <Divider vertical />
          </div>
        </div>
      )}
      <ReviewContent className={styles.content} review={review} />
    </div>
  );
}
