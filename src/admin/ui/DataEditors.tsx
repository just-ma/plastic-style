import React, { useState } from 'react';
import styled from 'styled-components';

import RootDataEditor from './RootDataEditor';

const EditorsContainer = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
`;

type ComponentProps<T> = {
  data: ReadonlyArray<T>;
  onSubmit: (value: T) => void;
  onCreate: (value: T) => void;
  defaultItem: T;
};

export default function DataEditors<T>({
  data,
  onSubmit,
  onCreate,
  defaultItem,
}: ComponentProps<T>): React.ReactElement | null {
  const [newData, setNewData] = useState<T | null>(null);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <EditorsContainer>
      {data.map((d, i) => (
        <RootDataEditor<T> key={i} data={d} onSubmit={onSubmit} />
      ))}
      {newData ? (
        <>
          <RootDataEditor<T> data={newData} onSubmit={onCreate} />
          <button onClick={() => setNewData(null)}>CANCEL</button>
        </>
      ) : (
        <button onClick={() => setNewData({ ...defaultItem })}>ADD ITEM</button>
      )}
    </EditorsContainer>
  );
}
