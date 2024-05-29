import React from 'react';

import { PodcastEpisode } from '../../models/types';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Divider from '../../../common/ui/Divider';

import styles from './PodcastEpisodeItem.module.scss';
import HTMLString from '../../../common/ui/HTMLString';
import styled from 'styled-components';

const StyledDivider = styled(Divider)`
  margin: 60px 0;
`;

const Description = styled(HTMLString)`
  margin: 0 0 10px 5px;
`;

type ComponentProps = {
  episode: PodcastEpisode;
};

export default function PodcastEpisodeItem({
  episode: { title, author, description, link },
}: ComponentProps): React.ReactElement {
  return (
    <div>
      <StyledDivider />
      <div className={styles.content}>
        <TitleDisplay title={title} subtitle={author}></TitleDisplay>
        <Description element="p">{description}</Description>
        <iframe className={styles.widget} src={link} frameBorder="0" />
      </div>
    </div>
  );
}
