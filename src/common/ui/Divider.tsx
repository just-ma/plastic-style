import React from 'react';
import styled, { css } from 'styled-components';

type ContainerProps = {
  vertical?: boolean;
  filled?: boolean;
};

const Container = styled.div<ContainerProps>`
  border: 1px solid black;

  ${({ vertical }) =>
    vertical
      ? css`
          width: 3px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 3px;
        `}

  ${({ filled }) =>
    filled &&
    css`
      background-color: black;
    `}
`;

type ComponentProps = ContainerProps;

export default function Divider(props: ComponentProps): React.ReactElement {
  return <Container {...props} />;
}
