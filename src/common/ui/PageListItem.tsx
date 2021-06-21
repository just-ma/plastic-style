import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import useResponsive from '../hooks/useResponsive';

import TitleDisplay from './TitleDisplay';
import Divider from './Divider';

import styles from './PageListItem.module.scss';

type ComponentProps = {
  id?: string;
  title: string;
  secondaryTitle?: string;
  description?: string;
  src: string;
  link: string;
  linkLabel: string;
};

export default function PageListItem({
  id,
  link,
  title,
  secondaryTitle,
  description,
  src,
  linkLabel,
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div id={id} className={classnames(styles.PageListItem, isMobile && styles.mobile)}>
      <Link className={styles.link} to={link}>
        <TitleDisplay
          className={styles.titleDisplay}
          title={title}
          secondaryTitle={secondaryTitle}
          src={src}
          description={description}
        >
          <div className={styles.linkLabel}>{linkLabel}</div>
        </TitleDisplay>
      </Link>
      <div className={styles.divider}>
        <Divider />
      </div>
    </div>
  );
}
