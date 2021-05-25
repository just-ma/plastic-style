import React from 'react';

import styles from './Nav.module.scss';
import NavItem from './NavItem';

const NAV_MENU = [
  {
    title: 'Reviews',
    link: '/reviews'
  },
  {
    title: 'Lists',
    link: '/lists'
  },
  {
    title: 'Podcasts',
    link: '/podcasts'
  }
]

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.navItems}>
        {NAV_MENU.map((item, index) => (
          <NavItem key={index} {...item}/>
        ))}
      </div>
    </div>
  )
}