import React from 'react';
import styled from 'styled-components';

import HTMLString from './HTMLString';
import { getDateLabel } from '../utils';

const Container = styled.div`
  margin: 5px;
`;

const Title = styled(HTMLString)`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 22px;
  transform: scaleY(0.6);
  transform-origin: top left;
  line-height: 30px;
  letter-spacing: -1px;
`;

type ComponentProps = {
  title: string;
  subtitle?: string;
  timestamp?: number;
};

export default function TitleDisplay({ title, subtitle, timestamp }: ComponentProps): React.ReactElement {
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && <HTMLString>{subtitle}</HTMLString>}
      {timestamp && <HTMLString>{getDateLabel(timestamp)}</HTMLString>}
    </Container>
  );
}
