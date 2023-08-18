import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderProps } from './Header';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';
import TitleDisplay from './TitleDisplay';

const Container = styled.div`
  width: 230px;
  border: 1px solid black;
  cursor: pointer;
  height: fit-content;
  position: relative;
  background-color: #ebebeb;

  &:hover {
    border-radius: 0 0 20px 0;
  }

  transition: border-radius 0.3s ease;
`;

const Symbol = styled.div`
  position: absolute;
  right: 8px;
  bottom: 4px;
  user-select: none;
`;

const Background = styled.div`
  border: 1px solid black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: -1px;
  left: -1px;
  background-color: #aeaeae;
`;

type ComponentProps = {
  id?: string;
  headerProps: HeaderProps;
  image: string;
  link: string;
  preLink?: string;
  timestamp?: number;
  symbol: string;
};

export default function ArticleCard({
  id,
  link,
  headerProps: { title, subtitle },
  image,
  timestamp,
  preLink,
  symbol,
}: ComponentProps): React.ReactElement {
  const navigate = useNavigate();

  const onRedirect = useCallback((): void => {
    if (preLink) {
      navigate(preLink, { replace: true });
    }

    navigate(link);
  }, [link, preLink]);

  return (
    <Container id={id} onClick={onRedirect}>
      <Thumbnail src={image} />
      <TitleDisplay title={title} subtitle={subtitle} timestamp={timestamp} />
      <Symbol>{symbol}</Symbol>
      <Background />
    </Container>
  );
}
