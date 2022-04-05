import { useState, useEffect, useMemo } from 'react';
import gql from 'graphql-tag';
import { OperationVariables } from 'apollo-client';

import { client } from '../../App';

type HookParams<TVariables> = {
  query: string;
  variables?: TVariables;
  skip?: boolean;
};

type HookValue<TData> = {
  data: TData | undefined;
  loading: boolean;
};

export default function useQueryData<TData, TVariables = OperationVariables>({
  query,
  variables,
  skip,
}: HookParams<TVariables>): HookValue<TData> {
  const watchQuery = client.watchQuery<TData, TVariables>({
    query: gql(query),
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const [data, setData] = useState<TData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    if (skip) {
      return;
    }

    const fetchReviews = async (): Promise<void> => {
      console.log('QUERY', query, variables, skip);
      const res = await watchQuery?.result();
      console.log('QUERY', res);
      if (res?.data) {
        setData(res.data);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [query, variables, skip]);

  return useMemo(() => {
    return {
      data,
      loading,
    };
  }, [data, loading]);
}
