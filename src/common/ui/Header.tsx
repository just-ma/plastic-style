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

const Subtitle = styled(HTMLString)<{ large?: boolean }>`
  font-size: ${({ large }) => (large ? 16 : 14)}px;
  font-weight: 500;
  margin-top: 16px;
`;

export type HeaderProps = {
  title: string;
  secondaryTitle?: string; // rendered above title
  subtitle?: string; // rendered below title
  large?: boolean;
};

export default function Header({ title, secondaryTitle, subtitle, large }: HeaderProps): React.ReactElement {
  return (
    <HeaderContainer>
      {secondaryTitle && <SecondaryTitle large={large}>{secondaryTitle}</SecondaryTitle>}
      <Title large={large}>{title}</Title>
      {subtitle && <Subtitle large={large}>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
}
