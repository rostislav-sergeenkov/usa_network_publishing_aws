// FLEXSLIDER FOR MEDIA GALLERIES
(function ($) {
  Drupal.behaviors.flexslidergallery = {
    attach: function (context, settings) {
      $('.media-gallery').once('mediagallery', function() {
        $slideshow_selector = $('.field-name-field-media-items');
        $counter_selector = $('.media-gallery .navigation-counter').append('<div class="counter"></div>').find('.counter');
        $count = $slideshow_selector.find('li').length;
        var $current = 0;

        var hash = window.location.hash;
        if (hash) {
          $current = /\d+/.exec(hash)[0];
          $current = (parseInt($current) || 1) - 1;
        }

        $slideshow_selector
          .addClass('slides')
          .wrap('<div class="flexslider"></div>')
          .parent()
          .flexslider({
            startAt: $current,
            animation: "slide",
            useCSS: true,
            touch: true,
            smoothHeight: false,
            slideshow: false,
            start: function(slider){
              update_counter(slider);
              update_caption(slider);
              update_gigya_sharebar(slider);
            },
            after: function(slider){
              update_counter(slider);
              update_caption(slider);
              update_gigya_sharebar(slider);
              update_ads_and_omniture();
            }
          });
        function update_counter(slider) {
          $current = slider.currentSlide + 1;
          $counter_output = $current + " of " + $count;
          $counter_selector.html($counter_output);
        }
        function update_ads_and_omniture() {
          clearTimeout(usa_adRefreshTO);
          usa_refreshBannerAd();
        }
        function update_caption(slider){
          var $currentCaption = slider.find('.flex-active-slide .field-name-field-caption').html();
          slider.parents('.media-gallery').find('.gallery-image-caption').html($currentCaption);
        }
        function update_gigya_sharebar(slider) {
          if (typeof Drupal.gigya != 'undefined') {
            var $sharebar = slider.parents('.media-gallery').find('.field-name-field-gigya-share-bar > div');
            if ($sharebar.length > 0) {
              var $currentDescription = slider.find('.flex-active-slide .field-name-field-caption').text();
              if ($currentDescription == '' && $('meta[property="og:description"]').length > 0) {
                $currentDescription = $('meta[property="og:description"]').attr('content');
              }
              var $currentImage = slider.find('.flex-active-slide .file-image img');
              $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
                if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
                  var url = window.location.href.split('#')[0];
                  sharebar.gigyaSharebar.ua.linkBack = url + '#' + (slider.currentSlide + 1);
                  sharebar.gigyaSharebar.ua.imageBhev = 'url';
                  sharebar.gigyaSharebar.ua.imageUrl = $currentImage.attr('data-src-share') ? $currentImage.attr('data-src-share') : $currentImage.attr('src');
                  sharebar.gigyaSharebar.ua.description = $currentDescription;
                  Drupal.gigya.showSharebar(sharebar);
                }
              });
            }
          }
        }
      });
    }
  };

}(jQuery));
