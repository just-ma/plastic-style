import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { List, ListItem } from '../../models/types';
import { LISTS } from '../../models/constants';
import { listsPath } from '../../routes';

import RankedItem from './RankedItem';

import ArticlePage from '../../../common/ui/ArticlePage';

type RouteParams = {
  listId: string;
};

export default function ListPage(): React.ReactElement {
  const { listId } = useParams<RouteParams>();

  const list = useMemo((): List | null => {
    return LISTS.find((l) => l.id === listId) || null;
  }, [listId]);

  if (!list) {
    return <Navigate to={listsPath()} />;
  }

  const { title, description = '', author, image, createdAt, listItems } = list;

  return (
    <ArticlePage image={image} headerProps={{ title, subtitle: author }} timestamp={createdAt} content={description}>
      {listItems.map((item: ListItem) => (
        <RankedItem key={item.id} listItem={item} />
      ))}
    </ArticlePage>
  );
}
