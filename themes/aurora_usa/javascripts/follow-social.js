
(function ($) {
  Drupal.behaviors.follow_social_toggle = {
    attach: function (context, settings) {
      $('.attachment-after .view-usa-shows.view-display-id-attachment_1 .view-footer').click(function() {
        $( '.attachment-after .view-usa-shows.view-display-id-attachment_1 .view-content' ).toggle();
     });
    },
  };
}(jQuery));
