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
        initMobileStickyOffSetY: 10, // number
        headerInnerMaxWidth: 1600, // px or ''
        durationHeaderAnim: 700,
        easingHeaderAnim: 'linear'
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      _.options.pageYOffset = window.pageYOffset;
      _.options.scrollDirection = ''; // 'top' or 'down'
      _.options.headerHeight = 0;
      _.options.adBlockHeight = 0;
      _.options.slideHeaderHeight = 0;
      // _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.isHeaderSticky = false;
      _.options.isStickyMobileOn = false;
      _.options.isStickyDesktopOn = false;
      _.options.isShowHeaderDesktop = false;

      _.options.classAnimating = 'velocity-animating'; // class processing animation

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
  // additional mode
  //=============================

  //=============================
  // helpers
  //=============================

  usaStickyHeader.prototype.checkMatchWindowWidth = function (name, bp) {
    return window.matchMedia('(' + name + '-width: ' + bp + 'px)').matches;
  };

  usaStickyHeader.prototype.checkScrollDirection = function (top) {

    var _ = this,
        lastScrollTop = _.options.pageYOffset;

    if (lastScrollTop > top) {
      _.options.scrollDirection = 'top';
    } else if (lastScrollTop < top) {
      _.options.scrollDirection = 'down';
    }

    _.options.pageYOffset = top;
  };

  usaStickyHeader.prototype.offStickyHeaderClass = function () {
    console.info('offStickyHeaderClass');

    var _ = this,
        $header = _.$header,
        stickyHeaderClass = _.options.stickyHeaderClass.trim();

    if ($header.hasClass(stickyHeaderClass)) {
      _.options.isHeaderSticky = false;
      $header.removeClass(stickyHeaderClass);
    }
  };

  usaStickyHeader.prototype.onStickyHeaderClass = function () {
    console.info('onStickyHeaderClass');

    var _ = this,
        $header = _.$header,
        stickyHeaderClass = _.options.stickyHeaderClass.trim();

    if (!$header.hasClass(stickyHeaderClass)) {
      _.options.isHeaderSticky = true;
      $header.addClass(stickyHeaderClass);
    }
  };

  usaStickyHeader.prototype.updateOptions = function () {

    console.info('updateOptions');

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer;

    _.options.adBlockHeight = _.$adBlock.outerHeight();
    _.options.headerHeight = $header.outerHeight();
    _.options.slideHeaderHeight = _.options.headerHeight - _.options.adBlockHeight;
  };

  //=============================
  // main functionality
  //=============================

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

    var _ = this,
        $headerSpacer = _.$headerSpacer;

    if ($headerSpacer.hasClass(_.options.classAnimating)) {
      $headerSpacer.velocity('finish');
    }
    $headerSpacer.velocity({
      height: _.options.headerHeight + 'px'
    }, {
      duration: _.options.durationHeaderAnim,
      easing: _.options.easingHeaderAnim
    });
  };

  usaStickyHeader.prototype.setHeaderSpacerHeight = function () {

    var _ = this,
        $headerSpacer = _.$headerSpacer;

    $headerSpacer.css({
      display: 'block',
      height: _.options.headerHeight + 'px'
    });
  };

  // mobile version

  usaStickyHeader.prototype.resetStyleMobileHeader = function () {
    var _ = this,
        $header = _.$header,
        $headerInner = _.$headerInner;

    $header.removeAttr('style');
    $headerInner.removeAttr('style');
  };

  usaStickyHeader.prototype.initMobileHeader = function () {
    console.info('initMobileHeader');
    var _ = this,
        pageYOffset = _.options.pageYOffset,
        initMobileStickyOffSetY = _.options.initMobileStickyOffSetY;

    _.options.isStickyMobileOn = true;
    _.options.isStickyDesktopOn = false;

    if (pageYOffset >= initMobileStickyOffSetY) {
      _.onStickyHeaderClass();
    } else {
      _.offStickyHeaderClass();
      _.setHeaderSpacerHeight();
    }
    _.resetStyleMobileHeader();
  };

  // desktop version

  usaStickyHeader.prototype.setHeaderPosition = function () {

    var _ = this,
        $header = _.$header;

    $header.css('top', '-' + _.options.headerHeight + 'px');
  };

  usaStickyHeader.prototype.slideUpStickyHeader = function (top, callback) {

    var _ = this,
        $header = _.$header;

    console.info('slideUpStickyHeader');
    if (!$header.hasClass(_.options.classAnimating)) {
      $header.velocity({
        top: '-' + top + 'px'
      }, {
        duration: _.options.durationHeaderAnim,
        easing: _.options.easingHeaderAnim,
        complete: function (elements) {
          console.info('hideStickyHeaderDesktop complete');
          _.options.isShowHeaderDesktop = false;
          if (typeof callback == 'function') {
            callback();
          }
        }
      });
    }
  };

  usaStickyHeader.prototype.slideDownStickyHeader = function (top, callback) {

    var _ = this,
        $header = _.$header;

    console.info('slideDownStickyHeader');

    if (!$header.hasClass(_.options.classAnimating)) {
      $header.velocity({
        top: '+=' + top + 'px'
      }, {
        duration: _.options.durationHeaderAnim,
        easing: _.options.easingHeaderAnim,
        complete: function (elements) {
          console.info('slideDownStickyHeader complete');
          _.options.isShowHeaderDesktop = true;
          if (typeof callback == 'function') {
            callback();
          }
        }
      });
    }
  };

  usaStickyHeader.prototype.resetHeaderPosition = function (callback) {

    console.info('resetHeaderPosition');

    var _ = this,
        $header = _.$header,
        $headerInner = _.$headerInner;


    if ($header.hasClass(_.options.classAnimating)) {
      $header.velocity('finish');
    }
    _.offStickyHeaderClass();
    _.updateOptions();
    _.updateHeaderSpacerHeight();
    $headerInner.removeAttr('style');
    $header.velocity({
      top: 0
    }, {
      duration: _.options.durationHeaderAnim,
      easing: _.options.easingHeaderAnim,
      complete: function (elements) {
        console.info('resetHeaderPosition complete');
        _.options.isShowHeaderDesktop = false;
        if (typeof callback == 'function') {
          callback();
        }
      }
    });
  };

  usaStickyHeader.prototype.resetHeader = function () {

    console.info('reset');

    var _ = this;

    _.resetHeaderPosition();
  };

  usaStickyHeader.prototype.checkHeaderPosition = function () {

    console.info('checkHeaderPosition');

    var _ = this;

    if (_.options.pageYOffset === 0 && _.options.isHeaderSticky) {
      _.resetHeader();
    }
  };

  usaStickyHeader.prototype.checkHeaderOffset = function () {

    var _ = this;

    console.info('checkHeaderOffset');

    if (_.options.pageYOffset > _.options.headerHeight * 3 && !_.options.isHeaderSticky) {

      _.onStickyHeaderClass();
      _.setHeaderPosition();

    } else if (_.options.pageYOffset <= _.options.headerHeight * 3 && _.options.isHeaderSticky) {

      _.slideUpStickyHeader(_.options.headerHeight, function () {
        _.resetHeader();
      });
    }
  };

  usaStickyHeader.prototype.slideStickyHeader = function () {

    console.info('slideStickyHeader');

    var _ = this;

    console.info(_.options.scrollDirection);
    if (_.options.scrollDirection == 'down' && _.options.isHeaderSticky && _.options.isShowHeaderDesktop) {
      // slide Up StickyHeader
      _.slideUpStickyHeader(_.options.headerHeight, function () {
        _.checkHeaderPosition();
      });
    } else if (_.options.scrollDirection == 'top' && _.options.isHeaderSticky && !_.options.isShowHeaderDesktop) {
      // slide Down StickyHeader
      _.slideDownStickyHeader(_.options.slideHeaderHeight, function () {
        _.checkHeaderPosition();
      });
    }
  };

  usaStickyHeader.prototype.initDesktopHeader = function () {
    console.info('initDesktopHeader');
    var _ = this,
        $header = _.$header;

    if (_.options.isStickyMobileOn && _.options.isHeaderSticky) {
      $header.css('top', '-' + _.options.headerHeight + 'px');
    }

    _.checkHeaderOffset();

    _.options.isStickyDesktopOn = true;
    _.options.isStickyMobileOn = false;
  };

  // events
  usaStickyHeader.prototype.addEvents = function () {

    var _ = this;

    $(window)
        .on('scroll', function (e) {

          var $window = this;

          _.checkScrollDirection($window.pageYOffset);

          if (_.checkMatchWindowWidth('max', _.options.initStickyMobileBp)) {
            _.initMobileHeader();
          } else {
            _.checkHeaderOffset();
            _.slideStickyHeader();
          }
        })
        .on('resize', function (e) {

          var $window = this;

          _.updateOptions();
          _.setHeaderSpacerHeight();

          if (_.checkMatchWindowWidth('max', _.options.initStickyMobileBp)) {
            _.initMobileHeader();
          } else {
            _.initDesktopHeader();
          }
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
      _.updateOptions();
      _.checkHeaderSpacer();
      _.setHeaderSpacerHeight();

      if (_.checkMatchWindowWidth('max', _.options.initStickyMobileBp)) {
        _.initMobileHeader();
      } else {
        _.initDesktopHeader();
      }

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
