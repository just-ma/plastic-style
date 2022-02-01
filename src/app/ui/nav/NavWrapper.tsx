import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';

import PageTitle from '../PageTitle';
import Nav from './Nav';
import MobileNav from './MobileNav';
import DrawerButton from './DrawerButton';

import styles from './NavWrapper.module.scss';

type ComponentProps = {
  isResponsive: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

export default function NavWrapper({ isResponsive, scrollRef, children }: ComponentProps): React.ReactElement {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [hideTitle, setHideTitle] = useState<boolean>(false);

  const handleScroll = (e: Event): void => {
    if (!e.target) {
      return;
    }

    const target = e.target as HTMLDivElement;
    setHideTitle(target.scrollTop > 50);
  };

  useEffect((): void | (() => void) => {
    if (!isResponsive || !scrollRef?.current) {
      setHideTitle(false);
      return;
    }

    scrollRef.current.addEventListener('scroll', handleScroll);

    return (): void => {
      scrollRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef, isResponsive]);

  const handleDrawerOpen = useCallback((): void => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className={classnames(styles.NavWrapper, isResponsive && styles.responsive, isDrawerOpen && styles.blur)}>
      <div className={classnames(styles.pageTitle, hideTitle && styles.hide)}>
        <PageTitle />
      </div>
      {isResponsive ? (
        <div className={styles.drawerButton}>
          <DrawerButton isOpen={false} onClick={handleDrawerOpen} />
        </div>
      ) : (
        <div className={styles.nav}>
          <Nav />
        </div>
      )}
      {children}
      <MobileNav isOpen={isDrawerOpen} onRequestClose={handleDrawerClose} />
    </div>
  );
}
