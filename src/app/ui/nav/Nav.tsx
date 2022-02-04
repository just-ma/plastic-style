import React, { useMemo, useState } from 'react';

import NavItem from './NavItem';

import { ReactComponent as ArrowIcon } from '../../../images/icons/arrow.svg';

import { NavMenuItem } from './types';

import styles from './Nav.module.scss';

const NAV_ITEM_HEIGHT = 25;

type ComponentProps = {
  menu: ReadonlyArray<NavMenuItem>;
};

export default function Nav({ menu }: ComponentProps): React.ReactElement {
  const currentPagePath = window.location.pathname;

  const activeIndex = useMemo((): number => {
    let strictMatchIndex: number | null = null;
    let prefixMatchIndex = 0;

    menu.forEach((item, i) => {
      if (currentPagePath === item.link) {
        strictMatchIndex = i;
      } else if (currentPagePath.startsWith(item.link)) {
        prefixMatchIndex = i;
      }
    });

    return strictMatchIndex || prefixMatchIndex;
  }, [currentPagePath]);

  const [hovered, setHovered] = useState(activeIndex);

  return (
    <div className={styles.Nav}>
      <div className={styles.navItemsContainer}>
        <div className={styles.navArrow} style={{ top: hovered * NAV_ITEM_HEIGHT }}>
          <ArrowIcon />
        </div>
        <div className={styles.navItems}>
          {menu.map((item, index) => (
            <NavItem
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(activeIndex)}
              isActive={activeIndex === index}
              isHover={hovered === index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
