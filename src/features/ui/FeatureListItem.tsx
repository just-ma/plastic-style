import React from 'react';

import { Feature } from '../models/types';
import { featurePagePath } from '../routes';

import ArticleCard from '../../common/ui/ArticleCard';
import { useLocation } from 'react-router-dom';

type ComponentProps = {
  feature: Feature;
};

export default function FeatureListItem({
  feature: { id, title, image, author, createdAt },
}: ComponentProps): React.ReactElement {
  const location = useLocation();

  const link: string = featurePagePath(id);
  const preLink = `${location.pathname}#${id}`;

  return (
    <ArticleCard
      id={id}
      headerProps={{
        title,
        subtitle: author,
      }}
      image={image}
      link={link}
      timestamp={createdAt}
      preLink={preLink}
      symbol="✦"
    />
  );
}
