const isServer = typeof window === "undefined";

const isBrowser = !isServer;
const windowHeight = isBrowser ? window.innerHeight : 768;
const windowWidth = isBrowser ? window.innerWidth : 1268;
const isMobilePad = isBrowser ? window.innerWidth < 959 : false;
const isMobile = isBrowser ? window.innerWidth < 580 : false;
const isSafari = false;

export {
  isBrowser,
  windowHeight,
  windowWidth,
  isMobilePad,
  isMobile,
  isSafari,
};
