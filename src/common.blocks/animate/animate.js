const title = $('.js-animate__title');
const banner = $('.js-animate__banner-right');
const bannerContent = $('.js-animate__banner-content');
const preloader = $('.preloader');
let onLoad = false;

$(window).on('load', () => {
  onLoad = true;
});

preloader.on('animationend webkitAnimationEnd oAnimationEnd', (evt) => {
  const nameAnimate = evt.originalEvent.animationName;
  const lastNameAnimate = 'open-icon';

  if (nameAnimate === lastNameAnimate && onLoad) {
    preloader.css('animation', 'close-block 1s ease-in-out forwards');
    title.addClass('is-opened');
    banner.addClass('is-opened');
    bannerContent.addClass('is-opened');

    setTimeout(() => {
      preloader.remove();
    }, 1200);
  }
});
