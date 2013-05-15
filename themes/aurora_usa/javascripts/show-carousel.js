// using fred carousel
(function ($) {
  Drupal.behaviors.flex_carousel = {
    attach: function (context, settings) {
       $( ".view-usa-shows.view-display-id-block_1 li" ).each(function( index ) {
          $(this).attr('data-flexindex', index);
        });
        var moveTo = $('.view-usa-shows.view-display-id-block_1 li.active').attr('data-flexindex');
        $('<div class="carousel-btns"><div class="prev btns">Previous</div><div class="next btns">Next</div></div>').appendTo('.view-usa-shows .view-content');
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

        $(window).resize(function(){
          create_show_carousel();
        });
    },
  };
}(jQuery));
