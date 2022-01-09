import React from 'react';
import styled from 'styled-components';

import VinylRecord from './ui/VinylRecord';

import AiGif from '../images/animations/ai-transitions.gif';

const RecordContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RecordLabelContainer = styled.img`
  width: 100%;
`;

export default function Home(): React.ReactElement {
  return (
    <RecordContainer>
      <VinylRecord>
        <RecordLabelContainer src={AiGif} />
      </VinylRecord>
    </RecordContainer>
  );
}
