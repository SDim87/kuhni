import breakpoints from '../../helpers/breakpoints';
import { windowWidth } from '../../helpers/sizeWindow';

// init parallax
let paramTitle = {};

if (windowWidth() > breakpoints.phoneLarge) {
  paramTitle = {
    y: '150, 0, -150',
    rotate: '180, 180',
  };
} else {
  paramTitle = {
    y: '40, 0, -40',
  };
}

UIkit.parallax('.js-title_parallax', paramTitle);

$(document).ready(() => {
  // wrap .title_absolute centered to vertical
  function wrapTitleVertical() {
    const itemHeight = $('.js-title_categories').height();
    const titleAbsolut = $('.js-title_absolute').height();
    $('.js-title_absolute').css('top', (itemHeight - titleAbsolut) / 2);
  }

  if (windowWidth() > breakpoints.tabletSmall) {
    wrapTitleVertical();

    $(window).resize(() => {
      wrapTitleVertical();
    });
  }
});
