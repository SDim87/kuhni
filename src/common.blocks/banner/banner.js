import breakpoints from '../../helpers/breakpoints';
import { windowWidth } from '../../helpers/sizeWindow';

let paramBack = {};

if (windowWidth() > breakpoints.phoneLarge) {
  paramBack = {
    y: '0, -30',
    viewport: 1,
    easing: 0,
  };
} else {
  paramBack = {
    y: '0, -20',
    viewport: 1,
    easing: 0,
  };
}

UIkit.parallax('.js-banner__back', paramBack);
