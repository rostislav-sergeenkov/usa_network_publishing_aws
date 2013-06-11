// hide title when actor field is populated
(function ($) {
  Drupal.behaviors.social_character = {
    attach: function (context, settings) {
      $('.social-follow-block .field-name-field-usa-actor-name').parent().find('.field-name-title').css('display', 'none');
    },
  };
}(jQuery));
