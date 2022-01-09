import React, { useEffect, useState } from 'react';

import styles from './DecorativeBanner.module.scss';

const FREQUENCY_1 = 11;
const FREQUENCY_2 = 17;
const FREQUENCY_3 = 31;

const MAX_DIFF = 50;
const MAX_OPACITY = 70;

const randDiff = (): number => {
  return (Math.random() - 1) * 2 * MAX_DIFF;
};

const randOpacity = (): number => {
  return 1 + Math.random() * MAX_OPACITY;
};

export default function DecorativeBanner(): React.ReactElement {
  const [diff1, setDiff1] = useState<number>(randDiff());
  const [diff2, setDiff2] = useState<number>(randDiff());
  const [diff3, setDiff3] = useState<number>(randDiff());

  const [opacity1, setOpacity1] = useState<number>(0);
  const [opacity2, setOpacity2] = useState<number>(0);
  const [opacity3, setOpacity3] = useState<number>(1);

  const createColorInterval = (
    setOpacity: React.Dispatch<React.SetStateAction<number>>,
    setDiff: React.Dispatch<React.SetStateAction<number>>,
    frequency: number,
  ): NodeJS.Timeout => {
    return setInterval((): void => {
      setOpacity((prev): number => {
        if (prev) {
          return 0;
        }

        setDiff(randDiff());
        return randOpacity();
      });
    }, frequency * 1000);
  };

  useEffect((): (() => void) => {
    const interval1: NodeJS.Timeout = createColorInterval(setOpacity1, setDiff1, FREQUENCY_1);
    const interval2: NodeJS.Timeout = createColorInterval(setOpacity2, setDiff2, FREQUENCY_2);
    const interval3: NodeJS.Timeout = createColorInterval(setOpacity3, setDiff3, FREQUENCY_3);

    return (): void => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className={styles.DecorativeBanner}>
      <div
        className={styles.layer}
        style={{
          backgroundImage:
            `linear-gradient(` +
            `rgba(57, 102, 165, 0.4), ` +
            `rgba(118, 91, 171, 0.1), ` +
            `rgba(0, 255, 94, 0.05), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity1,
          transitionDuration: `${FREQUENCY_1}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(0, 80, 255, 0.2), ` +
            `rgba(255, 255, 220, 0.1), ` +
            `rgba(255, ${150 + diff1}, 90, 0.05), ` +
            `rgba(${150 + diff1}, ${120 + diff1}, 180, 0.05), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity2,
          transitionDuration: `${FREQUENCY_2}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(0, 20, 60, 0.2), ` +
            `rgba(10, 0, ${130 + diff2}, 0.2), ` +
            `rgba(${100 + diff2}, 40, ${120 + diff2}, 0.1), ` +
            `rgba(255, ${170 + diff2}, ${110 + diff2}, 0.1), ` +
            `rgba(250, 255, ${160 + diff2}, 0.05),` +
            `rgba(255, 220, 160, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity3,
          transitionDuration: `${FREQUENCY_3}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(${50 + diff3}, ${140 + diff3}, 255, 0.2), ` +
            `rgba(${120 + diff3}, 150, 240, 0.2), ` +
            `rgba(200, 200, ${150 + diff3}, 0.1), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
    </div>
  );
}
