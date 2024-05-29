import React from 'react';
import styled, { keyframes } from 'styled-components';

import useResponsive from '../../common/hooks/useResponsive';

import { ReactComponent as VinylRecordRingsGraphic } from '../../images/graphics/vinyl-record-rings.svg';
import { VINYL_ROTATE_DURATION_SECONDS } from './constants';

const DEAD_WAX_RING_SIZE = 42;
const CENTER_LABEL_SIZE = 34;
const RECORD_HOLE_SIZE = 3;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinningContainer = styled.div`
  animation: ${rotate} ${VINYL_ROTATE_DURATION_SECONDS}s linear infinite;
`;

const Record = styled.div<{ isTablet: boolean }>`
  position: relative;
  width: ${({ isTablet }) => (isTablet ? 200 : 200)}px;
  height: ${({ isTablet }) => (isTablet ? 200 : 200)}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #111111;
  /* cursor: pointer; */
  user-select: none;
`;

const RecordRings = styled(VinylRecordRingsGraphic)`
  opacity: 0.7;
`;

const CenteredCircle = styled.div<{ size: number }>`
  position: absolute;
  top: ${({ size }) => (100 - size) / 2}%;
  left: ${({ size }) => (100 - size) / 2}%;
  width: ${({ size }) => size}%;
  height: ${({ size }) => size}%;
  border-radius: 50%;
`;

const DeadWaxRing = styled(CenteredCircle)`
  background-color: #0b0b0b;
`;

const CenterLabel = styled(CenteredCircle)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2cff;
  overflow: hidden;
  pointer-events: none;
`;

const RecordHole = styled(CenteredCircle)`
  background-color: #ebebeb;
`;

type ComponentProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function VinylRecord({ children, onClick }: ComponentProps): React.ReactElement {
  const { isTablet } = useResponsive();

  return (
    <SpinningContainer>
      <Record isTablet={isTablet} onClick={onClick}>
        <RecordRings />
        <DeadWaxRing size={DEAD_WAX_RING_SIZE} />
        <CenterLabel size={CENTER_LABEL_SIZE}>{children}</CenterLabel>
        <RecordHole size={RECORD_HOLE_SIZE} />
      </Record>
    </SpinningContainer>
  );
}
