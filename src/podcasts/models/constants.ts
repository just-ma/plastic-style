import PUSHING_THE_ENVELOPE_THUMBNAIL from '../../images/thumbnails/pushing-the-envelope-s1.jpg';
import PAINTING_MUSIC_S1_THUMBNAIL from '../../images/thumbnails/painting-music-s1.jpg';
import PAINTING_MUSIC_S2_THUMBNAIL from '../../images/thumbnails/painting-music-s2.jpg';
import CHAIR_THUMBNAIL from '../../images/thumbnails/chair.jpg';

import { PodcastSeason } from './types';

export const PODCASTS: ReadonlyArray<PodcastSeason> = [
  {
    id: 'plastic-chair',
    title: 'plastic chair',
    description: 'Interviews with artists we like!',
    author: 'Parker Albert',
    image: CHAIR_THUMBNAIL,
    createdAt: 1643414400,
    episodes: [
      {
        id: '1',
        title: 'Episode 1: Fire-Toolz',
        description: `Episode 1 of plastic chair featuring Angel Marcloid of Fire-Toolz talking about her album Eternal Home!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fplasticstyledotnet%2Ffire-toolz-interview%2F',
      },
      {
        id: '2',
        title: 'Episode 2: Hollie Farris',
        description: `Episode 2 of plastic chair features the legendary trumpet player Hollie Farris, who was the bandleader for the James Brown Band for over 20 years!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fjames-brown-interview%2F',
      },
      {
        id: '3',
        title: 'Episode 3: Shots',
        description: `Recently I got the chance to talk with Shots, a three member group composed of twins Matt and John Friberg along with Daniel DiMaggio. Their music can best be described as a collection of quiet sounds created with a wide range of instruments, tools and toys. Their latest record is 2019’s Private Hate.`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fan-interview-with-shots%2F',
      },
    ],
  },
  {
    id: 'pushing-the-envelope',
    title: 'Pushing the Envelope',
    description:
      'Pushing the Envelope was created with the intent of forming an experimental approach to music journalism. With our curation of up-and-coming independent artists, we hope to offer a new lens for those looking to explore while building a diverse community of fans along the way. Originally started as a podcast, PtE became a blog in the summer of 2021.',
    author: 'Parker Albert',
    image: PUSHING_THE_ENVELOPE_THUMBNAIL,
    createdAt: 1594512000,
    episodes: [
      {
        id: '1',
        title: 'Episode 1',
        description: `Episode 1 of Pushing the Envelope featuring an interview with Ari Finkel of his experimental techno moniker Fake Phone Number!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-1%2F',
      },
      {
        id: '3',
        title: 'Episode 3: Alli Logout of Special Interest',
        description: `DJ Klutzkat sits down with Alli Logout of experimental punk band Special Interest for the third episode of Pushing the Envelope`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-3-alli-logout-of-special-interest%2F',
      },
      // {
      //   id: '4',
      //   title: 'Episode 4: NNAMDÏ',
      //   description: `Episode 4 of Pushing the Envelope featuring an interview with the multi-instrumentalist and genre-experimental NNAMDÏ`,
      //   link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-4-nnamd%C3%AF%2F',
      // },
      {
        id: '5',
        title: 'Episode 5: ONO',
        description: `An interview with Travis, P. Michael, and Jordan of legendary Chicago experimental band ONO for episode 5 of Pushing the Envelope`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-5-ono%2F',
      },
      {
        id: '6',
        title: 'Episode 6: Asuquomo',
        description: `Episode 6 of Pushing the Envelope featuring an interview with Asuquomo!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-6-asuquomo%2F',
      },
      {
        id: '7',
        title: 'Episode 7: King Britt',
        description: `Episode 7 of Pushing the Envelope featuring an interview with King Britt!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-7-king-britt%2F',
      },
      {
        id: '8',
        title: 'Episode 8',
        description: `The FINAL episode of Pushing the Envelope featuring an interview with the founding members of Mourning [A] Blkstar!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fpushing-the-envelope-episode-8%2F',
      },
    ],
  },
  {
    id: 'painting-music-s2',
    title: 'Painting Music (Season 2)',
    description:
      'Season 2 of Painting Music was created at home during the pandemic, displaying DJ Klutzkat’s fine-honed craft of creating imagistic narrations for songs. One continuous story of a mysterious land hidden in the ocean is told throughout the season, and each episode starts off by discussing and reviewing an album that has come out in the past week.',
    author: 'Parker Albert',
    image: PAINTING_MUSIC_S2_THUMBNAIL,
    createdAt: 1587168000,
    episodes: [
      {
        id: '9',
        title: 'Episode 9: Dreams',
        description: `First Episode of Season Two of Painting Music featuring Waxahatchee, Yves Tumor, Tim Hecker, Nicolas Jaar, Fennesz, and Bark Psychosis`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-9-dreams%2F',
      },
      {
        id: '10',
        title: 'Episode 10: Anomaly',
        description: `Episode 10 of Painting Music featuring songs from Fiona Apple, Jefre-Cantu Ledesma, Tim Hecker, and Yves Tumor!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-10-anomoly%2F',
      },
      {
        id: '11',
        title: 'Episode 11: Hypnosis',
        description: `Episode 11 of Painting Music featuring songs from Julianna Barwick, Jon Hassell, Brian Eno, Harold Budd, Bing & Ruth, and Sean McCann!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-11-hypnosis%2F',
      },
      {
        id: '12',
        title: 'Episode 12: Cinema',
        description: `Episode 12 of Painting Music featuring songs from Kraftwerk, Autechre, ELO, Andrew Bird, and Vampire Weekend! Featuring special guest DJ Manic Chungus!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-12-cinema%2F',
      },
      {
        id: '13',
        title: 'Episode 13: Compilation',
        description: `A compilation of three weeks' worth of narrations describing a fantastical land!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-13-compilation%2F',
      },
      {
        id: '14',
        title: 'Episode 14: Identity',
        description: `The 14th episode of Painting Music featuring songs from Perfume Genius, Moses Sumney, Julianna Barwick, and Phoebe Bridgers!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-14-identity%2F',
      },
      {
        id: '15',
        title: 'Episode 15: Contrast',
        description: `Episode 15 of Painting Music featuring Laurie Spiegel, The Blue Nile, Ernest Hood, Steve Reich, and Iasos!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-15-contrast%2F',
      },
    ],
  },
  {
    id: 'painting-music-s1',
    title: 'Painting Music (Season 1)',
    description:
      'Season 1 of Painting Music provided imagistic narrations for songs, in addition to a historical and analytical background for each artist. Artists featured range from Brian Eno to Prefab Sprout, with each episode themed around a visual environment or music genre. Features several episodes with special guests!',
    author: 'Parker Albert',
    image: PAINTING_MUSIC_S1_THUMBNAIL,
    createdAt: 1578960000,
    episodes: [
      {
        id: '1',
        title: 'Episode 1: Discovery',
        description: `Episode 1 of Painting Music featuring tracks from Oneohtrix Point Never, Barker, Objekt, Skee Mask, and Brian Eno!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-1-discovery%2F',
      },
      {
        id: '2',
        title: 'Episode 2: Disaster',
        description: `Episode 2 of Painting Music featuring tracks from The KLF, Slowdive, Ride, Duster, The Microphones, The Cure, and Cocteau Twins!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-2-disaster%2F',
      },
      {
        id: '3',
        title: 'Episode 3: Change',
        description: `Episode 3 of Painting Music featuring post-rock tracks from Tortoise, Slowdive, Talk Talk, and Slint!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-3-change%2F',
      },
      {
        id: '4',
        title: 'Episode 4: Green',
        description: `Episode 4 of Painting Music featuring tracks from GAS, Bennie Maupin, and Fripp & Eno!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-4-green%2F',
      },
      {
        id: '5',
        title: 'Episode 5: Horror',
        description: `Episode 5 of Painting Music featuring special guest Marcel!! We talk about 20th century classical pieces, including composers Debussy, Krzysztof Penderecki, Arvo Part, Iannis Xenakis, and Benjamin Britten.`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-5-horror%2F',
      },
      // {
      //   id: '6',
      //   title: 'Episode 6: Have We Met',
      //   description: `Analysis of Destroyer's latest album Have We Met!`,
      //   link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-6-have-we-met%2F',
      // },
      {
        id: '7',
        title: 'Episode 7: Space',
        description: `Episode 7 of Painting Music featuring special guest Eleanor! Featuring songs by Beach House, Julia Holter, Grouper, David Bowie, and SOPHIE`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-7-space%2F',
      },
      {
        id: '8',
        title: 'Episode 8: Rebirth',
        description: `Episode 8 of Painting Music features songs by Prefab Sprout, Brian Eno, (Sandy) Alex G, Skee Mask, and Bark Psychosis!`,
        link: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fplasticstyledotnet%2Fepisode-8-rebirth%2F',
      },
    ],
  },
];
