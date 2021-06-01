import React from 'react';
import classnames from 'classnames';

import styles from './Header.module.scss';

type ComponentProps = {
  artist: string;
  title: string;
  fullWidth?: boolean;
};

export default function Header({ artist, title, fullWidth }: ComponentProps): React.ReactElement {
  return (
    <div className={classnames(styles.Header, fullWidth && styles.fullWidth)}>
      <div className={styles.artist}>{artist}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
