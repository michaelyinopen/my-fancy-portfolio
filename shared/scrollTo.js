const supportsNativeSmoothScrollClosure = () => {
  let supportsNativeSmoothScroll = null
  const getValue = () => {
    if (supportsNativeSmoothScroll === null && document) {
      supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style
    }
    return supportsNativeSmoothScroll
  }
  return {
    getValue
  }
}
const supportsNativeSmoothScrollLazy = supportsNativeSmoothScrollClosure()

export function scrollTo(top) {
  if (supportsNativeSmoothScrollLazy.getValue()) {
    window.scrollTo({ top, behavior: 'smooth' });
  } else {
    window.scroll(0, top);
  }
}