import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useResponsive from '../../common/hooks/useResponsive';
import useIsHome from '../../home/hooks/useIsHome';

import AiGif from '../../images/thumbnails/samara-thumbnail.jpg';

import VinylRecord from './VinylRecord';

const TRANSFORM_DURATION_MS = 1200;

const Container = styled.div<{ centered: boolean; clickable: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ centered }) => (centered ? '50%' : 'calc(9% + 20px)')};
  transform: translate(-${({ centered }) => (centered ? 50 : 120)}%, -50%)
    scale(${({ centered }) => (centered ? 1 : 1.5)});
  transition: transform 2s, left ${TRANSFORM_DURATION_MS}ms;
  z-index: ${({ clickable }) => (clickable ? 1 : 0)};
  overflow: hidden;
`;

const RecordLabelContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function VinylRecordContainer(): React.ReactElement | null {
  const navigate = useNavigate();

  const isHome = useIsHome();
  const { isTablet } = useResponsive();

  const [clickable, setClickable] = useState(isHome);

  useEffect(() => {
    const timeoutId = setTimeout(() => setClickable(isHome), TRANSFORM_DURATION_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHome]);

  const handleClick = (): void => {
    if (!isHome) {
      return;
    }

    navigate('/features/an-interview-with-samara-lubelski');
  };

  if (isTablet && !isHome) {
    return null;
  }

  return (
    <Container centered={isHome} clickable={clickable}>
      <VinylRecord onClick={handleClick}>
        <RecordLabelContainer src={AiGif} />
      </VinylRecord>
    </Container>
  );
}
