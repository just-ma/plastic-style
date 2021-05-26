import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ReadMore.module.scss';

type ComponentProps = {
  link: string;
};

export default function ReadMore({ link }: ComponentProps) {
  return (
    <Link to={link} className={styles.ReadMore}>
      Read More {'>'}
    </Link>
  );
}
