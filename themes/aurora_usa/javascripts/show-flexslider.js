// FLEXSLIDER for show aspot
// @TODO generate the markup and styles we need for this to function
(function ($) {
  Drupal.behaviors.showAspot = {
    attach: function (context, settings) {
      $slideshow_selector = $('#show-aspot');
      $slideshow_selector
        //.addClass('slides')
        .wrap('<div class="flexslider"></div>')
        //.parent()
        .flexslider({
          slideshow: false,
          animation: 'slide',
          controlNav: true,
          directionNav: (!Modernizr.touch),
          //useCSS: true,
          //touch: true,
          //smoothHeight: false
        before: function(slider) {
          var target = slider.animatingTo,
            currentSlide = slider.currentSlide;
        });
    },
  };

}(jQuery));
