// using fred carousel
(function ($) {
  Drupal.behaviors.show_carousel = {
    attach: function (context, settings) {
      
      $(window).load(function () {

        // Click to close button when show-info-block open
        $('.close-button').click(function() {
          var item = $(this).closest('li');

          Drupal.behaviors.global_carousels.showClose(item);
        });

        // Click to link when show-info-block open
        $('.show-carousel .show-info-block > div a').click(function() {
          window.location = this.href;
        });

      });

    }
  };
}(jQuery));
