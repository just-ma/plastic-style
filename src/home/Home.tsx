import React from 'react';
import { Link } from 'react-router-dom';

import { PARKERS_FAVORITE_ALBUMS_2020_KEY } from '../lists/models/constants';
import { listPagePath } from '../lists/routes';

import styles from './Home.module.scss';

export default function Home(): React.ReactElement {
  return (
    <div>
      <div className={styles.title}>{"What's New?"}</div>
      <ul className={styles.list}>
        <li>
          <Link to={listPagePath(PARKERS_FAVORITE_ALBUMS_2020_KEY)}>{"Parker's Favorite Albums of 2020"}</Link>
        </li>
        <li>
          <Link to={listPagePath(PARKERS_FAVORITE_ALBUMS_2020_KEY)}>{"Parker's Favorite Albums of 2020"}</Link>
        </li>
        <li>
          <Link to={listPagePath(PARKERS_FAVORITE_ALBUMS_2020_KEY)}>{"Parker's Favorite Albums of 2020"}</Link>
        </li>
      </ul>
    </div>
  );
}
