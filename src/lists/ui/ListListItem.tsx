import React from 'react';

import { List } from '../models/types';
import { listPagePath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  list: List;
};

export default function ListListItem({ list: { id, title, src, description } }: ComponentProps): React.ReactElement {
  return (
    <PageListItem
      id={id}
      title={title}
      src={src || ''}
      description={description}
      link={listPagePath(id)}
      linkLabel={'VIEW LIST >'}
    />
  );
}
