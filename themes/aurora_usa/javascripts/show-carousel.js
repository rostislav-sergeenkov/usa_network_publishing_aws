// using fred carousel
(function ($) {
  Drupal.behaviors.show_carousel = {
    attach: function (context, settings) {
       $( ".view-usa-shows.view-display-id-block_1 li" ).each(function( index ) {
          $(this).attr('data-flexindex', index);
        });
        var moveTo = $('.view-usa-shows.view-display-id-block_1 li.active').attr('data-flexindex');
        $('<div class="carousel-btns"><div class="prev btns icon-arrow2-left">Previous</div><div class="next btns icon-arrow2">Next</div></div>').appendTo('.view-usa-shows.view-display-id-block_1 .view-content');
        function create_show_carousel() {
          $(".view-usa-shows.view-display-id-block_1 ul").addClass('slides').carouFredSel({
            auto: false,
            circular: false,
            //infinite: false,
            items       : {
              //visible: 5,
              start       : parseInt(moveTo),
              },
            prev: '.prev',
            next: '.next',
            swipe: {
                onTouch: true,
                onMouse: true
              },
            }, {
            wrapper: {
                classname: "show-carousel carousel"
              },
          });
        }

        window.onload = function() {
           create_show_carousel();
        };

        $(window).resize(function(){
           create_show_carousel();
        });

    },
  };
}(jQuery));
