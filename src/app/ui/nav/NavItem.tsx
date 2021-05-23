import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

type ComponentProps = {
  title: string;
  link: string;
}

export default function NavItem({
  title,
  link
}: ComponentProps) {
  return (
    <div className={styles.NavItem}>
      <div className={styles.link}>
        <Link to={link}>
          {title}
        </Link>
      </div> 
    </div>
  )
}