import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useResponsive from '../../common/hooks/useResponsive';

const Title = styled.div<{ small: boolean }>`
  font-size: ${({ small }) => (small ? 20 : 22)}px;
  font-weight: 500;

  > a {
    color: #000000;
    text-decoration: none;
  }
`;

type ComponentProps = {
  hasLink?: boolean;
};

export default function PageTitle({ hasLink = true }: ComponentProps): React.ReactElement {
  const { isResponsive } = useResponsive();

  const title = 'plasticstyle.net';

  return <Title small={isResponsive}>{hasLink ? <Link to="/">{title}</Link> : title}</Title>;
}
