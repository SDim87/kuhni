const title = $('.js-card__title');
const MAX_HEIGHT = 69;
const MIN_MARGIN = 32;

$.each(title, (_i, el) => {
  const titleHeight = $(el).height();

  if (titleHeight < MAX_HEIGHT) {
    $(el).css('margin-bottom', MIN_MARGIN + (MAX_HEIGHT - titleHeight));
  }
});
