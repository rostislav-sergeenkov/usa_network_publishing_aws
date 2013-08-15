// FLEXSLIDER for show aspot
(function ($) {
  Drupal.behaviors.showAspot = {
    attach: function (context, settings) {

      $('body').once('showFlexslider', function() { 
        $slideshow_selector = $('#show-aspot ul');

        $slideshow = (settings.showAspot.slideshow !== null)? settings.showAspot.slideshow : false;
        $slideshowSpeed = (settings.showAspot.slideshowSpeed !== null)? settings.showAspot.slideshowSpeed : 7000;

        $slideshow_selector
          .addClass('slides')
          .wrap('<div class="flexslider a-spot"></div>')
          .parent()
          .flexslider({
            slideshow: $slideshow,
            slideshowSpeed: $slideshowSpeed,
            pauseOnHover: true,
            animation: 'slide',
            controlNav: true,
            directionNav: (!Modernizr.touch)
          });   
       });  


    },
  };

}(jQuery));
