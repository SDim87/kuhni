const table = $('.user-content > table');
const wrapper = $('<div class="is-wrap"></div>');

// wrapping tables in .user-content and adds scroll-X block
if (table.length > 1) {
  $.each(table, (_i, el) => {
    $(el).wrap(wrapper);
  });
} else {
  table.wrap(wrapper);
}
