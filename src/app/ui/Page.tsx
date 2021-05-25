import React from 'react';

import PageTitle from './PageTitle';
import Nav from './nav/Nav';

import styles from './Page.module.scss';

export default function Page(Component: React.ComponentType) {
  const component = () => {
    return (
      <div className={styles.Page}>
        <PageTitle />
        <Nav />
        <Component />
      </div>
    );
  };

  return component;
}
