import React from 'react';
import styled from 'styled-components';

import HTMLString from './HTMLString';

const HeaderContainer = styled.div`
  width: 100%;
`;

const Title = styled(HTMLString)`
  font-weight: 500;
`;

const SecondaryTitle = styled(HTMLString)`
  font-weight: 300;
  margin-bottom: 10px;
`;

const Subtitle = styled(HTMLString)`
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
      {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
}
