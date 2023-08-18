import React from 'react';

import styled, { css } from 'styled-components';

const Container = styled.div<{ widthPx: number; fullWidth: boolean; maxWidth?: number }>`
  width: ${({ widthPx, fullWidth }) => (fullWidth ? '100%' : `${widthPx}px`)};
  height: ${({ widthPx, fullWidth }) => (fullWidth ? 'auto' : `${widthPx}px`)};
  min-height: 230px;
  background-color: #dcdcdc;
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ComponentProps = {
  src: string;
  widthPx?: number;
  fullWidth?: boolean;
  maxWidth?: number;
};

export default function Thumbnail({
  src,
  widthPx = 230,
  maxWidth,
  fullWidth = false,
}: ComponentProps): React.ReactElement {
  return (
    <Container widthPx={widthPx} fullWidth={fullWidth} maxWidth={maxWidth}>
      <Image src={src} />
    </Container>
  );
}
