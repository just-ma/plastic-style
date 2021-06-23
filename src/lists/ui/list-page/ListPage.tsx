import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { MOCK_LISTS } from '../../Lists';
import { List, ListItem } from '../../models/types';
import { listsPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import AuthoredParagraph from '../../../common/ui/AuthoredParagraph';
import Divider from '../../../common/ui/Divider';

import RankedItem from './RankedItem';

import styles from './ListPage.module.scss';

type RouteParams = {
  listId: string;
};

export default function ListPage(): React.ReactElement {
  const { listId } = useParams<RouteParams>();
  const { isMobile } = useResponsive();

  const [list, setList] = useState<List | null>(MOCK_LISTS.find((l) => l.id === listId) || null);

  useEffect((): void => {
    //fetchList();
  }, [listId]);

  if (!list) {
    return <Redirect to={listsPath()} />;
  }

  const { title, description = '', author, src = '', createdAt, listItems } = list;

  return (
    <div className={classnames(styles.ListPage, isMobile && styles.mobile)}>
      <TitleDisplay className={styles.titleDisplay} title={title} src={src}>
        <AuthoredParagraph author={author} date={createdAt} content={description} />
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
