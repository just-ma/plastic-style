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
import JACK from '../../images/thumbnails/jack.jpg';
import STUDIO from '../../images/thumbnails/studio.jpg';
import RESIDENTS from '../../images/thumbnails/residents.jpg';
import GROCERY from '../../images/thumbnails/grocery.jpg';
import EYE from '../../images/thumbnails/eye.jpg';
import PHONO from '../../images/thumbnails/phonograph.jpg';
import HEART from '../../images/thumbnails/heart.jpg';
import NINA from '../../images/thumbnails/nina.jpg';
import SCARRS from '../../images/thumbnails/scarrs.jpg';
import BEE from '../../images/thumbnails/bee.jpg';
import HEAD from '../../images/thumbnails/head.jpg';
import BLOOM from '../../images/thumbnails/bloom.jpg';
import JAR from '../../images/thumbnails/jar2.jpg';
import SONY from '../../images/thumbnails/sony.jpg';
import GOTT from '../../images/thumbnails/gott.jpg';
import MBEER from '../../images/thumbnails/mystery2.jpg';
import COUCH from '../../images/thumbnails/couch.jpg';
import PICKLES from '../../images/thumbnails/pickles.jpg';
import OMELETTE from '../../images/thumbnails/omelette.jpg';
import ESTRELLA from '../../images/thumbnails/estrella.jpg';
import CAMPING from '../../images/thumbnails/camping.jpg';
import DINO from '../../images/thumbnails/dino.jpg';
import BEERS from '../../images/thumbnails/beers.jpg';
import BUG from '../../images/thumbnails/bug.jpg';
import NICKEL from '../../images/thumbnails/nickel.jpg';
import RYU from '../../images/thumbnails/ryu.jpg';
import TREEFORT from '../../images/thumbnails/treefort.jpg';
import WALKHOME from '../../images/thumbnails/walkhome.jpg';
import WORK from '../../images/thumbnails/work.jpg';
import TRASH from '../../images/thumbnails/trash.jpg';
import RADIOACTIVE from '../../images/thumbnails/radioactive.jpg';
import FIREWORKS from '../../images/thumbnails/fireworks.jpg';
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
  'respect-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/x34icYC8zA0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Meat"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'meat-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/WkIO8zJjX3M"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Meat"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'seam-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/sEMQzfIo-mk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Seam"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'buch-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Tvs_5NTl9b4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Buch"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'chanel-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/ATBi04xqjB0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Easy"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'easy-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/7XcTyEKSnYg"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Easy"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'protection-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Epgo8ixX6Wo"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Protection"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'ambulance-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/EA2BNB_4m3g"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Ambulance Blues"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'morning-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/CUIyppCO8BY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="In The Morning"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'irc-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/zqG-rElbj2E"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="The Burning"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'tblack-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/0o9Aw1200E4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Theme Black"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'hated-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/ZXmAjQmkkEs"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Hated"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'disco-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/O1cTiqXWKII"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Disco"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'maudlin-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/EJW5ZjJbgM0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Maudlin"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'nondi-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/_vYxBCcrDcM"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Orchid Juke"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'ricks-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/uX4fdvZsNSw"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Porter Ricks"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'radioactive-pic': (
    <CenteredWrapper>
      <StyledImg src={RADIOACTIVE}></StyledImg>
    </CenteredWrapper>
  ),
  'fireworks-pic': (
    <CenteredWrapper>
      <StyledImg src={FIREWORKS}></StyledImg>
    </CenteredWrapper>
  ),
  'trash-pic': (
    <CenteredWrapper>
      <StyledImg src={TRASH}></StyledImg>
    </CenteredWrapper>
  ),
  'omelette-pic': (
    <CenteredWrapper>
      <StyledImg src={OMELETTE}></StyledImg>
    </CenteredWrapper>
  ),
  'work-pic': (
    <CenteredWrapper>
      <StyledImg src={WORK}></StyledImg>
    </CenteredWrapper>
  ),
  'walkhome-pic': (
    <CenteredWrapper>
      <StyledImg src={WALKHOME}></StyledImg>
    </CenteredWrapper>
  ),
  'treefort-pic': (
    <CenteredWrapper>
      <StyledImg src={TREEFORT}></StyledImg>
    </CenteredWrapper>
  ),
  'ryu-pic': (
    <CenteredWrapper>
      <StyledImg src={RYU}></StyledImg>
    </CenteredWrapper>
  ),
  'nickel-pic': (
    <CenteredWrapper>
      <StyledImg src={NICKEL}></StyledImg>
    </CenteredWrapper>
  ),
  'estrella-pic': (
    <CenteredWrapper>
      <StyledImg src={ESTRELLA}></StyledImg>
    </CenteredWrapper>
  ),
  'dino-pic': (
    <CenteredWrapper>
      <StyledImg src={DINO}></StyledImg>
    </CenteredWrapper>
  ),
  'camping-pic': (
    <CenteredWrapper>
      <StyledImg src={CAMPING}></StyledImg>
    </CenteredWrapper>
  ),
  'bug-pic': (
    <CenteredWrapper>
      <StyledImg src={BUG}></StyledImg>
    </CenteredWrapper>
  ),
  'beers-pic': (
    <CenteredWrapper>
      <StyledImg src={BEERS}></StyledImg>
    </CenteredWrapper>
  ),
  'pickles-pic': (
    <CenteredWrapper>
      <StyledImg src={PICKLES}></StyledImg>
    </CenteredWrapper>
  ),
  'mbeer-pic': (
    <CenteredWrapper>
      <StyledImg src={MBEER}></StyledImg>
    </CenteredWrapper>
  ),
  'couch-pic': (
    <CenteredWrapper>
      <StyledImg src={COUCH}></StyledImg>
    </CenteredWrapper>
  ),
  'gott-pic': (
    <CenteredWrapper>
      <StyledImg src={GOTT}></StyledImg>
    </CenteredWrapper>
  ),
  'sony-pic': (
    <CenteredWrapper>
      <StyledImg src={SONY}></StyledImg>
    </CenteredWrapper>
  ),
  'bloom-pic': (
    <CenteredWrapper>
      <StyledImg src={BLOOM}></StyledImg>
    </CenteredWrapper>
  ),
  'head-pic': (
    <CenteredWrapper>
      <StyledImg src={HEAD}></StyledImg>
    </CenteredWrapper>
  ),
  'jar-pic': (
    <CenteredWrapper>
      <StyledImg src={JAR}></StyledImg>
    </CenteredWrapper>
  ),
  'bee-pic': (
    <CenteredWrapper>
      <StyledImg src={BEE}></StyledImg>
    </CenteredWrapper>
  ),
  'scarrs-pic': (
    <CenteredWrapper>
      <StyledImg src={SCARRS}></StyledImg>
    </CenteredWrapper>
  ),
  'eye-pic': (
    <CenteredWrapper>
      <StyledImg src={EYE}></StyledImg>
    </CenteredWrapper>
  ),
  'phono-pic': (
    <CenteredWrapper>
      <StyledImg src={PHONO}></StyledImg>
    </CenteredWrapper>
  ),
  'nina-pic': (
    <CenteredWrapper>
      <StyledImg src={NINA}></StyledImg>
    </CenteredWrapper>
  ),
  'heart-pic': (
    <CenteredWrapper>
      <StyledImg src={HEART}></StyledImg>
    </CenteredWrapper>
  ),
  'aasr-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Q5Xl6bx1KjY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Aim"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'locust-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/k9k1NzqFSuE"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="I Am The Murderer"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'bar-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/PpbB0g0shqY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Mariana Trenchrock"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'hel-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/Cg4mfBSkyQw"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Let Hel Hold What She Has"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'self-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/ktOUevztFKw"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="This Strain Of The Self"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'michael-vid': (
    <CenteredWrapper>
      <StyledIFrame
        src="https://www.youtube.com/embed/vc3xZ0Sn5q8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="An Interview With I.R. Michael"
      ></StyledIFrame>
    </CenteredWrapper>
  ),
  'grocery-pic': (
    <CenteredWrapper>
      <StyledImg src={GROCERY}></StyledImg>
    </CenteredWrapper>
  ),
  'residents-pic': (
    <CenteredWrapper>
      <StyledImg src={RESIDENTS}></StyledImg>
    </CenteredWrapper>
  ),
  'studio-pic': (
    <CenteredWrapper>
      <StyledImg src={STUDIO}></StyledImg>
    </CenteredWrapper>
  ),
  'jack-pic': (
    <CenteredWrapper>
      <StyledImg src={JACK}></StyledImg>
    </CenteredWrapper>
  ),
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
