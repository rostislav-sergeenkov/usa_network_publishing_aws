(function ($) {
  Drupal.behaviors.show_aspot = {
    slidersInit: function() {
      var base_settings = {
            pager: false,
            controls: false,
            auto: false,
            speed: 400,
            useCSS: false,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 0
          },
          vertical_settings = $.extend({}, base_settings, {mode: 'vertical'}),
          horizontal_settings = $.extend({}, base_settings, {mode: 'horizontal'});

      $('.slider-vertical').each(function() {
        $(this).bxSlider(vertical_settings);

        $(this).mousewheel(function (event, delta, deltaX, deltaY) {
          if (delta > 0) {
            $(this).goToPrevSlide();
            if($(this).getCurrentSlide() != 0){
              event.stopPropagation();
              event.preventDefault();
            }
          }
          if (deltaY < 0) {
            $(this).goToNextSlide();
            if($(this).getCurrentSlide() + 1 < $(this).getSlideCount()){
              event.stopPropagation();
              event.preventDefault();
            }
          }
        });
      });

      $('.slider-horizontal').each(function() {
        $(this).bxSlider(horizontal_settings);
      });
    },

    slidersSwitch: function() {
      if (window.innerWidth < window_size_tablet_portrait) {
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

