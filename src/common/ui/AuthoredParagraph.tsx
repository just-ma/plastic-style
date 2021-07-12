import React from 'react';

import HTMLString from './HTMLString';

import styles from './AuthoredParagraph.module.scss';

type ComponentProps = {
  author: string;
  date: string | number;
  content: string;
};

export default function AuthoredParagraph({ author, date, content }: ComponentProps): React.ReactElement {
  return (
    <div>
      <div className={styles.header}>
        <span>{`by ${author}`}</span>
        <span>{date}</span>
      </div>
      <HTMLString className={styles.content} element="p">
        {content}
      </HTMLString>
    </div>
  );
}
