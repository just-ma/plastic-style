export type PodcastSeason = {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  episodes: ReadonlyArray<PodcastEpisode>;
  createdAt: number;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  description: string;
  link?: string;
  author?: string;
};
