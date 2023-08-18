import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderProps } from './Header';
import Thumbnail from './Thumbnail';
import styled, { css } from 'styled-components';
import TitleDisplay from './TitleDisplay';
import HTMLString from './HTMLString';
import { MEDIA_SIZE } from '../constants';
import useHTMLString from '../../app/hooks/useHTMLString';
import { ReactComponent as ShareIcon } from '../../images/icons/share.svg';
import PageFooter from './PageFooter';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Header = styled.div`
  flex-shrink: 0;
  margin: 10px;
  align-self: stretch;
`;

const BackButton = styled.button`
  cursor: pointer;
`;

const ContentHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  border: 1px solid black;
  margin: calc(30vh - 100px) 0 calc(20vh - 100px);
  max-width: 800px;
  position: relative;

  @media ${MEDIA_SIZE.mobile} {
    flex-direction: column;
    width: 300px;
  }

  @media ${MEDIA_SIZE.nonMobile} {
    align-self: center;
    width: calc(100% - 2px);
  }
`;

const ShareButton = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 7px;
  right: 4px;
  cursor: pointer;
`;

const ShareMessage = styled.div`
  @keyframes fadeInOut {
    0% {
      bottom: 0;
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      bottom: 40px;
      opacity: 0;
    }
  }

  position: absolute;
  right: 2px;
  animation-name: fadeInOut;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0, 0.98, 0.55, 0.96);
  opacity: 0;
  white-space: nowrap;
  user-select: none;
`;

const bodyCss = css`
  width: 100%;
  max-width: 640px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ContentBody = styled(HTMLString)`
  ${bodyCss}
`;

const ChildrenBody = styled.div`
  ${bodyCss}
`;

type ComponentProps = {
  headerProps: HeaderProps;
  content?: string;
  image: string;
  timestamp?: number;
  children?: React.ReactNode;
};

export default function ArticlePage({
  headerProps: { title, subtitle },
  image,
  timestamp,
  content,
  children,
}: ComponentProps): React.ReactElement {
  const navigate = useNavigate();

  useHTMLString();

  const [shareMessage, setShareMessage] = useState('closed');

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (shareMessage === 'open') {
      setShareMessage('animating');
    } else {
      id = setTimeout(() => {
        setShareMessage('closed');
      }, 3000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [shareMessage]);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareMessage('open');
  };

  return (
    <Page>
      <Header>
        <BackButton onClick={() => navigate(-1)}>⬿ take me back</BackButton>
      </Header>
      <ContentHeader>
        <Thumbnail src={image} widthPx={300} />
        <TitleDisplay title={title} subtitle={subtitle} timestamp={timestamp} />
        <ShareButton onClick={handleShareClick}>
          <ShareIcon />
          {shareMessage === 'animating' && <ShareMessage>link copied</ShareMessage>}
        </ShareButton>
      </ContentHeader>
      {content && <ContentBody element="p">{content}</ContentBody>}
      {children && <ChildrenBody>{children}</ChildrenBody>}
      <PageFooter />
    </Page>
  );
}
