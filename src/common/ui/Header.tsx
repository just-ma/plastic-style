import React from 'react';
import styled from 'styled-components';

import HTMLString from './HTMLString';

const HeaderContainer = styled.div`
  width: 100%;
`;

const Title = styled(HTMLString)<{ large?: boolean }>`
  font-family: Helvetica;
  font-size: ${({ large }) => (large ? 26 : 22)}px;
  font-weight: 500;
`;

const SecondaryTitle = styled(HTMLString)<{ large?: boolean }>`
  font-size: ${({ large }) => (large ? 20 : 18)}px;
  font-weight: 300;
  margin-bottom: 10px;
`;

type ComponentProps = {
  title: string;
  secondaryTitle?: string; // rendered above title
  large?: boolean;
};

export default function Header({ title, secondaryTitle, large }: ComponentProps): React.ReactElement {
  return (
    <HeaderContainer>
      {secondaryTitle && <SecondaryTitle large={large}>{secondaryTitle}</SecondaryTitle>}
      <Title large={large}>{title}</Title>
    </HeaderContainer>
  );
}
