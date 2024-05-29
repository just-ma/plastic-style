import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';
import { MEDIA_SIZE } from '../../common/constants';

const PAGE_TITLE = 'plasticstyle.net';

const RelativeContainer = styled.div`
  flex: 0 0 40px;
  align-self: stretch;
  position: relative;
`;

const AbsoluteContainer = styled.div<{ expanded: boolean }>`
  position: absolute;
  width: 100%;
  background-color: #aeaeae;
  gap: 20px;
  z-index: 1;
  border: 1px solid black;
  box-sizing: border-box;
  transition: height 0.6s cubic-bezier(0.25, 0, 0, 1);
  overflow: hidden;

  @media ${MEDIA_SIZE.mobile} {
    height: ${({ expanded }) => (expanded ? 315 : 40)}px;
  }

  @media ${MEDIA_SIZE.nonMobile} {
    height: ${({ expanded }) => (expanded ? 260 : 40)}px;
  }
`;

const TitleContainer = styled.div`
  margin-left: 10px;
  flex-shrink: 0;
  font-family: FT88-Italic;
  transform: scaleY(0.7);
  transform-origin: left;
  user-select: none;
`;

const ExpandedContent = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
  max-width: 500px;
`;

const Link = styled.a`
  color: black;
  width: fit-content;
`;

const ExpandIcon = styled.span<{ expanded: boolean }>`
  transform: rotate(${({ expanded }) => (expanded ? 135 : 0)}deg)
    translate(${({ expanded }) => (expanded ? 0 : 0.5)}px, ${({ expanded }) => (expanded ? -1.5 : -1)}px);
  transition: transform 0.6s cubic-bezier(0.25, 0, 0, 1);
  font-size: 28px;

  @media ${MEDIA_SIZE.mobile} {
    font-size: 24px;
  }
`;

const ExpandButton = styled.div<{ expanded: boolean }>`
  position: absolute;
  z-index: 2;
  top: -1px;
  right: -1px;
  user-select: none;
  cursor: pointer;
  height: 38px;
  width: 38px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${MEDIA_SIZE.nonMobile} {
    &:hover ${ExpandIcon} {
      transform: rotate(${({ expanded }) => (expanded ? 150 : -15)}deg)
        translate(${({ expanded }) => (expanded ? 0 : 0.5)}px, ${({ expanded }) => (expanded ? -1.5 : -1)}px);
    }
  }
`;

const Title = styled.div`
  flex-grow: 1;
  font-size: 26px;
  line-height: 40px;
  cursor: pointer;

  @media ${MEDIA_SIZE.mobile} {
    font-size: 23px;
  }
`;

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+={}[]\\|;:"<>,./?~★✿©¢♜♣☂℉☯☺∑〄ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅥㅦㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊ☆✦✧✩✪✫✬✰⁂⁎⁑✢✣✤✥✱࿏ ꙰☊☎☏✇✈✉✎✏✐✑✒‰§¶$€£¥₮৲৳௹฿៛₠₡₢₣₤₥₦₧₨₩₪₫₭₯₰₱₲₳₴₵￥﷼¤ƒ♔♕♖♗♘♙♚♛♜♝♞♟♤♠♧♣♡♥♢♩♪♫♬♭♮♯°ø؂≠↫↬↭↮↯↰↱♥♡❥❣❦❧დღヅツ㋡웃유üÜتシッ㋛ꑇꐦꐠꐡꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡﭢ⍢⍣⍤⍥⍨⍩ὃὕ㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩㊀㊁㊂㊃㊄㊅㊆㊇ʌæəɜʊeʊɔʊəŋtʃθðvwzdʒαβγδεζηθικλμνξοπρςστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰';

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState(PAGE_TITLE);
  const [stackMax, setStackMax] = useState(0);

  const stackRef = useRef<string[]>([]);

  useEffect(() => {
    let intervalId1: NodeJS.Timer;
    let intervalId2: NodeJS.Timer;
    let timeoutId1: NodeJS.Timer;
    let timeoutId2: NodeJS.Timer;

    if (stackMax > 0) {
      intervalId1 = setInterval(() => {
        setTitle((prev) => {
          const index = Math.floor(Math.random() * prev.length);
          const nextTitle =
            prev.slice(0, index) +
            characters.charAt(Math.floor(Math.random() * characters.length)) +
            prev.slice(index + 1);
          stackRef.current.push(nextTitle);

          return nextTitle;
        });
      }, 70);

      timeoutId1 = setTimeout(() => {
        clearInterval(intervalId1);

        intervalId2 = setInterval(() => {
          if (!stackRef.current.length) {
            clearInterval(intervalId2);
            setTitle(PAGE_TITLE);
            setStackMax(0);
            return;
          }

          setTitle(stackRef.current.pop() || PAGE_TITLE);
        }, 400);
      }, 270);
    } else {
      return;
    }

    return () => {
      clearInterval(intervalId1);
      clearTimeout(timeoutId1);
      clearInterval(intervalId2);
      clearTimeout(timeoutId2);
    };
  }, [stackMax]);

  const handleTitleClick = () => {
    setStackMax((prev) => prev + 3);

    if (location.pathname === '/') {
      document.getElementById('home-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
      if (location.hash) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <RelativeContainer>
      <AbsoluteContainer expanded={expanded}>
        <TitleContainer>
          <Title onClick={handleTitleClick}>{title}</Title>
        </TitleContainer>
        <ExpandedContent>
          <p>
            Plastic Style is a digital publication which aims to enliven the current state of music journalism, offering
            stylized coverage from a team of contributors with diverse tastes. It began as a podcast founded by Parker
            Albert in 2020.
          </p>
          <Link href="mailto:plasticstyledotnet@gmail.com">email</Link>
          <Link href="https://www.instagram.com/plasticstyledotnet/" target="_blank" rel="noreferrer">
            instagram
          </Link>
          <p>Ridgewood, New York, USA</p>
        </ExpandedContent>
        <ExpandButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
          <ExpandIcon expanded={expanded}>✣</ExpandIcon>
        </ExpandButton>
      </AbsoluteContainer>
    </RelativeContainer>
  );
}
