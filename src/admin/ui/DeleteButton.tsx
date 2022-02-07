import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: red;
  border: 1px solid black;
`;

type ComponentProps = {
  onClick: () => void;
};

export default function DeleteButton({ onClick }: ComponentProps): React.ReactElement {
  return <Button onClick={onClick}>DELETE</Button>;
}
