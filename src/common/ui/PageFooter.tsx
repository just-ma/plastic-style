import React from 'react';

import styled from 'styled-components';
import VinylRecordContainer from '../../app/ui/VinylRecordContainer';

const Footer = styled.div`
  vertical-align: bottom;
  text-align: right;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 40vh;
`;

type ComponentProps = {
  children?: React.ReactNode;
};

export default function PageFooter({ children }: ComponentProps): React.ReactElement {
  return (
    <Footer>
      <VinylRecordContainer />
      {children}
    </Footer>
  );
}
