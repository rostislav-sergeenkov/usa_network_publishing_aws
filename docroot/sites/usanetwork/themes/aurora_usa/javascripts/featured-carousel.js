(function ($) {
  Drupal.behaviors.featured_carousel = {
    attach: function (context) {

      if (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches){
        $('.featured-carousel').addClass('destroy');
        $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
      }

      if ($('.featured-block').attr('data-url')) {
        var back_url = $('.featured-block').attr('data-url');
        $('.featured-block').css({'background' : 'url('+ back_url +') no-repeat', 'background-size' : 'cover'});
      }

      $(window).bind('resize', function () {

        if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches){
          if ($('.featured-carousel').hasClass('destroy')) {
            $('.featured-carousel').removeClass('destroy');
            $('.featured-carousel > ul > li').removeClass('hidden');
            $('.featured-block a.more-button.close').removeClass('close').addClass('more');
          }
        } else {
          if (!$('.featured-carousel').hasClass('destroy')) {
            $('.featured-carousel').jcarousel('destroy');
            $('.featured-carousel').addClass('destroy');
            $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
          }
        }

      });

      // Show carousel more-button click
      $('.featured-block > a.more-button').click(function(e) {

        e.preventDefault();
        if ($(this).hasClass('more')) {
          $('.featured-carousel > ul > li').removeClass('hidden');
          $(this).removeClass('more').addClass('close');
        } else {
          $('.featured-carousel > ul > li:gt(1)').addClass('hidden');
          $(this).removeClass('close').addClass('more');
          $('#block-usanetwork-blocks-usanetwork-featured-carousel').velocity("scroll", { duration: 1000, easing: "linear" });
        }
      });
    }
  };

}(jQuery));
