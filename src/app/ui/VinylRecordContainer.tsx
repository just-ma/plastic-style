import React, { useState } from 'react';
import styled from 'styled-components';

import AiGif from '../../images/animations/ai-smol.gif';

import VinylRecord from './VinylRecord';

const Container = styled.div<{ clicked: boolean }>`
  position: absolute;
  bottom: ${({ clicked }) => (clicked ? 75 : 10)}px;
  right: 10px;
  transform: scaleY(${({ clicked }) => (clicked ? 1 : 0.4)});
  transform-origin: bottom right;
  overflow: hidden;
  transition: transform 2s ease, bottom 2s ease;
  z-index: 1;
  cursor: pointer;
`;

const RecordLabelContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Message = styled.span<{ clicked: boolean }>`
  position: absolute;
  bottom: 25px;
  right: 40px;
  width: 120px;
  user-select: none;
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  transition: opacity 2s ease;
`;

const Link = styled.a`
  color: black;
  width: fit-content;
`;

export default function VinylRecordContainer(): React.ReactElement | null {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Container clicked={clicked} onClick={() => setClicked((prev) => !prev)}>
        <VinylRecord>
          <RecordLabelContainer src={AiGif} />
        </VinylRecord>
      </Container>
      <Message clicked={clicked}>
        website made by{' '}
        <Link href="https://www.instagram.com/nit.su.j/" target="_blank" rel="noreferrer">
          NIT SU J.
        </Link>
      </Message>
    </div>
  );
}
