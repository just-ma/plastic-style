import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DataEditor from './DataEditor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

type ComponentProps<T> = {
  data: T;
  onSubmit: (value: T) => void;
};

export default function RootDataEditor<T>({ data: savedData, onSubmit }: ComponentProps<T>): React.ReactElement | null {
  const [data, setData] = useState<T>(savedData);
  const [editing, setEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const resetData = (): void => {
    setData(savedData);
    setEditing(false);
  };

  useEffect((): void => {
    resetData();
  }, [savedData]);

  const handleEdit = (): void => {
    setEditing(true);
  };

  const handleSubmit = (): void => {
    onSubmit(data);
    setEditing(false);
  };

  const handleChange = (value: T | null): void => {
    if (!value) {
      return;
    }

    setData(value);
  };

  return (
    <Container>
      <ButtonsContainer>
        {editing ? (
          <>
            <button onClick={resetData}>CANCEL</button>
            <button onClick={handleSubmit}>SAVE</button>
          </>
        ) : (
          <button onClick={handleEdit}>EDIT</button>
        )}
      </ButtonsContainer>
      <DataEditor<T> data={data} onChange={handleChange} editing={editing} submitting={submitting} />
    </Container>
  );
}
