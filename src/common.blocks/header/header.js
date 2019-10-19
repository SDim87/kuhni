const $header = $('.js-header');
const $burgerBtn = $('.js-header__btn');
const $menu = $('.js-header__menu');
const $main = $('.js-header__main');
const $icons = $('.js-header__btn > .icon');
const $span = $('.js-header__btn > span');
const $logo = $('.js-header__logo > .image_logo');
const $logoWhite = $('.js-header__logo > .image_logo_white');
const modOpened = 'is-opened';
const modPadded = 'is-padded';
const OFFSET = 200;

// open menu
$burgerBtn.click((e) => {
  e.preventDefault();
  $menu.fadeToggle(300);
  $burgerBtn.toggleClass(modOpened);
  $icons.toggleClass(modOpened);
  $span.toggleClass(modOpened);
  $header.toggleClass(modOpened);
  $logo.toggleClass(modOpened);

  if ($header.hasClass('is-fixed')) {
    $('.js-header__logo > .icon_logo_nav').toggle();
  } else {
    $main.toggleClass(modPadded);
  }
});

// header sticky
$(document).ready(() => {
  let previousScroll = 0;
  const headerHeight = $header.outerHeight(true);

  $(window).scroll(function scrolling() {
    if (!$burgerBtn.hasClass(modOpened)) {
      const currentScroll = $(this).scrollTop();

      // console.log(`${currentScroll} and ${previousScroll} and ${headerHeight}`);

      if (currentScroll > headerHeight + OFFSET) {
        if (currentScroll > previousScroll) {
          $header.addClass('is-fixed');
          $header.removeClass('is-show');
          $main.addClass(modPadded);
        } else {
          $header.addClass('is-show');
          $header.addClass('is-transition');
          $logo.hide();
          $logoWhite.show();
        }
      } else {
        $header.removeClass('is-fixed');
        $header.removeClass('is-transition');
        $header.removeClass('is-show');
        $main.removeClass(modPadded);
        $logo.show();
        $logoWhite.hide();
      }
      previousScroll = currentScroll;
    }
  });
});
