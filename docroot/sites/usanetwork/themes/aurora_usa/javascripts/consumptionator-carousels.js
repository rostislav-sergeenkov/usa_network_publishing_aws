(function ($) {
  'use strict';

  var usaCarousel = window.usaCarousel || {};

  usaCarousel = (function () {

    function usaCarousel(element, settings) {

      var _ = this;

      _.defaults = {
        selectors: {
          closestWrap: '.episodes-list', // used for add class carousel-end
          carousel: '.usa-carousel',
          carouselItem: '.usa-carousel-item',
          carouselActiveNodeItem: '.node-usanetwork-promo.active',
          prevArrow: '.usa-carousel-control-prev',
          nextArrow: '.usa-carousel-control-next',
          moreButton: '.more-button'
        },

        // vertical
        isVerticalMode: true,
        verticalModeBpMin: 1025, // min-width
        verticalClassName: 'vertical-mode',
        mCustomScrollbar: {
          axis: "y",
          autoHideScrollbar: true,
          scrollInertia: 0,
          scrollbarPosition: "inside"
        },

        // horizontal
        isHorizontalMode: true,
        horizontalModeBpMax: 1024, // max-width
        horizontalClassName: 'horizontal-mode',
        swiper: {
          freeMode: true,
          slidesPerView: 'auto',
          slidesPerGroup: 3,
          buttonDisabledClass: 'usa-carousel-control-disabled'
        },

        // mobile mode
        mobileBpMax: 640, // max-width
        mobileModeClassName: 'horizontal-mode',

        // more button
        isMoreButton: false,
        moreButtonHiddenItemsGt: 1,
        moreButtonClassMore: 'more',
        moreButtonClassClose: 'close',
        moreButtonCarouselItemsClassHidden: 'hidden',
        moreButtonCarouselClassNoHidden: 'no-hidden-items',

        // other
        waitForFinalEvent: 200, // ms
        carouselVerticalEndClassName: 'carousel-end',
        initClassName: 'usa-carousel-initialized'
      };

      // create global options object
      _.options = $.extend(true, _.defaults, settings);

      // swiper object
      _.usaSwiper = {};

      // elements
      _.$body = $(document.body);
      _.$closestWrap = $(element).closest(_.options.selectors.closestWrap);
      _.$mainWrap = $(element);
      _.$carousel = $(element).find(_.options.selectors.carousel);
      _.$carouselItems = $(element).find(_.options.selectors.carouselItem);
      _.$carouselActiveItem = $(element).find(_.options.selectors.carouselActiveNodeItem).parent();
      _.$prevArrow = $(element).find(_.options.selectors.prevArrow);
      _.$nextArrow = $(element).find(_.options.selectors.nextArrow);
      _.$moreButton = $(element).find(_.options.selectors.moreButton);

      // set options
      _.options.isVerticalModeBp = _.checkMatchWindowWidth('min', _.options.verticalModeBpMin);
      _.options.isHorizontalModeBp = _.checkMatchWindowWidth('max', _.options.horizontalModeBpMax);
      _.options.isMobileBpMax = _.checkMatchWindowWidth('max', _.options.mobileBpMax);
      _.options.isVerticalModeActive = false;
      _.options.isHorizontalModeActive = false;
      _.options.isHorizontalModeDestroy = false;
      _.options.isMobileModeActive = false;
      _.options.isMoreButtonActive = false;

      // init app
      _.init(true);
    }

    return usaCarousel;
  }());

  /* --------------------------
   * Helper functionality
   ----------------------------*/

  // custom console
  usaCarousel.prototype.consoleCustom = function (msg) {
    console.info(msg);
  };

  // check Window Width
  usaCarousel.prototype.checkMatchWindowWidth = function (widthName, bp) {
    // widthName - 'min' or 'max'; bp - breakpoint for check
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // setTimeout
  usaCarousel.prototype.setTimeout = function (callback, delay) {

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);
  };

  // add || remove class
  usaCarousel.prototype.addElemClass = function (elem, className, callback) {

    var _ = this,
        $elem = $(elem),
        elemClass = className.trim();

    if (!$elem.hasClass(elemClass)) {
      $elem.addClass(elemClass);
    }
    if (typeof callback === 'function') {
      callback();
    }
  };
  usaCarousel.prototype.removeElemClass = function (elem, className, callback) {

    var _ = this,
        $elem = $(elem),
        elemClass = className.trim();

    if ($elem.hasClass(elemClass)) {
      $elem.removeClass(elemClass);
    }
    if (typeof callback === 'function') {
      callback();
    }
  };

  // update options
  usaCarousel.prototype.updateOptions = function () {
    var _ = this;

    _.options.isVerticalModeBp = _.checkMatchWindowWidth('min', _.options.verticalModeBpMin);
    _.options.isHorizontalModeBp = _.checkMatchWindowWidth('max', _.options.horizontalModeBpMax);
    _.options.isMobileBpMax = _.checkMatchWindowWidth('max', _.options.mobileBpMax);
  };

  // addEvents
  usaCarousel.prototype.addEvents = function () {

    var _ = this;

    if (_.options.isMoreButton) {
      $(_.$moreButton).on('click', function (e) {

        var $self = $(this);

        if (!_.options.isMoreButtonActive) {
          _.openMoreButton($self);
        } else if (_.options.isMoreButtonActive) {
          _.closeMoreButton($self);
        }
      });
    }


    $(window)
        .on('resize', function (e) {
          waitForFinalEvent(function () {
            _.consoleCustom('waitForFinalEvent');
            _.updateOptions();
            _.checkMode();
            if (_.options.isHorizontalMode && _.options.isHorizontalModeActive) {
              try {
                _.usaSwiper.onResize(true);
              } catch (e) {
                _.consoleCustom('error usaRightRailCarousel: onResize');
              }
            }
            if (_.options.isHorizontalModeBp && !_.options.isHorizontalModeActive) {
              _.addElemClass(_.$mainWrap, _.options.horizontalClassName, null);
            } else if (!_.options.isHorizontalModeBp && !_.options.isHorizontalModeActive) {
              _.removeElemClass(_.$mainWrap, _.options.horizontalClassName, null);
            }
          }, _.options.waitForFinalEvent, 'usaRightRailCarousel');
        });
  };

  /* -----------------------------------
   * Vertical mode
   -----------------------------------*/
  usaCarousel.prototype.initVerticalMode = function () {

    var _ = this,
        $closestWrap = _.$closestWrap,
        $carousel = _.$carousel,
        $carouselItems = _.$carouselItems,
        $carouselActiveItem = _.$carouselActiveItem,
        carouselVerticalEndClassName = _.options.carouselVerticalEndClassName;

    _.options.isVerticalModeActive = true;
    _.addElemClass(_.$mainWrap, _.options.verticalClassName, null);

    _.options.mCustomScrollbar.callbacks = {
      onInit: function () {
        if ($carouselActiveItem.length > 0) {
          setTimeout(function () {
            $($carousel).mCustomScrollbar("scrollTo", $carouselActiveItem);
          }, 500);
        }
      },
      whileScrolling: function () {
        if (this.mcs.topPct <= 97) {
          _.removeElemClass($closestWrap, carouselVerticalEndClassName, null);
        } else {
          _.addElemClass($closestWrap, carouselVerticalEndClassName, null);
        }
      },
      onScroll: function () {
        var items = [],
            i = 0;

        $.each($carouselItems, function () {
          items[i] = this;
          i++;
        });

        try {
          Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(items);
        } catch (e) {
          _.consoleCustom('error usaRightRailCarousel: galleryLazyLoadScroll');
        }
      }
    };

    $($carousel).mCustomScrollbar(_.options.mCustomScrollbar);

  };
  usaCarousel.prototype.destroyVerticalMode = function () {

    var _ = this;
    _.options.isVerticalModeActive = false;
    _.removeElemClass(_.$mainWrap, _.options.verticalClassName, null);
    $(_.$carousel).mCustomScrollbar('destroy');
  };

  /* -----------------------------------
   * Horizontal mode
   -----------------------------------*/
  usaCarousel.prototype.initHorizontalMode = function () {

    var _ = this;

    if (_.$carouselItems.length <= _.options.swiper.slidesPerGroup) {
      if (_.options.isHorizontalModeBp && !_.options.isHorizontalModeActive) {
        _.addElemClass(_.$mainWrap, _.options.horizontalClassName, null);
      } else if (!_.options.isHorizontalModeBp && !_.options.isHorizontalModeActive) {
        _.removeElemClass(_.$mainWrap, _.options.horizontalClassName, null);
      }
      return false;
    }

    _.addElemClass(_.$mainWrap, _.options.horizontalClassName, null);

    _.options.swiper.onInit = function (sw) {
      _.options.isHorizontalModeActive = true;
      if (_.options.isHorizontalModeDestroy) {
        _.options.isHorizontalModeDestroy = false;
      }
    };
    _.options.swiper.onDestroy = function (sw) {
      _.options.isHorizontalModeActive = false;
      _.options.isHorizontalModeDestroy = true;
      _.removeElemClass(_.$mainWrap, _.options.horizontalClassName, null);
    };
    _.options.swiper.onSlideChangeEnd = function (sw) {
      try {
        Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(_.$carouselItems);
      } catch (e) {
        _.consoleCustom('error usaRightRailCarousel: galleryLazyLoadScroll');
      }
    };
    _.options.swiper.prevButton = _.$prevArrow;
    _.options.swiper.nextButton = _.$nextArrow;

    _.usaSwiper = new Swiper($(_.$mainWrap), _.options.swiper);
  };
  usaCarousel.prototype.destroyHorizontalMode = function () {

    var _ = this;

    _.usaSwiper.destroy(true, true);
  };

  /* -----------------------------------
   * Mobile mode
   -----------------------------------*/
  usaCarousel.prototype.initMobileMode = function () {

    var _ = this;

    _.options.isMobileModeActive = true;
    _.addElemClass(_.$mainWrap, _.options.mobileModeClassName, null);

    _.hideMoreBtnCarouselItems();

  };
  usaCarousel.prototype.destroyMobileMode = function () {

    var _ = this;

    _.options.isMobileModeActive = false;
    _.removeElemClass(_.$mainWrap, _.options.mobileModeClassName, null);

    if (_.options.isMoreButton) {
      _.options.isMoreButtonActive = false;
      _.removeElemClass(_.$moreButton, _.options.moreButtonClassClose, null);
      _.addElemClass(_.$moreButton, _.options.moreButtonClassMore, null);
      _.showMoreBtnCarouselItems();
    }
  };

  /* -----------------------------------
   * More button
   -----------------------------------*/
  usaCarousel.prototype.showMoreBtnCarouselItems = function () {
    var _ = this;
    _.removeElemClass(_.$carouselItems, _.options.moreButtonCarouselItemsClassHidden, null);
  };
  usaCarousel.prototype.hideMoreBtnCarouselItems = function () {
    var _ = this;
    if (!_.$mainWrap.hasClass(_.options.moreButtonCarouselClassNoHidden)) {
      $(_.$carouselItems).filter(':gt(' + (_.options.moreButtonHiddenItemsGt) + ')').addClass(_.options.moreButtonCarouselItemsClassHidden);
    }
  };
  usaCarousel.prototype.openMoreButton = function (elem) {

    var _ = this;
    _.options.isMoreButtonActive = true;
    _.removeElemClass(elem, _.options.moreButtonClassMore, null);
    _.addElemClass(elem, _.options.moreButtonClassClose, null);
    _.showMoreBtnCarouselItems();
  };

  usaCarousel.prototype.closeMoreButton = function (elem) {

    var _ = this;

    _.options.isMoreButtonActive = false;
    _.removeElemClass(elem, _.options.moreButtonClassClose, null);
    _.addElemClass(elem, _.options.moreButtonClassMore, function () {
      _.hideMoreBtnCarouselItems();
      try {
        $(_.$mainWrap).velocity("scroll", {duration: 700, easing: "linear"});
      } catch (e) {
        _.consoleCustom('error usaRightRailCarousel more button: scroll to element');
      }
    });
  };

  /* -----------------------------------
   * Switch Mode
   -----------------------------------*/
  usaCarousel.prototype.checkMode = function () {

    var _ = this;

    if (_.options.isVerticalMode && !_.options.isVerticalModeActive && _.options.isVerticalModeBp) {
      if (_.options.isHorizontalModeActive) {
        _.destroyHorizontalMode();
      }
      if (_.options.isMobileModeActive) {
        _.destroyMobileMode();
      }
    } else if (_.options.isHorizontalMode && !_.options.isHorizontalModeActive
        && _.options.isHorizontalModeBp && !_.options.isMobileBpMax) {
      if (_.options.isVerticalModeActive) {
        _.destroyVerticalMode();
      }
      if (_.options.isMobileModeActive) {
        _.destroyMobileMode();
      }
    } else if (_.options.isMobileBpMax && !_.options.isMobileModeActive) {
      if (_.options.isVerticalModeActive) {
        _.destroyVerticalMode();
      }
      if (_.options.isHorizontalModeActive) {
        _.destroyHorizontalMode();
      }
    }

    _.switchMode();
  };
  usaCarousel.prototype.switchMode = function () {

    var _ = this;

    if (_.options.isVerticalMode && !_.options.isVerticalModeActive && _.options.isVerticalModeBp) {
      _.initVerticalMode();
    } else if (_.options.isHorizontalMode && !_.options.isHorizontalModeActive &&
        _.options.isHorizontalModeBp && !_.options.isMobileBpMax) {
      _.initHorizontalMode();
    } else if (_.options.isMobileBpMax && !_.options.isMobileModeActive) {
      _.initMobileMode();
    }
  };

  /* --------------------------
   * init
   ----------------------------*/
  usaCarousel.prototype.init = function (creation) {

    var _ = this,
        $mainWrap = _.$mainWrap,
        initClassName = _.options.initClassName;

    if (creation && !$($mainWrap).hasClass(initClassName)) {
      $($mainWrap).addClass(initClassName);
      _.switchMode();
      _.addEvents();
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

  $(document).ready(function () {

    var $body = $('body'),
        $episodesListSlider = $('.episodes-list-slider'),
        $moreButton = $episodesListSlider.find('.more-button');

    if ($episodesListSlider.length > 0 && !$body.is('.page-videos-live')) {
      if ($body.is('.show-new-design')) {
        if ($body.is('.consumptionator-video-page')) {
          $episodesListSlider.usaCarousel({
            isVerticalMode: true,
            verticalModeBpMin: 769,
            isHorizontalMode: true,
            horizontalModeBpMax: 768,
            destroyCarouselBpMax: 640
          });
        } else {
          $episodesListSlider.usaCarousel({
            isVerticalMode: true,
            verticalModeBpMin: 1025,
            isHorizontalMode: true,
            horizontalModeBpMax: 1024,
            destroyCarouselBpMax: 640
          });
        }

      } else {
        if ($body.is('.usa-tv-show')) {
          $episodesListSlider.usaCarousel({
            isVerticalMode: true,
            verticalModeBpMin: 769,
            isHorizontalMode: true,
            horizontalModeBpMax: 768,
            destroyCarouselBpMax: 640,
            isMoreButton: true,
            moreButtonHiddenItemsGt: ($(document.body).hasClass('consumptionator-page')) ? 4 : 2
          });
        } else if($moreButton.length > 0 ) {
          $episodesListSlider.usaCarousel({
            isMoreButton: true,
            moreButtonHiddenItemsGt: ($(document.body).hasClass('consumptionator-page')) ? 4 : 2
          });
        } else {
          $episodesListSlider.usaCarousel({
            moreButtonHiddenItemsGt: ($(document.body).hasClass('consumptionator-page')) ? 4 : 2
          });
        }
      }
    }
  });
})(jQuery);
