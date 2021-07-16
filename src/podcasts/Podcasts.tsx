import React, { useEffect, useState } from 'react';

import { PodcastSeason } from './models/types';
import { MOCK_PODCASTS } from './models/constants';

import PodcastSeasonListItem from './ui/PodcastSeasonListItem';

export default function Podcasts(): React.ReactElement {
  const [podcasts, setPodcasts] = useState<ReadonlyArray<PodcastSeason>>(MOCK_PODCASTS);

  useEffect((): void => {
    //fetchLists();
  }, []);

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [podcasts]);

  return (
    <div>
      {podcasts.map((season: PodcastSeason) => (
        <PodcastSeasonListItem key={season.id} season={season} />
      ))}
    </div>
  );
}
