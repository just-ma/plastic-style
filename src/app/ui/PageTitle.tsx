import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageTitle.module.scss';

export default function PageTitle(): React.ReactElement {
  return (
    <div className={styles.PageTitle}>
      <div className={styles.title}>
        <Link to="/">Pushing the Envelope</Link>
      </div>
    </div>
  );
}
