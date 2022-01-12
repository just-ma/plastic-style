import React, { useEffect } from 'react';

import { PodcastSeason } from './models/types';
import { MOCK_PODCASTS } from './models/constants';

import PodcastSeasonListItem from './ui/PodcastSeasonListItem';

export default function Podcasts(): React.ReactElement {
  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div>
      {MOCK_PODCASTS.map((season: PodcastSeason) => (
        <PodcastSeasonListItem key={season.id} season={season} />
      ))}
    </div>
  );
}
