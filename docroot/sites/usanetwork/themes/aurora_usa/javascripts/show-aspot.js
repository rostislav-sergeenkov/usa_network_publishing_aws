(function ($) {
  Drupal.behaviors.show_aspot = {
    slidersInit: function () {
      var base_settings = {
            pager: false,
            controls: false,
            auto: false,
            speed: 400,
            infiniteLoop: false,
            useCSS: true,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 0,
            responsive: true
          },
          vertical_settings = $.extend({}, base_settings, {mode: 'vertical'}),
          horizontal_settings = $.extend({}, base_settings, {
            mode: 'horizontal',
            adaptiveHeight: true,
            slideWidth : '255'
          });

      $('.slider-vertical').each(function () {
        var slider = $(this).bxSlider(vertical_settings);

        $(this).swipe({
          swipeUp: function () {
            slider.goToNextSlide();
          },
          swipeDown: function () {
            slider.goToPrevSlide();
          },
          threshold: 0,
          excludedElements: 'button, input, select, textarea, .noSwipe'
        });

        $(this).mousewheel(function (event, delta, deltaX, deltaY) {
          if (delta > 0) {
            slider.goToPrevSlide();

            if (slider.getCurrentSlide() != 0) {
              event.stopPropagation();
              event.preventDefault();
            }
          }

          if (deltaY < 0) {
            slider.goToNextSlide();

            if (slider.getCurrentSlide() + 1 < slider.getSlideCount()) {
              event.stopPropagation();
              event.preventDefault();
            }
          }
        });
      });

      $('.slider-horizontal').each(function () {
        $(this).bxSlider(horizontal_settings);
      });
    },

    attach: function (context, settings) {
      Drupal.behaviors.show_aspot.slidersInit();

      var slideItem =  $('.episodes-list-slider.horizontal .slide-item'),
          moreButton = $('.episodes-list-slider.horizontal a.more-button'),
          marginBottom = slideItem.eq(0).css('margin-bottom');

      if (slideItem.length > 3){

        if (window.innerWidth < window_size_mobile_641 ){
          $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');
          // Show more-button
          moreButton.css('display', 'block');
        }

        $(window).bind('resize', function () {
          if (window.innerWidth >= window_size_mobile_641 ){
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');
            moreButton.css('display', 'none');
          } else {
            $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');
            moreButton.css('display', 'block');
          }
        });

        // Show carousel more-button click
        moreButton.click(function(e) {
          e.preventDefault();
          if ($(this).hasClass('more')) {
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $(this).removeClass('more').addClass('close');
            slideItem.eq(2).css('margin-bottom', marginBottom);
          } else {
            $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');
            $(this).removeClass('close').addClass('more');
            slideItem.eq(2).css('margin-bottom', 0);
          }
        });

      }
    }
  };

}(jQuery));

