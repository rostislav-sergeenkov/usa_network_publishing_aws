(function($) {
  Drupal.behaviors.microsite_gallery_carousel = {
    updateGigyaSharebarOmniture: function($slider, initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      if (typeof Drupal.gigya != 'undefined') {
        var slider = $slider.data('flexslider');
        currentSlide = slider.currentSlide + 1;
        var $sharebar = $slider.parents('.microsite-section-container').find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {
          var $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h2').text();
          if ($title == '') $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h1').text();
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
          if (!initialPageLoad) {
            var siteName = Drupal.settings.microsites_settings.title,
                basePath = Drupal.settings.microsites_settings.base_path,
                basePageName = siteName + ' | USA Network';

            s.prop3 = 'Gallery';
            s.prop4 = siteName + ' : Gallery';
            s.prop5 = siteName + ' : Gallery : ' + $title;
            s.pageName = s.prop5 + ' : Photo ' + currentSlide;
            document.title = $title + ' | Gallery | ' + basePageName;
            if (typeof s_gi != 'undefined') {
              void (s.t());
            }
          }
        }
      }
    },
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
    refreshBannerAd: function() {
      jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src'));
      jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src'));
    },
    changeGalleryDescription: function (current_gallery){
      var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
      current_gallery.find('.description-block').html(current_description);
    },
    attach: function(settings, context) {
      // check to make sure there's a galleries section
      if ($('#microsite #galleries').length > 0) {
        $('.microsite-gallery .flexslider').once('microsite-gallery-carousel', function() {
          $(this).on('start', function() {
            var $slider = $(this);
            Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider, 1);
            var current_gallery = $slider.closest('.microsite-gallery');
            var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
            if (current_description) {
              current_gallery.find('.description-block').html(current_description);
            }
            $slider.append('<div class="counter"></div>');
            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);
          });
          $(this).on('after', function() {
            var $slider = $(this);
            Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
            Drupal.behaviors.microsite_gallery_carousel.refreshBannerAd();
            Drupal.behaviors.microsite_gallery_carousel.changeGalleryDescription($slider.closest('.microsite-gallery'));
            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);
          });
        });
        $(window).bind('resize', function () {
          setTimeout(function() {
            if ($(".gig-simpleShareUI").length > 0) {
              var current_offset = $(".microsite-gallery").offset()['left'] + $(".microsite-gallery").width() - $(".gig-simpleShareUI").width();
              $(".gig-simpleShareUI").css('left', current_offset);
            }
          }, 50);
        });
      }
    }
  };
})(jQuery);
