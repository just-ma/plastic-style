import { useEffect, useState } from 'react';

import { MOBILE_SIZE, RESPONSIVE_SIZE } from '../constants';

type HookValue = {
  /*
   * true if window width is > responsive size
   */
  isDesktop: boolean;
  /*
   * true if window width is <= responsive size
   */
  isResponsive: boolean;
  /*
   * true if window width is <= mobile size
   */
  isMobile: boolean;
};

const getIsDesktop = (): boolean => {
  return window.innerWidth > RESPONSIVE_SIZE;
};

const getIsResponsive = (): boolean => {
  return window.innerWidth <= RESPONSIVE_SIZE;
};

const getIsMobile = (): boolean => {
  return window.innerWidth <= MOBILE_SIZE;
};

export default function useResponsive(): HookValue {
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());
  const [isResponsive, setIsResponsive] = useState<boolean>(getIsResponsive());
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  const handleWindowResize = (): void => {
    setIsDesktop(getIsDesktop());
    setIsResponsive(getIsResponsive());
    setIsMobile(getIsMobile());
  };

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleWindowResize);

    return (): void => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    isDesktop,
    isResponsive,
    isMobile,
  };
}
