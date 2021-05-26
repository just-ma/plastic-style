import React from 'react';

import styles from './AlbumCover.module.scss';

type ComponentProps = {
  src: string;
};

export default function AlbumCover({ src }: ComponentProps) {
  return <img className={styles.AlbumCover} src={src} />;
}
