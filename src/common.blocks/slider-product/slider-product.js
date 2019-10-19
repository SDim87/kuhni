/* eslint-disable no-unused-vars */
import breakpoints from '../../helpers/breakpoints';
import { windowWidth } from '../../helpers/sizeWindow';

$(document).ready(() => {
  if (windowWidth() > breakpoints.phoneLarge) {
    const optionThumbs = {
      touchEventsTarget: 'slider-product__container',
      containerModifierClass: 'slider-product__container-',
      wrapperClass: 'slider-product__wrapper',
      slideClass: 'slider-product__thumbs-slide',
      slidesPerView: 'auto',
      spaceBetween: 8,
      centerInsufficientSlides: true,
      roundLengths: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    };

    const galleryThumbs = new Swiper('.js-slider-product__container', optionThumbs);

    const optionTop = {
      roundLengths: true,
      touchEventsTarget: 'slider-product__top',
      containerModifierClass: 'slider-product__top-',
      spaceBetween: 8,
      thumbs: {
        swiper: galleryThumbs,
      },
    };

    const galleryTop = new Swiper('.js-slider-product__top', optionTop);
  } else {
    const optionTop = {
      loop: true,
      roundLengths: true,
      touchEventsTarget: 'slider-product__top',
      containerModifierClass: 'slider-product__top-',
      spaceBetween: 8,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: '.js-slider-pagination',
        type: 'bullets',
      },
    };

    const galleryTop = new Swiper('.js-slider-product__top', optionTop);
  }
});

const $slideFirst = $('.js-slider-product__slide:first-child');
const $dataFirst = $slideFirst.attr('data-href');
const $slideAll = $('.js-slider-product__slide');

/**
 * add background-image in .body__bg
 */
if (windowWidth() > breakpoints.tabletLandscape) {
  $('.js-slider-product__bg').css('background-image', `url(${$dataFirst})`);
  $slideFirst.css('background-image', `url(${$dataFirst})`);
}

/**
 * add background-image in .slider-product__slide
 */
$.each($slideAll, (_i, el) => {
  const $dataAll = $(el).attr('data-href');
  $(el).css('background-image', `url(${$dataAll})`);
});

