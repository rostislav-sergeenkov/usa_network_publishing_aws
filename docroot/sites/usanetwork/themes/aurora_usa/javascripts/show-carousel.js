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

      if (window.innerWidth < window_size_tablet_portrait){
        $('.show-carousel').addClass('destroy');
        $('.show-carousel > ul > li:gt(2)').addClass('hidden');
      }

      $(window).bind('resize', function () {
        $('.show-carousel li.active').each(function (){
          var mobile = false;

          if (window.innerWidth < window_size_tablet_portrait) {
            mobile = true;
          }

          showClose($(this), mobile);
        });

        if (window.innerWidth >= window_size_tablet_portrait){
          if ($('.show-carousel').hasClass('destroy')) {
            $('.show-carousel').removeClass('destroy');
            $('.show-carousel > ul > li').removeClass('hidden');
            $('.shows-block a.more').removeClass('hidden');
          }
        } else {
          if (!$('.show-carousel').hasClass('destroy')) {
            $('.show-carousel').jcarousel('destroy');
            $('.show-carousel').addClass('destroy');
            $('.show-carousel > ul > li:gt(2)').addClass('hidden');
          }
        }

        innerCarouselMoving();

      });

      $(window).load(function () {
        //!!!!!!
        if (window.innerWidth < window_size_tablet_portrait) {
          $('.show-open').click(function (e) {
            e.preventDefault();

            if (!$(this).closest('li').hasClass('active')) {
              showOpen($(this).closest('li'), true);
            } else {
              showClose($(this).closest('li'), true);
            }

          });
        }

        // Show carousel more-button click
        $('.shows-block a.more').click(function(e) {

          var index = $(".show-carousel > ul > li.hidden").index() + 3;

          e.preventDefault();
          $('.show-carousel > ul > li:lt('+ index + ')').removeClass('hidden');
          index = $(".show-carousel > ul > li.hidden").index();

          if (index == -1) {
            $('.shows-block a.more').addClass('hidden');
          }
        });

        // Click to close button when show-info-block open
        $('.show-info-block .close-button').click(function() {
          var item = $(this).closest('li');

          showClose(item);
        });

        // Click to link when show-info-block open
        $('.show-carousel .show-info-block > div a').click(function() {
          window.location = this.href;
        });

      });

    }
  };
}(jQuery));
