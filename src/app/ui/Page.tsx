import React, { useRef } from 'react';
import classnames from 'classnames';

import useResponsive from '../../common/hooks/useResponsive';

import NavWrapper from './nav/NavWrapper';

import styles from './Page.module.scss';

type ComponentProps = {
  children: React.ReactElement;
};

export default function Page({ children }: ComponentProps): React.ReactElement {
  const { isResponsive } = useResponsive();

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <NavWrapper isResponsive={isResponsive} scrollRef={scrollRef}>
      <div className={styles.scrollContainer} ref={scrollRef}>
        <div className={classnames(styles.contentContainer, isResponsive && styles.responsive)}>{children}</div>
      </div>
    </NavWrapper>
  );
}
