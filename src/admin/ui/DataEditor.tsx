import React from 'react';
import styled, { css } from 'styled-components';

import DeleteButton from './DeleteButton';

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

const Value = styled.div<{ isNull?: boolean }>`
  height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isNull }) =>
    isNull &&
    css`
      color: grey;
    `}
`;

const Input = styled.textarea`
  width: 100%;
  height: 15px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  color: #1d1d88;
`;

const DeleteItemButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 10px 0;
`;

type ComponentProps<T> = {
  data: T;
  onChange: (value: T | null) => void;
  editing: boolean;
  submitting: boolean;
  isListItem?: boolean;
};

export default function DataEditor<T>({
  data,
  onChange,
  editing,
  submitting,
  isListItem,
}: ComponentProps<T>): React.ReactElement {
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value as unknown as T);
  };

  if (Array.isArray(data)) {
    return (
      <EntryListContainer>
        {data.map((d, i) => (
          <DataEditor<typeof d>
            key={i}
            data={d}
            onChange={(value) => {
              const newData = [...data];
              if (value) {
                newData[i] = value;
              } else if (newData.length > 1) {
                newData.splice(i, 1);
              }
              onChange(newData as unknown as T);
            }}
            editing={editing}
            submitting={submitting}
            isListItem
          />
        ))}
        {editing && (
          <div>
            <button
              onClick={() => {
                if (!data.length || !data[0] || typeof data !== 'object') {
                  return;
                }
                const newItem = { ...data[0] };
                Object.keys(newItem).forEach((k) => {
                  newItem[k] = null;
                });
                onChange([...data, newItem] as unknown as T);
              }}
            >
              ADD ITEM
            </button>
          </div>
        )}
      </EntryListContainer>
    );
  }

  if (data && typeof data === 'object') {
    return (
      <EntryContainer>
        {isListItem && editing && (
          <DeleteItemButtonContainer>
            <DeleteButton onClick={() => onChange(null)} />
          </DeleteItemButtonContainer>
        )}
        {Object.entries(data).map(([k, v], i) => (
          <EntryRow key={i}>
            <Label>{k}</Label>
            <DataContainer>
              <DataEditor<typeof v>
                data={v}
                onChange={(value) => {
                  const newData = { ...data };
                  newData[k as keyof T] = value;
                  onChange(newData);
                }}
                editing={editing}
                submitting={submitting}
              />
            </DataContainer>
          </EntryRow>
        ))}
      </EntryContainer>
    );
  }

  if (editing) {
    return <Input value={data ? String(data) : ''} onChange={onInputChange} placeholder="null" disabled={submitting} />;
  }

  return <Value isNull={!data}>{data || 'null'}</Value>;
}
