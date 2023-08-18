export const TABLET_SIZE = 1000;
export const MOBILE_SIZE = 600;

export const MEDIA_SIZE = {
  // <= 600px
  mobile: `(max-width: ${MOBILE_SIZE}px)`,

  // > 600px
  nonMobile: `(min-width: ${MOBILE_SIZE + 1}px)`,

  // > 600px, <= 1000px
  tablet: `(min-width: ${MOBILE_SIZE + 1}px) and (max-width: ${TABLET_SIZE}px)`,

  // > 1000px
  desktop: `(min-width: ${TABLET_SIZE + 1}px)`,

  // <= 1000px
  nonDesktop: `(max-width: ${TABLET_SIZE}px)`,
};
