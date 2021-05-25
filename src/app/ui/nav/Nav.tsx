import React, { useState } from 'react';

import styles from './Nav.module.scss';
import NavItem from './NavItem';

const NAV_MENU = [
  { title: 'Home', link: '/' },
  {
    title: 'Reviews',
    link: '/reviews',
  },
  {
    title: 'Lists',
    link: '/lists',
  },
  {
    title: 'Podcasts',
    link: '/podcasts',
  },
];

const NAV_ITEM_HEIGHT = 25;

export default function Nav() {
  const currentPagePath = window.location.pathname;

  let activeIndex = 0;
  NAV_MENU.forEach((item, index) => {
    if (currentPagePath === item.link) {
      activeIndex = index;
    }
  });

  const [hovered, setHovered] = useState(activeIndex);

  const isActive = (link: string): boolean => {
    const currentPagePath = window.location.pathname;

    if (link === '/' && currentPagePath !== '/') {
      return false;
    }

    if (currentPagePath.includes(link)) {
      return true;
    }

    return false;
  };

  return (
    <div className={styles.Nav}>
      <div className={styles.navItems}>
        <div className={styles.navArrow} style={{ top: hovered * NAV_ITEM_HEIGHT }}>{`>>`}</div>
        {NAV_MENU.map((item, index) => (
          <NavItem
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(activeIndex)}
            isActive={isActive(item.link)}
            index={index}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
