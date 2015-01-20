(function($) {
  Drupal.behaviors.microsite_gallery_carousel = {
    updateGigyaSharebar: function($slider) {
      if (typeof Drupal.gigya != 'undefined') {
        var slider = $slider.data('flexslider');
        currentSlide = slider.currentSlide + 1;
        var $sharebar = $slider.parents('.microsite-section-container').find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {
          var $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h2').text();
          var $currentDescription = document.title;
          var $currentImage = $slider.find('.flex-active-slide .file-image img');
          
          sharebar = new Object();
          sharebar.gigyaSharebar = {
            containerID: "gigya-share",
            iconsOnly: true,
            layout: "horizontal",
            shareButtons: "facebook, twitter, tumblr, pinterest, share",
            shortURLs: "never",
            showCounts: "none"
          }
       
          var url = window.location.href.split('#')[0];
          sharebar.gigyaSharebar.ua = {
            description: $currentDescription,
            imageBhev: "url",
            imageUrl: $currentImage.attr('src'),
            linkBack: url + '#' + currentSlide,
            title: $title
          }
          Drupal.gigya.showSharebar(sharebar);
        } 
      }
    },
    refreshBannerAd: function() {
      jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src'));
      jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src'));
      // omniture
      if (typeof s_gi != 'undefined') {
        void (s.t());
      }
    },
    attach: function(settings, context) {
      $('.microsite-gallery .flexslider').once('gallery_carousel', function() {
        $(this).on('start', function() {
          var $slider = $(this);
          Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebar($slider);
        });
        $(this).on('after', function() {
          var $slider = $(this);
          Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebar($slider);
          Drupal.behaviors.microsite_gallery_carousel.refreshBannerAd();
        });
      });
    }
  };
})(jQuery);
