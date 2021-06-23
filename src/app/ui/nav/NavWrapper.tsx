import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import PageTitle from '../PageTitle';
import Nav from './Nav';
import MobileNav from './MobileNav';
import DecorativeBanner from '../DecorativeBanner';

import styles from './NavWrapper.module.scss';

type ComponentProps = {
  isResponsive: boolean;
  children?: React.ReactNode;
};

export default function NavWrapper({ isResponsive, children }: ComponentProps): React.ReactElement {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = useCallback((): void => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className={classnames(styles.NavWrapper, isResponsive && styles.responsive, isDrawerOpen && styles.blur)}>
      <div className={styles.banner}>
        <DecorativeBanner />
      </div>
      <div className={styles.pageTitle}>
        <PageTitle />
      </div>
      {isResponsive ? (
        <div className={styles.drawerButton} onClick={handleDrawerOpen}>
          Menu
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
