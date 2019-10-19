// import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { windowWidth } from '../../helpers/sizeWindow';
import breakpoints from '../../helpers/breakpoints';

const $item = $('.js-nav__item');
const $navRight = $('.js-nav__bg');

function changeBgEnter() {
  const dataBg = $(this).attr('data-background');
  $navRight.css('background-image', `url(${dataBg})`);
}

function changeBgOut() {
  $navRight.css('background-image', 'url(/img/nav__bg_default.jpg)');
}

if (windowWidth() > breakpoints.tabletLandscape) {
  $item.on('mouseenter', throttle(changeBgEnter, 300));

  $('.nav__list').on('mouseleave', throttle(changeBgOut, 300));
}
