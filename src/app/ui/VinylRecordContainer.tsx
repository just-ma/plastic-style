import React from 'react';
import styled from 'styled-components';

import AiGif from '../../images/animations/ai-transitions.gif';

import VinylRecord from './VinylRecord';

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: scaleY(0.4);
  transform-origin: bottom right;
  overflow: hidden;
  transition: transform 10s ease;

  &:hover {
    transform: scaleY(1);
  }
`;

const RecordLabelContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function VinylRecordContainer(): React.ReactElement | null {
  return (
    <Container>
      <VinylRecord>
        <RecordLabelContainer src={AiGif} />
      </VinylRecord>
    </Container>
  );
}
