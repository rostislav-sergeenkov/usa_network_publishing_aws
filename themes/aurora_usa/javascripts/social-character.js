// hide title when actor field is populated
(function ($) {
  Drupal.behaviors.social_character = {
    attach: function (context, settings) {
      $('#block-views-usa-cast-block-2 .field-name-field-usa-actor-name').parent().find('.field-name-title').css('display', 'none');
    },
  };
}(jQuery));
