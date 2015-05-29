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
      var calculateItems = function(slider, $context, start_slide) {
        var current_top_slide = slider.getCurrentSlide() + 1,
            container_h = $context.height(),
            slide_h = $context.find('.slide-item').height(),
            visible_slides = Math.floor(container_h / slide_h),
            shift_last = slide_h - (container_h - (slide_h * visible_slides)),
            shiftAnimate = function() {
              $context.animate({
                'top': '-=' + shift_last
              }, 300);
            };


        if (typeof start_slide != 'undefined') {
          if (start_slide > 0) {
            if ((slider.getSlideCount() - (start_slide + 1) < visible_slides)) {
              if ((slider.getSlideCount() - start_slide) == visible_slides) {
                slider.goToSlide(start_slide - 1);
              } else {
                slider.goToSlide(start_slide - 2);
              }

              $('.aspot-and-episodes .episodes-list').removeClass('shadow');

              slider.end = true;
              shiftAnimate();
            } else {
              slider.goToSlide(start_slide);
            }
          }
        } else {
          if (!slider.end) {
            if ((slider.getSlideCount() - current_top_slide <= visible_slides)) {
              $('.aspot-and-episodes .episodes-list').removeClass('shadow');

              slider.end = true;
              shiftAnimate();
            } else {
              slider.goToNextSlide();
            }
          }
        }
      };

      $('.slider-vertical').each(function () {
        var slider = $(this).bxSlider(Drupal.behaviors.bxslider_carousels.vsettings),
            start_slide = null;

        Drupal.behaviors.bxslider_carousels.varray.push(slider);
        slider.end = false;

        if ($('.consumptionator-page.node-type-media-gallery .slider-vertical li .asset-img').hasClass('active')) {
          start_slide = $('.slider-vertical li .asset-img.active').closest('li').index();

          calculateItems(slider, slider, start_slide);
        }

        $(this).mousewheel(function(e) {
          e.preventDefault();

          if (e.deltaY < 0) {
            calculateItems(slider, $(this));
          } else {
            $('.aspot-and-episodes .episodes-list').addClass('shadow');
            $(this).css('top', 0);
            slider.goToPrevSlide();
            slider.end = false;
          }
        });

        $(this).swipe({
          swipeUp: function() {
            calculateItems(slider, $(this));
          },
          swipeDown: function() {
            $('.aspot-and-episodes .episodes-list').addClass('shadow');
            $(this).css('top', 0);
            slider.goToPrevSlide();
            slider.end = false;
          },
          threshold: 0,
          excludedElements: 'button, input, select, textarea, .noSwipe'
        });
      });
    },

    // Init all horizontal carousels
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

