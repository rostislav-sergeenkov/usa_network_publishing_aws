(function ($) {
  Drupal.behaviors.social_carousel = {
    attach: function (context) {

      if (window.innerWidth < window_size_tablet_portrait){
        $('.social-carousel').addClass('destroy');
        $('.social-carousel > ul > li:gt(1)').addClass('hidden');
      }

      $(window).bind('resize', function () {

        if (window.innerWidth >= window_size_tablet_portrait){
          if ($('.social-carousel').hasClass('destroy')) {
            $('.social-carousel').removeClass('destroy');
            $('.social-carousel > ul > li').removeClass('hidden');
            $('.social-block a.more-button.close').removeClass('close').addClass('more');
          }
        } else {
          if (!$('.social-carousel').hasClass('destroy')) {
            $('.social-carousel').jcarousel('destroy');
            $('.social-carousel').addClass('destroy');
            $('.social-carousel > ul > li:gt(1)').addClass('hidden');
          }
        }

      });

      // Show carousel more-button click
      $('.social-block > a.more-button').click(function(e) {

        e.preventDefault();
        if ($(this).hasClass('more')) {
          $('.social-carousel > ul > li').removeClass('hidden');
          $(this).removeClass('more').addClass('close');
        } else {
          $('.social-carousel > ul > li:gt(1)').addClass('hidden');
          $(this).removeClass('close').addClass('more');
        }
      });
    }
  };

}(jQuery));
