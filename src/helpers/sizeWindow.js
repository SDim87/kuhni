const w = window;
const d = document;
const e = d.documentElement;
const g = d.getElementsByTagName('body')[0];

/**
 * Return window width
 * @returns {number}
 */
function windowWidth() {
  return w.innerWidth || e.clientWidth || g.clientWidth;
}
/**
 * Return window height
 * @returns {number}
 */
function windowHeight() {
  return w.innerHeight || e.clientHeight || g.clientHeight;
}

export { windowWidth, windowHeight };
