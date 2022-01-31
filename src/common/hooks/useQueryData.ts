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
  const [data, setData] = useState<TData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    if (skip) {
      return;
    }

    const fetchReviews = async (): Promise<void> => {
      const res = await client.query<TData, TVariables>({
        query: gql(query),
        variables,
      });

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
