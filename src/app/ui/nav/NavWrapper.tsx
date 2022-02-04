import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';

import useCheckAuth from '../../../admin/hooks/useCheckAuth';
import { NavMenuItem } from './types';
import { ADMIN_NAV_MENU, DEFAULT_NAV_MENU } from './constants';

import LogOutButton from '../../../admin/ui/LogOutButton';
import PageTitle from '../PageTitle';
import Nav from './Nav';
import MobileNav from './MobileNav';
import DrawerButton from './DrawerButton';

import styles from './NavWrapper.module.scss';

type ComponentProps = {
  isResponsive: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  isAdmin?: boolean;
};

export default function NavWrapper({
  isResponsive,
  scrollRef,
  children,
  isAdmin,
}: ComponentProps): React.ReactElement | null {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [hideTitle, setHideTitle] = useState<boolean>(false);

  const menu: ReadonlyArray<NavMenuItem> = isAdmin ? ADMIN_NAV_MENU : DEFAULT_NAV_MENU;

  const { loading } = useCheckAuth({ skip: !isAdmin });

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

  if (loading) {
    return null;
  }

  return (
    <div className={classnames(styles.NavWrapper, isResponsive && styles.responsive, isDrawerOpen && styles.blur)}>
      <div className={classnames(styles.pageTitle, hideTitle && styles.hide)}>
        <PageTitle />
      </div>
      {isAdmin && (
        <div className={styles.logOutButton}>
          <LogOutButton />
        </div>
      )}
      {isResponsive ? (
        <div className={styles.drawerButton}>
          <DrawerButton isOpen={false} onClick={handleDrawerOpen} />
        </div>
      ) : (
        <div className={styles.nav}>
          <Nav menu={menu} />
        </div>
      )}
      {children}
      <MobileNav menu={menu} isOpen={isDrawerOpen} onRequestClose={handleDrawerClose} />
    </div>
  );
}
