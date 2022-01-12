import React, { useCallback, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import useResponsive from '../../common/hooks/useResponsive';

import { ReactComponent as VinylRecordRingsGraphic } from '../../images/graphics/vinyl-record-rings.svg';

const DEAD_WAX_RING_SIZE = 42;
const CENTER_LABEL_SIZE = 34;
const RECORD_HOLE_SIZE = 3;
const DEFAULT_VELOCITY = 0.5;

const SpinningContainer = styled.div<{ rot: number }>`
  transform: rotate(${({ rot }) => rot}deg);
`;

const Record = styled.div<{ isResponsive: boolean }>`
  position: relative;
  width: ${({ isResponsive }) => (isResponsive ? 400 : 600)}px;
  height: ${({ isResponsive }) => (isResponsive ? 400 : 600)}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #111111;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
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
};

export default function VinylRecord({ children }: ComponentProps): React.ReactElement {
  const { isResponsive } = useResponsive();

  const currV = useRef<number>(DEFAULT_VELOCITY);
  const nextV = useRef<number>(DEFAULT_VELOCITY);
  const requestRef = React.useRef<number>(-1);

  const [rot, setRot] = useState(0);

  const animate = (): void => {
    setRot((prev) => (prev + currV.current) % 360);

    if (nextV.current !== currV.current) {
      currV.current += (nextV.current - currV.current) / 10;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect((): (() => void) => {
    requestRef.current = requestAnimationFrame(animate);

    return (): void => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleMouseDown = useCallback((): void => {
    nextV.current = 0;
  }, []);

  const handleMouseUp = useCallback((): void => {
    nextV.current = DEFAULT_VELOCITY;
  }, []);

  const handleTouchStart = useCallback((): void => {
    nextV.current = DEFAULT_VELOCITY - nextV.current;
  }, []);

  return (
    <SpinningContainer rot={rot}>
      <Record
        isResponsive={isResponsive}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
      >
        <RecordRings />
        <DeadWaxRing size={DEAD_WAX_RING_SIZE} />
        <CenterLabel size={CENTER_LABEL_SIZE}>{children}</CenterLabel>
        <RecordHole size={RECORD_HOLE_SIZE} />
      </Record>
    </SpinningContainer>
  );
}
