import React from 'react';

import useQueryData from '../../common/hooks/useQueryData';
import { ModelListConnection, List } from '../../API';
import { listLists } from '../../graphql/queries';

import DataEditors from './DataEditors';
import { client } from '../../App';
import gql from 'graphql-tag';
import { updateList } from '../../graphql/mutations';

export default function AdminLists(): React.ReactElement {
  const { data } = useQueryData<{
    listLists: ModelListConnection | undefined;
  }>({ query: listLists });

  const handleSubmit = async (list: List | null): Promise<void> => {
    console.log(list);

    if (!list) {
      return;
    }

    const res = await client.mutate({
      mutation: gql(updateList),
      variables: { input: list },
    });

    console.log(res);
  };

  return <DataEditors<List | null> data={data?.listLists?.items || []} onSubmit={handleSubmit} />;
}
