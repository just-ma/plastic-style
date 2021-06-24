import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './PageTitle.module.scss';

type ComponentProps = {
  isResponsive: boolean;
};

export default function PageTitle({ isResponsive }: ComponentProps): React.ReactElement {
  return (
    <div className={classnames(styles.PageTitle, isResponsive && styles.responsive)}>
      <div className={styles.title}>
        <Link to="/">Pushing the Envelope</Link>
      </div>
    </div>
  );
}
