import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';
import API from '@aws-amplify/api';

import { getReview } from '../../../graphql/queries';
import useResponsive from '../../../common/hooks/useResponsive';
import { Review } from '../../models/types';
import { MOCK_REVIEWS } from '../../Reviews';

import AlbumCover from '../AlbumCover';
import Header from '../Header';
import Divider from './Divider';

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

  const dateLabel = useMemo((): string => {
    if (!review) {
      return '';
    }

    const date = new Date(review.createdAt * 1000);
    const label = new Intl.DateTimeFormat('en-US').format(date);

    return label;
  }, [review?.createdAt]);

  if (!review) {
    return <>No Review Found</>;
  }

  const { artist, title, author, src, content } = review;

  return (
    <div className={classnames(styles.ReviewPage, isMobile && styles.mobile)}>
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
