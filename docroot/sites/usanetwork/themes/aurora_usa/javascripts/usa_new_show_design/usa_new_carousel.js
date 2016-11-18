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
  var usaNewCarousel = window.usaNewCarousel || {};

  usaNewCarousel = (function () {

    function usaNewCarousel(element, settings) {

      var _ = this;

      if(!$.fn.hasOwnProperty('velocity') || !$.fn.hasOwnProperty('slick') || !$.fn.hasOwnProperty('mCustomScrollbar')) {
        usa_debug('error: usaNewCarousel dependency');
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

    return usaNewCarousel;
  }());

  //=================
  // mCustomScrollbar
  //=================

  usaNewCarousel.prototype.initVCarousel = function () {

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
      scrollInertia: 0,
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

  usaNewCarousel.prototype.destroyVCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initVCarousel = false;

    $($carousel).mCustomScrollbar('destroy');
  };

  //============
  // slick
  //============

  usaNewCarousel.prototype.changeViewportHCarousel = function (operation, diffWidth, duration) {

    var _ = this,
        $carousel = _.$carousel;

    $carousel.velocity({
      left: operation + diffWidth
    }, { duration: duration });
  };

  usaNewCarousel.prototype.addSlickEventsCallBacks = function () {

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

  usaNewCarousel.prototype.destroyHCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initHCarousel = false;
    $($carousel)
        .unbind('init beforeChange afterChange')
        .slick('unslick')
        .css('left', 0);
  };

  usaNewCarousel.prototype.initHCarousel = function () {

    var _ = this,
        $carousel = _.$carousel;

    _.status.initHCarousel = true;
    _.addSlickEventsCallBacks();
    $($carousel).slick(_.options.horizontal.settings);
  };

  //============
  // helpers
  //============
  usaNewCarousel.prototype.checkMaxWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaNewCarousel.prototype.addEvents = function () {

    var _ = this;

    $(window).on('resize', function (e) {
      var $window = this;
      _.initCarousel();
    });
  };

  usaNewCarousel.prototype.initCarousel = function () {

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
  usaNewCarousel.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$mainWrap.hasClass('usa-carousel-initialized')) {
      _.addEvents();
      _.initCarousel();
    }
  };

  //================================
  // create jQuery method usaGallery
  //================================
  $.fn.usaNewCarousel = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaNewCarousel = new usaNewCarousel(_[i], opt);
      else
        ret = _[i].usaNewCarousel[opt].apply(_[i].usaNewCarousel, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {

    if ($('body').is('.show-new-design')) {
      $('#relevant-content-carousel').usaNewCarousel();
      $('#episode-list').usaNewCarousel({
        horizontal: {
          mode: false
        }
      });

      $('#top-five-videos').usaNewCarousel({
        vertical: {
          mode: false
        }
      });

      $('#top-five-photos').usaNewCarousel({
        vertical: {
          mode: false
        }
      });
    }
  });
})(jQuery);
