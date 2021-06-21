import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './PageLink.module.scss';

type ComponentProps = {
  className?: string;
  children: React.ReactElement;
  to?: string;
};

export default function PageLink({ className, children, to }: ComponentProps): React.ReactElement {
  if (!to) {
    return children;
  }

  return (
    <Link className={classnames(styles.PageLink, className)} to={to}>
      {children}
    </Link>
  );
}
