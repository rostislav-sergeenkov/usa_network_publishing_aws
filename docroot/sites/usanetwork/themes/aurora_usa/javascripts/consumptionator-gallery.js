//
// init gallery
// $('el').usaGallery({
//
//    usaGallery config
//
//    gallery: {
//      slick config
//      http://kenwheeler.github.io/slick/
//    }
// });
// dependency:
//  1. mousewheel
//

(function ($) {
  'use strict';

  var usaGallery = window.usaGallery || {};

  usaGallery = (function () {

    function usaGallery(element, settings) {

      var _ = this;

      // info about usaGallery App
      _.info = {
        project: 'usanetwork.com',
        slick: '1.5.5',
        ver: '0.1.0'
      };

      _.defaults = {

        // elements selector
        galleryList: '.gallery-list',
        gallerySlides: '.slide',
        galleryPagerWrap: {
          selector: '.gallery-pager-wrap',
          styles: {
            desktop: {},
            mobile: {}
          }
        },
        galleryPager: {
          selector: '.gallery-pager',
          styles: {
            desktop: {},
            mobile: {}
          }
        },
        pagerDots: {
          selector: 'li',
          number: 10,
          styles: {
            desktop: {
              height: 15,
              width: 15
            },
            mobile: {
              height: 10,
              width: 10
            }
          }
        },
        prevArrow: '.slide-prev',
        nextArrow: '.slide-next',
        slideCounter: '.slider-counter .slide-index',
        shareBar: '.field-name-field-gigya-share-bar > div',
        // interstitial selectors
        interstitialWrap: '.interstitial-wrap',
        interstitialBlock: '.interstitial-block',
        interstitialNext: '.interstitial-next',

        // interstitial params
        interstitialInitPages: ['all'], // default all, body classes for init interstitial ["node-type-media-gallery", "node-type-consumpt-post", "node-type-tv-episode"]

        // params
        slideCounterSeparator: ' of ',
        pagerPositionBp: 1024,
        resizeTimeOut: 50,
        isMobile: usa_deviceInfo.mobileDevice,

        // init components
        initCheckLocationHash: true,
        initAdobeTracking: true,
        initSlidesCounter: true,
        initMouseWhell: true,
        initResize: true,

        // global init gallery
        init: true,

        // gallery config
        gallery: {
          // prams
          autoplay: false,
          infinite: false,
          speed: 400,
          initialSlide: 0,
          slidesToShow: 1,
          adaptiveHeight: true,
          fade: true,
          cssEase: 'linear',
          swipe: usa_deviceInfo.mobileDevice,
          // nav
          dots: true,
          dotsClass: 'gallery-pager',
          customPaging: _.createCustomPaging
        }
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // elements
      _.$body = $(document.body);
      _.$galleryWrap = $(element);
      _.$gallery = $(element).find(_.options.galleryList);
      _.$gallerySlides = $(element).find(_.options.gallerySlides);
      _.$galleryPagerWrap = $(element).find(_.options.galleryPagerWrap.selector);
      _.$interstitialWrap = $(element).find(_.options.interstitialWrap);
      _.$interstitialBlock = $(element).find(_.options.interstitialBlock);
      _.$interstitialNext = $(element).find(_.options.interstitialNext);
      _.$shareBar = $(element).find(_.options.shareBar);
      _.$prevArrow = $(element).find(_.options.prevArrow);
      _.$nextArrow = $(element).find(_.options.nextArrow);
      _.$appendDots = $(element).find(_.options.galleryPagerWrap.selector);

      // data attributes value
      _.data = {
        galleryId: _.$galleryWrap.data('id'),
        gallerySharingPath: _.$galleryWrap.data('path'),
        interstitialSlideCounter: _.$interstitialWrap.data('slides-counter')
      };

      // check status Interstitial Ad
      _.options.initInterstitial = _.insertInterstitial.checkBodyClass(_);

      // update gallery params
      _.options.gallery.initialSlide = _.checkLocationHashParams(_);
      _.options.gallery.prevArrow = _.$prevArrow;
      _.options.gallery.nextArrow = _.$nextArrow;
      _.options.gallery.appendDots = _.$galleryPagerWrap;

      // init app
      _.init(_.options.init);
    }

    return usaGallery;

  }());

  //=============================
  // additional functionality
  //=============================

  // AdobeTracking
  usaGallery.prototype.callAdobeTracking = function () {
    if (typeof s_gi != 'undefined') {

      if ($('body').hasClass('node-type-tv-episode')) {
        if (Drupal.settings.umbel_settings !== undefined) {
          var showName = Drupal.settings.umbel_settings.usa_umbel_param_1,
              pageName = Drupal.settings.umbel_settings.usa_umbel_param_2;
        }

        s.linkTrackVars = 'events,prop3,prop4,prop5';
        s.prop3 = 'Gallery';
        s.prop4 = showName.trim() + ' : ' + pageName.trim();
        s.prop5 = 'Episodic Gallery';
      }

      void (s.t());
    }
  };

  // mps advert
  usaGallery.prototype.insertInterstitial = {

    checkBodyClass: function (_this) {

      var _ = _this,
          $body = _.$body,
          adWrapLength = _.$interstitialWrap.length,
          arrInitPages = _.options.interstitialInitPages;

      if (arrInitPages[0] === 'all' && adWrapLength > 0) {
        return true;
      }

      return arrInitPages.some(function (className) {
        return $body.hasClass(className.trim()) && adWrapLength > 0;
      });
    },

    showInterstitial: function (_this, refresh) {

      var _ = _this,
          adWrap = _.$interstitialWrap,
          adBlock = _.$interstitialBlock,
          adNext = _.$interstitialNext,
          adBlockId = adBlock.attr('id'),
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.galleryadrepeat;

      if (refresh) {
        Drupal.behaviors.mpsAdvert.mpsRefreshAd(nameAd);
      } else {
        Drupal.behaviors.mpsAdvert.mpsInsertInterstitial('#' + adBlockId);
      }

      var showNextTimeout = setTimeout(function () {
        adNext.show();
      }, 5000);

      adWrap.velocity("fadeIn", {
        duration: 500,
        easing: "linear",
        begin: function (element) {
          $(element).addClass('active');
        }
      });

      if (!mps) {
        return;
      }

      mps.adviewCallback = function (eo) {
        if (eo._mps._slot.indexOf(nameAd) === 0) {
          adNext.show();
          clearInterval(showNextTimeout);
        }
      };
    },
    hideInterstitial: function (_this) {

      var _ = _this,
          adWrap = _.$interstitialWrap,
          adNext = _.$interstitialNext;

      adWrap.velocity("fadeOut", {
        duration: 100,
        easing: "linear",
        complete: function (element) {
          $(element).removeClass('active');
          adNext.hide();
        }
      })
    }
  };

  // gigyaSharebar
  usaGallery.prototype.gigyaSharebar = function (currentSlide) {

    if (typeof Drupal.gigya != 'undefined') {

      var _ = this,
          galleryId = _.data.galleryId,
          gallerySharingPath = _.data.gallerySharingPath,
          $gallery = _.$gallery,
          $sharebar = _.$shareBar,
          $slide = $gallery.find('.slick-active'),
          description = $slide.find('.slide-info .description').text().trim(),
          imageUrl = $slide.find('.asset-img img'),
          link_back = (_.data.gallerySharingPath == '')? window.location.href.split('#')[0]: _.data.gallerySharingPath,
          slideIndex;

      if ($sharebar.length > 0) {

        if (link_back == '' && $('meta[property="og:url"]').length > 0) {
          link_back = $('meta[property="og:url"]').attr('content');
        }

        if (description == '' && $('meta[property="og:description"]').length > 0) {
          description = $('meta[property="og:description"]').attr('content');
        }

        if (imageUrl == '' && $('meta[property="og:image"]').length > 0) {
          imageUrl = $('meta[property="og:image"]').attr('content');
        }

        if (galleryId) {
          galleryId = galleryId + "-";
        }

        if (currentSlide > 0 || $gallery.closest('.description-item[data-tab="actor-bio"]').length > 0) {
          slideIndex = '#' + galleryId + (currentSlide + 1);
        } else {
          slideIndex = '';
        }

        if ($('body').hasClass('page-node-microsite')) {
          return;
        } else {
          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
              var url = window.location.href.split('#')[0];
              sharebar.gigyaSharebar.ua.linkBack = link_back + slideIndex;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = imageUrl.attr('data-src-share') ? imageUrl.attr('data-src-share') : imageUrl.attr('src');
              sharebar.gigyaSharebar.ua.description = description;
              Drupal.gigya.showSharebar(sharebar);
            }
          });
        }
      }
    }
  };

  //=============================
  // Gallery functionality helper
  //=============================

  usaGallery.prototype.createCustomPaging = function (slick, index) {

    var $slide = $(slick.$slides[index].innerHTML),
        img = $slide.find('img')[0].outerHTML,
        showColorPager = ($('body[class*=" show-"]').length > 0) ? 'show-color' : '';

    return '<div class="pager-item-inner" data-slick-index="' + index + '"><div class="' + showColorPager + ' base-dot-color"></div>' + img + '</div>';
  };

  usaGallery.prototype.createSlidesCounter = function (slick) {

    var _ = this,
        $slides = slick.$slides,
        slideCount = slick.slideCount,
        separator = _.options.slideCounterSeparator;

    $($slides).each(function (index, el) {

      var $slideCounter = $(el).find(_.options.slideCounter),
          slickIndex = parseInt(el.dataset.slickIndex) + 1;

      $slideCounter.text(slickIndex + separator + slideCount);
    });
  };

  //make pager position
  usaGallery.prototype.createPagerPosition = function (_this) {

    var _ = _this,
        pagerWrapStyles = _.options.galleryPagerWrap.styles,
        pagerStyles = _.options.galleryPager.styles,
        numberDots = _.options.pagerDots.number,
        itemHeightDesktop = _.options.pagerDots.styles.desktop.height,
        itemHeightMobile = _.options.pagerDots.styles.mobile.height,
        itemWidthMobile = _.options.pagerDots.styles.mobile.width,
        itemLength = _.options.pagerDots.length;

    if (!_.options.gallery.dots) {
      return;
    }

    if (itemLength >= numberDots) {
      pagerWrapStyles.desktop.height = itemHeightDesktop * 2 * numberDots + itemHeightDesktop;
      pagerWrapStyles.mobile.width = itemWidthMobile * 2 * numberDots;
    } else if (itemLength < numberDots) {
      pagerWrapStyles.desktop.height = itemHeightDesktop * 2 * itemLength + itemHeightDesktop;
      pagerWrapStyles.mobile.width = itemWidthMobile * 2 * itemLength;
    }

    pagerWrapStyles.desktop.marginTop = -(pagerWrapStyles.desktop.height / 2);
    pagerWrapStyles.mobile.marginRight = -(pagerWrapStyles.mobile.width / 2);
    pagerWrapStyles.mobile.height = itemHeightMobile;

    pagerStyles.mobile.width = itemWidthMobile * 2 * itemLength;

    return _;
  };

  usaGallery.prototype.setPagerPosition = function (_this) {

    var _ = _this,
        $pagerWrap = _.$galleryPagerWrap,
        $pager = _.$galleryPager,
        pagerPositionBp = _.options.pagerPositionBp,
        pagerWrapStyles = _.options.galleryPagerWrap.styles,
        pagerStyles = _.options.galleryPager.styles,
        statusBp = _.checkWindowWidth(pagerPositionBp);

    if (!_.options.gallery.dots) {
      return;
    }

    // vertical version
    if (!statusBp && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {
      $pagerWrap.css({
        marginRight: '',
        marginTop: pagerWrapStyles.desktop.marginTop,
        height: pagerWrapStyles.desktop.height,
        width: ''
      });
      $pager.css({
        left: '',
        width: '100%'
      });
    }

    // horizontal version
    if (statusBp || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {
      $pagerWrap.css({
        marginTop: '',
        marginRight: pagerWrapStyles.mobile.marginRight,
        height: pagerWrapStyles.mobile.height,
        width: pagerWrapStyles.mobile.width
      });
      $pager.css({
        top: '',
        width: pagerStyles.mobile.width
      });
    }
  };

  usaGallery.prototype.movePagerItems = function (_this, slideIndex) {

    var _ = _this,
        $body = _.$body,
        pagerPositionBp = _.options.pagerPositionBp,
        statusBp = _.checkWindowWidth(pagerPositionBp);

    if (!_.options.gallery.dots) {
      return;
    }

    if (statusBp || $body.hasClass('node-type-person') || $body.hasClass('node-type-post')) {
      _.movePagerHorizontal(_this, slideIndex);
    } else if (!statusBp && !$body.hasClass('node-type-person') && !$body.hasClass('node-type-post')) {
      _.movePagerVertical(_this, slideIndex);
    }
  };

  usaGallery.prototype.movePagerHorizontal = function (_this, slideIndex) {

    var _ = _this,
        $pager = _.$galleryPager,
        itemLength = _.options.pagerDots.length,
        numberDots = _.options.pagerDots.number,
        itemWidth = _.options.pagerDots.styles.mobile.width,
        pagerItemActiveIndex = slideIndex || parseInt(_.$galleryPagerWrap.find('li.slick-active .pager-item-inner').data('slick-index')),
        left = 0;

    if (itemLength >= numberDots) {
      if (pagerItemActiveIndex > 3) {
        left = pagerItemActiveIndex * (itemWidth * 2) - (itemWidth * 2) * 4;
        $pager.css('left', -left + 'px');
      } else if (pagerItemActiveIndex <= 3) {
        $pager.css('left', 0);
      }
    }
  };

  usaGallery.prototype.movePagerVertical = function (_this, slideIndex) {

    var _ = _this,
        $pagerItem = _.$pagerItems.eq(0),
        itemLength = _.options.pagerDots.length,
        itemHeight = _.options.pagerDots.styles.desktop.height,
        numberDots = _.options.pagerDots.number,
        pagerItemActiveIndex = slideIndex || parseInt(_.$galleryPagerWrap.find('li.slick-active .pager-item-inner').data('slick-index')),
        marginTop;

    if (itemLength >= numberDots) {
      if (pagerItemActiveIndex > 3) {
        marginTop = pagerItemActiveIndex * (itemHeight * 2) - (itemHeight * 2) * 4;
        $pagerItem.css('margin-top', -marginTop + 'px');
      } else if (pagerItemActiveIndex <= 3) {
        $pagerItem.css('margin-top', 0);
      }
    }
  };

  usaGallery.prototype.checkWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaGallery.prototype.checkLocationHashParams = function (_this) {

    var _ = _this,
        $body = _.$body,
        $gallerySlides = _.$gallerySlides,
        galleryId = _.data.galleryId,
        slidesCount = $gallerySlides.last().index(),
        urlHash = window.location.hash,
        params = (urlHash.substr(1)).split("-"),
        paramsLength = params.length,
        initialSlide = _.options.gallery.initialSlide, // default value
        initCheckLocationHash = _.options.initCheckLocationHash,
        paramGalleryId, paramSlide;

    if (urlHash && initCheckLocationHash) {

      switch (paramsLength) {

        case 1:
          paramSlide = parseInt(params[0]);
          initialSlide = (paramSlide || 1) - 1;
          break;

        case 2:
          paramGalleryId = parseInt(params[0]);
          paramSlide = parseInt(params[1]);

          if (galleryId === paramGalleryId) {
            initialSlide = (paramSlide || 1) - 1;
          }
          if ($body.hasClass('node-type-person') && $('[data-tab="actor-bio"] .gallery-wrapper[data-id="' + params[0] + '"]').length > 0) {
            $('[data-tab$="-bio"]').removeClass('active');
            $('[data-tab="actor-bio"]').addClass('active');
          }
          break;

        default:
          initialSlide = _.options.gallery.initialSlide;
          break;
      }
    }

    if (initialSlide > slidesCount) {
      initialSlide = 0;
    }

    return initialSlide;
  };

  usaGallery.prototype.addMouseWhell = function (slick) {

    var _ = this,
        pagerPositionBp = _.options.pagerPositionBp,
        elem = _.$gallery,
        slideCount = slick.slideCount;

    elem.mousewheel(function (event, delta, deltaX, deltaY) {

      var slickCurrentSlide = elem.slick('slickCurrentSlide'),
          statusBp = _.checkWindowWidth(pagerPositionBp);

      if (statusBp) {
        return;
      }

      if (delta > 0) {
        elem.slick('slickPrev');
        if (slickCurrentSlide != 0) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
      if (deltaY < 0) {
        elem.slick('slickNext');
        if (slickCurrentSlide + 1 < slideCount) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    });
  };

  usaGallery.prototype.resize = function (_this) {

    var _ = _this,
        pagerPositionBp = _.options.pagerPositionBp,
        resizeTime = _.options.resizeTimeOut,
        resizeTimeOut;

    $(window).on('resize', function () {

      var $gallery = _.$gallery,
          statusBp = _.checkWindowWidth(pagerPositionBp),
          currentSlide = _.$gallery.slick('slickCurrentSlide');

      clearTimeout(resizeTimeOut);

      resizeTimeOut = setTimeout(function () {
        if (statusBp && !$gallery.hasClass('mobile')) {
          $gallery.addClass('mobile');
          _.setPagerPosition(_);
          _.movePagerItems(_, currentSlide);
        } else if (!statusBp && $gallery.hasClass('mobile')) {
          $gallery.removeClass('mobile');
          _.setPagerPosition(_);
          _.movePagerItems(_, currentSlide);
        }
      }, resizeTime);
    });
  };

  usaGallery.prototype.updateGalleryElem = function (_this) {

    var _ = _this,
        element = _.$galleryWrap;

    if (!_.options.gallery.dots) {
      return;
    }

    _.$galleryPager = $(element).find(_.options.galleryPager.selector);
    _.$pagerItems = $(_.$galleryPager).find(_.options.pagerDots.selector);
    _.options.pagerDots.length = _.$pagerItems.length;

    return _;
  };

  usaGallery.prototype.addSlickEventsCallBacks = function () {

    var _ = this,
        $gallery = _.$gallery,
        initInterstitial = _.options.initInterstitial,
        initAdobeTracking = _.options.initAdobeTracking,
        initSlidesCounter = _.options.initSlidesCounter,
        initMouseWhell = _.options.initMouseWhell,
        initResize = _.options.initResize,
        initialSlide = _.options.gallery.initialSlide,
        adSlidesCount = _.data.interstitialSlideCounter,
        adCounter = 0,
        refreshAD = false;

    _.$gallery
        .on('init', function (event, slick) {

          $gallery.addClass('ready');

            _.updateGalleryElem(_);
            _.createPagerPosition(_);
            _.setPagerPosition(_);
            _.movePagerItems(_, initialSlide);

          if (initSlidesCounter) {
            _.createSlidesCounter(slick);
          }
          if (initMouseWhell) {
            _.addMouseWhell(slick);
          }
          if (initResize) {
            _.resize(_);
          }
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

          // Interstitial
          if (initInterstitial) {
            // advert counter up +1
            adCounter += 1;
            // if advertCounter = slidesCount fire show gallery advert
            if (adCounter === adSlidesCount) {
              // reset advert counter
              adCounter = 0;
              // show gallery ad
              _.insertInterstitial.showInterstitial(_, refreshAD);
              refreshAD = true;
            }
          }

          if (initAdobeTracking) {
            _.callAdobeTracking();
          }
        })
        .on('afterChange', function (event, slick, currentSlide) {

          _.gigyaSharebar(currentSlide);
          _.movePagerItems(_, currentSlide);

          if (_.$body.hasClass('node-type-media-gallery')) {
            Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
          }
          if (_.$body.hasClass('node-type-tv-episode') || _.$body.hasClass('node-type-consumpt-post')) {
            Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox]);
            if (!$('.region-header').hasClass('sticky-shows-submenu')) {
              Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
            }
          }
        });

    _.$interstitialNext.on('click', function () {
      _.insertInterstitial.hideInterstitial(_);
    });
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaGallery.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$gallery.hasClass('gallery-initialized')) {

      _.addSlickEventsCallBacks();
      _.$gallery
          .slick(_.options.gallery)
          .addClass('gallery-initialized');
    }
  };

  //================================
  // create jQuery method usaGallery
  //================================
  $.fn.usaGallery = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaGallery = new usaGallery(_[i], opt);
      else
        ret = _[i].usaGallery[opt].apply(_[i].usaGallery, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {

    if ($('body').hasClass('node-type-media-gallery') || $('body').hasClass('node-type-tv-episode') ||
        $('body').hasClass('node-type-consumpt-post') || $('.gallery-wrapper').parent().hasClass('view-mode-inline_content')) {

      if ($('.gallery-wrapper').length == 0) {
        return false;
      }

      var gallery = [];

      $('.gallery-wrapper').each(function (i, el) {
        $(el).usaGallery();
      });
    }
  });

})(jQuery);
