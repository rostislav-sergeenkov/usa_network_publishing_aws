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

      $(window).resize(function(){
        create_home_carousel();
      });
    },
  };
}(jQuery));
