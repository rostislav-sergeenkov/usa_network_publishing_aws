// using fred carousel
(function ($) {
  Drupal.behaviors.show_carousel = {
    attach: function (context, settings) {

      //move blocks in show-info-block in inner carousel
      function innerCarouselMoving() {
        $('.show-carousel .show-info-block').each(function() {
          if ( window.innerWidth < window_size_desktop && !$(this).hasClass('tablet') ) {
            $('<li class="social-item"></li>').appendTo($(this).find('.inner-carousel ul'));
            $(this).find('.show-central-info .social .node').appendTo($(this).find('.inner-carousel ul .social-item'));
            $(this).addClass('tablet');
          }
          else if (window.innerWidth >= window_size_desktop && $(this).hasClass('tablet') ) {
            $(this).find('.inner-carousel ul .social-item .node').appendTo($(this).find('.show-central-info .social'));
            $(this).find('.inner-carousel ul .social-item').remove();
            $(this).removeClass('tablet');
          }
          if (window.innerWidth < window_size_tablet_portrait && !$(this).hasClass('mobile') ) {
            $('<li class="last-full-video"></li>').prependTo($(this).find('.inner-carousel ul'));
            $(this).find('.show-central-info .promo .node').appendTo($(this).find('.inner-carousel ul .last-full-video'));
            $(this).addClass('mobile');
          }
          else if (window.innerWidth >= window_size_tablet_portrait && $(this).hasClass('mobile') ) {
            $(this).find('.inner-carousel ul .last-full-video .node').appendTo($(this).find('.show-central-info .promo'));
            $(this).find('.inner-carousel ul .last-full-video').remove();
            $(this).removeClass('mobile');
          }
        });
      }

      innerCarouselMoving();

      $(window).bind('resize', function () {
        $('.show-carousel li.active').each(function (){
          var mobile = false;

          Drupal.behaviors.global_carousels.showClose($(this), mobile);
        });

        innerCarouselMoving();

      });

      $(window).load(function () {

        // Click to close button when show-info-block open
        $('.close-button').click(function() {
          var item = $(this).closest('li');

          Drupal.behaviors.global_carousels.showClose(item);
        });

        // Click to link when show-info-block open
        $('.show-carousel .show-info-block > div a').click(function() {
          window.location = this.href;
        });

      });

    }
  };
}(jQuery));
