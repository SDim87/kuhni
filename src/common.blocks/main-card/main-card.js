import { windowWidth } from '../../helpers/sizeWindow';
import breakpoints from '../../helpers/breakpoints';

const mainCardRight = $('.js-main-card__right');
const mainCardText = $('.js-main-card__text');
const mainCardDecor = $('.js-main-card__decor');

// wrapped absolute block to right
function blockWrapRight(block) {
  const blockWidth = $('.main-card').width();
  $(block).css('right', (windowWidth() - blockWidth) / -2);
}

// wrapped absolute block to left
function blockDecorWrap(block) {
  const blockWidth = $('.main-card').width();
  $(block).css('right', ((windowWidth() - blockWidth) / -2) + 32);
}

// using
$(document).ready(() => {
  if (windowWidth() > breakpoints.phoneLarge) {
    blockWrapRight(mainCardRight);
    blockDecorWrap(mainCardDecor);

    $(window).resize(() => {
      windowWidth();
      blockWrapRight(mainCardRight);
      blockDecorWrap(mainCardDecor);
    });
  }
});

// init parallax
let param = {};

if (windowWidth() > breakpoints.phoneLarge) {
  param = {
    bgy: -250,
    viewport: 1,
    easing: 0,
  };
} else {
  param = {
    bgy: -20,
    viewport: 1,
    easing: 0,
  };
}

const paramText = {
  opacity: '0, 1',
  y: '50, 0',
  viewport: 0.5,
  easing: 0,
};

const paramDecor = {
  y: -100,
  viewport: 1,
  easing: 0,
};

UIkit.parallax(mainCardRight, param);
UIkit.parallax(mainCardText, paramText);
UIkit.parallax(mainCardDecor, paramDecor);


// if (windowWidth() <= breakpoints.phoneLarge) {
//   const $mainCards = $('.main-card');
//   console.log($mainCards);

//   if ($mainCards.length > 1) {
//     const $arrAttr = $('.main-card[data-background]')
//       .map((_, el) => $(el).attr('data-background'))
//       .get();
//     for (let i = 0; i < $mainCards.length; i++) {
//       const el = $mainCards[i];
//       const elAttr = $arrAttr[i];
//       $(el).css('background-image', `url(${elAttr})`);
//     }
//   } else {
//     const pathBg = $mainCards.attr('data-background');
//     $mainCards.css('background-image', `url(${pathBg})`);
//   }
// }
