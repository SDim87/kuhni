import throttle from 'lodash/throttle';
import { windowWidth } from '../../helpers/sizeWindow';
import breakpoints from '../../helpers/breakpoints';

const $item = $('.js-categories__item');
const $bodyBg = $('.js-category__bg');
const modeOpened = 'is-opened';
const modeClosed = 'is-closed';

function changeBgEnter() {
  const src = $(this).find('img').attr('data-body');
  $bodyBg.css('background-image', `url(${src})`);
  $bodyBg.removeClass(modeClosed);
  $bodyBg.addClass(modeOpened);
}

function changeBgOut() {
  $bodyBg.removeClass(modeOpened);
  $bodyBg.addClass(modeClosed);
  $bodyBg.css('background-image', 'linear-gradient(rgba(0,0,0,0))');
}

if (windowWidth() > breakpoints.tabletLandscape) {
  $item.on('mouseenter', throttle(changeBgEnter, 200));

  $item.on('mouseleave', throttle(changeBgOut, 200));
}
