
// using fred carousel
(function ($) {

  Drupal.behaviors.flex_carousel = {
    attach: function (context, settings) {

    
       $( ".view-usa-cast li" ).each(function( index ) {
          $(this).attr('data-flexindex',index);
        });
        var moveTo = $('.view-usa-cast li.active').attr('data-flexindex');

        $('<div class="prev btns">Prev</div><div class="next btns">Next</div>').appendTo('.view-usa-cast .view-content');

        $(".view-usa-cast ul").addClass('slides').carouFredSel({
          auto: false,
          circular: false,
          infinite: false,
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
              classname       : "cast-carousel carousel"
            },
        });

        //console.log(moveTo);


    },

  };


}(jQuery));
