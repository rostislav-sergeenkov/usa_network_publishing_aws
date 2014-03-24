// FLEXSLIDER FOR MEDIA GALLERIES
(function ($) {
  Drupal.behaviors.flexslidergallery = {
    attach: function (context, settings) {
      $('.media-gallery').once('mediagallery', function() {
        $slideshow_selector = $('.field-name-field-media-items');
        $counter_selector = $('.media-gallery .navigation-counter').append('<div class="counter"></div>').find('.counter');
        $count = $slideshow_selector.find('li').length;
        $counter = 1;
        $current = $counter;
        $slideshow_selector
          .addClass('slides')
          .wrap('<div class="flexslider"></div>')
          .parent()
          .flexslider({
            animation: "slide",
            useCSS: true,
            touch: true,
            smoothHeight: false,
            slideshow: false,
            start: function(slider){
              update_counter(slider);
              update_caption();
            },
            after: function(slider){
              update_counter(slider);
              update_caption();
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
        function update_caption(){
          $currentCaption = $('.flexslider .flex-active-slide .field-name-field-caption').html();
          $('.media-gallery .gallery-image-caption').html($currentCaption);
        }
      });

    },
  };

}(jQuery));
