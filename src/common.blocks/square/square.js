
import { windowWidth } from '../../helpers/sizeWindow';
import breakpoints from '../../helpers/breakpoints';

// visible square
let factor = 0;

if (windowWidth() > breakpoints.tabletLandscape) {
  factor = 1.3;
} else {
  factor = 4;
}

const square = $('.js-square');
const squareSmall = $('.js-square_small');
const squareBanner = $('.js-square_banner');

$(window).scroll(() => {
  const scrollTop = $(window).scrollTop();

  $.each(square, (_, el) => {
    const blockOffset = $(el).offset().top - ($(el).height() * factor);

    if (scrollTop > blockOffset) {
      $(el).addClass('is-visible');
    }
  });
});

$(document).ready(() => {
  squareSmall.addClass('is-visible');
  squareBanner.addClass('is-visible');
});
