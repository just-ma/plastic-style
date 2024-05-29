import React from 'react';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import { ListItem } from '../../models/types';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import Divider from '../../../common/ui/Divider';
import HTMLString from '../../../common/ui/HTMLString';

import styles from './RankedItem.module.scss';
import Thumbnail from '../../../common/ui/Thumbnail';
import styled from 'styled-components';
import { MEDIA_SIZE } from '../../../common/constants';

const StyledDivider = styled(Divider)`
  margin-bottom: 60px;
`;

const Header = styled.div`
  display: flex;
  align-items: end;

  @media ${MEDIA_SIZE.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

type ComponentProps = {
  listItem: ListItem;
};

export default function RankedItem({
  listItem: { title, artist, image, content },
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.RankedItem, isMobile && styles.mobile)}>
      <StyledDivider />
      <Header>
        {image && <Thumbnail src={image} />}
        <TitleDisplay title={artist ? `${artist} - ${title}` : title}></TitleDisplay>
      </Header>
      <HTMLString element="p">{content}</HTMLString>
    </div>
  );
}
