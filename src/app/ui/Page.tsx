import React from 'react';
import classNames from 'classnames';

import useResponsive from '../../common/hooks/useResponsive';

import NavWrapper from './nav/NavWrapper';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType<any>): () => React.ReactElement {
  const { isDesktop } = useResponsive();

  const component = (): React.ReactElement => {
    return (
      <NavWrapper isResponsive={!isDesktop}>
        <div className={styles.scrollContainer}>
          <div className={classNames(styles.contentContainer, !isDesktop && styles.responsive)}>
            <Component />
          </div>
        </div>
      </NavWrapper>
    );
  };

  return component;
}
