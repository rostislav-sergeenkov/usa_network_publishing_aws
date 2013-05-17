
(function ($) {
  Drupal.behaviors.follow_social_toggle = {
    attach: function (context, settings) {
      $('.view-display-id-attachment_1 .view-header').click(function() {
        $( ".view-display-id-attachment_1 .view-content" ).toggle();
     });
    },
  };
}(jQuery));
