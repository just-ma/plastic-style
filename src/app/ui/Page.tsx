import React from 'react';

import NavWrapper from './nav/NavWrapper';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType<any>): () => React.ReactElement {
  const component = (): React.ReactElement => {
    return (
      <NavWrapper>
        <div className={styles.scrollContainer}>
          <div className={styles.contentContainer}>
            <Component />
          </div>
        </div>
      </NavWrapper>
    );
  };

  return component;
}
