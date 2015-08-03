(function ($) {
  Drupal.behaviors.full_episodes = {
    attach: function (context, settings) {

      if ($('body').hasClass('page-videos') && window.innerWidth < window_size_mobile) {
        $('.carousel-right').addClass('carousel-left').removeClass('carousel-right').removeAttr('dir');
      }

      $('.page-videos .sign-in-link').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.tab-item.log-in').slideUp(350).removeClass('active');
        } else {
          // HIDE MAIN NAVIGATION TABS
          $('header .tab .no-refresh').removeClass('active').attr('data-state', '');
          $('header .tab-item.active').removeClass('active').slideUp(450);

          $(this).addClass('active');
          $('.tab-item.log-in').slideDown(350).addClass('active');
        }
      });

      $('.page-videos .carousel-wrapper .carousel-description-item .title')
          .click(function (e) {
            if(window.innerWidth < window_size_mobile) {
              if (!$(this).closest('.carousel-block').hasClass('active')) {
                $('.full-episodes-page .carousel-wrapper .carousel-block').removeClass('active');
                $(this).closest('.carousel-block').addClass('active');
              } else {
                $(this).closest('.carousel-block').removeClass('active');
              }
            }
          }
      );

      $(window).bind('resize', function () {
        if ($('.carousel-block-left').hasClass('active')) {
          if (window.innerWidth >= window_size_mobile) {
            $('.carousel-block-left.active .carousel-left').each(function () {
              var $container = $(this);

              $container.jcarousel('reload');
              $container.closest('.carousel-block-left').removeClass('active');
            });
          }
        }
      });

    }
  };

}(jQuery));
