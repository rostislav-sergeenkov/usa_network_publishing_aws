(function($) {
  Drupal.behaviors.microsite_gallery_carousel = {
    updateGigyaSharebarOmniture: function($slider) {
      if (typeof Drupal.gigya != 'undefined') {
        var slider = $slider.data('flexslider');
        currentSlide = slider.currentSlide + 1;
        var $sharebar = $slider.parents('.microsite-section-container').find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {
          var $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h2').text();
          var $currentImage = $slider.find('.flex-active-slide .file-image img');
          var $currentCaption = $slider.find('.flex-active-slide .field-name-field-caption p').text();

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
            description: $currentCaption,
            imageBhev: "url",
            imageUrl: $currentImage.attr('src'),
            linkBack: url, // + '#' + currentSlide, // @TODO: add the gallery name and possibly the photo number to the url
            title: $title
          }
          Drupal.gigya.showSharebar(sharebar);

          // omniture
          var siteName = Drupal.settings.microsites_settings.title,
              basePath = Drupal.settings.microsites_settings.base_path,
              basePageName = siteName + ' | USA Network';

          s.prop3 = 'Gallery';
          s.prop4 = siteName + ' : Gallery';
          s.prop5 = siteName + ' : Gallery : ' + $title;
          s.pageName = s.prop5 + ' : Photo ' + currentSlide;
          document.title = $title + ' | Galleries | ' + basePageName;
          if (typeof s_gi != 'undefined') {
            void (s.t());
          }
        }
      }
    },
    refreshBannerAd: function() {
      jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src'));
      jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src'));
    },
    attach: function(settings, context) {
      $('.microsite-gallery .flexslider').once('gallery_carousel', function() {
        $(this).on('start', function() {
          var $slider = $(this);
          Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
        });
        $(this).on('after', function() {
          var $slider = $(this);
          Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
          Drupal.behaviors.microsite_gallery_carousel.refreshBannerAd();
        });
      });
    }
  };
})(jQuery);
