import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import useResponsive from '../../common/hooks/useResponsive';

import PageTitle from './PageTitle';
import Nav from './nav/Nav';
import MobileNav from './nav/MobileNav';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType<any>): () => React.ReactElement {
  const { isDesktop } = useResponsive();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = useCallback((): void => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  const component = (): React.ReactElement => {
    return (
      <div className={classnames(styles.Page, !isDesktop && styles.responsive, isDrawerOpen && styles.blur)}>
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
        <div className={styles.scrollContainer}>
          <div className={styles.contentContainer}>
            <Component />
          </div>
        </div>
        <MobileNav isOpen={isDrawerOpen} onRequestClose={handleDrawerClose} />
      </div>
    );
  };

  return component;
}
