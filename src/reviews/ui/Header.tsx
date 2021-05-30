import React from 'react';

import styles from './Header.module.scss';

type ComponentProps = {
  artist: string;
  title: string;
};

export default function Header({ artist, title }: ComponentProps): React.ReactElement {
  return (
    <div>
      <div className={styles.artist}>{artist}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
