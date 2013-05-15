
// using fred carousel
(function ($) {

  Drupal.behaviors.flex_carousel = {
    attach: function (context, settings) {


       $( "#cast-carousel li" ).each(function( index ) {
          $(this).attr('data-flexindex',index);
        });
        var moveTo = $('#cast-carousel li.active').attr('data-flexindex');
        $('<div class="carousel-btns"><div class="prev btns">Previous</div><div class="next btns">Next</div></div>').appendTo('#cast-carousel .view-content');
        function create_cast_carousel() {
          $(".view-usa-cast ul").addClass('slides').carouFredSel({
            auto: false,
            circular: false,
            //infinite: false,
            items       : {
              //visible: 5,
              start       : parseInt(moveTo),
              },
            prev : {
              button: '.prev'
            },
            next :  {
              button : '.next'
            },
            swipe       : {
                onTouch     : true,
                onMouse     : true
              },
            }, {
            transition: true,
            wrapper     : {
                classname       : "cast-carousel carousel"
              },
          });
        }

        $(window).resize(function(){
          create_cast_carousel();
        });

    },

  };


}(jQuery));
