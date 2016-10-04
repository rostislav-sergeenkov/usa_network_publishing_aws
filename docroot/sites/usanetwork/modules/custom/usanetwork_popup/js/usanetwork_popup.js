(function ($) {

  Drupal.behaviors.usanetwork_popup = {
    attach: function (context, settings) {
      $('.usa-home-popup-overlay').click(function(e){
        $('.usa-home-popup-overlay').remove();
      })
    }
  }

}(jQuery));
