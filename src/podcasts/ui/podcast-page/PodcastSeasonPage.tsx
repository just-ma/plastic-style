import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { PodcastSeason, PodcastEpisode } from '../../models/types';
import { MOCK_PODCASTS } from '../../models/constants';
import { podcastsPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import TitledParagraph from '../../../common/ui/TitledParagraph';
import Divider from '../../../common/ui/Divider';

import PodcastEpisodeItem from './PodcastEpisodeItem';

import styles from './PodcastSeasonPage.module.scss';

type RouteParams = {
  podcastId: string;
};

export default function PodcastSeasonPage(): React.ReactElement {
  const { podcastId } = useParams<RouteParams>();
  const { isMobile } = useResponsive();

  const podcast = useMemo((): PodcastSeason | null => {
    return MOCK_PODCASTS.find((p) => p.id === podcastId) || null;
  }, [podcastId]);

  if (!podcast) {
    return <Navigate to={podcastsPath()} />;
  }

  const { title, description = '', author, image, year, episodes } = podcast;

  return (
    <div className={classnames(styles.PodcastSeasonPage, isMobile && styles.mobile)}>
      <TitleDisplay
        className={styles.titleDisplay}
        headerProps={{ title, large: true }}
        image={image}
        thumbnailWidthPx={260}
      >
        <TitledParagraph leftTitle={author} rightTitle={year} content={description} />
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
