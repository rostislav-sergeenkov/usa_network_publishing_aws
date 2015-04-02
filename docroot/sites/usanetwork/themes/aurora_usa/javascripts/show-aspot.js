(function ($) {
  Drupal.behaviors.show_aspot = {
    slidersInit: function() {
      var base_settings = {
            pager: false,
            controls: false,
            auto: false,
            speed: 400,
            useCSS: false,
            slideWidth: 300,
            minSlides: 3,
            maxSlides: 5,
            slideMargin: 10
          },
          vertical_settings = $.extend({}, base_settings, {mode: 'vertical', slideMargin: 0}),
          horizontal_settings = $.extend({}, base_settings, {mode: 'horizontal', slideMargin: 10});

      $('.slider-vertical').each(function() {
        $(this).bxSlider(vertical_settings);
      });

      $('.slider-horizontal').each(function() {
        $(this).bxSlider(horizontal_settings);
      });
    },

    slidersSwitch: function() {
      if ($(window).width() <= 768) {
        $('.episodes-list-slider').each(function() {
          if ($(this).attr('data-mode') == 'vertical') {
            $(this).css('display', 'none');
          } else {
            $(this).css('display', 'block');
          }
        });
      } else {
        $('.episodes-list-slider').each(function() {
          if ($(this).attr('data-mode') == 'vertical') {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        });
      }
    },

    attach: function (context, settings) {
      Drupal.behaviors.show_aspot.slidersInit();
      Drupal.behaviors.show_aspot.slidersSwitch();

      $(window).bind('resize', function() {
        Drupal.behaviors.show_aspot.slidersSwitch();
      });

      $('.more-button a').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('more')) {
          $(this).removeClass('more');
          $(this).addClass('less');
          $('.episodes-list ul').addClass('open');
        } else {
          $(this).removeClass('less');
          $(this).addClass('more');
          $('.episodes-list ul').removeClass('open');
        }
      });

    }
  };

}(jQuery));

