(function ($) {
  Drupal.behaviors.social_carousel = {
    attach: function (context) {

      if (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches){
        $('.social-carousel').addClass('destroy');
        $('.social-carousel > ul > li:gt(1)').addClass('hidden');
      }

      $(window).bind('resize', function () {

        if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches){
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
          $('#block-usanetwork-blocks-usanetwork-social-carousel').velocity("scroll", { duration: 1000, easing: "linear" });
        }
      });
    }
  };

}(jQuery));
