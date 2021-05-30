import React from 'react';

import PageTitle from './PageTitle';
import Nav from './nav/Nav';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType): () => React.ReactElement {
  const component = (): React.ReactElement => {
    return (
      <div className={styles.Page}>
        <div className={styles.pageTitle}>
          <PageTitle />
        </div>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.scrollContainer}>
          <div className={styles.contentContainer}>
            <Component />
          </div>
        </div>
      </div>
    );
  };

  return component;
}
