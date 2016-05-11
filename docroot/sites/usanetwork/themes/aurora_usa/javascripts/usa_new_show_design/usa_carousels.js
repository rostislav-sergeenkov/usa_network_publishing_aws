/* readme

 dependency:
 slick: '1.5.5',
 mCustomScrollbar: '3.0.6'
 velocityjs: '1.2.2'
 slick - http://kenwheeler.github.io/slick/
 mCustomScrollbar - http://manos.malihu.gr/jquery-custom-content-scroller/
 VelocityJS - VelocityJS.org

 // description
 element - main wrapper of carousel
 $(element).usaCarousel() - init carousel
 carouselList - list of carousel items
 changeCarouselBp - using for change carousel between horizontal and vertical designs
 horizontal - using for config horizontal carousel
 vertical - using for config vertical carousel
 */


(function ($) {

  //=============================
  // usaCarousel app
  //=============================
  var usaCarousels = window.usaCarousels || {};

  usaCarousels = (function () {

    function usaCarousels(element, settings) {

      var _ = this;

      if(!$.fn.hasOwnProperty('velocity') || !$.fn.hasOwnProperty('slick') || !$.fn.hasOwnProperty('mCustomScrollbar')) {
        usa_debug('error: usaCarousels dependency');
        return;
      }

      // default settings
      _.defaults = {
        // selectors
        carouselList: '.slider-list', // string selector

        // functionality
        changeCarouselBp: 768, // number; default 1280px
        horizontal: {
          mode: true, // default value
          settings: { // settings slick carousel
            adaptiveHeight: true,
            autoplay: false,
            arrows: false, // disable nav buttons
            infinite: false,
            initialSlide: 0,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true
          }
        },
        vertical: {
          mode: true // default value
        }
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      _.status = {
        initHCarousel: false,
        initVCarousel: false
      };

      // elements
      _.$body = $(document.body);
      _.$mainWrap = $(element);
      _.$carousel = _.$mainWrap.find(_.options.carouselList);
      _.$slideItems = _.$carousel.find('.slide-item');
      _.$activeItem = _.$carousel.find('.slide-item.active');

      // data attributes value
      _.data = {};

      // init app
      _.init(true);
    }

    return usaCarousels;
  }());

  //=================
  // mCustomScrollbar
  //=================

  usaCarousels.prototype.initVCarousel = function () {

    var _ = this,
        $mainWrap = _.$mainWrap,
        $carousel = _.$carousel,
        $slideItems = _.$slideItems,
        $activeItem = _.$activeItem;

    _.status.initVCarousel = true;

    $($carousel).mCustomScrollbar({
      axis: 'y',
      autoHideScrollbar: true,
      theme: 'light',
      scrollbarPosition: 'inside',
      callbacks: {
        onInit: function () {
          if ($activeItem.length > 0) {
            setTimeout(function () {
              $($carousel).mCustomScrollbar("scrollTo", $activeItem);
            }, 500);
          }
        },
        whileScrolling: function () {
          if (this.mcs.topPct <= 97) {
            $($mainWrap).removeClass('carousel-end');
          } else {
            if (!$($mainWrap).hasClass('carousel-end')) {
              $($mainWrap).addClass('carousel-end');
            }
          }
        },
        onScroll: function () {
          var items = [];
          var i = 0;
          $.each($slideItems, function () {
            items[i] = this;
            i++;
          });
          Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(items);
        }
      }
    });
  };

  usaCarousels.prototype.destroyVCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initVCarousel = false;

    $($carousel).mCustomScrollbar('destroy');
  };

  //============
  // slick
  //============

  usaCarousels.prototype.changeViewportHCarousel = function (operation, diffWidth, duration) {

    var _ = this,
        $carousel = _.$carousel;

    $carousel.velocity({
      left: operation + diffWidth
    }, { duration: duration });
  };

  usaCarousels.prototype.addSlickEventsCallBacks = function () {

    var _ = this,
        $carousel = _.$carousel,
        $slideItems = _.$slideItems,
        isLastScroll = false,
        isAnimateLeft = false,
        listWidth, slideCount, initSlide, slidesToScroll, slickDuration,
        itemWidth, diffWidth, defaultPaddingSize;
    
    $carousel
        .bind('init', function (event, slick) {
          slickDuration = slick.options.speed;
          slidesToScroll = slick.options.slidesToScroll;
          slideCount = slick.slideCount - 1;
          initSlide = slick.currentSlide;
        })
        .bind('beforeChange', function (event, slick, currentSlide, nextSlide) {

          listWidth = slick.listWidth;
          itemWidth = $slideItems.eq(0).innerWidth();
          defaultPaddingSize = 	parseFloat($slideItems.eq(0).css('paddingLeft'));

          if (nextSlide + slidesToScroll >= slideCount) {
            if(!isLastScroll) {
              isLastScroll = true;

              for(var i = 0; i <= slideCount; i++) {
                if (itemWidth * i > listWidth) {
                  break;
                }
                diffWidth = (listWidth - defaultPaddingSize) - (itemWidth * i);
              }

              if (!isAnimateLeft) {
                isAnimateLeft = true;
                _.changeViewportHCarousel('+=', diffWidth, slickDuration);
              }
            }
          } else {
            isLastScroll = false;
            if (isAnimateLeft) {
              isAnimateLeft = false;
              _.changeViewportHCarousel('-=', diffWidth, slickDuration);
            }
          }
        });
        // .bind('afterChange', function (event, slick, currentSlide) {
        // });
  };

  usaCarousels.prototype.destroyHCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initHCarousel = false;
    $($carousel)
        .unbind('init beforeChange afterChange')
        .slick('unslick')
        .css('left', 0);
  };

  usaCarousels.prototype.initHCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initHCarousel = true;
    _.addSlickEventsCallBacks();
    $($carousel).slick(_.options.horizontal.settings);
  };

  //============
  // helpers
  //============
  usaCarousels.prototype.checkMaxWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaCarousels.prototype.addEvents = function () {

    var _ = this;

    $(window).on('resize', function (e) {
      var $window = this;
      _.initCarousel();
    });
  };

  usaCarousels.prototype.initCarousel = function () {

    var _ = this,
        status = _.status,
        changeCarouselBp = _.options.changeCarouselBp,
        horizontalMode = _.options.horizontal.mode,
        verticalMode = _.options.vertical.mode,
        checkMaxWindowWidth;

    // check breakpoint for changes
    checkMaxWindowWidth = _.checkMaxWindowWidth(changeCarouselBp);

    // check for destroy
    if (!checkMaxWindowWidth && status.initHCarousel) {
      _.destroyHCarousel();
    }
    if (checkMaxWindowWidth && status.initVCarousel) {
      _.destroyVCarousel();
    }

    // check for init
    if (checkMaxWindowWidth && !status.initHCarousel && horizontalMode) {
      _.initHCarousel();
    } else if (!checkMaxWindowWidth && !status.initVCarousel && verticalMode) {
      _.initVCarousel();
    }
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaCarousels.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$mainWrap.hasClass('usa-carousel-initialized')) {
      _.addEvents();
      _.initCarousel();
    }
  };

  //================================
  // create jQuery method usaGallery
  //================================
  $.fn.usaCarousels = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaCarousels = new usaCarousels(_[i], opt);
      else
        ret = _[i].usaCarousels[opt].apply(_[i].usaCarousels, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {
    $('#relevant-content-carousel').usaCarousels();
    $('#episode-list').usaCarousels({
      horizontal: {
        mode: false
      }
    });
  });
})(jQuery);
