import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { getDateLabel } from '../../../common/utils';
import { List, ListItem } from '../../models/types';
import { MOCK_LISTS } from '../../models/constants';
import { listsPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import TitledParagraph from '../../../common/ui/TitledParagraph';
import Divider from '../../../common/ui/Divider';

import RankedItem from './RankedItem';

import styles from './ListPage.module.scss';

type RouteParams = {
  listId: string;
};

export default function ListPage(): React.ReactElement {
  const { listId } = useParams<RouteParams>();
  const { isMobile } = useResponsive();

  const list = useMemo((): List | null => {
    return MOCK_LISTS.find((l) => l.id === listId) || null;
  }, [listId]);

  if (!list) {
    return <Redirect to={listsPath()} />;
  }

  const { title, description = '', author, image, createdAt, listItems } = list;

  return (
    <div className={classnames(styles.ListPage, isMobile && styles.mobile)}>
      <TitleDisplay
        className={styles.titleDisplay}
        headerProps={{ title, large: true }}
        image={image}
        thumbnailWidthPx={260}
      >
        <TitledParagraph leftTitle={`by ${author}`} rightTitle={getDateLabel(createdAt)} content={description} />
      </TitleDisplay>
      <Divider />
      <div className={styles.list}>
        {listItems.map((item: ListItem) => (
          <RankedItem key={item.id} listItem={item} />
        ))}
      </div>
    </div>
  );
}
