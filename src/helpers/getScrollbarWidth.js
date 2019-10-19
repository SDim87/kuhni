/**
* Return width Scrollbar window
* @returns {number}
*/
export default function getScrollbarWidth() {
  return window.innerWidth - $(window).innerWidth();
}
