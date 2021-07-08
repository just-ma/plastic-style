export type PodcastSeason = {
  id: string;
  title: string;
  seasonLabel: string;
  description: string;
  author: string;
  src: string;
  episodes: ReadonlyArray<PodcastEpisode>;
  year: number;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  description: string;
  link: string;
  author?: string;
  date: number;
};
