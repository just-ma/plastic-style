import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReviewMetaData = {
  readOnlyFields;
}

type FeatureMetaData = {
  readOnlyFields;
}

type ListItemMetaData = {
  readOnlyFields;
}

type ListMetaData = {
  readOnlyFields;
}

type PodcastEpisodeMetaData = {
  readOnlyFields;
}

type PodcastSeasonMetaData = {
  readOnlyFields;
}

export declare class Review {
  readonly id: string;
  readonly reviewId: string;
  readonly title: string;
  readonly artist: string;
  readonly recordLabel?: string;
  readonly content: string;
  readonly image: string;
  readonly author: string;
  readonly createdAt: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Review>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

export declare class Feature {
  readonly id: string;
  readonly featureId: string;
  readonly title: string;
  readonly description?: string;
  readonly author?: string;
  readonly image: string;
  readonly content: string;
  readonly createdAt: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Feature>);
  static copyOf(source: Feature, mutator: (draft: MutableModel<Feature>) => MutableModel<Feature> | void): Feature;
}

export declare class ListItem {
  readonly id: string;
  readonly listItemId: string;
  readonly rank?: number;
  readonly artist?: string;
  readonly title: string;
  readonly image?: string;
  readonly content: string;
  readonly createdAt?: number;
  readonly updatedAt?: string;
  readonly listID: string;
  constructor(init: ModelInit<ListItem>);
  static copyOf(source: ListItem, mutator: (draft: MutableModel<ListItem>) => MutableModel<ListItem> | void): ListItem;
}

export declare class List {
  readonly id: string;
  readonly listId: string;
  readonly author: string;
  readonly title: string;
  readonly description?: string;
  readonly image: string;
  readonly items?: ListItem[];
  readonly createdAt: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<List>);
  static copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}

export declare class PodcastEpisode {
  readonly id: string;
  readonly episodeId: string;
  readonly title: string;
  readonly description?: string;
  readonly image?: string;
  readonly link?: string;
  readonly author?: string;
  readonly createdAt?: number;
  readonly updatedAt?: string;
  readonly podcastseasonID: string;
  constructor(init: ModelInit<PodcastEpisode>);
  static copyOf(source: PodcastEpisode, mutator: (draft: MutableModel<PodcastEpisode>) => MutableModel<PodcastEpisode> | void): PodcastEpisode;
}

export declare class PodcastSeason {
  readonly id: string;
  readonly podcastId: string;
  readonly title: string;
  readonly seasonLabel?: string;
  readonly description?: string;
  readonly author: string;
  readonly image: string;
  readonly year?: number;
  readonly episodes?: PodcastEpisode[];
  readonly createdAt?: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PodcastSeason>);
  static copyOf(source: PodcastSeason, mutator: (draft: MutableModel<PodcastSeason>) => MutableModel<PodcastSeason> | void): PodcastSeason;
}