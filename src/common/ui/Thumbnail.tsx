import React from 'react';

import styled from 'styled-components';

const Container = styled.div<{ widthPx: number; fullWidth: boolean }>`
  width: ${({ widthPx, fullWidth }) => (fullWidth ? '100%' : `${widthPx}px`)};
  height: ${({ widthPx, fullWidth }) => (fullWidth ? 'auto' : `${widthPx}px`)};
  min-height: 230px;
  background-color: #dcdcdc;
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
};

export default function Thumbnail({ src, widthPx = 230, fullWidth = false }: ComponentProps): React.ReactElement {
  return (
    <Container widthPx={widthPx} fullWidth={fullWidth}>
      <Image src={src} />
    </Container>
  );
}
