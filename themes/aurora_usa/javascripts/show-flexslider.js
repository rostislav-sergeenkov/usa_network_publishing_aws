// FLEXSLIDER for show aspot
// @TODO generate the markup and styles we need for this to function
(function ($) {
  Drupal.behaviors.showAspot = {
    attach: function (context, settings) {
      $slideshow_selector = $('#show-aspot ul');
      $slideshow_selector
        .addClass('slides')
        .wrap('<div class="flexslider a-spot"></div>')
        .parent()
        .flexslider({
          slideshow: false,
          animation: 'slide',
          controlNav: true,
          directionNav: (!Modernizr.touch),
          //useCSS: true,
          //touch: true,
          //smoothHeight: false
        });
    },
  };

}(jQuery));
