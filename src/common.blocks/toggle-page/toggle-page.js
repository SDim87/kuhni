import breakpoints from '../../helpers/breakpoints';
import { windowWidth } from '../../helpers/sizeWindow';

const dataImg = $('.js-toggle-page__img');

if (windowWidth() > breakpoints.tablet) {
  $.each(dataImg, (_i, el) => {
    const attr = $(el).attr('data-image');
    $(el).css('background-image', `url(${attr})`);
  });
}
