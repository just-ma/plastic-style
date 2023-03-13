import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import Nav from './Nav';
import MobileNav from './MobileNav';
import DrawerButton from './DrawerButton';
import useResponsive from '../../../common/hooks/useResponsive';

import styles from './NavWrapper.module.scss';

type ComponentProps = {
  children?: React.ReactNode;
};

export default function NavWrapper({ children }: ComponentProps): React.ReactElement {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const { isTablet } = useResponsive();

  const handleDrawerOpen = useCallback((): void => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className={classnames(styles.NavWrapper, isTablet && styles.responsive, isDrawerOpen && styles.blur)}>
      {isTablet ? (
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
