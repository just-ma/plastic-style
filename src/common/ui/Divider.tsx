import React from 'react';
import classnames from 'classnames';

import styles from './Divider.module.scss';

type ComponentProps = {
  vertical?: boolean;
};

export default function Divider({ vertical }: ComponentProps): React.ReactElement {
  return <div className={classnames(styles.Divider, vertical && styles.vertical)} />;
}
