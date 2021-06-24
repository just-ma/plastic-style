import React, { useEffect, useState } from 'react';

import styles from './DecorativeBanner.module.scss';

const FREQUENCY_1 = 51;
const FREQUENCY_2 = 31;
const FREQUENCY_3 = 17;

const MAX_HEX = 255;
const MAX_OPACITY = 50;

const randHex = (): number => {
  return Math.random() * MAX_HEX;
};

const randOpacity = (): number => {
  return 1 + Math.random() * MAX_OPACITY;
};

export default function DecorativeBanner(): React.ReactElement {
  const [hex1, setHex1] = useState<number>(randHex());
  const [hex2, setHex2] = useState<number>(randHex());
  const [hex3, setHex3] = useState<number>(randHex());

  const [opacity1, setOpacity1] = useState<number>(randOpacity());
  const [opacity2, setOpacity2] = useState<number>(randOpacity());
  const [opacity3, setOpacity3] = useState<number>(randOpacity());

  const createColorInterval = (
    setOpacity: React.Dispatch<React.SetStateAction<number>>,
    setHex: React.Dispatch<React.SetStateAction<number>>,
    frequency: number,
  ): NodeJS.Timeout => {
    return setInterval((): void => {
      setOpacity((prev): number => {
        if (prev) {
          return 0;
        }

        setHex(randHex());
        return randOpacity();
      });
    }, frequency * 1000);
  };

  useEffect((): (() => void) => {
    const interval1: NodeJS.Timeout = createColorInterval(setOpacity1, setHex1, FREQUENCY_1);
    const interval2: NodeJS.Timeout = createColorInterval(setOpacity2, setHex2, FREQUENCY_2);
    const interval3: NodeJS.Timeout = createColorInterval(setOpacity3, setHex3, FREQUENCY_3);

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
            `rgba(80, 80, 255, 0.3), ` +
            `rgba(150, 150, 200, 0.2), ` +
            `rgba(150, 150, 200, 0.1), ` +
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
            `rgba(40, 80, 255, 1), ` +
            `rgba(${hex1}, 150, 140, 0.9), ` +
            `rgba(200, ${hex1}, 240, 0.3), ` +
            `rgba(150, 150, ${hex1}, 0.1), ` +
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
            `rgba(80, 40, 255, 0.5), ` +
            `rgba(200, ${hex2}, ${hex2}, 0.1), ` +
            `rgba(235, ${hex2}, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity3,
          transitionDuration: `${FREQUENCY_3}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(40, 80, 255, 0.5), ` +
            `rgba(${hex3}, 207, ${hex3}, 0.2), ` +
            `rgba(${hex3}, ${hex3}, 240, 0.1), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
    </div>
  );
}
