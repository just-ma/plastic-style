import React from 'react';

import { List } from '../models/types';
import { listPagePath } from '../routes';

import ArticleCard from '../../common/ui/ArticleCard';
import { useLocation } from 'react-router-dom';

type ComponentProps = {
  list: List;
};

export default function ListListItem({
  list: { id, title, image, author, createdAt },
}: ComponentProps): React.ReactElement {
  const location = useLocation();

  const link = listPagePath(id);
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
      preLink={preLink}
      timestamp={createdAt}
      symbol="☰"
    />
  );
}
