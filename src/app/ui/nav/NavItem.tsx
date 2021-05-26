import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

import classnames from 'classnames';

type ComponentProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
  title: string;
  link: string;
};

export default function NavItem({ onMouseEnter, onMouseLeave, isActive, title, link }: ComponentProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(styles.NavItem, isActive && styles.active)}
    >
      {/* style to make link big */}
      <div className={styles.link}>
        <Link to={link}>{title}</Link>
      </div>
    </div>
  );
}
