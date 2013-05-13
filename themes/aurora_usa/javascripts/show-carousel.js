
// using fred carousel
(function ($) {

  Drupal.behaviors.flex_carousel = {
    attach: function (context, settings) {


       $( ".view-usa-shows li" ).each(function( index ) {
          $(this).attr('data-flexindex',index);
        });
        var moveTo = $('.view-usa-shows li.active').attr('data-flexindex');

        $('<div class="prev btns">Prev</div><div class="next btns">Next</div>').appendTo('.view-usa-shows .view-content');

        $(".view-usa-shows ul").addClass('slides').carouFredSel({
          auto: false,
          circular: false,
          //infinite: false,
          items       : {
            visible: 5,
            start       : parseInt(moveTo),
            },
          prev : '.prev',
          next    : '.next',
          swipe       : {
              onTouch     : true,
              onMouse     : true
            },
          }, {
          wrapper     : {
              classname       : "show-carousel carousel"
            },
        });

    },

  };


}(jQuery));
