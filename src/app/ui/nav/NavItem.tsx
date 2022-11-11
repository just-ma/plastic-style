import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './NavItem.module.scss';

type ComponentProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
  isHover: boolean;
  isDark: boolean;
  title: string;
  link: string;
};

export default function NavItem({
  onMouseEnter,
  onMouseLeave,
  isActive,
  isHover,
  isDark,
  title,
  link,
}: ComponentProps): React.ReactElement {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(styles.NavItem, {
        [styles.active]: isActive,
        [styles.hover]: isHover,
        [styles.dark]: isDark,
      })}
    >
      <Link to={link}>{title}</Link>
    </div>
  );
}
