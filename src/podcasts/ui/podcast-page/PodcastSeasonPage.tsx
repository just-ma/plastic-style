import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { PodcastSeason, PodcastEpisode } from '../../models/types';
import { MOCK_PODCASTS } from '../../models/constants';
import { podcastsPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import AuthoredParagraph from '../../../common/ui/AuthoredParagraph';
import Divider from '../../../common/ui/Divider';

import PodcastEpisodeItem from './PodcastEpisodeItem';

import styles from './PodcastSeasonPage.module.scss';

type RouteParams = {
  podcastId: string;
};

export default function PodcastSeasonPage(): React.ReactElement {
  const { podcastId } = useParams<RouteParams>();
  const { isMobile } = useResponsive();

  const [podcast, setPodcast] = useState<PodcastSeason | null>(MOCK_PODCASTS.find((p) => p.id === podcastId) || null);

  useEffect((): void => {
    //fetchPodcast();
  }, [podcastId]);

  if (!podcast) {
    return <Redirect to={podcastsPath()} />;
  }

  const { title, description = '', author, src, year, episodes } = podcast;

  return (
    <div className={classnames(styles.PodcastSeasonPage, isMobile && styles.mobile)}>
      <TitleDisplay className={styles.titleDisplay} title={title} src={src}>
        <AuthoredParagraph author={author} date={year} content={description} />
      </TitleDisplay>
      <Divider />
      <div className={styles.podcast}>
        {episodes.map((episode: PodcastEpisode) => (
          <PodcastEpisodeItem key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
