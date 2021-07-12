import React from 'react';

import HTMLString from './HTMLString';

import styles from './TitledParagraph.module.scss';

type ComponentProps = {
  leftTitle: string | number;
  rightTitle: string | number;
  content: string;
};

export default function TitledParagraph({ leftTitle, rightTitle, content }: ComponentProps): React.ReactElement {
  return (
    <div>
      <div className={styles.header}>
        <span>{leftTitle}</span>
        <span>{rightTitle}</span>
      </div>
      <HTMLString className={styles.content} element="p">
        {content}
      </HTMLString>
    </div>
  );
}
