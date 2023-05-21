import React from 'react';
import styled from 'styled-components';

import KIRA_PIC_1 from '../../images/thumbnails/kira-pic-1.jpg';
import SHOTS_PIC from '../../images/thumbnails/shots-pic.jpg';
import TABLE_1 from '../../images/thumbnails/table-1.jpg';
import TABLE_2 from '../../images/thumbnails/table-2.jpg';
import CHART_1 from '../../images/thumbnails/chart-1.jpg';
import CHART_2 from '../../images/thumbnails/chart-2.jpg';
import CMAN from '../../images/thumbnails/cman-2.jpg';
import SAMARA from '../../images/thumbnails/samara-pic.jpg';
import ERGOT from '../../images/thumbnails/ergot.jpg';
import MEZCAL from '../../images/thumbnails/mezcal.jpg';
import DOOR from '../../images/thumbnails/door.jpg';
import KOTZ from '../../images/thumbnails/kotz.jpg';
import BEN from '../../images/thumbnails/ben.jpg';
import COOLER from '../../images/thumbnails/cooler.jpg';
import SAMARATWO from '../../images/thumbnails/samara.jpg';
import HELEN from '../../images/thumbnails/helen.jpg';

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
  'ben-pic': (
    <CenteredWrapper>
      <StyledImg src={BEN}></StyledImg>
    </CenteredWrapper>
  ),
  'helen-pic': (
    <CenteredWrapper>
      <StyledImg src={HELEN}></StyledImg>
    </CenteredWrapper>
  ),
  'kotz-pic': (
    <CenteredWrapper>
      <StyledImg src={KOTZ}></StyledImg>
    </CenteredWrapper>
  ),
  'cooler-pic': (
    <CenteredWrapper>
      <StyledImg src={COOLER}></StyledImg>
    </CenteredWrapper>
  ),
  'samara-pic-2': (
    <CenteredWrapper>
      <StyledImg src={SAMARATWO}></StyledImg>
    </CenteredWrapper>
  ),
  'door-pic': (
    <CenteredWrapper>
      <StyledImg src={DOOR}></StyledImg>
    </CenteredWrapper>
  ),
  'mezcal-pic': (
    <CenteredWrapper>
      <StyledImg src={MEZCAL}></StyledImg>
    </CenteredWrapper>
  ),
  'ergot-pic': (
    <CenteredWrapper>
      <StyledImg src={ERGOT}></StyledImg>
    </CenteredWrapper>
  ),
  'samara-pic': (
    <CenteredWrapper>
      <StyledImg src={SAMARA}></StyledImg>
    </CenteredWrapper>
  ),
  'helen-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/y1O9O21TXqc"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Helen"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'joanne-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/GoIpVoaQeNY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Joanne Robertson"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'samara-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Z0BIcdqY7IM"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="An Interview With Samara Lubelski"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'halle-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Z-VzY8zxRB0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="I'm Not Green"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'codeine-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/ffarN0kCzSg"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="A Snapshot Of Codeine Fans"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'alaska-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/BuUi86tm3C4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="A Night In by Tindersticks"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
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
  'table-one': (
    <CenteredWrapper>
      <StyledImg src={TABLE_1}></StyledImg>
    </CenteredWrapper>
  ),
  'table-two': (
    <CenteredWrapper>
      <StyledImg src={TABLE_2}></StyledImg>
    </CenteredWrapper>
  ),
  'chart-one': (
    <CenteredWrapper>
      <StyledImg src={CHART_1}></StyledImg>
    </CenteredWrapper>
  ),
  'chart-two': (
    <CenteredWrapper>
      <StyledImg src={CHART_2}></StyledImg>
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
