import React, { useEffect, useState } from 'react';

import { List } from './models/types';
import { MOCK_LISTS } from './models/constants';

import ListListItem from './ui/ListListItem';

export default function Lists(): React.ReactElement {
  const [lists, setLists] = useState<ReadonlyArray<List>>(MOCK_LISTS);

  useEffect((): void => {
    //fetchLists();
  }, []);

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [lists]);

  return (
    <div>
      {lists.map((list: List) => (
        <ListListItem key={list.id} list={list} />
      ))}
    </div>
  );
}
