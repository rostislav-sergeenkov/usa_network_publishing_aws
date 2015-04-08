(function ($) {
  Drupal.behaviors.show_aspot = {
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
      useCSS: true,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 0,
      responsive: true
    },

    // Settings for vertical and horizontal bxSlider carousels
    vsettings: {},
    hsettings: {},

    extendSettings: function () {
      Drupal.behaviors.show_aspot.vsettings = $.extend({}, Drupal.behaviors.show_aspot.bsettings, {
        mode: 'vertical'
      });
      Drupal.behaviors.show_aspot.hsettings = $.extend({}, Drupal.behaviors.show_aspot.bsettings, {
        mode: 'horizontal',
        adaptiveHeight: true,
        slideWidth : '255'
      });
    },

    // Init all vertical carousels
    initVSliders: function() {
      $('.slider-vertical').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.show_aspot.vsettings);

        Drupal.behaviors.show_aspot.varray.push(slider);

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
    },

    // Init all horizontal carousels
    initHSliders: function() {
      $('.slider-horizontal').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.show_aspot.hsettings);

        Drupal.behaviors.show_aspot.harray.push(slider);

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

      Drupal.behaviors.show_aspot.extendSettings();
      Drupal.behaviors.show_aspot.initVSliders();
      if (window.innerWidth >= window_size_mobile_641 ){
        Drupal.behaviors.show_aspot.initHSliders();
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

              if (Drupal.behaviors.show_aspot.harray.length == 0) {
                Drupal.behaviors.show_aspot.initHSliders();
              }

              $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');
              moreButton.css('display', 'none');
            } else {
              $(Drupal.behaviors.show_aspot.harray).each(function() {
                this.destroySlider();
              });
              Drupal.behaviors.show_aspot.harray = [];

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

