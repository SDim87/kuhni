/* eslint-disable no-unused-vars */
let options = {};

if ($('js-slider-main .swiper-slide').length === 1) {
  options = {
    preloadImages: false,
    lazy: true,
    watchSlidesVisibility: true,
    autoplay: false,
  };
} else {
  options = {
    preloadImages: false,
    slidesPerView: 4,
    spaceBetween: 48,
    lazy: true,
    watchSlidesVisibility: true,
    autoplay: false,
    mousewheel: {
      releaseOnEdges: true,
    },
    breakpoints: {
      1440: {
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: '.js-slider-pagination',
          type: 'bullets',
        },
      },
    },
  };
}

const sliderMain = new Swiper('.js-slider-main__container', options);

