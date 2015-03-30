
// using fred carousel
(function ($) {

  Drupal.behaviors.cast_carousel = {
    attach: function (context, settings) {


       $( "#cast-carousel li" ).each(function( index ) {
          $(this).attr('data-flexindex',index);
        });
        var moveTo = $('#cast-carousel li.active').attr('data-flexindex');
        $('<div class="carousel-btns"><div class="prev btns icon-arrow2-left">Previous</div><div class="next btns icon-arrow2">Next</div></div>').appendTo('#cast-carousel .view-content');
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

        function cast_carousel_width() {
          $carousel = $('#cast-carousel .view-content');
          if($carousel.css('width') == '300px') {
            $carousel.find('.cast-carousel').css('width','auto').css('left','20px');
          } 
        }

        window.onload = function() {
           create_cast_carousel();
           cast_carousel_width();
        };

        $(window).resize(function(){
          create_cast_carousel();
          cast_carousel_width();
        });

    },

  };


}(jQuery));
