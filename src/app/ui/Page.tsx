import React, { useRef } from 'react';
import classnames from 'classnames';

import useResponsive from '../../common/hooks/useResponsive';

import NavWrapper from './nav/NavWrapper';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType<any>): () => React.ReactElement {
  const { isResponsive } = useResponsive();

  const scrollRef = useRef<HTMLDivElement>(null);

  const component = (): React.ReactElement => {
    return (
      <NavWrapper isResponsive={isResponsive} scrollRef={scrollRef}>
        <div className={styles.scrollContainer} ref={scrollRef}>
          <div className={classnames(styles.contentContainer, isResponsive && styles.responsive)}>
            <Component />
          </div>
        </div>
      </NavWrapper>
    );
  };

  return component;
}
