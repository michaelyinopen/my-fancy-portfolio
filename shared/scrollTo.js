const supportsNativeSmoothScroll =
  'scrollBehavior' in document.documentElement.style;

export function scrollTo(top) {
  if (supportsNativeSmoothScroll) {
    window.scrollTo({ top, behavior: 'smooth' });
  } else {
    window.scroll(0, top);
  }
}