(function ($) {
  Drupal.behaviors.full_episodes_carousel = {
    attach: function (context) {
      var hide_elements = ($('.full-episodes-carousel').hasClass('carousel_1_rows'))? 3: 1;
      if (window.innerWidth < window_size_tablet_portrait){
        $('.full-episodes-carousel').addClass('destroy');
        $('.full-episodes-carousel > ul > li:gt('+ hide_elements +')').addClass('hidden');
      }

      $(window).bind('resize', function () {

        if (window.innerWidth >= window_size_tablet_portrait){
          if ($('.full-episodes-carousel').hasClass('destroy')) {
            $('.full-episodes-carousel').removeClass('destroy');
            $('.full-episodes-carousel > ul > li').removeClass('hidden');
            $('.full-episodes-block a.more-button.close').removeClass('close').addClass('more');
          }
        } else {
          if (!$('.full-episodes-carousel').hasClass('destroy')) {
            $('.full-episodes-carousel').jcarousel('destroy');
            $('.full-episodes-carousel').addClass('destroy');
            $('.full-episodes-carousel > ul > li:gt('+ hide_elements +')').addClass('hidden');
          }
        }

      });

      // Show carousel more-button click
      $('.full-episodes-block > a.more-button').click(function(e) {

        e.preventDefault();
        if ($(this).hasClass('more')) {
          $('.full-episodes-carousel > ul > li').removeClass('hidden');
          $(this).removeClass('more').addClass('close');
        } else {
          $('.full-episodes-carousel > ul > li:gt('+ hide_elements +')').addClass('hidden');
          $(this).removeClass('close').addClass('more');
        }
      });
    }
  };

}(jQuery));
