import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

import classnames from 'classnames';

type ComponentProps = {
  title: string;
  link: string;
}

export default function NavItem({
  title,
  link
}: ComponentProps) {
  const currentPagePath = window.location.pathname;
  
  const isActive = currentPagePath.startsWith(link);

  return (
    <div className={classnames(styles.NavItem, isActive && styles.active)}>
      <div className={styles.link}>
        <Link to={link}>
          {title}
        </Link>
      </div> 
    </div>
  )
}