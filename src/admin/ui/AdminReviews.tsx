import React from 'react';

import useQueryData from '../../common/hooks/useQueryData';
import { ModelReviewConnection, Review } from '../../API';
import { listReviews } from '../../graphql/queries';
import DataEditor from './DataEditor';

export default function AdminReviews(): React.ReactElement {
  const { data } = useQueryData<{
    listReviews: ModelReviewConnection | undefined;
  }>({ query: listReviews });

  // return <DataEditor<ReadonlyArray<Review | null> | undefined> data={data?.listReviews?.items} />;
  return <div>hi</div>;
}
