import React from 'react';
import classnames from 'classnames';

import useResponsive from '../hooks/useResponsive';

import Thumbnail from './Thumbnail';
import Header, { HeaderProps } from './Header';
import HTMLString from './HTMLString';

import styles from './TitleDisplay.module.scss';

type ComponentProps = {
  className?: string;
  headerProps: HeaderProps;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  thumbnailWidthPx?: number;
  fullWidth?: boolean;
};

export default function TitleDisplay({
  className,
  headerProps,
  description,
  image,
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
        !image && styles.noThumbnail,
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      {image && (
        <div className={styles.thumbnail}>
          <Thumbnail src={image} widthPx={thumbnailWidthPx} fullWidth={isMobile} />
        </div>
      )}
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <Header {...headerProps} />
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
