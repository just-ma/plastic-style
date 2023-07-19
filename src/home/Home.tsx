import React from 'react';
import useResponsive from '../common/hooks/useResponsive';
import { REVIEWS } from '../reviews/models/constants';
import { LISTS } from '../lists/models/constants';
import { FEATURES } from '../features/models/constants';
import { List } from '../lists/models/types';
import { Review } from '../reviews/models/types';
import { Feature } from '../features/models/types';
import ReviewListItem from '../reviews/ui/ReviewListItem';
import ListListItem from '../lists/ui/ListListItem';
import FeatureListItem from '../features/ui/FeatureListItem';
import styled from 'styled-components';

const NUM_NEW_ARTICLES = 10;

export const ALL_ARTICLES = [
  ...REVIEWS.slice(0, NUM_NEW_ARTICLES),
  ...LISTS.slice(0, NUM_NEW_ARTICLES),
  ...FEATURES.slice(0, NUM_NEW_ARTICLES),
]
  .sort((a, b) => b.createdAt - a.createdAt)
  .slice(0, NUM_NEW_ARTICLES);

const articleToListItem = (article: Review | List | Feature): React.ReactElement | null => {
  if ('reviewId' in article && typeof article?.reviewId === 'string') {
    return <ReviewListItem key={article.reviewId} review={article} />;
  }

  if ('listId' in article && typeof article?.listId === 'string') {
    return <ListListItem key={article.listId} list={article as List} />;
  }

  if ('id' in article && typeof article?.id === 'string') {
    return <FeatureListItem key={article.id} feature={article as Feature} />;
  }

  return null;
};

const DesktopWrapper = styled.div`
  position: absolute;
  right: -10px;
  width: 50%;
  height: 100%;
  top: -5%;
  scale: 0.7;
`;

export default function Home(): React.ReactElement {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return <DesktopWrapper>{ALL_ARTICLES.map(articleToListItem).slice(0, 3)}</DesktopWrapper>;
  }

  return <>{ALL_ARTICLES.map(articleToListItem)}</>;
}
