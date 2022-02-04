import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { NavMenuItem } from './types';

import Nav from './Nav';
import DrawerButton from './DrawerButton';

import styles from './MobileNav.module.scss';

type ComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  menu: ReadonlyArray<NavMenuItem>;
};

export default function MobileNav({ isOpen, onRequestClose, menu }: ComponentProps): React.ReactPortal | null {
  const [open, setOpen] = useState<boolean>(isOpen);

  useEffect((): void => {
    setTimeout(
      (): void => {
        setOpen(isOpen);
      },
      isOpen ? 0 : 200,
    );
  }, [isOpen]);

  const root = document.getElementById('root');

  if (!open || !root) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.MobileNav}>
      <div className={styles.background} onClick={onRequestClose} />
      <CSSTransition
        classNames={{
          enter: styles.animationEnter,
          enterActive: styles.animationEnterActive,
          appear: styles.animationEnter,
          appearActive: styles.animationEnterActive,
          exit: styles.animationExit,
          exitActive: styles.animationExitActive,
        }}
        unmountOnExit
        timeout={200}
        appear
        in={isOpen}
      >
        <div className={styles.drawer}>
          <div className={styles.navItems}>
            <Nav menu={menu} />
          </div>
          <div className={styles.closeButton}>
            <DrawerButton isOpen onClick={onRequestClose} />
          </div>
        </div>
      </CSSTransition>
    </div>,
    root,
  );
}
