import React from 'react';
import styled from 'styled-components';

import KIRA_PIC_1 from '../../images/thumbnails/kira-pic-1.jpg';
import SHOTS_PIC from '../../images/thumbnails/shots-pic.jpg';
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
  'donor-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/9jn1SRpYOYk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="A Night In by Tindersticks"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'tinder-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/uN5uTYe2DP0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="A Night In by Tindersticks"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'mfer-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/KaxwoL7wQPI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Cry Mfer by My Idea"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'sea-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Px-x4zYSM2Q"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Candy Run by Sea Moss"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'omd-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/XDIYOiQUi2s"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Souvenir by OMD"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'flesh-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/LUtwIozgoK0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Croydon Fox by Strange Flesh"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
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
  'shots-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/vKZbPA7nhaw"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Private Hate"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'shots-pic': (
    <CenteredWrapper>
      <StyledImg src={SHOTS_PIC}></StyledImg>
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
