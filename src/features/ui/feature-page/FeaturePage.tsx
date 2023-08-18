import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { Feature } from '../../models/types';
import { FEATURES } from '../../models/constants';
import { featuresPath } from '../../routes';

import ArticlePage from '../../../common/ui/ArticlePage';

type ComponentProps = {
  id?: string;
};

type RouteParams = {
  featureId: string;
};

export default function FeaturePage({ id }: ComponentProps): React.ReactElement {
  const { featureId = id } = useParams<RouteParams>();

  const review: Feature | null = FEATURES.find((r) => r.id === featureId) || null;

  if (!review) {
    return <Navigate to={featuresPath()} />;
  }

  const { title, author, image, content, createdAt } = review;

  return (
    <ArticlePage image={image} headerProps={{ title, subtitle: author }} timestamp={createdAt} content={content} />
  );
}
