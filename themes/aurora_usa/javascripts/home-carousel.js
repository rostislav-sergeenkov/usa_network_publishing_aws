// using fred carousel
(function ($) {
  Drupal.behaviors.home_carousel = {
    initCarousel: function() {
      $('.home-carousel-processed').each(function() {
        var $self = $(this);
        $self.find('.carousel-btns').remove();
        $self.removeClass('home-carousel-processed');
      });
      $('.carousel').each(function() {
        $(this).once('home-carousel', function() {
          var $container = $(this);
          // append controls
          $('<div class="carousel-btns"><div class="prev btns">Previous</div><div class="next btns">Next</div></div>').appendTo($container);

          // init carousel
          var $carousel = $container.find('ul').eq(0);
          $carousel.carouFredSel({
              auto: false,
              circular: false,
              infinite: false,
              align: 'left',
              prev: '.prev',
              next: '.next',
              swipe: {
                onTouch: true,
                onMouse: true
              }
            },
            {
              wrapper: {
                classname: "home-carousel"
              }
            });
        });
      });
    },
    attach: function (context, settings) {
      Drupal.behaviors.home_carousel.initCarousel();

      var doit;
      $(window).resize(function() {
        if (doit == null) {
          doit = setTimeout(function() {
            Drupal.behaviors.home_carousel.initCarousel();
            clearTimeout(doit);
            doit = null
          }, 50);
        }
      });
    }
  };
}(jQuery));
