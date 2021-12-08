import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import useResponsive from '../../common/hooks/useResponsive';

import styles from './PageTitle.module.scss';

type ComponentProps = {
  hasLink?: boolean;
};

export default function PageTitle({ hasLink = true }: ComponentProps): React.ReactElement {
  const { isResponsive } = useResponsive();

  const title = 'Pushing the Envelope';

  return (
    <div className={classnames(styles.PageTitle, isResponsive && styles.responsive)}>
      <div className={styles.title}>{hasLink ? <Link to="/">{title}</Link> : title}</div>
    </div>
  );
}
