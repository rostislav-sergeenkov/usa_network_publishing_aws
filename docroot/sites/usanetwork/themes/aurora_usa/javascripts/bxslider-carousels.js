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

      var slideWidth;

      if($('body').hasClass('consumptionator-page')) {
        slideWidth = window.innerWidth / 3 - 6;
      } else {
        slideWidth = 255;
      }

      Drupal.behaviors.bxslider_carousels.vsettings = $.extend({}, Drupal.behaviors.bxslider_carousels.bsettings, {
        mode: 'vertical',
        minSlides: 1,
        maxSlides: 1,
        useCSS: true,
        easing: 'ease-in'
      });
      Drupal.behaviors.bxslider_carousels.hsettings = $.extend({}, Drupal.behaviors.bxslider_carousels.bsettings, {
        mode: 'horizontal',
        controls: true,
        minSlides: 3,
        maxSlides: 3,
        hideControlOnEnd: true,
        nextText: '',
        prevText: '',
        adaptiveHeight: true,
        slideWidth : slideWidth
      });
    },

    // Init all vertical carousels
    initVSliders: function() {
      var calculateItems = function(slider) {
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
      };

      $('.slider-vertical').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.bxslider_carousels.vsettings);

        slider.end = false;
        Drupal.behaviors.bxslider_carousels.varray.push(slider);

        $(this).swipe({
          swipeUp: function() {
            calculateItems(slider);
          },
          swipeDown: function() {
            slider.goToPrevSlide();
            slider.end = false;
          },
          threshold: 0,
          excludedElements: 'button, input, select, textarea, .noSwipe'
        });

        $(this).mousewheel(function(e) {
          console.log(e);
          e.preventDefault();

          if (e.deltaY < 0) {
            calculateItems(slider);
          } else {
            slider.goToPrevSlide();
            slider.end = false;
          }
        });
      });
    },

    initHSliders: function() {
      $('.episodes-list-slider.horizontal')
        .on('jcarousel:create jcarousel:reload', function () {
          var $carousel = $(this),
            width = $carousel.innerWidth();

          if (width > window_size_mobile_641) {
            width = width / 3;
          }

          $carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
          animation: {
            duration: 500,
            easing: 'linear'
          },
          rtl: false
        });

      $('.episodes-list-slider.horizontal .horizontal-controls .jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
          $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
          $(this).addClass('inactive');
        })
        .jcarouselControl({
          target: '-=1'
        });

      $('.episodes-list-slider.horizontal .horizontal-controls .jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
          $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
          $(this).addClass('inactive');
        })
        .jcarouselControl({
          target: '+=1'
        });
    },

    attach: function (context, settings) {
      var slideItem =  $('.episodes-list-slider.horizontal .slide-item'),
          moreButton = $('.episodes-list-slider.horizontal a.more-button');

      //number of visible items for different pages for width screen less than 640px
      var number_of_items = ($('body').hasClass('consumptionator-page'))? 5 : 3;

      Drupal.behaviors.bxslider_carousels.initHSliders();

      Drupal.behaviors.bxslider_carousels.extendSettings();
      if (slideItem.length > 2) {
        Drupal.behaviors.bxslider_carousels.initVSliders();
      }

      $(window).bind('resize', function () {
        setTimeout(function() {
          if (window.innerWidth >= window_size_mobile_641 && window.innerWidth < window_size_desktop && slideItem.length > 2){
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');

            moreButton.css('display', 'none');
          } else {
            $(Drupal.behaviors.bxslider_carousels.harray).each(function() {
              this.destroySlider();
            });
            Drupal.behaviors.bxslider_carousels.harray = [];

            $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');
            moreButton.css('display', 'block');
          }
        }, 0);
      });

      if (slideItem.length > number_of_items){
        if (window.innerWidth < window_size_mobile_641){
          $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');

          // Show more-button
          moreButton.css('display', 'block');
        }

        // Show carousel more-button click
        moreButton.click(function(e) {
          e.preventDefault();

          if ($(this).hasClass('more')) {
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $(this).removeClass('more').addClass('close');
          } else {
            $('.episodes-list-slider.horizontal > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');
            $(this).removeClass('close').addClass('more');
          }
        });
      }
    }
  };
}(jQuery));

