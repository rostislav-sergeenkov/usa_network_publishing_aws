// FLEXSLIDER for homepage
(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {
      $mainslider = $('#main-slider');
      $secondaryslider = $('.secondary-slider');

      $mainslider.flexslider({
        animation: 'slide',
        controlNav: true,
        directionNav: (!Modernizr.touch),
        slideshow: false,
        before: function(slider) {
          var target = slider.animatingTo,
            currentSlide = slider.currentSlide;
            $secondaryslider.each(function (index, element) {
            var flexslider = $(element).data('flexslider');
            // Setting the animation direction of the secondary slider to be the 
            // same as the primary slider.
            // but ONLY if we have more than one liabilities// else the main slider breaks
            if ($(this).find('li').length > 1) {
              flexslider.direction = slider.direction;
              flexslider.flexAnimate(target, true);
            }
          });
        }
      });
      $secondaryslider.flexslider({
        animation: 'slide',
        controlNav: false,
        directionNav: false,
        slideshow: false,
        touch: false
      });
    },
  };

}(jQuery));
