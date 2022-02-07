import React from 'react';

import useQueryData from '../../common/hooks/useQueryData';
import { ModelListConnection, List } from '../../API';
import { listLists } from '../../graphql/queries';

import DataEditors from './DataEditors';

export default function AdminLists(): React.ReactElement {
  const { data } = useQueryData<{
    listLists: ModelListConnection | undefined;
  }>({ query: listLists });

  const handleSubmit = (list: List | null): void => {
    console.log(list);
  };

  return <DataEditors<List | null> data={data?.listLists?.items || []} onSubmit={handleSubmit} />;
}
