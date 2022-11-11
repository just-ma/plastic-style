import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import VinylRecord from './ui/VinylRecord';

//import AiGif from '../images/animations/duck.gif';
import AiGif from '../images/thumbnails/sanders-thumbnail.jpg';

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/features/Pharoah-And-I');
  };

  return (
    <RecordContainer>
      <VinylRecord onClick={handleClick}>
        <RecordLabelContainer src={AiGif} />
      </VinylRecord>
    </RecordContainer>
  );
}
