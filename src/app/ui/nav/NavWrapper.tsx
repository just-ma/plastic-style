import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';

import PageTitle from '../PageTitle';
import Nav from './Nav';
import MobileNav from './MobileNav';

import styles from './NavWrapper.module.scss';

type ComponentProps = {
  children?: React.ReactNode;
};

export default function NavWrapper({ children }: ComponentProps): React.ReactElement {
  const { isDesktop } = useResponsive();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = useCallback((): void => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className={classnames(styles.NavWrapper, !isDesktop && styles.responsive, isDrawerOpen && styles.blur)}>
      <div className={styles.pageTitle}>
        <PageTitle />
      </div>
      {isDesktop ? (
        <div className={styles.nav}>
          <Nav />
        </div>
      ) : (
        <div className={styles.drawerButton} onClick={handleDrawerOpen}>
          Menu
        </div>
      )}
      {children}
      <MobileNav isOpen={isDrawerOpen} onRequestClose={handleDrawerClose} />
    </div>
  );
}
