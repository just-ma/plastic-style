import React from 'react';
import styled from 'styled-components';

import KIRA_PIC_1 from '../../images/thumbnails/kira-pic-1.jpg';
import CMAN from '../../images/thumbnails/cman-2.jpg';

const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledIFrame = styled.iframe`
  width: 80%;
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const StyledImg = styled.img`
  width: 50%;
  height: auto;
`;

const CUSTOM_ELEMENTS: Record<string, React.ReactElement> = {
  'race-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Y4CVBIc2dBs"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Race For Titles feat Lipticism"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'joyer-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Um3bQgE_lfQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="An Interview With Joyer"
      ></StyledIFrame>
    </CenteredWrapper>
  ),

  'kira-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/rC-xWQwTAGA"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="An Interview With Kira McSpice"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'kira-pic-1': (
    <CenteredWrapper>
      <StyledImg src={KIRA_PIC_1}></StyledImg>
    </CenteredWrapper>
  ),
  'cman-pic': (
    <CenteredWrapper>
      <StyledImg src={CMAN}></StyledImg>
    </CenteredWrapper>
  ),
  'yhwh-interview': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/4bOn7MO6Ibc"
        title="An Interview With YHWH Nailgun"
        frameBorder="0"
        allow=" autoplay; encrypted-media;"
        allowFullScreen
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'yhwh-video': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Fs4UyojW5PQ"
        title="YHWH Nailgun - Hawk Violence"
        frameBorder="0"
        allow=" autoplay; encrypted-media;"
        allowFullScreen
      ></StyledIFrame>
    </CenteredWrapper>
  ),
};

type CustomElementProps = {
  id: string;
};

export default function CustomElement({ id }: CustomElementProps): React.ReactElement | null {
  return CUSTOM_ELEMENTS[id] || null;
}
