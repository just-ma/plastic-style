// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Feature, ListItem, List, PodcastEpisode, PodcastSeason } = initSchema(schema);

export {
  Review,
  Feature,
  ListItem,
  List,
  PodcastEpisode,
  PodcastSeason
};