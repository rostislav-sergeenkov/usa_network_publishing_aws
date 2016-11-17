/* readme

 dependency:

 Swiper - http://idangero.us/swiper
 VelocityJS - VelocityJS.org
 */


(function ($) {

  'use strict';

  var usaCarouselLeft = window.usaCarouselLeft || {};

  usaCarouselLeft = (function () {

    function usaCarouselLeft(element, settings) {

      var _ = this;

      _.defaults = {

        // selectors
        selectors: {
          carouselWrap: '.carousel-left',
          carousel: '.usa-carousel-left',
          prevArrow: '.usa-carousel-control-prev',
          nextArrow: '.usa-carousel-control-next',
          carouselDescription: '.carousel-description-item',
          carouselItem: '.carousel-item',
          moreButton: '.more-button',
          getApp: '.get-app'
        },

        // swiper
        swiper: {
          freeMode: true,
          loop: false,
          initialSlide: 0,
          slidesPerView: 'auto',
          speed: 500,
          buttonDisabledClass: 'usa-carousel-button-disabled'
          // controls buttons sets on init
        },

        // show card
        isShowCardCarousel: false,
        showCardOpenItemClass: 'show-open',
        showCardCloseItemClass: 'close-button',
        showCardSocialIconsSelector: '.social-icons',
        showCardCarouselItemNodeClassOpen: 'open',
        showCardCarouselClassStop: 'stop',
        showCardCarouselItemClassAdvertEnable: 'advert-enable',
        showCardCarouselItemClassActive: 'active',
        showCardOpenItemClassActive: 'active',
        showCardOpenAnimeTime: 500,
        showCardOpenAnimeEasing: 'easeInOutExpo',
        showCardCloseAnimeEasing: 'easeInOutExpo',
        showCardGetAdMinBp: 769,
        showCardBp: {
          // variables-and-functions.js
          window_size_desktop_large: 1901,
          window_size_desktop_large_1900: 1900,
          window_size_desktop_1280: 1280,
          window_size_tablet_1024: 1024,
          window_size_tablet_portrait_768: 768,
          window_size_mobile_480: 480
        },
        showCardOpenWidth: {
          desktop_show_open_width_large: 2164,
          desktop_show_open_width: 1450
        },
        showCardMargin: {
          show_carousel_margin: 60,
          show_carousel_margin_1024: 40,
          show_carousel_margin_480: 20
        },

        // description item
        isMobileDescription: false, // use replace description item
        mobileDescriptionBp: 768, // breakpoint for mobile version
        addMobileDescriptionClick: false, // add CLICK on description item
        isDescriptionSponsored: false, // update mpsSponsorShip.execShowCard
        descriptionSponsoredClass: 'sponsored',
        descriptionSponsoredStyle: 'light-stacked',

        // more button
        isMoreButtonCarousel: false,
        moreButtonBp: 768,
        moreButtonHiddenItemsGt: 1,
        moreButtonClassMore: 'more',
        moreButtonClassClose: 'close',
        moreButtonCarouselItemsClassHidden: 'hidden',

        // others
        mainWrapReadyClassName: 'ready',
        mainWrapActiveClassName: 'active',
        initClassName: 'usa-carousel-initialized'
      };

      // create global initials object
      _.initials = $.extend(true, _.defaults, settings);

      // elements
      _.usaSwiper = {};
      _.$body = $(document.body);
      _.$mainWrap = $(element);
      _.$carouselWrap = $(element).find(_.initials.selectors.carouselWrap);
      _.$carousel = $(element).find(_.initials.selectors.carousel);
      _.$carouselDescription = $(element).find(_.initials.selectors.carouselDescription);
      _.$carouselDescriptionSponsored = _.$carouselDescription.find(_.initials.selectors.descriptionSponsoredClass);
      _.$prevArrow = $(element).find(_.initials.selectors.prevArrow);
      _.$nextArrow = $(element).find(_.initials.selectors.nextArrow);
      _.$carouselItems = $(element).find(_.initials.selectors.carouselItem);
      _.$moreButton = $(element).find(_.initials.selectors.moreButton);
      _.$getApp = $(element).find(_.initials.selectors.getApp);

      // options
      _.options = {
        carouselViewport: _.$carouselWrap.width(),
        carouselItemsLength: _.$carouselItems.length,
        isWindowLoad: false,
        isCarouselInit: false,
        isMobileDescriptionInit: false,
        isMobileDescriptionActive: false,
        isMobileDescriptionBp: _.checkMatchWindowWidth('max', _.initials.mobileDescriptionBp),
        isMoreButtonActive: false,
        isMoreButtonBp: _.checkMatchWindowWidth('max', _.initials.moreButtonBp),
        isShowCardGetAdMinBp: _.checkMatchWindowWidth('min', _.initials.showCardGetAdMinBp),
        defaultCarouselDescriptionItemClass: _.$carouselDescription.parent().attr('class'),
        isMobileDevice: USAN.isMobile.isMobileDevice,
        isApple: USAN.isMobile.apple.device,
        itunesAppLink: (Drupal.settings.hasOwnProperty('usa') && Drupal.settings.usa.hasOwnProperty('itunesAppLink')) ? Drupal.settings.usa.itunesAppLink : '/app',
        isAndroid: USAN.isMobile.android.device,
        androidAppLink: (Drupal.settings.hasOwnProperty('usa') && Drupal.settings.usa.hasOwnProperty('androidAppLink')) ? Drupal.settings.usa.androidAppLink : '/app',
        appPageUrl: '/app'
      };

      // showCard
      _.showCard = {
        isOpen: false,
        inProgress: false
      };

      // init app
      _.init(true);
    }

    return usaCarouselLeft;

  }());

  /* --------------------------
   * Helper functionality
   ----------------------------*/

  // check Window Width
  usaCarouselLeft.prototype.checkMatchWindowWidth = function (widthName, bp) {
    // widthName - 'min' or 'max'; bp - breakpoint for check
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // setTimeout
  usaCarouselLeft.prototype.setTimeout = function (callback, delay) {

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);
  };

  // add || remove class
  usaCarouselLeft.prototype.addElemClass = function (elem, className, callback) {

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
  usaCarouselLeft.prototype.removeElemClass = function (elem, className, callback) {

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
  usaCarouselLeft.prototype.updateOptions = function () {

    var _ = this;

    _.$carouselItems = $(_.$mainWrap).find(_.initials.selectors.carouselItem);
    _.$carouselDescription = $(_.$mainWrap).find(_.initials.selectors.carouselDescription);
    _.options.carouselViewport = _.$carousel.width();
    _.options.isMobileDescriptionBp = _.checkMatchWindowWidth('max', _.initials.mobileDescriptionBp);
    _.options.isMoreButtonBp = _.checkMatchWindowWidth('max', _.initials.moreButtonBp);
    _.options.isShowCardGetAdminMinBp = _.checkMatchWindowWidth('max', _.initials.showCardGetAdminMinBp);
  };

  // addEvents
  usaCarouselLeft.prototype.addEvents = function () {

    var _ = this;

    // show card events
    if (_.initials.isShowCardCarousel) {
      // open click
      $(_.$carousel).on('click', '.' + _.initials.showCardOpenItemClass, function (e) {

        e.preventDefault();

        var $self = $(e.currentTarget);

        if (!_.options.isWindowLoad) {
          return;
        }

        if (_.showCard.inProgress) {
          return;
        }

        if (_.showCard.isOpen && $self.hasClass(_.initials.showCardOpenItemClassActive)) {
          _.closeShowCard();
        } else if (_.showCard.isOpen && !$self.hasClass(_.initials.showCardOpenItemClassActive)) {
          _.closeShowCard(function () {
            _.openShowCard($self);
          });
        } else if (!_.showCard.isOpen && !$self.hasClass(_.initials.showCardOpenItemClassActive)) {
          _.openShowCard($self);
        }
      });
      // close click
      $(_.$carousel).on('click', '.' + _.initials.showCardCloseItemClass, function (e) {

        e.preventDefault();

        if (_.options.isWindowLoad) {
          _.closeShowCard();
        }
      });
    }

    // add description click
    if (_.initials.isMobileDescription && _.initials.addMobileDescriptionClick) {
      $(_.$mainWrap).on('click', _.initials.selectors.carouselDescription, function (e) {
        if (_.options.isMobileDescriptionBp) {
          if (!_.options.isMobileDescriptionActive) {
            _.addElemClass(_.$mainWrap, _.initials.mainWrapActiveClassName, function () {
              _.usaSwiper.onResize(true);
              _.showGetAppLink();
              _.options.isMobileDescriptionActive = true;
            });
          } else if (_.options.isMobileDescriptionActive) {
            _.removeElemClass(_.$mainWrap, _.initials.mainWrapActiveClassName, function () {
              _.hideGetAppLink();
              _.options.isMobileDescriptionActive = false;
            });
          }
        }
      });
    }

    // add more button click
    if (_.initials.isMoreButtonCarousel) {
      $(_.$moreButton).on('click', function (e) {

        e.preventDefault();

        var $self = $(e.target);

        if (_.options.isMoreButtonBp) {
          if (!_.options.isMoreButtonActive) {
            _.removeElemClass($self, _.initials.moreButtonClassMore, null);
            _.addElemClass($self, _.initials.moreButtonClassClose, function () {
              _.showMoreBtnCarouselItems();
              _.options.isMoreButtonActive = true;
              refreshDescriptionLinesPromo();
          });
          } else if (_.options.isMoreButtonActive) {
            _.removeElemClass($self, _.initials.moreButtonClassClose, null);
            _.addElemClass($self, _.initials.moreButtonClassMore, function () {
              _.hideMoreBtnCarouselItems();
              try {
                $(_.$mainWrap).velocity("scroll", {duration: 1000, easing: "linear"});
              } catch (e) {

              }
              _.options.isMoreButtonActive = false;
            });
          }
        }
      });
    }

    _.$getApp.on('click', function (e) {
      e.preventDefault();

      console.info('click $getApp');

      if (_.options.isApple) {
        window.location = _.options.itunesAppLink;
      } else if (_.options.isAndroid) {
        window.location = _.options.androidAppLink;
      } else {
        window.location = _.options.appPageUrl;
      }
    });

    $(window)
        .load(function () {
          _.options.isWindowLoad = true;
        })
        .on('resize', function () {

          _.updateOptions();

          // show card
          if (_.initials.isShowCardCarousel && _.showCard.isOpen) {
            _.closeShowCard();
          }

          // description
          if (_.initials.isMobileDescription && _.options.isMobileDescriptionBp && !_.options.isMobileDescriptionInit) {
            _.onMobileCarouselDescription();
          } else if (_.initials.isMobileDescription && !_.options.isMobileDescriptionBp && _.options.isMobileDescriptionInit) {
            _.offMobileCarouselDescription();
          }

          // more button
          if (_.options.isCarouselInit && _.initials.isMoreButtonCarousel && _.options.isMoreButtonBp) {
            _.hideMoreBtnCarouselItems();
            _.destroySwiper();
          } else if (!_.options.isCarouselInit && _.initials.isMoreButtonCarousel && !_.options.isMoreButtonBp) {
            _.showMoreBtnCarouselItems();
            _.initSwiper();
          }

          // swiper
          if (_.options.isCarouselInit) {
            _.usaSwiper.params.slidesPerGroup = _.calcSlidesPerGroup(_.options.carouselViewport, _.initials.swiper.initialSlide);
            _.usaSwiper.update(true);
          }
        });
  };

  /* --------------------------
   * Get app link
   ----------------------------*/
  usaCarouselLeft.prototype.showGetAppLink = function () {

    var _ = this;

    if (_.options.isMobileDevice && _.$getApp.length > 0) {
      _.$getApp.show();
    }
  };
  usaCarouselLeft.prototype.hideGetAppLink = function () {

    var _ = this;

    if (_.options.isMobileDevice && _.$getApp.length > 0) {
      _.$getApp.hide();
    }
  };

  /* --------------------------
   * Show card functionality
   ----------------------------*/

  // openShowCard
  usaCarouselLeft.prototype.openShowCard = function (target) {

    var _ = this,
        $mainWrap, $carousel, $openBtn, $currentSlide, currentSlideIndex, $currentSlideNode, $socialIcons,
        slideGridTranslateX, slideSizeWidth, slideTranslateX, carouselSpeed, durationAnim, easingAnim,
        carouselDefaultTranslate, slideNewWidth, windowInnerWidth, browserName, widthDiff,
        isWindow_size_desktop_large, isWindow_size_desktop_large_1900, isWindow_size_desktop_1280,
        isWindow_size_tablet_1024, isWindow_size_mobile_480;

    // isWindow_size_tablet_portrait_768 = _.checkMatchWindowWidth('max', _.initials.showCardBp.window_size_tablet_portrait_768);

    _.showCard.inProgress = true;
    $mainWrap = _.$mainWrap;
    $carousel = _.$carousel;
    $openBtn = target;
    $currentSlide = target.closest('li');
    currentSlideIndex = $currentSlide.index();
    $currentSlideNode = $currentSlide.find('.node').eq(0);
    $socialIcons = $currentSlide.find(_.initials.showCardSocialIconsSelector);
    slideGridTranslateX = _.usaSwiper.slidesGrid[currentSlideIndex];
    slideSizeWidth = _.usaSwiper.slidesSizesGrid[currentSlideIndex];
    slideTranslateX = slideSizeWidth + slideGridTranslateX;
    carouselSpeed = _.usaSwiper.params.speed;
    durationAnim = _.initials.showCardOpenAnimeTime;
    easingAnim = _.initials.showCardOpenAnimeEasing;
    carouselDefaultTranslate = _.usaSwiper.getWrapperTranslate();
    slideNewWidth = _.initials.showCardOpenWidth.desktop_show_open_width;
    windowInnerWidth = window.innerWidth;
    isWindow_size_desktop_large = _.checkMatchWindowWidth('min', _.initials.showCardBp.window_size_desktop_large);
    isWindow_size_desktop_large_1900 = _.checkMatchWindowWidth('max', _.initials.showCardBp.window_size_desktop_large_1900);
    isWindow_size_desktop_1280 = _.checkMatchWindowWidth('max', _.initials.showCardBp.window_size_desktop_1280);
    isWindow_size_tablet_1024 = _.checkMatchWindowWidth('max', _.initials.showCardBp.window_size_tablet_1024);
    isWindow_size_mobile_480 = _.checkMatchWindowWidth('max', _.initials.showCardBp.window_size_mobile_480);
    browserName = browserDetect();
    widthDiff = windowInnerWidth - $(window).innerWidth();

    if (isWindow_size_desktop_large) {
      slideTranslateX = slideTranslateX - _.initials.showCardMargin.show_carousel_margin;
      if (browserName === 'safari' && windowInnerWidth - widthDiff >= _.initials.showCardBp.window_size_desktop_large) {
        slideNewWidth = _.initials.showCardOpenWidth.desktop_show_open_width_large;
      } else if (browserName !== 'safari') {
        if (windowInnerWidth >= _.initials.showCardBp.window_size_desktop_large) {
          slideNewWidth = _.initials.showCardOpenWidth.desktop_show_open_width_large;
        }
      }
    } else if (isWindow_size_mobile_480) {
      slideNewWidth = (windowInnerWidth - 2 * _.initials.showCardMargin.show_carousel_margin_480 + slideSizeWidth) + (windowInnerWidth - document.body.clientWidth);
      slideTranslateX = slideTranslateX - (_.initials.showCardMargin.show_carousel_margin_480 / 2);
    } else if (isWindow_size_tablet_1024) {
      slideNewWidth = windowInnerWidth - 2 * _.initials.showCardMargin.show_carousel_margin_1024 + slideSizeWidth;
      slideTranslateX = slideTranslateX - (_.initials.showCardMargin.show_carousel_margin_480 / 2);
    } else if (isWindow_size_desktop_1280) {
      slideNewWidth = windowInnerWidth - 2 * _.initials.showCardMargin.show_carousel_margin + slideSizeWidth;
    } else if (isWindow_size_desktop_large_1900) {
      slideTranslateX = slideTranslateX - _.initials.showCardMargin.show_carousel_margin - (windowInnerWidth - slideNewWidth) / 2;
    }

    // stop carousel
    _.usaSwiper.lockSwipeToNext();
    _.usaSwiper.lockSwipeToPrev();
    _.usaSwiper.lockSwipes();
    _.usaSwiper.disableMousewheelControl();
    _.usaSwiper.disableKeyboardControl();

    // set css
    $openBtn.css('max-width', slideSizeWidth + 'px');
    $carousel.css({'transition-duration': carouselSpeed + 'ms'});

    // set carousel transition
    _.usaSwiper.setWrapperTranslate('-' + slideTranslateX, 0, 0);

    // show slide inner content
    $currentSlide.velocity({width: slideNewWidth}, {
      duration: durationAnim,
      delay: carouselSpeed,
      easing: easingAnim,
      progress: function (elements, complete, remaining, start, tweenValue) {
        if (complete * 100 >= 20) {
          if (_.options.isShowCardGetAdMinBp && !$currentSlideNode.hasClass(_.initials.showCardCarouselItemClassAdvertEnable)) {
            try {
              Drupal.behaviors.mpsSponsorShip.execSponsoredBlock($currentSlideNode);
            } catch (e) {
              console.log('error show-card: execSponsoredBlock');
            }
          }
        }
        if (complete * 100 >= 60 && !$currentSlide.hasClass('active')) {
          _.addElemClass($currentSlide, _.initials.showCardCarouselItemClassActive, null);
        }
      },
      complete: function (elements) {
        _.showCard.inProgress = false;
        checkDescriptionLines();
        refreshDescriptionLinesPromo();
      }
    });

    // add class
    _.addElemClass($openBtn, _.initials.showCardOpenItemClassActive, null);
    _.addElemClass($currentSlideNode, _.initials.showCardCarouselItemNodeClassOpen, null);
    _.addElemClass($mainWrap, _.initials.showCardCarouselClassStop, null);
    _.addElemClass($carousel, _.initials.showCardCarouselClassStop, null);
    $socialIcons.show();

    // set showCard params
    _.showCard.isOpen = true;
    _.showCard.$currentSlide = $currentSlide;
    _.showCard.$currentSlideNode = $currentSlideNode;
    _.showCard.$openBtn = $openBtn;
    _.showCard.$socialIcons = $socialIcons;
    _.showCard.currentSlideIndex = currentSlideIndex;
    _.showCard.slideGridTranslateX = slideGridTranslateX;
    _.showCard.slideSizeWidth = slideSizeWidth;
    _.showCard.slideTranslateX = slideTranslateX;
    _.showCard.carouselDefaultTranslate = carouselDefaultTranslate;
    _.showCard.carouselSpeed = carouselSpeed;
    _.showCard.durationAnim = durationAnim;

    try {
      Drupal.behaviors.omniture_tracking.showCardClick($currentSlideNode);
    } catch (e) {
      console.log('error show-card: showCardClick');
    }
  };

  // closeShowCard
  usaCarouselLeft.prototype.closeShowCard = function (callbackComplete) {

    var _ = this,
        $mainWrap = _.$mainWrap,
        $carousel = _.$carousel,
        $openBtn = _.showCard.$openBtn,
        $currentSlide = _.showCard.$currentSlide,
        $currentSlideNode = _.showCard.$currentSlideNode,
        $socialIcons = _.showCard.$socialIcons,
        slideSizeWidth = _.showCard.slideSizeWidth,
        carouselDefaultTranslate = _.showCard.carouselDefaultTranslate,
        carouselSpeed = _.showCard.carouselSpeed,
        durationAnim = _.showCard.durationAnim;

    // set carousel transition-duration
    $carousel.css({
      'transition-duration': carouselSpeed + 'ms'
    });

    $currentSlide.velocity({width: slideSizeWidth + 'px'}, {
      duration: durationAnim,
      easing: _.initials.showCardCloseAnimeEasing,
      progress: function (elements, complete, remaining, start, tweenValue) {
        if (complete * 100 >= 10 && $currentSlide.hasClass(_.initials.showCardCarouselItemClassActive)) {
          $socialIcons.hide();
          _.removeElemClass($currentSlideNode, _.initials.showCardCarouselItemNodeClassOpen, null);
          _.removeElemClass($currentSlide, _.initials.showCardCarouselItemClassActive, null);
        }
        // if (complete * 100 == 100) {
        //
        // }
      },
      complete: function (elements) {

        // remove attr
        $currentSlide.removeAttr('style');
        $openBtn.removeAttr('style');

        // set carousel translate
        _.usaSwiper.setWrapperTranslate(carouselDefaultTranslate);

        // unlock slider events
        _.usaSwiper.unlockSwipeToNext();
        _.usaSwiper.unlockSwipeToPrev();
        _.usaSwiper.unlockSwipes();
        _.usaSwiper.enableMousewheelControl();
        _.usaSwiper.enableKeyboardControl();
        _.usaSwiper.onResize(true);

        // remove class
        _.removeElemClass($openBtn, _.initials.showCardOpenItemClassActive, null);
        _.removeElemClass($mainWrap, _.initials.showCardCarouselClassStop, null);
        _.removeElemClass($carousel, _.initials.showCardCarouselClassStop, null);

        // reset showCard object
        _.showCard = {
          isOpen: false,
          inProgress: false
        };

        if (typeof callbackComplete === 'function') {
          callbackComplete();
        }
      }
    });
  };

  /* --------------------------
   * Description functionality
   ----------------------------*/

  // update Description Sponsored Block
  usaCarouselLeft.prototype.getDescriptionSponsored = function () {

    var _ = this;

    if ($(_.$mainWrap).data('block-name') == "Chrisley Knows Best Carousel") {

      $(_.$carouselDescriptionSponsored).empty();

      _.setTimeout(function () {
        try {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock(_.$carouselDescription, _.initials.descriptionSponsoredStyle);
        } catch (e) {
          console.log('error description sponsored: initSponsoredBlock');
        }
      }, 200);
    }

  };

  // onMobileCarouselDescription
  usaCarouselLeft.prototype.onMobileCarouselDescription = function () {

    var _ = this;

    if (!_.options.isMobileDescriptionInit) {
      $(_.$carouselDescription).insertBefore($(_.$carouselWrap));
      $(_.$carouselItems).eq(0).remove();
      _.updateOptions();
      // if (_.initials.isDescriptionSponsored) {
      //   _.getDescriptionSponsored();
      // }
      _.options.isMobileDescriptionInit = true;
    }
  };

  // offMobileCarouselDescription
  usaCarouselLeft.prototype.offMobileCarouselDescription = function () {

    var _ = this;

    if (_.options.isMobileDescriptionInit) {
      $(_.$carousel).prepend($('<li>', {
        class: _.options.defaultCarouselDescriptionItemClass,
        html: _.$carouselDescription
      }));
      _.removeElemClass(_.$mainWrap, _.initials.mainWrapActiveClassName, null);
      _.updateOptions();
      // if (_.initials.isDescriptionSponsored) {
      //   _.getDescriptionSponsored();
      // }
      _.options.isMobileDescriptionInit = false;
    }
  };

  /* --------------------------
   * More button functionality
   ----------------------------*/
  usaCarouselLeft.prototype.showMoreBtnCarouselItems = function () {
    var _ = this;
    $(_.$carouselItems).removeClass(_.initials.moreButtonCarouselItemsClassHidden);
  };

  usaCarouselLeft.prototype.hideMoreBtnCarouselItems = function () {
    var _ = this;
    $(_.$carouselItems).filter(':gt(' + _.initials.moreButtonHiddenItemsGt + ')').addClass(_.initials.moreButtonCarouselItemsClassHidden);
  };

  /* ---------------------------
   * Carousel functionality
   ----------------------------*/

  // hide carousel controls
  usaCarouselLeft.prototype.hideCarouselControlButtons = function () {
    var _ = this;
    _.addElemClass(_.$prevArrow, _.initials.swiper.buttonDisabledClass, null);
    _.addElemClass(_.$nextArrow, _.initials.swiper.buttonDisabledClass, null);
  };

  // show carousel controls
  usaCarouselLeft.prototype.showCarouselControlButtons = function () {
    var _ = this;
    _.removeElemClass(_.$prevArrow, _.initials.swiper.buttonDisabledClass, null);
    _.removeElemClass(_.$nextArrow, _.initials.swiper.buttonDisabledClass, null);
  };

  // calcSlideItemToScroll
  usaCarouselLeft.prototype.calcSlidesPerGroup = function (viewport, currentItemIndex) {

    var _ = this,
        $carouselItems = _.$carouselItems,
        carouselItemsLength = _.options.carouselItemsLength,
        sumWidth = 0,
        slidesPerGroup = 0,
        i;
    if (_.initials.isMobileDescription && _.options.isMobileDescriptionBp) {
      slidesPerGroup = 1;
    } else {
      for (i = currentItemIndex; i < carouselItemsLength; i++) {

        sumWidth = sumWidth + $carouselItems.eq(i).outerWidth(true);

        if (sumWidth > viewport) {
          break;
        } else {
          slidesPerGroup += 1;
        }
      }
    }

    return slidesPerGroup;
  };

  // destroy swiper
  usaCarouselLeft.prototype.destroySwiper = function () {

    var _ = this;
    if (_.options.isCarouselInit) {
      _.usaSwiper.destroy(true, true);
      _.hideCarouselControlButtons();
    }
  };

  // init swiper
  usaCarouselLeft.prototype.initSwiper = function () {

    var _ = this;

    if (_.initials.isMoreButtonCarousel && _.options.isMoreButtonBp) {
      _.hideMoreBtnCarouselItems();
      return;
    }

    _.initials.swiper.onInit = function (sw) {
      _.options.isCarouselInit = true;
    };
    _.initials.swiper.onDestroy = function () {
      _.options.isCarouselInit = false;
    };

    _.initials.swiper.onSlideChangeEnd = function (sw) {
      try {
        Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(_.$carouselItems);
      } catch (e) {
        _.consoleCustom('error usaRightRailCarousel: galleryLazyLoadScroll');
      }
    };

    _.initials.swiper.nextButton = _.$nextArrow;
    _.initials.swiper.prevButton = _.$prevArrow;
    _.initials.swiper.slidesPerGroup = _.calcSlidesPerGroup(_.options.carouselViewport, _.initials.swiper.initialSlide);
    _.usaSwiper = new Swiper(_.$carouselWrap, _.initials.swiper);
  };

  /* --------------------------
   * Init app
   ----------------------------*/
  usaCarouselLeft.prototype.init = function (creation) {

    var _ = this,
        $mainWrap = _.$mainWrap,
        initClassName = _.options.initClassName;

    if (creation && !$($mainWrap).hasClass(initClassName)) {
      $($mainWrap).addClass(initClassName);
      if (_.initials.isMobileDescription && _.options.isMobileDescriptionBp && !_.options.isMobileDescriptionInit) {
        _.onMobileCarouselDescription();
      }
      if (_.initials.isDescriptionSponsored) {
        try {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock(_.$carouselDescription, _.initials.descriptionSponsoredStyle);
        } catch (e) {
          console.log('error description sponsored: initSponsoredBlock');
        }
      }
      _.initSwiper();
      _.addEvents();
      _.addElemClass(_.$mainWrap, _.initials.mainWrapReadyClassName, null); // add block class ready
    }
  };

  //==================================
  // create jQuery method usaCarouselLeft
  //==================================
  $.fn.usaCarouselLeft = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaCarouselLeft = new usaCarouselLeft(_[i], opt);
      else
        ret = _[i].usaCarouselLeft[opt].apply(_[i].usaCarouselLeft, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  // document ready
  $(document).ready(function () {

    var $body = $(document.body);

    // home page
    if ($body.hasClass('front')) {

      if ($('.featured-block').attr('data-url')) {
        var back_url = $('.featured-block').attr('data-url');
        $('.featured-block').css({'background': 'url(' + back_url + ') no-repeat', 'background-size': 'cover'});
      }

      // shows card carousel
      $('#block-usanetwork-home-usanetwork-home-shows-queue .carousel-block').usaCarouselLeft({
        isShowCardCarousel: true,
        isMobileDescription: true,
        mobileDescriptionBp: 768,
        addMobileDescriptionClick: false
      });

      // full episodes carousel
      $('#block-usanetwork-mpx-video-usa-mpx-video-home-full-latest .carousel-block').usaCarouselLeft({
        isMobileDescription: true,
        mobileDescriptionBp: 768,
        addMobileDescriptionClick: false,
        isMoreButtonCarousel: true,
        moreButtonBp: 768,
        moreButtonHiddenItemsGt: ($('#block-usanetwork-mpx-video-usa-mpx-video-home-full-latest .full-episodes-carousel').hasClass('carousel_1_rows')) ? 3 : 1
      });

      // featured carousel
      $('#block-usanetwork-blocks-usanetwork-featured-carousel .carousel-block').usaCarouselLeft({
        isMobileDescription: true,
        mobileDescriptionBp: 768,
        addMobileDescriptionClick: false,
        isMoreButtonCarousel: true,
        moreButtonBp: 768,
        moreButtonHiddenItemsGt: 1
      });

      // social carousel
      $('#block-usanetwork-blocks-usanetwork-social-carousel .carousel-block').usaCarouselLeft({
        isMobileDescription: true,
        mobileDescriptionBp: 768,
        addMobileDescriptionClick: false,
        isMoreButtonCarousel: true,
        moreButtonBp: 768,
        moreButtonHiddenItemsGt: 1,
        slidesOffsetBefore: 60,
        slidesOffsetAfter: 0
      });
    }

    // page-videos
    if ($body.hasClass('page-videos')) {
      $('.carousel-block-left').each(function (i, el) {
        $(this).usaCarouselLeft({
          isMobileDescription: true,
          mobileDescriptionBp: 480,
          addMobileDescriptionClick: true,
          isDescriptionSponsored: true
        });
      });
    }
  });
}(jQuery));
