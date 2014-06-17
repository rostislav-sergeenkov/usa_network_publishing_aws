(function($) {
  Drupal.behaviors.usanetwork_gallery_content = {
    attach: function(settings, context) {
      $('.view-mode-inline_content .flexslider').once('ads-reload', function() {
        $(this).on('after', function() {
          if (typeof usa_refreshBannerAd != 'undefined') {
            usa_refreshBannerAd(); // refresh ads on slides change
          }
        });
      });
    }
  };
})(jQuery);