import React from 'react';

import HTMLString from './HTMLString';

import styles from './Header.module.scss';

type ComponentProps = {
  title: string;
  secondaryTitle?: string; // rendered above title
};

export default function Header({ title, secondaryTitle }: ComponentProps): React.ReactElement {
  return (
    <div className={styles.Header}>
      {secondaryTitle && <HTMLString className={styles.secondaryTitle}>{secondaryTitle}</HTMLString>}
      <HTMLString className={styles.title}>{title}</HTMLString>
    </div>
  );
}
