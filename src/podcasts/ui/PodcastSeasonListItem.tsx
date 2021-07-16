import React from 'react';

import { PodcastSeason } from '../models/types';
import { podcastPagePath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  season: PodcastSeason;
};

export default function PodcastSeasonListItem({
  season: { id, title, src, description, seasonLabel },
}: ComponentProps): React.ReactElement {
  return (
    <PageListItem
      id={id}
      title={title}
      secondaryTitle={seasonLabel}
      src={src}
      description={description}
      link={podcastPagePath(id)}
      linkLabel={'VIEW SEASON >'}
    />
  );
}
