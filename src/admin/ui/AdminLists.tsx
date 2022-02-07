import React from 'react';

import useQueryData from '../../common/hooks/useQueryData';
import { ModelListConnection, List } from '../../API';
import { listLists } from '../../graphql/queries';
import DataEditor from './DataEditor';

export default function AdminLists(): React.ReactElement {
  const { data } = useQueryData<{
    listLists: ModelListConnection | undefined;
  }>({ query: listLists });

  return <DataEditor<ReadonlyArray<List | null> | undefined> data={data?.listLists?.items} />;
}
