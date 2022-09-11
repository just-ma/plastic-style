import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import VinylRecord from './ui/VinylRecord';

//import AiGif from '../images/animations/duck.gif';
import AiGif from '../images/thumbnails/joyer-thumbnail.jpg';

const RecordContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RecordLabelContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Home(): React.ReactElement {
  const history = useHistory();

  const handleClick = () => {
    history.push('/features/Joyer-interview');
  };

  return (
    <RecordContainer>
      <VinylRecord onClick={handleClick}>
        <RecordLabelContainer src={AiGif} />
      </VinylRecord>
    </RecordContainer>
  );
}
