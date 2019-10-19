$(document).ready(() => {
  // is moving label
  const inputForm = $('.form-control');

  inputForm.on('blur', function onBlur() {
    if ($(this).val()) {
      $(this).parent().addClass('is-used');
    } else {
      $(this).parent().removeClass('is-used');
    }
  });

  inputForm.on('focus', function onFocus() {
    $(this).parent().addClass('is-used');
  });

  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  });
});

