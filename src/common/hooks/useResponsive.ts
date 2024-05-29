import { useEffect, useState } from 'react';

import { MOBILE_SIZE, TABLET_SIZE } from '../constants';

type HookValue = {
  /*
   * true if window width is > responsive size
   */
  isDesktop: boolean;
  /*
   * true if window width is <= responsive size
   */
  isTablet: boolean;
  /*
   * true if window width is <= mobile size
   */
  isMobile: boolean;
};

const getIsDesktop = (): boolean => {
  return window.innerWidth > TABLET_SIZE;
};

const getisTablet = (): boolean => {
  return window.innerWidth <= TABLET_SIZE;
};

const getIsMobile = (): boolean => {
  return window.innerWidth <= MOBILE_SIZE;
};

export default function useResponsive(): HookValue {
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());
  const [isTablet, setisTablet] = useState<boolean>(getisTablet());
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  const handleWindowResize = (): void => {
    setIsDesktop(getIsDesktop());
    setisTablet(getisTablet());
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
    isTablet,
    isMobile,
  };
}
