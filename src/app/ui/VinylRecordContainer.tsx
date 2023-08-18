import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import AiGif from '../../images/animations/ai-transitions.gif';

import VinylRecord from './VinylRecord';

const Container = styled.div<{ shift: boolean }>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: scaleY(0.4);
  transform-origin: bottom right;
  overflow: hidden;
  transition: transform 2s ease, bottom 2s ease;
  z-index: 1;
  cursor: pointer;

  ${({ shift }) =>
    shift &&
    css`
      transform: scaleY(1);
      bottom: 75px;
    `}
`;

const RecordLabelContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Message = styled.span`
  position: absolute;
  bottom: 25px;
  right: 40px;
  width: 120px;
  user-select: none;
`;

const Link = styled.a`
  color: black;
  width: fit-content;
`;

export default function VinylRecordContainer(): React.ReactElement | null {
  const [shift, setShift] = useState(false);

  return (
    <div>
      <Container shift={shift} onClick={() => setShift((prev) => !prev)}>
        <VinylRecord>
          <RecordLabelContainer src={AiGif} />
        </VinylRecord>
      </Container>
      <Message>
        website made by{' '}
        <Link href="https://www.instagram.com/nit.su.j/" target="_blank" rel="noreferrer">
          NIT SU J.
        </Link>
      </Message>
    </div>
  );
}
