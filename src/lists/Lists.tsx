import React, { useEffect } from 'react';

import { List } from './models/types';
import { MOCK_LISTS } from './models/constants';

import ListListItem from './ui/ListListItem';

export default function Lists(): React.ReactElement {
  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div>
      {MOCK_LISTS.map((list: List) => (
        <ListListItem key={list.id} list={list} />
      ))}
    </div>
  );
}
