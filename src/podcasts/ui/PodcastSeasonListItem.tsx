import React from 'react';

import { PodcastSeason } from '../models/types';
import { podcastPagePath, podcastsPath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  season: PodcastSeason;
};

export default function PodcastSeasonListItem({
  season: { id, title, image, description, seasonLabel, author },
}: ComponentProps): React.ReactElement {
  const link: string = podcastPagePath(id);
  const preLink: string = podcastsPath(id);

  return (
    <PageListItem
      id={id}
      headerProps={{
        title,
        subtitle: author,
        secondaryTitle: seasonLabel,
      }}
      image={image}
      description={description}
      link={link}
      linkLabel="VIEW SEASON >"
      preLink={preLink}
    />
  );
}
