import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';

import styles from './MobileNav.module.scss';

type ComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export default function MobileNav({ isOpen, onRequestClose }: ComponentProps): React.ReactPortal | null {
  const root = document.getElementById('root');

  if (!isOpen || !root) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.MobileNav}>
      <div className={styles.background} onClick={onRequestClose} />
      <div className={styles.drawer}>
        <Nav />
      </div>
    </div>,
    root,
  );
}
