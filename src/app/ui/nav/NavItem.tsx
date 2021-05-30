import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './NavItem.module.scss';

type ComponentProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
  isHover: boolean;
  title: string;
  link: string;
};

export default function NavItem({
  onMouseEnter,
  onMouseLeave,
  isActive,
  isHover,
  title,
  link,
}: ComponentProps): React.ReactElement {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames(styles.NavItem, { [styles.active]: isActive, [styles.hover]: isHover })}
    >
      <Link to={link}>{title}</Link>
    </div>
  );
}
