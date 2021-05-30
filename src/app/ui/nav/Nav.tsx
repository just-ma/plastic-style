import React, { useMemo, useState } from 'react';

import NavItem from './NavItem';

import styles from './Nav.module.scss';

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

export default function Nav(): React.ReactElement {
  const currentPagePath = window.location.pathname;

  const activeIndex = useMemo(() => {
    let index = 0;
    NAV_MENU.forEach((item, i) => {
      if (currentPagePath.startsWith(item.link)) {
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
      <div className={styles.center}>
        <div className={styles.navArrow} style={{ top: hovered * NAV_ITEM_HEIGHT }}>{`>>`}</div>
        <div className={styles.navItems}>
          {NAV_MENU.map((item, index) => (
            <NavItem
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(activeIndex)}
              isActive={getIsActive(item.link)}
              isHover={hovered === index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
