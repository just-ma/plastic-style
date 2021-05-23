import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header()  {
  return (
    <div className={styles.Header}>
      <div className={styles.title}>
        <Link to="/">
          Pushing the Envelope
        </Link>
      </div>
    </div>
  );
}