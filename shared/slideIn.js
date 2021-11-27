const slideInYOffset = 40
const slideInOpacityDuration = 0.8
const slideInYDuration = 1.2

export const slideInDelay = 0.2

export function getSlideInStyle(visible, nth = 0) {
  return {
    transition: `${slideInOpacityDuration}s opacity, ${slideInYDuration}s transform`,
    transform: `translate(0, ${visible ? 0 : slideInYOffset}px)`,
    opacity: visible ? 1 : 0,
    transitionDelay: visible ? `${nth * slideInDelay}s` : '0s',
  };
}