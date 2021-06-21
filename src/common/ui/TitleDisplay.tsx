import React from 'react';
import classnames from 'classnames';

import useResponsive from '../hooks/useResponsive';

import Thumbnail from './Thumbnail';
import Header from './Header';

import styles from './TitleDisplay.module.scss';

type ComponentProps = {
  className?: string;
  title: string;
  secondaryTitle?: string;
  description?: string;
  src: string;
  children?: React.ReactNode;
};

export default function TitleDisplay({
  className,
  title,
  secondaryTitle,
  description,
  src,
  children,
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div className={classnames(styles.TitleDisplay, isMobile && styles.mobile, className)}>
      <div className={styles.thumbnail}>
        <Thumbnail src={src} fullWidth={isMobile} />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <Header title={title} secondaryTitle={secondaryTitle} />
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
}
