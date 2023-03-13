import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../common/hooks/useResponsive';

import PageTitle from './PageTitle';

const Container = styled.div<{ isMobile: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? 40 : 45)}px;
  background-color: #9a4c22;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1;
`;

const TitleContainer = styled.div`
  margin-left: 20px;
  flex-shrink: 0;
`;

const ScrollingTextContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  margin-right: 20px;
  height: 100%;
`;

const ScrollingText = styled.div`
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  transform: translateX(-50%);
  position: absolute;
  width: 200%;
  height: 100%;
  animation: scroll-left 45s linear infinite;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #92baad;
`;

export default function AppHeader() {
  const { isMobile } = useResponsive();

  return (
    <Container isMobile={isMobile}>
      <TitleContainer>
        <PageTitle />
      </TitleContainer>
      <ScrollingTextContainer>
        <ScrollingText>
          {new Array(isMobile ? 2 : 8).fill('slowcore week').map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </ScrollingText>
      </ScrollingTextContainer>
    </Container>
  );
}
