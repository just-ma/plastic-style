import React from 'react';
import classnames from 'classnames';

import useResponsive from '../hooks/useResponsive';

import Thumbnail from './Thumbnail';
import Header from './Header';
import HTMLString from './HTMLString';

import styles from './TitleDisplay.module.scss';

type ComponentProps = {
  className?: string;
  title: string;
  secondaryTitle?: string;
  largeHeader?: boolean;
  description?: string;
  src?: string;
  children?: React.ReactNode;
  thumbnailWidthPx?: number;
  fullWidth?: boolean;
};

export default function TitleDisplay({
  className,
  title,
  secondaryTitle,
  largeHeader,
  description,
  src,
  children,
  thumbnailWidthPx,
  fullWidth,
}: ComponentProps): React.ReactElement {
  const { isMobile } = useResponsive();

  return (
    <div
      className={classnames(
        styles.TitleDisplay,
        isMobile && styles.mobile,
        !src && styles.noThumbnail,
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      {src && (
        <div className={styles.thumbnail}>
          <Thumbnail src={src} widthPx={thumbnailWidthPx} fullWidth={isMobile} />
        </div>
      )}
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <Header title={title} secondaryTitle={secondaryTitle} large={largeHeader} />
        </div>
        {description && (
          <HTMLString className={styles.description} element="p">
            {description}
          </HTMLString>
        )}
        {children}
      </div>
    </div>
  );
}
