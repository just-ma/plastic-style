import React, { useCallback, useMemo, useState } from 'react';

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

const NAV_ITEM_HEIGHT = 29;

export default function Nav() {
  const currentPagePath = window.location.pathname;

  const activeIndex = useMemo(() => {
    let index = 0;
    NAV_MENU.forEach((item, i) => {
      if (currentPagePath === item.link) {
        index = i;
        return;
      }
    });
    return index;
  }, [currentPagePath]);

  const [hovered, setHovered] = useState(activeIndex);

  const getIsActive = (link: string): boolean => {
    if (link === '/' && currentPagePath !== '/') {
      return false;
    }

    if (currentPagePath.startsWith(link)) {
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
            isActive={getIsActive(item.link)}
            index={index}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
