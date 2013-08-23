// FLEXSLIDER FOR MEDIA GALLERIES
(function ($) {
  Drupal.behaviors.flexslidergallery = {
    attach: function (context, settings) {
      $('.media-gallery').once('mediagallery', function() {
        $slideshow_selector = $('.field-name-field-media-items');
        $counter_selector = $('.slide-meta h1').after('<span class="counter"></span>').siblings('.counter');
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
            },
            after: function(slider){
              update_counter(slider);
            }
          });
        function update_counter(slider) {
          $current = slider.currentSlide + 1;
          $counter_output = $current + "/" + $count;
          $counter_selector.html($counter_output);
        }
      });

    },
  };

}(jQuery));
