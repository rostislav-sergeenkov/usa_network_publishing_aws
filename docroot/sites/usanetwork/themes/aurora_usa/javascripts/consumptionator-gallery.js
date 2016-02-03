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

        // params
        slideCounterSeparator: ' of ',

        // breakpoint to change galleryPagerWrap position
        pagerPositionBp: 1024,
        pagerDirection: {
          horiz: 'horizontal',
          vert: 'vertical'
        },

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

      // data attributes value
      _.data = {};

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // elements
      _.$gallery = $(element).find(_.options.galleryList);
      _.$galleryPagerWrap = $(element).find(_.options.galleryPagerWrap);
      _.$prevArrow = $(element).find(_.options.prevArrow);
      _.$nextArrow = $(element).find(_.options.galleryPagerWrap);

      // init app
      _.init(_.options.init);
    }

    return usaGallery;

  }());

  // Gallery functionality helper

  usaGallery.prototype.createCustomPaging = function (slick, index) {

    var $slide = $(slick.$slides[index].innerHTML),
        img = $slide.find('img')[0].outerHTML;

    return '<div class="show-color main-color"></div>' + img;
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

  usaGallery.prototype.movePagerItems = function ($this) {

    var _ = $this,
        pagerPositionBp = _.options.pagerPositionBp,
        statusBp = _.checkWindowWidth(pagerPositionBp);

    if (statusBp) {
      _.movePagerHorizontal();
    } else {
      _.movePagerVertical();
    }
  };

  usaGallery.prototype.movePagerHorizontal = function () {
    console.info('movePagerHorizontal');
  };

  usaGallery.prototype.movePagerVertical = function () {
    console.info('movePagerVertical');
  };

  usaGallery.prototype.checkWindowWidth = function (bp) {
    return window.matchMedia('(max-width: ' + bp + 'px)').matches;
  };

  usaGallery.prototype.addSlickEventsCallBacks = function () {

    var _ = this;

    _.$gallery
        .on('init', function (event, slick) {
          console.info(event.type + ' Slick');
          _.createSlidesCounter(slick);
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
          console.info(event.type);
        })
        .on('afterChange', function(event, slick, currentSlide){
          console.info(event.type);

          _.movePagerItems(_);
        });
  };

  usaGallery.prototype.addMouseWhell = function () {

    var _ = this,
        elem = _.$gallery;

    console.info(elem.slick('slickGetOption', { option : 'slideCount'}));

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
        if (slickCurrentSlide + 1 < elem.getSlideCount()) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    });
  };

  usaGallery.prototype.resize = function () {

    var _ = this;

    $(window).on('resize', function () {


    });
  };

  // End Gallery functionality helper


  // Init usaGallery app
  usaGallery.prototype.init = function (creation) {

    var _ = this,
        galleryOptions = _.options.gallery,
        initMouseWhell = _.options.gallery,
        initResize = _.options.gallery;

    if (creation && !$(_.$gallery).hasClass('gallery-initialized')) {

      _.addSlickEventsCallBacks();

      if (initMouseWhell) {
        _.addMouseWhell();
      }

      if (initResize) {
        _.resize();
      }

      _.$gallery
          .slick(galleryOptions)
          .addClass('gallery-initialized');
    }
  };

  // create jQuery method usaGallery
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


  // event document ready
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
