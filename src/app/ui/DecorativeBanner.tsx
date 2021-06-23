import React, { useEffect, useState } from 'react';

import styles from './DecorativeBanner.module.scss';

const FREQUENCY_1 = 51;
const FREQUENCY_2 = 31;
const FREQUENCY_3 = 17;

export default function DecorativeBanner(): React.ReactElement {
  const [x, setX] = useState<number>(Math.random() * 255);
  const [y, setY] = useState<number>(Math.random() * 255);
  const [z, setZ] = useState<number>(Math.random() * 255);

  const [opacity1, setOpacity1] = useState<number>(1 + Math.random() * 50);
  const [opacity2, setOpacity2] = useState<number>(1 + Math.random() * 50);
  const [opacity3, setOpacity3] = useState<number>(1 + Math.random() * 50);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setOpacity1((prev) => {
        if (prev) {
          return 0;
        }

        setX(Math.random() * 255);
        return 1 + Math.random() * 50;
      });
    }, FREQUENCY_1 * 1000);

    const interval2 = setInterval(() => {
      setOpacity2((prev) => {
        if (prev) {
          return 0;
        }

        setY(Math.random() * 255);
        return 1 + Math.random() * 50;
      });
    }, FREQUENCY_2 * 1000);

    const interval3 = setInterval(() => {
      setOpacity3((prev) => {
        if (prev) {
          return 0;
        }

        setZ(Math.random() * 255);
        return 1 + Math.random() * 50;
      });
    }, FREQUENCY_3 * 1000);

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
            `linear-gradient(` + `rgba(40, 80, 255, .3), ` + `rgba(150, 150, 200, .1), ` + `rgba(235, 235, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity1,
          transition: `opacity ${FREQUENCY_1}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(40, 80, 255, 1), ` +
            `rgba(${x}, 150, 140, .9), ` +
            `rgba(200, ${x}, 240, .3), ` +
            `rgba(150, 150, ${x}, .1), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity2,
          transition: `opacity ${FREQUENCY_2}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(${y}, 40, 255, .5), ` +
            `rgba(200, ${y}, ${y}, .1), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          opacity: opacity3,
          transition: `opacity ${FREQUENCY_3}s`,
          backgroundImage:
            `linear-gradient(` +
            `rgba(40, 80, 255, .5), ` +
            `rgba(${z}, 207, ${z}, .2), ` +
            `rgba(${z}, ${z}, 240, .1), ` +
            `rgba(235, 235, 235, 0))`,
        }}
      />
    </div>
  );
}
