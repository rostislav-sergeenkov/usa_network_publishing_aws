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
        adBlockId: 'head-leaderboard',
        headerSpacerId: 'header-spacer',
        headerInnerClass: 'header-inner',
        showLogoSel: '.top-menu-block-inner .title-block .title',
        stickyHeaderClass: 'usa-sticky-header', // string
        slideHeaderClass: 'usa-slide-header', // string


        additionalMode: {},

        // functionality
        sticky: true, // boolean
        stickyMobile: true, // boolean
        initStickyMobileBp: 768, // number
        headerInnerMaxWidth: 1600, // px or ''
        durationCssAnimate: 400, // ms; default css transition-duration
        durationSlideAnimate: 200, // ms; slide css transition-duration
        easing: 'linear',
        minScrollLength: 100, // number px; used for on || off stickyHeaderClass
        scrollDiffMin: 20, // number px
        defaultDelayCssAnimate: 400, // number ms
        minSowLogoHeight: 20 // number px
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
      _.options.isResizeHeaderElemsStop = false;
      _.options.slideUpStartPositon = 0;
      _.options.showLogoHeight = 0;
      _.options.showLogoWidth = 0;

      // elements
      _.$body = $(document.body);
      _.$header = $(element);
      _.$headerInner = $(element).find('.' + _.options.headerInnerClass);
      _.$headerSpacer = $('#' + _.options.headerSpacerId);
      _.$adBlock = $('#' + _.options.adBlockId);
      _.$showLogo = $(element).find(_.options.showLogoSel);

      // data attributes value
      _.data = {};

      // init app
      _.init(true);
    }

    return usaStickyHeader;
  }());

  // check Window Width
  usaStickyHeader.prototype.checkMatchWindowWidth = function (widthName, bp) {
    // widthName - 'min' or 'max'; bp - breakpoint for check
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // add || remove class
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
  usaStickyHeader.prototype.removeSlideHeaderClass = function () {
    console.info('removeSlideHeaderClass');

    var _ = this,
        $header = _.$header,
        slideHeaderClass = _.options.slideHeaderClass.trim();

    if ($header.hasClass(slideHeaderClass)) {
      _.options.isHeaderSticky = false;
      _.options.isSlideHeaderActive = false;
      $header.removeClass(slideHeaderClass);
    }
  };
  usaStickyHeader.prototype.addSlideHeaderClass = function () {
    console.info('addSlideHeaderClass');

    var _ = this,
        $header = _.$header,
        slideHeaderClass = _.options.slideHeaderClass.trim();

    if (!$header.hasClass(slideHeaderClass)) {
      _.options.isHeaderSticky = true;
      $header.addClass(slideHeaderClass);
    }
  };

  // scroll events
  usaStickyHeader.prototype.getScrollDirection = function (newYOffset) {
    // newYOffset - window.pageYOffset

    var _ = this,
        currentYOffset = _.options.pageYOffset;

    if (currentYOffset > newYOffset) {
      _.options.scrollDirection = 'top';
    } else if (currentYOffset < newYOffset) {
      _.options.scrollDirection = 'down';
    }

    if (Math.abs(newYOffset - _.options.pageYOffset) > _.options.scrollDiffMin) {
      _.options.isScrollDiffMin = true;
    } else {
      _.options.isScrollDiffMin = false;
    }

    _.options.pageYOffset = newYOffset;
    console.info('getScrollDirection : ' + _.options.scrollDirection);
  };
  usaStickyHeader.prototype.scrollToTop = function (top, duration, easing, callback) {
    console.info('scrollToTop');
    $("html, body").animate({scrollTop: top}, duration, easing, function() {
      console.info("Finished scrollTop animating");
      if (typeof callback === 'function') {
        callback();
      }
    });
  };

  // reset
  usaStickyHeader.prototype.resetHeader = function () {

    console.info('resetHeader');

    var _ = this;

    // reset position and slide Down StickyHeader
    _.setHeaderPosition(0);
    _.resetShowLogo();
    _.removeSlideHeaderClass();
    _.removeStickyHeaderClass();

    _.setTimeout(function () {
      _.updateHeaderSpacerHeight();
    }, _.options.defaultDelayCssAnimate);
  };

  // slide header
  usaStickyHeader.prototype.slideUpStickyHeader = function (top, callback) {

    var _ = this;

    if (_.options.isSlideProcessing) {
      return;
    }

    _.options.isSlideProcessing = true;
    _.setHeaderPosition(top);
    _.setTimeout(function () {
      _.options.isSlideUpHeaderSticky = true;
      _.options.isSlideProcessing = false;
      _.checkHeaderPosition();
      _.resetShowLogo();
      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.defaultDelayCssAnimate);
  };
  usaStickyHeader.prototype.slideDownStickyHeader = function (top, callback) {

    var _ = this;

    if (_.options.isSlideProcessing) {
      return;
    }

    _.options.isSlideProcessing = true;
    _.setHeaderPosition(top);
    _.setTimeout(function () {
      _.options.isSlideUpHeaderSticky = false;
      _.options.isSlideProcessing = false;
      _.options.slideUpStartPositon = window.pageYOffset;
      _.checkHeaderPosition();
      _.resetShowLogo();
      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.defaultDelayCssAnimate);
  };
  usaStickyHeader.prototype.slideStickyHeader = function () {

    console.info('slideStickyHeader');

    var _ = this;

    if (_.options.isHeaderSticky && _.options.isSlideHeaderActive) {

      // add slide class header
      _.addSlideHeaderClass();

      if (_.options.scrollDirection == 'down' && !_.options.isSlideUpHeaderSticky && _.options.isScrollDiffMin) {

        // slide Up StickyHeader
        _.slideUpStickyHeader('-' + _.options.headerHeight, null);

      } else if (_.options.scrollDirection == 'top' && _.options.isSlideUpHeaderSticky) {

        // slide Down StickyHeader
        _.slideDownStickyHeader('-' + _.options.adBlockHeight, null);
      }
    }
  };

  // setTimeout
  usaStickyHeader.prototype.setTimeout = function (callback, delay) {
    console.info('setTimeout');

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);

  };

  // header position
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
  usaStickyHeader.prototype.checkHeaderPosition = function () {

    console.info('checkHeaderPosition');

    var _ = this;

    if (_.options.pageYOffset < _.options.minScrollLength && _.options.isHeaderSticky) {
      _.resetHeader();
    }
  };
  usaStickyHeader.prototype.checkHeaderOffset = function () {

    var _ = this,
        minScrollLength = _.options.minScrollLength,
        durationCssAnimate = _.options.durationCssAnimate;

    console.info('checkHeaderOffset', _.options.pageYOffset, _.options.isHeaderSticky);

    if (_.options.pageYOffset > minScrollLength && !_.options.isHeaderSticky) {
      _.addStickyHeaderClass();

      // slide up header
      _.setTimeout(function () {
        _.slideUpStickyHeader('-' + _.options.headerHeight, function () {

          // callback after slide up
          _.setTimeout(function () {

            // add slide class header
            _.addSlideHeaderClass();

            // slide Down StickyHeader
            _.slideDownStickyHeader('-' + _.options.adBlockHeight, null);

          }, durationCssAnimate / 2);
        });
        // _.scrollToTop(_.options.headerHeight, durationCssAnimate / 2, _.options.easing);
      }, durationCssAnimate / 2);

    } else if (_.options.pageYOffset < minScrollLength && _.options.isHeaderSticky) {
      _.resetHeader();
    } else if (_.options.pageYOffset > _.options.headerHeight * 2 && _.options.isHeaderSticky && !_.options.isSlideHeaderActive) {
      // slide Up StickyHeader
      _.options.isSlideHeaderActive = true;
      _.slideUpStickyHeader('-' + _.options.headerHeight, null);
    }
  };

  // header spacer
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

  // resize resizeShowLogo
  usaStickyHeader.prototype.resetShowLogo = function () {
    console.info('resetShowLogo');
    var _ = this;
    _.options.isResizeHeaderElemsStop = false;
    _.$showLogo.removeAttr('style');
  };
  usaStickyHeader.prototype.resizeShowLogo = function () {

    console.info('resizeShowLogo');
    var _ = this,
        logoHeight = _.options.showLogoHeight - (0.005 * _.options.showLogoHeight * _.options.pageYOffset),
        logoWidth = _.options.showLogoWidth - (0.005 * _.options.showLogoWidth * _.options.pageYOffset);

    if (!_.options.isResizeHeaderElemsStop && !_.options.isHeaderSticky) {
      if (_.options.pageYOffset > 10 && _.options.pageYOffset < _.options.minScrollLength && logoHeight >= _.options.minSowLogoHeight) {
        console.info('resizeShowLogo 1');
        _.options.isResizeHeaderElemsStop = false;
        _.$showLogo.css({
          height: logoHeight + 'px',
          width: logoWidth + 'px'
        });
      }
    } else {
      console.info('resizeShowLogo 2');
      _.options.isResizeHeaderElemsStop = true;
    }
  };

  // update value
  usaStickyHeader.prototype.updateOptionsVal = function () {

    console.info('updateOptionsVal');

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer;

    _.options.pageYOffset = window.pageYOffset;
    _.options.adBlockHeight = _.$adBlock.outerHeight();
    _.options.headerHeight = $header.outerHeight();
    _.options.headerSpacerHeight = $headerSpacer.outerHeight();
    _.options.minScrollLength = _.options.headerHeight / 2;
    _.options.showLogoHeight = _.$showLogo.outerHeight();
    _.options.showLogoWidth = _.$showLogo.outerWidth();
    _.options.minSowLogoHeight = _.options.showLogoHeight / 2;
  };

  // windows events
  usaStickyHeader.prototype.addEvents = function () {

    var _ = this;

    $(window)
        .on('scroll', function (e) {

          console.info('onScroll : ' + window.pageYOffset);

          var $window = this,
              newYOffset = $window.pageYOffset;

          _.getScrollDirection(newYOffset);
          if (!_.options.isSlideProcessing) {
            _.resizeShowLogo();
            _.checkHeaderOffset();
            _.slideStickyHeader();
          }
        })
        .on('resize', function (e) {

          console.info('onResize');

          var $window = this;

          _.resetShowLogo();
          _.updateOptionsVal();
          _.updateHeaderSpacerHeight();
        });
  };

  // init usaStickyHeader app
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
