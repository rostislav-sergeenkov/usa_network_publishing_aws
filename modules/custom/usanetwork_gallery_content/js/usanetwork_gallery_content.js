(function($) {
  Drupal.behaviors.usanetwork_gallery_content = {
    updateCounter: function($slider) {
      var slider = $slider.data('flexslider');
      var $counter = $slider.children('.counter');
      if (slider) {
        var current = slider.currentSlide + 1;
        var total = slider.slides.length;
        $counter.html(Drupal.t('!current of !total', {
          '!current' : current,
          '!total' : total
        }));
      }
    },
    attach: function(settings, context) {
      $('.view-mode-inline_content .flexslider').once('gallery-content', function() {
        $(this).on('start', function() {
          var $slider = $(this);
          // init counter
          $slider.append('<div class="counter"></div>');
          Drupal.behaviors.usanetwork_gallery_content.updateCounter($slider);
        });
        $(this).on('after', function() {
          var $slider = $(this);
          Drupal.behaviors.usanetwork_gallery_content.updateCounter($slider);
          if (typeof usa_refreshBannerAd != 'undefined') {
            usa_refreshBannerAd(); // refresh ads on slides change
          }
        });
      });
    }
  };
})(jQuery);