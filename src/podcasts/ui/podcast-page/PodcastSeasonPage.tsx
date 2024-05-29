import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { PodcastSeason, PodcastEpisode } from '../../models/types';
import { PODCASTS } from '../../models/constants';
import { podcastsPath } from '../../routes';

import PodcastEpisodeItem from './PodcastEpisodeItem';

import ArticlePage from '../../../common/ui/ArticlePage';

type RouteParams = {
  podcastId: string;
};

export default function PodcastSeasonPage(): React.ReactElement {
  const { podcastId } = useParams<RouteParams>();

  const podcast = useMemo((): PodcastSeason | null => {
    return PODCASTS.find((p) => p.id === podcastId) || null;
  }, [podcastId]);

  if (!podcast) {
    return <Navigate to={podcastsPath()} />;
  }

  const { title, description = '', author, image, createdAt, episodes } = podcast;

  return (
    <ArticlePage image={image} headerProps={{ title, subtitle: author }} timestamp={createdAt} content={description}>
      {episodes.map((episode: PodcastEpisode) => (
        <PodcastEpisodeItem key={episode.id} episode={episode} />
      ))}
    </ArticlePage>
  );
}
