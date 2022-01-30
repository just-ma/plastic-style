import React from 'react';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { PodcastEpisode } from '../../models/types';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Divider from '../../../common/ui/Divider';

import styles from './PodcastEpisodeItem.module.scss';

type ComponentProps = {
  episode: PodcastEpisode;
};

export default function PodcastEpisodeItem({
  episode: { title, author, description, link },
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.PodcastEpisodeItem, isMobile && styles.mobile)}>
      <div className={styles.content}>
        <TitleDisplay className={styles.titleDisplay} title={title} secondaryTitle={author} fullWidth>
          <p className={styles.description}>{description}</p>
        </TitleDisplay>
        <iframe className={styles.widget} src={link} frameBorder="0" />
      </div>
      <Divider />
    </div>
  );
}
