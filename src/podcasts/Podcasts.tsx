import React, { useEffect, useState } from 'react';

import { PodcastSeason } from './models/types';

import PodcastSeasonListItem from './ui/PodcastSeasonListItem';

export const MOCK_PODCASTS: ReadonlyArray<PodcastSeason> = [
  {
    id: '1234',
    title: 'Best Albums of 2020',
    description:
      'I can hear your thoughts loud and clear: “Why on earth is this madlad posting a year-end list in the middle of May?” Well, lemme give you the scoop. 2021 fell like a bowling ball on my heart; a partnership forged during the pandemic blasted into pieces. My shattered self floated aimlessly, a recital of survival in its most primal form. Yet something monumental loomed just ahead of me, a towering beacon beckoning like a magnet.',
    author: 'Parker Albert',
    src: 'https://www.amatruda.eu/wp-content/uploads/2017/05/PHO_0618-12x18-Amalfi-envelope-1626x1080.jpg',
    seasonLabel: 'season 1',
    year: 2020,
    episodes: [
      {
        id: '4adadad',
        title: 'Touche Amore',
        description: `This is another album on the list that helped me through the rushed transition from college to living at home. Before I moved back into my childhood bedroom, I was whisked away to the Rockies with my family, providing me a moment to fully absorb what was happening. We spent hours trudging through deep snow, taking turns clearing a path through the woods and up the mountain. Every Bad accompanied me on this trek, lending acidic strings and fiery guitars to the tornado of thoughts whipped up by the chaos of covid. To listen to Every Bad is to sail a shaky boat through a turbulent sea of feelings while singer Dana Margolin tries to unwind her tangled brain by fashioning neurotic phrases into anthems. This daring voyage allows Porridge Radio to map out the fury and exuberance of being a human, hoping just to stay afloat.`,
        link: '',
        date: 0,
      },
      {
        id: '4222232',
        title: 'Every Bad',
        description: `This is another album on the list that helped me through the rushed transition from college to living at home. Before I moved back into my childhood bedroom, I was whisked away to the Rockies with my family, providing me a moment to fully absorb what was happening. We spent hours trudging through deep snow, taking turns clearing a path through the woods and up the mountain. Every Bad accompanied me on this trek, lending acidic strings and fiery guitars to the tornado of thoughts whipped up by the chaos of covid. To listen to Every Bad is to sail a shaky boat through a turbulent sea of feelings while singer Dana Margolin tries to unwind her tangled brain by fashioning neurotic phrases into anthems. This daring voyage allows Porridge Radio to map out the fury and exuberance of being a human, hoping just to stay afloat.`,
        link: '',
        date: 0,
      },
    ],
  },
];

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
