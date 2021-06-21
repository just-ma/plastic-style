import React from 'react';
import classnames from 'classnames';

import styles from './Thumbnail.module.scss';

type ComponentProps = {
  src: string;
  fullWidth?: boolean;
};

export default function Thumbnail({ src, fullWidth }: ComponentProps): React.ReactElement {
  return <img className={classnames(styles.Thumbnail, fullWidth && styles.fullWidth)} src={src} />;
}
