import React from 'react';

import { ReactComponent as MenuIcon } from '../../../images/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';

import styles from './DrawerButton.module.scss';

type ComponentProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function DrawerButton({ isOpen, onClick }: ComponentProps): React.ReactElement {
  const Icon = isOpen ? CloseIcon : MenuIcon;

  return <Icon className={styles.DrawerButton} onClick={onClick} />;
}
