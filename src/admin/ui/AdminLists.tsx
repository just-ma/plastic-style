import React from 'react';

import useQueryData from '../../common/hooks/useQueryData';
import { ModelListConnection, List } from '../../API';
import { listLists } from '../../graphql/queries';

import DataEditors from './DataEditors';
import { client } from '../../App';
import gql from 'graphql-tag';
import { createList, updateList } from '../../graphql/mutations';
import API from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
// import Amplify from '@aws-amplify/core';

const DEFAULT_LIST: List = {
  id: '',
  listId: '',
  author: '',
  title: '',
  description: '',
  image: '',
  itemIds: [],
  createdAt: 0,
  updatedAt: '',
  __typename: 'List',
};

export default function AdminLists(): React.ReactElement {
  const { data } = useQueryData<{
    listLists: ModelListConnection | undefined;
  }>({ query: listLists });

  const handleCreate = async (list: List | null): Promise<void> => {
    console.log(list);

    if (!list) {
      return;
    }

    const input: Partial<List> = { ...list };
    delete input.__typename;
    delete input.updatedAt;

    // API.graphql({
    //   query: gql(createList),
    //   variables: { input },
    // });

    // Auth.confirmSignIn()

    const res = await client.mutate({
      mutation: gql(createList),
      variables: { input },
    });

    // console.log(res);
  };

  const handleSubmit = async (list: List | null): Promise<void> => {
    console.log(list);

    if (!list) {
      return;
    }

    const input: Partial<List> = { ...list };
    delete input.__typename;
    delete input.updatedAt;

    API.graphql({
      query: gql(updateList),
      variables: { input },
    });

    // Auth.confirmSignIn()

    // const res = await client.mutate({
    //   mutation: gql(updateList),
    //   variables: { input },
    // });

    // console.log(res);
  };

  return (
    <DataEditors<List | null>
      data={data?.listLists?.items || []}
      onSubmit={handleSubmit}
      onCreate={handleCreate}
      defaultItem={DEFAULT_LIST}
    />
  );
}
