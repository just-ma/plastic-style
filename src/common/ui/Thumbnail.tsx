import React from 'react';

import styled from 'styled-components';

const Container = styled.div<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '230px')};
  height: 230px;
  background-color: #dcdcdc;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ComponentProps = {
  src: string;
  fullWidth?: boolean;
};

export default function Thumbnail({ src, fullWidth = false }: ComponentProps): React.ReactElement {
  return (
    <Container fullWidth={fullWidth}>
      <Image src={src} />
    </Container>
  );
}
