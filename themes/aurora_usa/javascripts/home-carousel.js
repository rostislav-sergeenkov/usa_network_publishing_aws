// using fred carousel
(function ($) {
  Drupal.behaviors.Homecarousel = {
    attach: function (context, settings) {
      $('<div class="carousel-btns"><div class="prev btns">Previous</div><div class="next btns">Next</div></div>').appendTo('.usa-home-featured');
      function create_home_carousel() {
        $(".field-name-field-hp-promos").addClass('slides').carouFredSel({
          auto: false,
          circular: false,
          //infinite: false,
          items : {
            //visible: 5,
            //  start       : parseInt(moveTo),
            },
          prev: '.prev',
          next: '.next',
          swipe: {
            onTouch: true,
            onMouse: true
          },
          }, {
          wrapper: {
            classname: "home-carousel carousel"
          },
        });
      }


      function homepg_carousel_width() {
        $carousel = $('.featured-carousel');
        if($carousel.css('width') <= '615px' && $carousel.css('width') >= '200px') {
          $carousel.find('.carousel').css('width','auto');
        } else if ($carousel.css('max-width') == '1260px') {
          $carousel.find('.carousel').css('width','1260px');
        } else if ($carousel.css('max-width') == '944px') {
          $carousel.find('.carousel').css('width','944px');
        }
      }


      window.onload = function() {
        create_home_carousel();
        homepg_carousel_width();      
      };

      
      $(window).resize(function(){
        create_home_carousel();
        homepg_carousel_width(); 
      });
    },
  };
}(jQuery));
