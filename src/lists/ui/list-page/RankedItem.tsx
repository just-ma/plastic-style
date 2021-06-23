import React from 'react';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { ListItem } from '../../models/types';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Divider from '../../../common/ui/Divider';

import styles from './RankedItem.module.scss';

type ComponentProps = {
  listItem: ListItem;
};

export default function RankedItem({
  listItem: { rank, title, artist, src, content },
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.RankedItem, isMobile && styles.mobile)}>
      <div className={styles.rankContainer}>
        <div className={styles.rankBubble}>{rank}</div>
      </div>
      <TitleDisplay className={styles.titleDisplay} title={title} secondaryTitle={artist} src={src || ''}>
        <p className={styles.content}>{content}</p>
      </TitleDisplay>
      <Divider />
    </div>
  );
}
