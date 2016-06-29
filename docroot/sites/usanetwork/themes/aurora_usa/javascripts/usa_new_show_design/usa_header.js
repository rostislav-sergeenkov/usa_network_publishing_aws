/*
 readme

 dependency:
  headroom - http://wicky.nillia.ms/headroom.js/

 */

(function ($) {

  //=============================
  // usaStickyHeader app
  //=============================
  var usaStickyHeader = window.usaStickyHeader || {};

  usaStickyHeader = (function () {

    function usaStickyHeader(element, settings) {

      var _ = this;

      // default settings
      _.defaults = {
        // selectors
        adBlockSelector: '#head-leaderboard',
        headerSpacerSelector: '#header-spacer',
        initHeaderClass: 'usa-sticky-header-initialized',

        // name classes
        stickyHeaderClass: 'usa-sticky-header',
        animatedHeaderClass: 'animated',
        adOffHeaderClass: 'off-elements',
        menuOpen: 'menu-open',// string

        additionalMode: {},

        // functionality
        sticky: true, // boolean
        stickyMobileBp: 768,
        animatedSlideHeader: 200, // animation duration 200ms
        animatedOffElements: 300, // animation duration 300ms
        easing: 'linear',
        callBackInitStickyHeader: '',
        callBackOffStickyHeader: '',
        callBackOnScroll: '',
        callBackOnResize: '',
        callBackOnOrientationchange: ''
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // params
      _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.pageYOffset = window.pageYOffset;
      _.options.headerHeight = 0;
      _.options.adBlockHeight = 0;
      _.options.isInitStickyHeader = false;

      _.options.isMobileBp = false;

      // elements
      _.$body = $(document.body);
      _.$header = $(element);
      _.$headerSpacer = $(_.options.headerSpacerSelector);
      _.$adBlock = $(_.options.adBlockSelector);

      _.usaHeadroom = _.headroom();

      // data attributes value
      // _.data = {};

      // init app
      _.init(_.options.sticky);
    }

    return usaStickyHeader;
  }());

  //---------------------------
  // main functionality
  //---------------------------

  usaStickyHeader.prototype.headroom = function () {

    var _ = this,
        $header = document.getElementById("header");

    return new Headroom($header, {
      // vertical offset in px before element is first unpinned
      offset: 0,
      // scroll tolerance in px before state changes
      tolerance: 20,
      classes: {
        // when element is initialised
        initial: "init-slide",
        // when scrolling up
        pinned: "slide-down",
        // when scrolling down
        unpinned: "slide-up",
        // when above offset
        top: "header-top",
        // when below offset
        notTop: "header-not-top",
        // when at bottom of scoll area
        bottom: "header-bottom",
        // when not at bottom of scroll area
        notBottom: "header-not-bottom"
      },
      // callback when pinned, `this` is headroom object
      onPin: function () {
      },
      // callback when unpinned, `this` is headroom object
      onUnpin: function () {
        var $header = _.$header,
            menuOpen = _.options.menuOpen;

        if ($header.hasClass(menuOpen)) {
          _.removeElemClass($header, 'slide-up', null);
          _.addElemClass($header, 'slide-down', null);
        }
      },
      // callback when above offset, `this` is headroom object
      onTop: function () {
        console.info('onTop');

        var $header = _.$header,
            menuOpen = _.options.menuOpen;

        if ($header.hasClass(menuOpen)) {
          return false;
        }
        if (_.options.isInitStickyHeader) {
          _.resetStickyHeader();
        }
      },
      // callback when below offset, `this` is headroom object
      onNotTop: function () {
      },
      // callback when at bottom of page, `this` is headroom object
      onBottom: function () {
      },
      // callback when moving away from bottom of page, `this` is headroom object
      onNotBottom: function () {
      }
    });
  };

  //---------------------------
  // additional functionality
  //---------------------------

  // check Window Width
  usaStickyHeader.prototype.checkMatchWindowWidth = function (widthName, bp) {
    // widthName - 'min' or 'max'; bp - breakpoint for check
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // setTimeout
  usaStickyHeader.prototype.setTimeout = function (callback, delay) {

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);

  };

  // add || remove class
  usaStickyHeader.prototype.addElemClass = function (elem, className, callback) {

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
  usaStickyHeader.prototype.removeElemClass = function (elem, className, callback) {

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

  // update value
  usaStickyHeader.prototype.updateOptionsVal = function () {

    var _ = this;

    _.options.isMobileBp = _.checkMatchWindowWidth('max', _.options.stickyMobileBp);
    _.options.pageYOffset = window.pageYOffset;
    _.options.adBlockHeight = _.$adBlock.outerHeight();
    _.options.headerHeight = _.$header.outerHeight();

  };

  // header spacer
  usaStickyHeader.prototype.checkHeaderSpacer = function () {

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer,
        headerSpacerId = _.options.headerSpacerId;

    if ($($headerSpacer).length < 1) {
      $($header).after($('<div>', {id: headerSpacerId}).hide());
      _.$headerSpacer = $('#' + headerSpacerId);
    }
  };
  usaStickyHeader.prototype.updateHeaderSpacerHeight = function () {

    var _ = this;

    _.updateOptionsVal();

    if (_.options.headerSpacerHeight != _.options.headerHeight) {
      _.setHeaderSpacerHeight(_.options.headerHeight);
    }
  };
  usaStickyHeader.prototype.setHeaderSpacerHeight = function (height) {

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer,
        menuOpen = _.options.menuOpen;

    if ($header.hasClass(menuOpen)) {
      return false;
    }

    $headerSpacer.css({
      display: 'block',
      height: height + 'px'
    });
  };

  // sticky header
  usaStickyHeader.prototype.initStickyHeader = function () {

    var _ = this,
        $header = _.$header;

    _.options.isInitStickyHeader = true;

    _.addElemClass($header, _.options.stickyHeaderClass, null);
    _.addElemClass($header, _.options.adOffHeaderClass, null);
    _.addElemClass($header, _.options.animatedHeaderClass, null);
    _.setTimeout(function () {
      $header.css({
        top: 0
      });
      if (typeof _.options.callBackInitStickyHeader === 'function') {
        _.options.callBackInitStickyHeader();
      }
    }, _.options.animatedSlideHeader);

  };
  usaStickyHeader.prototype.resetStickyHeader = function () {

    var _ = this,
        $header = _.$header;

    _.options.isInitStickyHeader = false;

    _.removeElemClass($header, _.options.adOffHeaderClass, null);
    _.setTimeout(function () {
      _.removeElemClass($header, _.options.stickyHeaderClass, null);
      _.removeElemClass($header, _.options.animatedHeaderClass, null);
      _.updateHeaderSpacerHeight();
      $header.attr('style', '');
      if (typeof _.options.callBackOffStickyHeader === 'function') {
        _.options.callBackOffStickyHeader();
      }
    }, _.options.animatedOffElements);
  };
  usaStickyHeader.prototype.showHeaderOffElements = function () {

    var _ = this,
        $header = _.$header;

    _.removeElemClass($header, _.options.adOffHeaderClass, null);
  };
  usaStickyHeader.prototype.hideHeaderOffElements = function () {

    var _ = this,
        $header = _.$header;

    _.addElemClass($header, _.options.adOffHeaderClass, null);
  };

  // windows events
  usaStickyHeader.prototype.addEvents = function () {

    var _ = this,
        $header = _.$header;

    $(window)
      .bind('scroll', function (e) {

        var $window = this,
            menuOpen = _.options.menuOpen;

        if ($header.hasClass(menuOpen)) {
          return false;
        }

        if ($window.pageYOffset > _.options.headerHeight && !_.options.isInitStickyHeader) {
          _.initStickyHeader();
        } else if ($window.pageYOffset <= _.options.headerHeight && _.options.isInitStickyHeader) {
          _.showHeaderOffElements();
        } else if ($window.pageYOffset > _.options.headerHeight && _.options.isInitStickyHeader) {
          _.hideHeaderOffElements();
        }

        _.options.pageYOffset = $window.pageYOffset;

        if (typeof _.options.callBackOnScroll === 'function') {
          _.options.callBackOnScroll();
        }
      })
      .bind('resize', function (e) {

        if(!_.options.isMobileDevice) {

          var $window = this;

          _.setTimeout(function () {
            _.updateOptionsVal();
            _.setHeaderSpacerHeight(_.options.headerHeight);
          }, 150);

          if (typeof _.options.callBackOnResize === 'function') {
            _.options.callBackOnResize();
          }

        }
      })
      .bind('orientationchange', function(e){

        var $window = this;

        _.setTimeout(function () {
          _.updateOptionsVal();
          _.setHeaderSpacerHeight(_.options.headerHeight);
        }, 150);

        if (typeof _.options.callBackOnOrientationchange === 'function') {
          _.options.callBackOnOrientationchange();
        }
      });
  };

  //---------------------------
  // init usaStickyHeader app
  //---------------------------
  usaStickyHeader.prototype.init = function (creation) {

    console.info('init');

    var _ = this,
        initHeaderClass = _.options.initHeaderClass;

    if (creation && !_.$header.hasClass(initHeaderClass)) {
      _.setTimeout(function () {
        _.$header.addClass(initHeaderClass);
        _.updateOptionsVal();
        _.checkHeaderSpacer();
        _.setHeaderSpacerHeight(_.options.headerHeight);
        _.usaHeadroom.init();
        _.addEvents();
      }, 150);
    }
  };

  // create jQuery method usaStickyHeader
  $.fn.usaStickyHeader = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaStickyHeader = new usaStickyHeader(_[i], opt);
      else
        ret = _[i].usaStickyHeader[opt].apply(_[i].usaStickyHeader, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {
    if ($('body').hasClass('show-new-design') && $('body').hasClass('consumptionator-page')) {

      var $consumSidebar = $('.consum-sidebar'),
          sidebarStickyClass = 'sticky-sidebar';

      $('#header').usaStickyHeader({
        callBackInitStickyHeader: function () {
          if (Drupal.behaviors.hasOwnProperty('consumptionator_right_rail')) {
            Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
            if (!$consumSidebar.hasClass(sidebarStickyClass)) {
              $consumSidebar.addClass(sidebarStickyClass);
            }
          }
        },
        callBackOffStickyHeader: function () {
          if (Drupal.behaviors.hasOwnProperty('consumptionator_right_rail')) {
            Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
            if ($consumSidebar.hasClass(sidebarStickyClass)) {
              $consumSidebar.removeClass(sidebarStickyClass);
            }
          }
        }
      });
    } else if ($('body').hasClass('show-new-design')) {
      $('#header').usaStickyHeader();
    }
  });

})(jQuery);
