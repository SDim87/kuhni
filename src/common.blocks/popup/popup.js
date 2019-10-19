$(document).ready(() => {
  $('.js-button_popup-form').magnificPopup({
    type: 'inline',
    src: '#popup-form',
    removalDelay: 200, // delay removal by X to allow out-animation
    closeBtnInside: true,
    fixedContentPos: true,
    midClick: true,
    callbacks: {
      beforeOpen() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });
});
