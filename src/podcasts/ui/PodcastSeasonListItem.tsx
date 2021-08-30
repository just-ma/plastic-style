import React from 'react';

import { PodcastSeason } from '../models/types';
import { podcastPagePath, podcastsPath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  season: PodcastSeason;
};

export default function PodcastSeasonListItem({
  season: { id, title, src, description, seasonLabel },
}: ComponentProps): React.ReactElement {
  const link: string = podcastPagePath(id);
  const preLink: string = podcastsPath(id);

  return (
    <PageListItem
      id={id}
      title={title}
      secondaryTitle={seasonLabel}
      src={src}
      description={description}
      link={link}
      linkLabel={'VIEW SEASON >'}
      preLink={preLink}
    />
  );
}
