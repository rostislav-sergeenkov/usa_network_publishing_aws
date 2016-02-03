// http://kenwheeler.github.io/slick/
// init gallery
// $('el').usaGallery({
//
//    usaGallery config
//
//    gallery: {
//      slick config
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
        galleryPagerWrap: '.gallery-pager-wrap',
        prevArrow: '.slide-prev',
        nextArrow: '.slide-next',
        slideCounter: '.slider-counter .slide-index',
        shareBar: '.field-name-field-gigya-share-bar > div',
        // interstitial selectors
        interstitialWrap: '.interstitial-wrap',
        interstitialBlock: '.interstitial-block',
        interstitialNext: '.interstitial-next',


        // params
        slideCounterSeparator: ' of ',

        // breakpoint to change galleryPagerWrap position
        pagerPositionBp: 1024,
        pagerDirection: {
          horiz: 'horizontal',
          vert: 'vertical'
        },

        // status for init components
        initSlidesCounter: true,
        initMouseWhell: true,
        initResize: true,
        init: true,

        // gallery config
        gallery: {
          // prams
          autoplay: false,
          infinite: false,
          speed: 400,
          slidesToShow: 1,
          adaptiveHeight: true,
          fade: true,
          cssEase: 'linear',
          swipe: true,
          // nav
          prevArrow: $(element).find('.slide-prev'),
          nextArrow: $(element).find('.slide-next'),
          dots: true,
          dotsClass: 'gallery-pager',
          appendDots: $(element).find('.gallery-pager-wrap'),
          customPaging: _.createCustomPaging
        }
      };
      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // data attributes value
      _.data = {
        galleryId: $(element).data('id'),
        interstitialSlideCounter: $(element).find(_.options.interstitialWrap).data('slides-counter')
      };

      // elements
      _.$body = $(document.body);
      _.$gallery = $(element).find(_.options.galleryList);
      _.$galleryPagerWrap = $(element).find(_.options.galleryPagerWrap);
      _.$interstitialWrap = $(element).find(_.options.interstitialWrap);
      _.$interstitialBlock = $(element).find(_.options.interstitialBlock);
      _.$interstitialNext = $(element).find(_.options.interstitialNext);
      _.$shareBar = $(element).find(_.options.shareBar);

      console.info(_);

      // init app
      _.init(_.options.init);
    }

    return usaGallery;

  }());

  //=============================
  // additional functionality
  //=============================
  usaGallery.prototype.callAdobeTracking = function () {
    if (typeof s_gi != 'undefined') {

      if ($('body').hasClass('node-type-tv-episode')) {
        if (Drupal.settings.umbel_settings !== undefined) {
          var showName = Drupal.settings.umbel_settings.usa_umbel_param_1,
              pageName = Drupal.settings.umbel_settings.usa_umbel_param_2;
        }

        console.info(showName, pageName);

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
    showInterstitial: function ($this, refresh) {

      var _ = $this,
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
        console.info('timeoutNextShow');
      }, 5000);

      adWrap.velocity("fadeIn", {
        duration: 200,
        easing: "linear",
        complete: function (element) {
          $(element).addClass('active');
        }
      });

      mps.adviewCallback = function(eo){
        if(eo._mps._slot.indexOf(nameAd) === 0) {
          adNext.show();
          clearInterval(showNextTimeout);
        }
      };
    },
    hideInterstitial: function ($this) {

      var _ = $this,
          adWrap = _.$interstitialWrap,
          adBlock = _.$interstitialBlock,
          adNext = _.$interstitialNext;

      adWrap.velocity("fadeOut", {
        duration: 100,
        easing: "linear",
        complete: function (element) {
          $(element).removeClass('active');
          //adBlock.empty();
          adNext.hide();
        }
      })
    }
  };

  usaGallery.prototype.gigyaSharebar = function (currentSlide) {
    console.info('gigyaSharebar');

    if (typeof Drupal.gigya != 'undefined') {

      var _ = this,
          galleryId = _.data.galleryId,
          $gallery = _.$gallery,
          $sharebar = _.$shareBar,
          $slide = $gallery.find('.slick-active'),
          description = $slide.find('.slide-info .description').text(),
          imageUrl = $slide.find('.asset-img img'),
          link_back = window.location.href.split('#')[0],
          slideIndex;

      if ($sharebar.length > 0) {

        if (link_back == '' && $('meta[property="og:url"]').length > 0) {
          link_back = $('meta[property="og:url"]').attr('content');
        }

        //if (title == '' && $('meta[property="og:title"]').length > 0) {
        //  title = $('meta[property="og:title"]').attr('content');
        //}

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
        img = $slide.find('img')[0].outerHTML;

    return '<div class="pager-item-inner" data-slick-index="' + index + '"><div class="show-color main-color"></div>' + img + '</div>';
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
  usaGallery.prototype.setPagerPosition = function ($this) {



    var _ = $this,
        pager = _.$galleryPagerWrap,
        pagerInner = $(pager).find('.gallery-pager'),
        pagerPositionBp = _.options.pagerPositionBp,
        statusBp = _.checkWindowWidth(pagerPositionBp),
        pagerItem = pager.find('li'),
        itemHeight = pagerItem.height(),
        itemWidth = pagerItem.width(),
        itemLength = pagerItem.length,
        dataDesktop = '',
        dataMobile = '';


    if (itemLength >= 10) {
      dataDesktop += 'height: ' + (itemHeight * 2 * 10 + itemHeight) + 'px; ';
    } else if (itemLength < 10) {
      dataDesktop += 'height: ' + (itemHeight * 2 * itemLength + itemHeight) + 'px; ';
    }


    if (!statusBp && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {

      console.info('1');

      //if (itemLength >= 10) {
      //  pager.height(itemHeight * 2 * 10 + itemHeight);
      //} else if (itemLength < 10) {
      //  pager.height(itemHeight * 2 * itemLength + itemHeight);
      //}

      dataDesktop += 'margin-top: ' + (-(pager.innerHeight() / 2) + 'px;');

      //pager.css('margin-top', -(pager.innerHeight() / 2) + 'px');

      // height: 165px; margin-top: -82.5px;

      console.info(dataDesktop);

      pager.attr('data-style-desktop', dataDesktop);
      pager.css(dataDesktop);
    }

    if (statusBp || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {

      console.info('2');

      if (itemLength >= 10) {
        pager.width(itemWidth * 2 * 10)
      } else if (itemLength < 10) {
        pager.width(itemWidth * 2 * itemLength);
      }
      pagerInner.width(itemWidth * 2 * itemLength).show();
      pager.height(pagerItem.height());
      pager.css('margin-right', -((pager.innerWidth() / 2)) + 'px');

      pager.attr('data-style-desktop', dataMobile);
    }
  };

  usaGallery.prototype.movePagerItems = function ($this) {

    var _ = $this,
        pagerPositionBp = _.options.pagerPositionBp,
        statusBp = _.checkWindowWidth(pagerPositionBp);

    if (statusBp) {
      _.movePagerHorizontal($this);
    } else {
      _.movePagerVertical($this);
    }
  };

  usaGallery.prototype.movePagerHorizontal = function ($this) {
    console.info('movePagerHorizontal');

    var _ = $this,
        $body = _.$body,
        pagerItem = _.$galleryPagerWrap.find('li'),
        itemLength = pagerItem.length,
        pagerItemActiveIndex = parseInt(_.$galleryPagerWrap.find('li.slick-active [data-slick-index]'));

    if (elem) {
      pagerItemActiveIndex = elem.find('[data-slick-index]');
    }

    if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {
      var itemWidth = pagerItem.innerWidth();
      if (itemLength >= 10) {
        if (pagerItemActiveIndex > 3) {
          var left = pagerItemActiveIndex * (itemWidth * 2) - (itemWidth * 2) * 4;
          pager.css('left', -left + 'px');
        } else if (pagerItemActiveIndex <= 3) {
          pager.css('left', 0 + 'px');
        }
      }
    }
  };

  usaGallery.prototype.movePagerVertical = function ($this, elem) {
    console.info('movePagerVertical');

    var _ = $this,
        $body = _.$body,
        pagerItem = _.$galleryPagerWrap.find('li'),
        pagerItemInner = _.$galleryPagerWrap.find('li .pager-item-inner'),
        itemLength = pagerItem.length,
        pagerItemActiveIndex = parseInt(_.$galleryPagerWrap.find('li.slick-active div[data-slick-index]'));

    if (elem) {
      pagerItemActiveIndex = elem.find('[data-slick-index]');
    }

    if (!$body.hasClass('node-type-person') && !$body.hasClass('node-type-post')) {
      var itemHeight = pagerItemInner.innerHeight();
      if (itemLength >= 10) {
        if (pagerItemActiveIndex > 3) {
          var marginTop = pagerItemActiveIndex* (itemHeight * 2) - (itemHeight * 2) * 4;
          pagerItem.eq(0).css('margin-top', - marginTop + 'px');
        } else if (pagerItemActiveIndex <= 3) {
          pagerItem.eq(0).css('margin-top', 0 + 'px');
        }
      }
    }
  };

  usaGallery.prototype.checkWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaGallery.prototype.addMouseWhell = function (slick) {

    var _ = this,
        elem = _.$gallery,
        slideCount = slick.slideCount;

    elem.mousewheel(function (event, delta, deltaX, deltaY) {

      var slickCurrentSlide = elem.slick('slickCurrentSlide');

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

  usaGallery.prototype.resize = function () {

    var _ = this;

    $(window).on('resize', function () {
      console.info('slick window resize');

      _.setPagerPosition(_);

    });
  };

  usaGallery.prototype.addSlickEventsCallBacks = function () {

    var _ = this,
        initSlidesCounter = _.options.initSlidesCounter,
        initMouseWhell = _.options.initMouseWhell,
        initResize = _.options.initResize,
        adWrap = _.$galleryPagerWrap,
        adSlidesCount = _.data.interstitialSlideCounter,
        adCounter = 0,
        refreshAD = false;

    _.$gallery
        .on('init', function (event, slick) {
          console.info(event.type + ' Slick');

          _.setPagerPosition(_);

          if (initSlidesCounter) {
            _.createSlidesCounter(slick);
          }
          if (initMouseWhell) {
            _.addMouseWhell(slick);
          }
          if (initResize) {
            _.resize();
          }
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
          console.info(event.type);
          // advert counter up +1
          adCounter += 1;

          // if advertCounter = slidesCount fire show gallery advert
          if (adWrap.length > 0 && adCounter === adSlidesCount) {
            // reset advert counter
            adCounter = 0;
            // show gallery ad
            _.insertInterstitial.showInterstitial(_, refreshAD);
            refreshAD = true;
          }

          _.callAdobeTracking();
        })
        .on('afterChange', function(event, slick, currentSlide){
          console.info(event.type);

          _.gigyaSharebar(currentSlide);
          _.movePagerItems(_);

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
      console.info('$interstitialNext click');
      _.insertInterstitial.hideInterstitial(_);
    })
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaGallery.prototype.init = function (creation) {

    var _ = this,
        galleryOptions = _.options.gallery;

    if (creation && !$(_.$gallery).hasClass('gallery-initialized')) {
      _.addSlickEventsCallBacks();
      _.$gallery
          .slick(galleryOptions)
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

    if ($('body').hasClass('node-type-media-gallery') || $('body').hasClass('node-type-tv-episode') || $('body').hasClass('node-type-consumpt-post') || $('.gallery-wrapper').parent().hasClass('view-mode-inline_content')) {
      if ($('.gallery-wrapper').length == 0) {
        return false;
      }

      var gallery = [];
      $('.gallery-wrapper').each(function (i, el) {

        console.info('gallery-wrapper = ' + i);

        var currentGallery = $(el).usaGallery();

        //console.info(currentGallery);
      });
    }
  });

})(jQuery);
