import React from 'react';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { ListItem } from '../../models/types';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Divider from '../../../common/ui/Divider';
import HTMLString from '../../../common/ui/HTMLString';

import styles from './RankedItem.module.scss';

type ComponentProps = {
  listItem: ListItem;
};

export default function RankedItem({
  listItem: { rank, title, artist, image, content },
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.RankedItem, isMobile && styles.mobile)}>
      {rank === undefined ? null : (
        <div className={styles.rankContainer}>
          <div className={styles.rankBubble}>{rank}</div>
        </div>
      )}
      <TitleDisplay className={styles.titleDisplay} headerProps={{ title, secondaryTitle: artist }} image={image}>
        <HTMLString element="p">{content}</HTMLString>
      </TitleDisplay>
      <Divider />
    </div>
  );
}
