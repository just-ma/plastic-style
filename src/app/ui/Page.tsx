import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';

import useResponsive from '../../common/hooks/useResponsive';
import useHTMLString from '../hooks/useHTMLString';

import NavWrapper from './nav/NavWrapper';

import styles from './Page.module.scss';

type ComponentProps = {
  children: React.ReactNode;
};

export default function Page({ children }: ComponentProps): React.ReactElement {
  const location = useLocation();

  const { isTablet } = useResponsive();

  const [visible, setVisible] = useState(false);

  useHTMLString();

  useEffect(() => {
    const timeoutId = setTimeout(() => setVisible(true), 200);

    return () => {
      clearTimeout(timeoutId);
      setVisible(false);
    };
  }, [location.pathname]);

  return (
    <NavWrapper>
      <div className={styles.scrollContainer}>
        <div className={classnames(styles.contentContainer, isTablet && styles.responsive, visible && styles.visible)}>
          {children}
        </div>
      </div>
    </NavWrapper>
  );
}
