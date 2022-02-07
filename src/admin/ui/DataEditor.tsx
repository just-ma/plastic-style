import React from 'react';

import styled from 'styled-components';

const EntryListContainer = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
`;

const EntryContainer = styled.div`
  padding: 20px 8px 10px 0;
  background: #37373712;
  border: 1px #59595933 solid;
  border-radius: 10px;
`;

const EntryRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 0 10px 10px 0;
`;

const Label = styled.div`
  flex-shrink: 0;
  width: 90px;
  padding: 7px 10px;
  text-align: right;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DataContainer = styled.div`
  flex-grow: 1;
  padding: 7px 12px;
  background-color: #2d2d2d17;
  border-radius: 10px;
  overflow: hidden;
`;

const NullLabel = styled.div`
  color: grey;
`;

type ComponentProps<T> = {
  data: T;
};

export default function DataEditor<T>({ data }: ComponentProps<T>): React.ReactElement {
  if (!data) {
    return <NullLabel>null</NullLabel>;
  }

  if (Array.isArray(data)) {
    return (
      <EntryListContainer>
        {data.map((d, i) => (
          <DataEditor<typeof d> key={i} data={d} />
        ))}
      </EntryListContainer>
    );
  }

  if (typeof data === 'object') {
    return (
      <EntryContainer>
        {Object.entries(data).map(([k, v], i) => (
          <EntryRow key={i}>
            <Label>{k}</Label>
            <DataContainer>
              <DataEditor<typeof v> data={v} />
            </DataContainer>
          </EntryRow>
        ))}
      </EntryContainer>
    );
  }

  return <>{data}</>;
}
