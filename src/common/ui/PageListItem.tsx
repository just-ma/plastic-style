import React from 'react';
import classnames from 'classnames';

import useResponsive from '../hooks/useResponsive';

import Thumbnail from './Thumbnail';
import Header from './Header';
import Divider from './Divider';
import PageLink from './PageLink';

import styles from './PageListItem.module.scss';

type ComponentProps = {
  id?: string;
  title: string;
  secondaryTitle?: string;
  description?: string;
  src: string;
  link?: string;
  linkLabel?: string;
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
      <PageLink className={styles.row} to={link}>
        <>
          <div className={styles.thumbnail}>
            <Thumbnail src={src} fullWidth={isMobile} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.header}>
              <Header title={title} secondaryTitle={secondaryTitle} />
            </div>
            <p className={styles.description}>{description}</p>
            {linkLabel && <div className={styles.link}>{linkLabel}</div>}
          </div>
        </>
      </PageLink>
      <div className={styles.divider}>
        <Divider />
      </div>
    </div>
  );
}
