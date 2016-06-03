/*
 dependency:
 velocityjs: '1.2.2'
 VelocityJS - VelocityJS.org
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
        headerSpacerId: 'header-spacer',
        headerInnerClass: 'header-inner',
        stickyHeaderClass: 'usa-sticky-header', // string
        adBlockId: 'head-leaderboard',

        additionalMode: {},

        // functionality
        sticky: true, // boolean
        stickyMobile: true, // boolean
        initStickyMobileBp: 768, // number
        headerInnerMaxWidth: 1600, // px or ''
        durationHeaderAnimate: 200,
        transitionEasing: 'linear',
        minScrollLength: 10, // number px; used for on || off stickyHeaderClass
        scrollDiffMin: 30, // number px
        timeOutCssAnimate: 200 // number ms
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      _.options.pageYOffset = window.pageYOffset;
      _.options.scrollDirection = ''; // string value 'top' or 'down'
      _.options.headerHeight = 0;
      _.options.headerSpacerHeight = 0;
      _.options.adBlockHeight = 0;
      _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.isHeaderSticky = false;
      _.options.isSlideHeaderActive = false;
      _.options.isSlideUpHeaderSticky = false;
      _.options.isSlideProcessing = false;
      _.options.isScrollDiffMin = false;
      _.options.slideUpStartPositon = 0;

      // elements
      _.$body = $(document.body);
      _.$header = $(element);
      _.$headerInner = $(element).find('.' + _.options.headerInnerClass);
      _.$headerSpacer = $('#' + _.options.headerSpacerId);
      _.$adBlock = $('#' + _.options.adBlockId);

      // data attributes value
      _.data = {};

      // init app
      _.init(true);
    }

    return usaStickyHeader;
  }());

  //=============================
  // helpers
  //=============================

  // widthName - 'min' or 'max'; bp - breakpoint for check
  usaStickyHeader.prototype.checkMatchWindowWidth = function (widthName, bp) {
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // newYOffset - window.pageYOffset
  usaStickyHeader.prototype.getScrollDirection = function (newYOffset) {

    var _ = this,
        currentYOffset = _.options.pageYOffset;

    if (currentYOffset > newYOffset) {
      _.options.scrollDirection = 'top';
    } else if (currentYOffset < newYOffset) {
      _.options.scrollDirection = 'down';
    }

    _.getSlideUpStatus();
    _.options.pageYOffset = newYOffset;
    console.info('getScrollDirection : ' + _.options.scrollDirection);
  };

  usaStickyHeader.prototype.updateOptionsVal = function () {

    console.info('updateOptionsVal');

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer;

    _.options.pageYOffset = window.pageYOffset;
    _.options.adBlockHeight = _.$adBlock.outerHeight();
    _.options.headerHeight = $header.outerHeight();
    _.options.headerSpacerHeight = $headerSpacer.outerHeight();
  };

  usaStickyHeader.prototype.removeStickyHeaderClass = function () {
    console.info('offStickyHeaderClass');

    var _ = this,
        $header = _.$header,
        stickyHeaderClass = _.options.stickyHeaderClass.trim();

    if ($header.hasClass(stickyHeaderClass)) {
      _.options.isHeaderSticky = false;
      _.options.isSlideHeaderActive = false;
      $header.removeClass(stickyHeaderClass);
    }
  };

  usaStickyHeader.prototype.addStickyHeaderClass = function () {
    console.info('onStickyHeaderClass');

    var _ = this,
        $header = _.$header,
        stickyHeaderClass = _.options.stickyHeaderClass.trim();

    if (!$header.hasClass(stickyHeaderClass)) {
      _.options.isHeaderSticky = true;
      $header.addClass(stickyHeaderClass);
    }
  };

  usaStickyHeader.prototype.checkHeaderSpacer = function () {

    console.info('checkHeaderSpacer');

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

    console.info('updateHeaderSpacerHeight');

    var _ = this,
        spacerTimeout;

    clearTimeout(spacerTimeout);

    spacerTimeout = setInterval(function () {

      _.updateOptionsVal();

      if (_.options.headerSpacerHeight != _.options.headerHeight) {
        _.setHeaderSpacerHeight();
      } else if (_.options.headerSpacerHeight === _.options.headerHeight) {
        clearTimeout(spacerTimeout);
      }
    }, _.options.timeOutCssAnimate);
  };

  usaStickyHeader.prototype.setHeaderSpacerHeight = function () {

    console.info('setHeaderSpacerHeight');

    var _ = this,
        $headerSpacer = _.$headerSpacer;

    $headerSpacer.css({
      display: 'block',
      height: _.options.headerHeight + 'px'
    });
  };

  usaStickyHeader.prototype.resetHeader = function () {

    console.info('resetHeader');

    var _ = this,
        timer;

    // reset position and slide Down StickyHeader
    _.setHeaderPosition(0);
    _.removeStickyHeaderClass();

    clearTimeout(timer);
    timer = setTimeout(function () {
      _.updateHeaderSpacerHeight();
    }, _.options.timeOutCssAnimate);
  };

  usaStickyHeader.prototype.checkHeaderPosition = function () {

    console.info('checkHeaderPosition');

    var _ = this;

    if (_.options.pageYOffset < _.options.minScrollLength && _.options.isHeaderSticky) {
      _.resetHeader();
    }
  };

  usaStickyHeader.prototype.checkHeaderOffset = function () {

    var _ = this,
        minScrollLength = _.options.minScrollLength;

    console.info('checkHeaderOffset', _.options.pageYOffset, _.options.isHeaderSticky);

    if (_.options.pageYOffset > minScrollLength && !_.options.isHeaderSticky) {
      _.addStickyHeaderClass();
      // slide Up StickyHeader
      _.slideUpStickyHeader('-' + _.options.adBlockHeight, null);
      window.scrollBy(0, _.options.adBlockHeight);
    } else if (_.options.pageYOffset < minScrollLength && _.options.isHeaderSticky) {
      _.resetHeader();
    } else if (_.options.pageYOffset > _.options.headerHeight * 2 && _.options.isHeaderSticky && !_.options.isSlideHeaderActive) {
      // slide Up StickyHeader
      _.options.isSlideHeaderActive = true;
      _.slideUpStickyHeader('-' + _.options.headerHeight, null);
    }
  };

  usaStickyHeader.prototype.getSlideUpStatus = function () {

    console.info('getSlideUpStatus');
    var _ = this;

    if (Math.abs(window.pageYOffset - _.options.pageYOffset) > _.options.scrollDiffMin) {
      _.options.isScrollDiffMin = true;
    } else {
      _.options.isScrollDiffMin = false;
    }
  };

  usaStickyHeader.prototype.slideUpStickyHeader = function (top, callback) {

    var _ = this,
        timer;

    if (_.options.isSlideProcessing) {
      return;
    }

    _.options.isSlideProcessing = true;
    _.setHeaderPosition(top);

    clearTimeout(timer);
    timer = setTimeout(function () {
      _.options.isSlideUpHeaderSticky = true;
      _.options.isSlideProcessing = false;
      _.checkHeaderPosition();
      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.durationHeaderAnimate);
  };

  usaStickyHeader.prototype.slideDownStickyHeader = function (top, callback) {

    var _ = this,
        timer;

    if (_.options.isSlideProcessing) {
      return;
    }

    _.options.isSlideProcessing = true;

    _.setHeaderPosition(top);

    clearTimeout(timer);
    timer = setTimeout(function () {
      _.options.isSlideUpHeaderSticky = false;
      _.options.isSlideProcessing = false;
      _.options.slideUpStartPositon = window.pageYOffset;
      _.checkHeaderPosition();

      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.durationHeaderAnimate);
  };

  usaStickyHeader.prototype.slideStickyHeader = function () {

    console.info('slideStickyHeader');

    var _ = this;

    if (_.options.isHeaderSticky && _.options.isSlideHeaderActive) {
      if (_.options.scrollDirection == 'down' && !_.options.isSlideUpHeaderSticky && _.options.isScrollDiffMin) {

        // slide Up StickyHeader
        _.slideUpStickyHeader('-' + _.options.headerHeight, null);

      } else if (_.options.scrollDirection == 'top' && _.options.isSlideUpHeaderSticky) {

        // slide Down StickyHeader
        _.slideDownStickyHeader('-' + _.options.adBlockHeight, null);
      }
    }
  };

  usaStickyHeader.prototype.setHeaderPosition = function (top) {
    // top: - number || number
    console.info('setHeaderPosition');

    var _ = this,
        $header = $(_.$header);

    $header.css({
      '-moz-transform': 'translateY(' + top + 'px)',
      '-ms-transform': 'translateY(' + top + 'px)',
      '-webkit-transform': 'translateY(' + top + 'px)',
      '-o-transform': 'translateY(' + top + 'px)',
      'transform': 'translateY(' + top + 'px)'
    });
  };


  //=============================
  // main functionality
  //=============================
  // add windows events
  usaStickyHeader.prototype.addEvents = function () {

    var _ = this;

    $(window)
        .on('scroll', function (e) {

          console.info('onScroll : ' + window.pageYOffset);

          var $window = this,
              newYOffset = $window.pageYOffset;

          _.getScrollDirection(newYOffset);
          _.checkHeaderOffset();
          _.slideStickyHeader();
        })
        .on('resize', function (e) {

          console.info('onResize');

          var $window = this;

          _.updateOptionsVal();
          _.updateHeaderSpacerHeight();
        });
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaStickyHeader.prototype.init = function (creation) {

    console.info('usaStickyHeader init');
    var _ = this;

    if (creation && !_.$header.hasClass('usa-sticky-header-initialized')) {
      _.$header.addClass('usa-sticky-header-initialized');
      _.updateOptionsVal();
      _.checkHeaderSpacer();
      _.setHeaderSpacerHeight();
      _.checkHeaderOffset();
      _.addEvents();
    }
  };

  //================================
  // create jQuery method usaGallery
  //================================
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
      $('#header').usaStickyHeader({
        additionalMode: {
          isRightRailPosition: true
        }
      });
    } else if ($('body').hasClass('show-new-design')) {
      $('#header').usaStickyHeader();
    }
  });

})(jQuery);
