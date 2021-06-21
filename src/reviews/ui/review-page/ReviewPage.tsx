import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import classnames from 'classnames';
import API from '@aws-amplify/api';

import { getReview } from '../../../graphql/queries';
import useResponsive from '../../../common/hooks/useResponsive';
import { Review } from '../../models/types';
import { MOCK_REVIEWS } from '../../Reviews';
import { reviewsPath } from '../../routes';

import PageListItem from '../../../common/ui/PageListItem';
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

  const [review, setReview] = useState<Review | null>(MOCK_REVIEWS.find((r) => r.id === reviewId) || null);

  const fetchReview = async (): Promise<void> => {
    if (!reviewId) {
      return;
    }

    const apiData: any = await API.graphql({ query: getReview, variables: { id: reviewId } });
    setReview(apiData.data.getReview);
  };

  useEffect((): void => {
    //fetchReview();
  }, [reviewId]);

  if (!review) {
    return <Redirect to={reviewsPath()} />;
  }

  const { artist, title, src } = review;

  return (
    <div className={classnames(styles.ReviewPage, isMobile && styles.mobile)}>
      {isMobile ? (
        <div className={styles.mobileHeader}>
          <PageListItem title={title} secondaryTitle={artist} src={src} />
        </div>
      ) : (
        <div className={styles.staticContainer}>
          <div className={styles.infoCard}>
            <div className={styles.header}>
              <Header title={title} secondaryTitle={artist} />
            </div>
            <div className={styles.thumbnail}>
              <Thumbnail src={src} fullWidth={isMobile} />
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
