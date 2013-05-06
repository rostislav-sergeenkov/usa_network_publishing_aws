
// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.flex_carousel = {
    attach: function (context, settings) {

      $('.view-usa-cast .item-list ul')
        .addClass('slides')
        .wrap('<div id="cast-carousel" class="flexslider"></div>')
        .parent()
        .flexslider({
        	animation: "slide",
          animationLoop: false,
          slideshow: false,
          controlNav: false,
          slideshow: false,
          itemWidth: 236,
          move: 1,
          //maxItems : 5,
          //move: 0,
          //startAt : 0, 
          start: function(slider) {
            $('.slides').hide();
            $( ".slides li" ).each(function( index ) {
              $(this).attr('flexindex',index);
            });
            moveTo = $('.slides li.active').attr('flexindex');
            slider.flexAnimate(moveTo);
            $('.slides').show();
          },

      });
    },
  };

}(jQuery));
