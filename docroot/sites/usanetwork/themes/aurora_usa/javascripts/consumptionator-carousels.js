(function ($) {
  'use strict';

  var usaCarousel = window.usaCarousel || {};

  usaCarousel = (function () {

    function usaCarousel(element, settings) {

      var _ = this;

      // info about usaCarousel App
      _.info = {
        project: 'usanetwork.com',
        slick: '1.5.5',
        ver: '0.1.0'
      };

      _.defaults = {

        destroySliderBp: 640,
        resizeTimeOut: 50,
        numberSlidesNoInit: 3,
        number_of_mobile_items: ($(document.body).hasClass('consumptionator-page')) ? 5 : 3,

        // elements classes
        carousel: 'slider-horizontal',
        prevArrow: 'slide-prev',
        nextArrow: 'slide-next',
        controlArrow: 'slide-control',
        moreButton: 'more-button',
        slides: 'slide-item',

        // slider config
        slider: {
          autoplay: false,
          infinite: false,
          speed: 400,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // elements
      _.$body = $(document.body);
      _.$carouselWrap = $(element);
      _.$carousel = $(element).find('.' + _.options.carousel);
      _.$slides = $(element).find('.' + _.options.slides);
      _.$prevArrow = $(element).find('.' + _.options.prevArrow);
      _.$nextArrow = $(element).find('.' + _.options.nextArrow);
      _.$moreButton = $(element).find('.' + _.options.moreButton);

      // data attributes value
      _.data = {
        blockName: $(element).data('block-name')
      };

      // update params
      _.options.numberSlides = _.$slides.length;
      _.options.moreButtonLength = _.$moreButton.length;
      _.options.slider.slide = '.' + _.options.slideClass;
      _.options.slider.prevArrow = _.$prevArrow;
      _.options.slider.nextArrow = _.$nextArrow;
      _.options.destroySlider = _.checkMaxWindowWidth(_.options.destroySliderBp);
      _.options.initCarousel = false;
      _.options.initMoreBtn = false;
      _.options.showMoreBtn = false;

      // init app
      _.init(true);
    }

    return usaCarousel;

  }());

  //============
  // helper
  //============

  usaCarousel.prototype.checkMinWindowWidth = function (bp) {
    return window.matchMedia('(min-width: ' + bp + 'px)').matches;
  };

  usaCarousel.prototype.checkMaxWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaCarousel.prototype.resize = function () {

    var _ = this,
        destroySliderBp = _.options.destroySliderBp,
        $carouselWrap = _.$carouselWrap,
        $slides = _.$slides,
        number_of_items = _.options.number_of_mobile_items,
        resizeTime = _.options.resizeTimeOut,
        resizeTimeOut;

    $(window).on('resize', function () {

      var destroySlider = false,
          initCarousel = _.options.initCarousel;

      _.options.destroySlider = _.checkMaxWindowWidth(destroySliderBp);
      destroySlider = _.options.destroySlider;

      clearTimeout(resizeTimeOut);

      resizeTimeOut = setTimeout(function () {

        // update more button
        if (_.options.initMoreBtn) {
          if (destroySlider && !_.options.showMoreBtn) {
            _.showMoreBtn();
          } else if (!destroySlider && _.options.showMoreBtn) {
            _.hideMoreBtn();
          }
        } else {
          if (!destroySlider) {
            $slides.removeClass('hidden');
          } else if(destroySlider) {
            if (!$carouselWrap.hasClass('no-hidden-items')) {
              $slides.filter(':gt(' + (number_of_items - 1) + ')').addClass('hidden');
            }
          }
        }

        // update carousel
        if (destroySlider && initCarousel) { // less 640px
          _.destroyCarousel();
        } else if (!destroySlider && !initCarousel) { // more 640px
          _.initCarousel();
        }

      }, resizeTime);
    });
  };

  //============
  // more button
  //============
  usaCarousel.prototype.initMoreBtn = function () {

    var _ = this,
        $carouselWrap = _.$carouselWrap,
        $slides = _.$slides,
        number_of_items = _.options.number_of_mobile_items;

    if (_.options.moreButtonLength > 0) {

      _.options.initMoreBtn = true;
      _.addMoreBtnClick();

      if (_.options.destroySlider) {
        _.showMoreBtn();
      }
    } else {
      if (_.options.destroySlider && !$carouselWrap.hasClass('no-hidden-items')) {
        $slides.filter(':gt(' + (number_of_items - 1) + ')').addClass('hidden');
      }
    }
  };

  usaCarousel.prototype.addMoreBtnClick = function () {

    var _ = this,
        $carouselWrap = _.$carouselWrap,
        $slides = _.$slides,
        $moreButton = _.$moreButton,
        number_of_items = _.options.number_of_mobile_items;

    $moreButton.once(function () {

      var self = $(this);

      self.on('click', function () {
        if (self.hasClass('more')) {
          $slides.removeClass('hidden');
          self.removeClass('more').addClass('close');
        } else {
          $slides.filter(':gt(' + (number_of_items - 1) + ')').addClass('hidden');
          self.removeClass('close').addClass('more');
          $carouselWrap.velocity("scroll", {duration: 1000, easing: "linear"});
        }
      });
    });
  };

  usaCarousel.prototype.showMoreBtn = function () {

    var _ = this,
        $carouselWrap = _.$carouselWrap,
        $slides = _.$slides,
        $moreButton = _.$moreButton,
        number_of_items = _.options.number_of_mobile_items;

    if (!$carouselWrap.hasClass('no-hidden-items')) {
      $slides.filter(':gt(' + (number_of_items - 1) + ')').addClass('hidden');
      $moreButton.show();
      _.options.showMoreBtn = true;
    }
  };

  usaCarousel.prototype.hideMoreBtn = function () {

    var _ = this,
        $slides = _.$slides,
        $moreButton = _.$moreButton;

    $slides.removeClass('hidden');
    $moreButton
        .hide()
        .removeClass('close')
        .addClass('more');

    _.options.showMoreBtn = false;
  };

  //============
  // carousel
  //============

  usaCarousel.prototype.destroyCarousel = function () {
    var _ = this,
        $carousel = _.$carousel,
        initCarousel = _.options.initCarousel;

    if (initCarousel) {
      _.options.initCarousel = false;
      $carousel.slick('unslick');
    }
  };

  usaCarousel.prototype.initCarousel = function () {

    var _ = this,
        $carousel = _.$carousel,
        destroySlider = _.options.destroySlider,
        numberSlides = _.options.numberSlides,
        numberSlidesNoInit = _.options.numberSlidesNoInit,
        initCarousel = _.options.initCarousel;

    if (!destroySlider && !initCarousel && numberSlides > numberSlidesNoInit) {
      _.options.initCarousel = true;
      $carousel.slick(_.options.slider);
    }
  };

  //============
  // init app
  //============

  usaCarousel.prototype.init = function (creation) {

    var _ = this;

    if (!_.options.initApp == true) {
      _.options.initApp = creation;
      _.initMoreBtn();
      _.initCarousel();
      _.resize();
    }
  };


  //==================================
  // create jQuery method usaCarousel
  //==================================
  $.fn.usaCarousel = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaCarousel = new usaCarousel(_[i], opt);
      else
        ret = _[i].usaCarousel[opt].apply(_[i].usaCarousel, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  Drupal.behaviors.consumptionator_carousels = {
    // Init all vertical carousels
    initVSliders: function () {
      $('.episodes-list-slider.vertical .slider-vertical').mCustomScrollbar({
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 0,
        scrollbarPosition: "inside",
        callbacks: {
          onInit: function () {
            var activeItem = $('.slider-vertical li.slide-item .asset-img.active').closest('li');
            if (activeItem.length > 0) {
              setTimeout(function () {
                $('.slider-vertical').mCustomScrollbar("scrollTo", activeItem);
              }, 500);
            }
          },
          whileScrolling: function () {
            if (this.mcs.topPct >= 97) {
              $('.episodes-list', '.aspot-and-episodes').removeClass('shadow');
            } else {
              if (!$('.episodes-list', '.aspot-and-episodes').hasClass('shadow')) {
                $('.episodes-list', '.aspot-and-episodes').addClass('shadow');
              }
            }
          },
          onScroll: function () {
            var items = [];
            var i = 0;
            $(this).find('li').each(function () {
              items[i] = this;
              i++;
            });
            Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(items);
          }
        }
      });
    },
    attach: function (context, settings) {

      $(document.body).once(function () {

        // init right rail carousel
        Drupal.behaviors.consumptionator_carousels.initVSliders();

        // init episodes-list-slider horizontal
        $('.episodes-list-slider.horizontal').usaCarousel();

      });
    }
  };

})(jQuery);
