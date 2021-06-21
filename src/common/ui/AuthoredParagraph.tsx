import React, { useMemo } from 'react';

import { getDateLabel } from '../utils';

import styles from './AuthoredParagraph.module.scss';

type ComponentProps = {
  author: string;
  date: number;
  content: string;
};

export default function AuthoredParagraph({ author, date, content }: ComponentProps): React.ReactElement {
  const dateLabel = useMemo((): string => {
    return getDateLabel(date);
  }, [date]);

  return (
    <div>
      <div className={styles.header}>
        <span>{`by ${author}`}</span>
        <span>{dateLabel}</span>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
