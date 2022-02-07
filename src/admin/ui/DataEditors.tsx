import React from 'react';
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
};

export default function DataEditors<T>({ data, onSubmit }: ComponentProps<T>): React.ReactElement | null {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <EditorsContainer>
      {data.map((d, i) => (
        <RootDataEditor<typeof d> key={i} data={d} onSubmit={onSubmit} />
      ))}
    </EditorsContainer>
  );
}
