import React from 'react';

import { List } from '../models/types';
import { listPagePath, listsPath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  list: List;
};

export default function ListListItem({ list: { id, title, image, description } }: ComponentProps): React.ReactElement {
  const link: string = listPagePath(id);
  const preLink: string = listsPath(id);

  return (
    <PageListItem
      id={id}
      title={title}
      image={image}
      description={description}
      link={link}
      linkLabel="VIEW LIST >"
      preLink={preLink}
    />
  );
}
