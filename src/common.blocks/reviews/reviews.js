/* eslint-disable one-var */
import getScrollbarWidth from '../../helpers/getScrollbarWidth';

$('.js-reviews__gallery').click(function openedGallery(event) {
  event = event || window.event;
  const target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {
      index: link,
      event,
      onopen() {
        const margin = getScrollbarWidth();
        $('html').css('margin-right', margin);
      },
      onclosed() {
        $('html').css('margin-right', '');
      },
    },
    links = this.getElementsByTagName('a');
  blueimp.Gallery(links, options);
});

