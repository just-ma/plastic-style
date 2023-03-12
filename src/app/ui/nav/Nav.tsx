import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import useResponsive from '../../../common/hooks/useResponsive';
import useIsHome from '../../../home/hooks/useIsHome';
import { reviewsPath } from '../../../reviews/routes';
import { listsPath } from '../../../lists/routes';
import { featuresPath } from '../../../features/routes';
import { podcastsPath } from '../../../podcasts/routes';
import { contactPath } from '../../../contact/routes';

import NavItem from './NavItem';

import { ReactComponent as ArrowIcon } from '../../../images/icons/arrow.svg';

import styles from './Nav.module.scss';

const NAV_MENU = [
  { title: 'Home', link: '/' },
  {
    title: 'Reviews',
    link: reviewsPath(),
  },
  {
    title: 'Lists',
    link: listsPath(),
  },
  {
    title: 'Features',
    link: featuresPath(),
  },
  {
    title: 'Podcasts',
    link: podcastsPath(),
  },
  {
    title: 'Contact',
    link: contactPath(),
  },
];

const NAV_ITEM_HEIGHT = 25;

export default function Nav(): React.ReactElement {
  const location = useLocation();
  const isHome = useIsHome();
  const { isTablet } = useResponsive();

  const isDark = isHome || isTablet;

  const currentPagePath = location.pathname;

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
    if (link === '/' && !isHome) {
      return false;
    }

    if (currentPagePath.startsWith(link)) {
      return true;
    }

    return false;
  };

  return (
    <div className={styles.Nav}>
      <div className={styles.navItemsContainer}>
        <div className={classNames(styles.navArrow, isDark && styles.dark)} style={{ top: hovered * NAV_ITEM_HEIGHT }}>
          <ArrowIcon />
        </div>
        <div className={styles.navItems}>
          {NAV_MENU.map((item, index) => (
            <NavItem
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(activeIndex)}
              isActive={getIsActive(item.link)}
              isHover={hovered === index}
              isDark={isDark}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
