(function ($) {
  Drupal.behaviors.bxslider_carousels = {
    // Arrays for vertical and horizontal bxSlider objects
    harray: [],
    varray: [],

    // Base settings for bxSlider carousels
    bsettings: {
      pager: false,
      controls: false,
      auto: false,
      speed: 400,
      infiniteLoop: false,
      useCSS: false,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 0,
      responsive: true
    },

    // Settings for vertical and horizontal bxSlider carousels
    vsettings: {},
    hsettings: {},

    extendSettings: function () {
      Drupal.behaviors.bxslider_carousels.vsettings = $.extend({}, Drupal.behaviors.bxslider_carousels.bsettings, {
        mode: 'vertical',
        minSlides: 1,
        maxSlides: 1
      });
      Drupal.behaviors.bxslider_carousels.hsettings = $.extend({}, Drupal.behaviors.bxslider_carousels.bsettings, {
        mode: 'horizontal',
        controls: true,
        nextText: '',
        prevText: '',
        adaptiveHeight: true,
        slideWidth : ($('body').hasClass('consumptionator-page'))? '425' : '255'
      });
    },

    // Init all vertical carousels
    initVSliders: function() {
      $('.slider-vertical').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.bxslider_carousels.vsettings);

        slider.end = false;
        Drupal.behaviors.bxslider_carousels.varray.push(slider);

        $(this).swipe({
          swipeUp: function () {
            var current_top_slide = slider.getCurrentSlide() + 1,
                container_h = $(this).height(),
                slide_h = $(this).find('.slide-item').height(),
                visible_slides = Math.floor(container_h / slide_h),
                shift_last = slide_h - (container_h - (slide_h * visible_slides));

            if (!slider.end) {
              if ((slider.getSlideCount() - current_top_slide <= 2)) {
                slider.end = true;

                $(this).animate({
                  'top': '-=' + shift_last
                }, 300);
              } else {
                slider.goToNextSlide();
              }
            }
          },
          swipeDown: function () {
            slider.goToPrevSlide();
            slider.end = false;
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
    },

    // Init all horizontal carousels
    initHSliders: function() {
      $('.slider-horizontal').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.bxslider_carousels.hsettings);

        Drupal.behaviors.bxslider_carousels.harray.push(slider);

        $(this).swipe({
          swipeLeft: function () {
            slider.goToNextSlide();
          },
          swipeRight: function () {
            slider.goToPrevSlide();
          },
          threshold: 0,
          excludedElements: 'button, input, select, textarea, .noSwipe'
        });
      });
    },

    attach: function (context, settings) {
      var slideItem =  $('.episodes-list-slider.horizontal .slide-item'),
          moreButton = $('.episodes-list-slider.horizontal a.more-button');

      Drupal.behaviors.bxslider_carousels.extendSettings();
      Drupal.behaviors.bxslider_carousels.initVSliders();
      if (window.innerWidth >= window_size_mobile_641 ){
        Drupal.behaviors.bxslider_carousels.initHSliders();
      }

      if (slideItem.length > 3){
        if (window.innerWidth < window_size_mobile_641 ){
          $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');

          // Show more-button
          moreButton.css('display', 'block');
        }

        $(window).bind('resize', function () {
          setTimeout(function() {
            if (window.innerWidth >= window_size_mobile_641 ){
              $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');

              if (Drupal.behaviors.bxslider_carousels.harray.length == 0) {
                Drupal.behaviors.bxslider_carousels.initHSliders();
              }

              $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');
              moreButton.css('display', 'none');
            } else {
              $(Drupal.behaviors.bxslider_carousels.harray).each(function() {
                this.destroySlider();
              });
              Drupal.behaviors.bxslider_carousels.harray = [];

              $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');
              moreButton.css('display', 'block');
            }
          }, 500);
        });

        // Show carousel more-button click
        moreButton.click(function(e) {
          e.preventDefault();

          if ($(this).hasClass('more')) {
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $(this).removeClass('more').addClass('close');
          } else {
            $('.episodes-list-slider.horizontal > ul > li:gt(2)').addClass('hidden');
            $(this).removeClass('close').addClass('more');
          }
        });
      }
    }
  };
}(jQuery));

