import React from 'react';

import { PodcastSeason } from '../models/types';
import { podcastPagePath } from '../routes';

import ArticleCard from '../../common/ui/ArticleCard';
import { useLocation } from 'react-router-dom';

type ComponentProps = {
  season: PodcastSeason;
};

export default function PodcastSeasonListItem({
  season: { id, title, image, author, createdAt },
}: ComponentProps): React.ReactElement {
  const location = useLocation();

  const link = podcastPagePath(id);
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
      symbol="♪"
    />
  );
}
