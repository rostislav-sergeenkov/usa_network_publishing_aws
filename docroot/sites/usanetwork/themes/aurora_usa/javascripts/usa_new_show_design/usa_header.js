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
        decreaseHeaderClass: 'usa-decrease-header', // string
        stickyHeaderClass: 'usa-sticky-header', // string
        slideHeaderClass: 'usa-slide-header', // string
        slideHeaderSpacerClass: 'slide-spacer', // string
        
        additionalMode: {},

        // functionality
        sticky: true, // boolean
        stickyMobile: true, // boolean
        stickyMobileBp: 768, // number
        headerInnerMaxWidth: 1600, // px or ''
        durationCssAnimate: 200, // ms; default css transition-duration
        delayCssAnimate: 400, // number ms
        easing: 'linear',
        minScrollLength: 100, // number px; used for on || off stickyHeaderClass
        scrollDiffMin: 20, // number px
        minShowLogoHeight: 41, // number px
        minShowLogoWidth: 261, // number px
        minShowLogoDecrease: 0.6 // number % min height 60%
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      _.options.pageYOffset = window.pageYOffset;
      _.options.scrollDirection = ''; // string value 'top' or 'down'
      _.options.headerHeight = 0;
      _.options.defaultHeaderHeight = 0;
      _.options.headerSpacerHeight = 0;
      _.options.adBlockHeight = 0;
      _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.isHeaderSticky = false;
      _.options.isHeaderSlide = false;
      _.options.isSlideUpHeaderSticky = false;
      _.options.isSlideProcessing = false;
      _.options.isScrollDiffMin = false;
      _.options.slideUpStartPositon = 0;
      _.options.showLogoHeight = 0;
      _.options.showLogoWidth = 0;
      _.options.calcMinShowLogoHeight = 0;
      _.options.isResizeShowLogoProcessing = false;

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
  usaStickyHeader.prototype.addHeaderClass = function (className, callback) {
    console.info('addHeaderClass : ' + className);

    var _ = this,
        $header = _.$header,
        headerClass = className.trim();

    if (!$header.hasClass(headerClass)) {
      $header.addClass(headerClass);
    }
    if (typeof callback === 'function') {
      callback();
    }
  };
  usaStickyHeader.prototype.removeHeaderClass = function (className, callback) {
    console.info('removeHeaderClass : ' + className);

    var _ = this,
        $header = _.$header,
        headerClass = className.trim();

    if ($header.hasClass(headerClass)) {
      $header.removeClass(headerClass);
    }
    if (typeof callback === 'function') {
      callback();
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
    _.removeHeaderClass(_.options.stickyHeaderClass, function () {
      _.options.isHeaderSticky = false;
    });
    _.setHeaderPosition(0);
    _.setHeaderSpacerHeight(_.options.defaultHeaderHeight);
    _.resetShowLogo();
    _.setTimeout(function () {
      _.updateHeaderSpacerHeight();
      _.removeHeaderClass(_.options.slideHeaderClass, function () {
        _.options.isHeaderSlide = false;
        _.$headerSpacer.removeClass(_.options.slideHeaderSpacerClass);
      });
    }, _.options.delayCssAnimate);
  };

  // slide header
  usaStickyHeader.prototype.slideUpStickyHeader = function (top, callback) {

    console.info('slideUpStickyHeader');

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
      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.delayCssAnimate);
  };
  usaStickyHeader.prototype.slideDownStickyHeader = function (top, callback) {

    console.info('slideDownStickyHeader');

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
      if (typeof callback === 'function') {
        callback();
      }
    }, _.options.delayCssAnimate);
  };
  usaStickyHeader.prototype.slideStickyHeader = function () {

    console.info('slideStickyHeader');

    var _ = this,
        $header = _.$header;

    if (_.options.isHeaderSticky && _.options.isHeaderSlide) {

      if (_.options.scrollDirection == 'down' && _.options.isScrollDiffMin && !_.options.isSlideUpHeaderSticky) {

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

    if (_.options.pageYOffset < 0 && _.options.isHeaderSticky) {
      _.resetHeader();
    }
  };
  usaStickyHeader.prototype.checkHeaderOffset = function () {

    var _ = this,
        $headerSpacer = _.$headerSpacer,
        $showLogo = _.$showLogo,
        minScrollLength = _.options.minScrollLength;

    console.info('checkHeaderOffset');

    if (_.options.pageYOffset > _.options.headerHeight && !_.options.isHeaderSticky) {

      $headerSpacer.addClass(_.options.slideHeaderSpacerClass);

      $showLogo.css({
        'height': _.options.minShowLogoHeight,
        'width': _.options.minShowLogoWidth
      });
      
      _.addHeaderClass(_.options.stickyHeaderClass, function () {
        _.options.isHeaderSticky = true;
      });

      _.slideUpStickyHeader('-' + _.options.headerHeight, null);

      _.setTimeout(function () {
        _.addHeaderClass(_.options.slideHeaderClass, null);
        _.options.isHeaderSlide = true;
      }, _.options.delayCssAnimate);

    } else if (_.options.pageYOffset < 1  && _.options.isHeaderSticky) {
      _.resetHeader();
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

    var _ = this;

    _.updateOptionsVal();
    
    if (_.options.headerSpacerHeight != _.options.headerHeight) {
      _.setHeaderSpacerHeight(_.options.headerHeight);
    }
  };
  usaStickyHeader.prototype.setHeaderSpacerHeight = function (height) {

    var _ = this,
        $headerSpacer = _.$headerSpacer;

    console.info('setHeaderSpacerHeight', _.options.headerHeight);

    $headerSpacer.css({
      display: 'block',
      height: height + 'px'
    });
  };

  // resize resizeShowLogo
  usaStickyHeader.prototype.resetShowLogo = function () {
    console.info('resetShowLogo');
    var _ = this,
        $showLogo = _.$showLogo;

    _.removeHeaderClass(_.options.decreaseHeaderClass, function () {
      _.$showLogo.removeAttr('style');
      _.options.isResizeShowLogoProcessing = false;
    });
  };
  usaStickyHeader.prototype.resizeShowLogo = function () {

    console.info('resizeShowLogo');
    var _ = this,
        $showLogo = _.$showLogo,
        $headerSpacer = _.$headerSpacer,
        decreaseHeight = 0.005 * _.options.showLogoHeight * _.options.pageYOffset,
        decreaseWidth = 0.005 * _.options.showLogoWidth * _.options.pageYOffset,
        logoHeight = _.options.showLogoHeight - decreaseHeight,
        logoWidth = _.options.showLogoWidth - decreaseWidth;

    // _.options.scrollDirection == 'down' &&
    if (!_.options.isHeaderSticky && !_.options.isHeaderSlide && logoHeight >= _.options.calcMinShowLogoHeight) {
      _.addHeaderClass(_.options.decreaseHeaderClass, function () {
        _.options.isResizeShowLogoProcessing = true;
      });
      $showLogo.css({
        'height': logoHeight,
        'width': logoWidth
      });
      $headerSpacer.css({
        'height': _.options.headerSpacerHeight - decreaseHeight
      })

    } else {
      _.removeHeaderClass(_.options.decreaseHeaderClass, function () {
        _.options.isResizeShowLogoProcessing = false;
      });
    }
  };

  // save default value
  usaStickyHeader.prototype.saveDefaultHeaderHeight = function () {
    var _ = this;
    _.options.defaultHeaderHeight = _.options.headerHeight;
  };

  // update value
  usaStickyHeader.prototype.updateOptionsVal = function () {

    console.info('updateOptionsVal');

    var _ = this,
        calcMinShowLogoHeight;

    _.options.pageYOffset = window.pageYOffset;
    _.options.adBlockHeight = _.$adBlock.outerHeight();
    _.options.headerHeight = _.$header.outerHeight();
    _.options.headerSpacerHeight = _.options.headerHeight;
    _.options.minScrollLength = _.options.headerHeight / 2;
    _.options.showLogoHeight = _.$showLogo.outerHeight();
    _.options.showLogoWidth = _.$showLogo.outerWidth();

    calcMinShowLogoHeight = _.options.showLogoHeight * _.options.minShowLogoDecrease;
    _.options.calcMinShowLogoHeight = calcMinShowLogoHeight >= _.options.minShowLogoHeight ? calcMinShowLogoHeight : _.options.minShowLogoHeight;
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

          if (_.checkMatchWindowWidth('max', _.options.stickyMobileBp)) {

          } else {
            if (!_.options.isMobileDevice) {
              _.resizeShowLogo();
            }
            _.checkHeaderOffset();
            _.slideStickyHeader();
          }
        })
        .on('resize', function (e) {

          console.info('onResize');

          var $window = this;
          
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
      _.saveDefaultHeaderHeight();
      _.checkHeaderSpacer();
      _.setHeaderSpacerHeight(_.options.headerHeight);
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
