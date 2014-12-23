(function ($) {
  Drupal.behaviors.full_episodes = {
    attach: function (context, settings) {

      if ($('body').hasClass('page-videos') && window.innerWidth < 481) {
        $('.carousel-right').addClass('carousel-left').removeClass('carousel-right').removeAttr('dir');
      }

      $('.page-videos .sign-in-link').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.tab-item.log-in').removeClass('active');
        } else {
          $(this).addClass('active');
          $('.tab-item.log-in').addClass('active');
        }
      });

      // TODO: spoilers active for shows carousels
      $('.page-videos .carousel-wrapper .carousel-description-item .title')
          .click(function (e) {
            if (!$(this).closest('.carousel-block').hasClass('active')) {
              $('.full-episodes-page .carousel-wrapper .carousel-block').removeClass('active');
              $(this).closest('.carousel-block').addClass('active');
            } else {
              $(this).closest('.carousel-block').removeClass('active');
            }
          }
      );

      $(window).bind('resize', function () {

        if (window.innerWidth >= 481){
          $('.page-videos .carousel-block-right .carousel-left').each(function (){
            var $container = $(this),
                $carousel = $container.find('ul').eq(0);

            $container.jcarousel('destroy').addClass('carousel-right').attr('dir', 'rtl').removeClass('carousel-left');
          });
        } else {
          $('.page-videos .carousel-block-right .carousel-right').each(function (){
            var $container = $(this),
                $carousel = $container.find('ul').eq(0);

            $container.jcarousel('destroy').addClass('carousel-left').removeAttr('dir').removeClass('carousel-right');
          });
        }

      });

    }
  };

}(jQuery));
