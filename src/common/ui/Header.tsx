import React from 'react';

import styles from './Header.module.scss';

type ComponentProps = {
  title: string;
  secondaryTitle?: string; // rendered above title
};

export default function Header({ title, secondaryTitle }: ComponentProps): React.ReactElement {
  return (
    <div className={styles.Header}>
      {secondaryTitle && <div className={styles.secondaryTitle}>{secondaryTitle}</div>}
      <div className={styles.title}>{title}</div>
    </div>
  );
}
