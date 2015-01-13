// using fred carousel
(function ($) {
  Drupal.behaviors.home_carousel = {
    attach: function (context, settings) {
      //Drupal.behaviors.home_carousel.initCarousel();
      // init carousel
      var $container = $('.usa-microsite-featured');
      var $carousel = $container.find('ul').eq(0);
      $carousel.carouFredSel({
          auto: false,
          circular: false,
          infinite: false,
          align: 'left',
          prev: $container.find('.carousel-btns .prev'),
          next: $container.find('.carousel-btns .next'),
          swipe: {
            onTouch: true,
            onMouse: true
          }
        },
        {
          wrapper: {
            classname: "microsite-carousel"
          }
        });
    }
  };

}(jQuery));
