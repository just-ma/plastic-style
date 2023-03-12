import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import useResponsive from '../../common/hooks/useResponsive';

const PAGE_TITLE = 'plasticstyle.net';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const omegaBlasted = keyframes`
  0% {
    opacity: 0.2;
  }

  10% {
    transform: translate(-2px, -3px) scale(1.01, 1.01);
  }

  20% {
    opacity: 0.6;
    transform: translate(3px, 2px) scale(.99, .99);
  }

  30% {
    opacity: 0.3;
    transform: translate(-4px, -5px) scale(1.01, 1.01);
  }

  40% {
    transform: translate(2px, 3px) scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: translate(-1px, -2px) scale(.98, .98);
  }

  60% {
    transform: translate(0px, 3px) scale(1.02, 1.02);
  }

  70% {
    opacity: 0.5;
    transform: translate(-2px, -4px) scale(1, 1);
  }

  80% {
    transform: translate(3px, 5px) scale(.99, .99);
  }

  90% {
    opacity: 0.7;
    transform: translate(-5px, -3px) scale(1.1, 1.1);
  }

  100% {
    opacity: 0.2;
    transform: translate(3px, 1px) scale(.95, .95);
  }
`;

const SpinningContainer = styled.div<{ duration: number | null }>`
  ${({ duration }) =>
    duration !== null &&
    css`
      animation: ${rotate} ${duration}ms linear infinite;
    `}
`;

const Title = styled.div<{ small: boolean; blasted: boolean }>`
  font-size: ${({ small }) => (small ? 20 : 22)}px;
  font-weight: 500;

  > a {
    color: ${({ blasted }) => (blasted ? '#ff0059' : '#ffffff')};
    text-decoration: none;
  }

  ${({ blasted }) =>
    blasted &&
    css`
      animation: ${omegaBlasted} 0.5s linear infinite;
    `}
`;

type ComponentProps = {
  hasLink?: boolean;
};

export default function PageTitle({ hasLink = true }: ComponentProps): React.ReactElement {
  const { isTablet } = useResponsive();

  const [rotDuration, setRotDuration] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const [blasted, setBlasted] = useState(false);

  useEffect(() => {
    if (blasted) {
      return;
    }

    let timeoutId: NodeJS.Timer | undefined;
    let currDuration = 10000;

    const spinOutOfControl = (): void => {
      timeoutId = setTimeout(() => {
        setRotDuration((prev) => (prev || currDuration) * 0.7);
        currDuration = currDuration * 0.9;

        if (currDuration < 200) {
          setBlasted(true);
          setRotDuration(null);
        } else {
          spinOutOfControl();
        }
      }, currDuration);
    };

    if (hovering) {
      spinOutOfControl();
    }

    return () => {
      timeoutId && clearTimeout(timeoutId);
      setRotDuration(null);
    };
  }, [hovering]);

  return (
    <SpinningContainer
      duration={rotDuration}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Title small={isTablet} blasted={blasted}>
        {hasLink ? <Link to="/">{PAGE_TITLE}</Link> : PAGE_TITLE}
      </Title>
    </SpinningContainer>
  );
}
