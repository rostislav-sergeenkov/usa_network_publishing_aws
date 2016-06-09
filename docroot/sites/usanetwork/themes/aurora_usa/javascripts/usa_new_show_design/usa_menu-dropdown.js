/* readme

 dependency:
 mCustomScrollbar: '3.0.6'
 velocityjs: '1.2.2'

 mCustomScrollbar - http://manos.malihu.gr/jquery-custom-content-scroller/
 VelocityJS - VelocityJS.org

 // description
 element - main wrapper of carousel
 $(element).usaShowMenu() - init carousel
 */


(function ($) {

  //=============================
  // usaShowMenu app
  //=============================
  var usaShowMenu = window.usaCarousels || {};

  usaShowMenu = (function () {

    function usaShowMenu(element, settings) {

      var _ = this;

      // default settings
      _.defaults = {
        showMenuWrapSelector: '.show-menu-tab', // string
        showMenuSelector: '.show-menu', // string
        showMenuItemSelector: '.show-menu-item', // string
        menuOpenButtonSelector: '.menu-open-button',
        signUpFormSelector: '#usa-newsletter-subscription',
        signUpFormCloseButtonSelector: '.close-form',
        menuSignUplinkSelector: '.menu-sign-up',
        initAppClass: 'usa-show-menu-initialized',
        showMenuMobileBp: 768,
        activeClass: 'active',
        classActiveLink: 'active-link',
        classAnimating: 'velocity-animating',
        classShowMenuScrollEnd: 'show-menu-scroll-end',
        resizeTimeOut: 50 // number ms
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // params
      _.options.isMobileBp = false;
      _.options.isMenuOpenButtonActive = false;
      _.options.isMenuSignUplinkActive = false;
      _.options.isMenuCustomScrollActive = false;

      // elements
      _.$body = $(document.body);
      _.$mainWrap = $(element);
      _.$showMenuWrap = _.$mainWrap.find(_.options.showMenuWrapSelector);
      _.$showMenu = _.$showMenuWrap.find(_.options.showMenuSelector);
      _.$showMenuItems = _.$showMenu.find(_.options.showMenuItemSelector);
      _.$menuOpenButton = _.$mainWrap.find(_.options.menuOpenButtonSelector);
      _.$signUpForm = _.$mainWrap.find(_.options.signUpFormSelector);
      _.$menuSignUplink = _.$mainWrap.find(_.options.menuSignUplinkSelector);

      // init app
      _.init(true);
    }

    return usaShowMenu;
  }());

  // check Window Width
  usaShowMenu.prototype.checkMatchWindowWidth = function (widthName, bp) {
    // widthName - 'min' or 'max'; bp - breakpoint for check
    return window.matchMedia('(' + widthName + '-width: ' + bp + 'px)').matches;
  };

  // setTimeout
  usaShowMenu.prototype.setTimeout = function (callback, delay) {
    console.info('setTimeout');

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);

  };

  // add || remove class
  usaShowMenu.prototype.addElemClass = function (elem, className, callback) {
    console.info('addHeaderClass : ' + className);

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

  usaShowMenu.prototype.removeElemClass = function (elem, className, callback) {
    console.info('removeHeaderClass : ' + className);

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

  usaShowMenu.prototype.initMenuOpenHandler = function () {

    var _ = this,
        $menuOpenButton = _.$menuOpenButton,
        $mainWrap = _.$mainWrap,
        activeClass = _.options.activeClass;

    if (!_.options.isMenuOpenButtonActive) {
      _.options.isMenuOpenButtonActive = true;
      _.addElemClass($menuOpenButton, activeClass, null);
      _.addElemClass($mainWrap, activeClass, null);
    } else {
      _.options.isMenuOpenButtonActive = false;
      _.removeElemClass($menuOpenButton, activeClass, null);
      _.removeElemClass($mainWrap, activeClass, null);
    }
  };

  usaShowMenu.prototype.initSignUpFormHandler = function () {

    var _ = this,
        $menuSignUplink = _.$menuSignUplink,
        $signUpForm = _.$signUpForm,
        classActiveLink = _.options.classActiveLink,
        classAnimating = _.options.classAnimating,
        activeClass = _.options.activeClass;

    if ($signUpForm.hasClass(classAnimating)) {
      $signUpForm.velocity('finish');
    }

    if (_.options.isMenuSignUplinkActive) {
      _.options.isMenuSignUplinkActive = false;
      $signUpForm.velocity('slideUp', {
        duration: 200,
        complete: function(elem) {
          _.removeElemClass($menuSignUplink, classActiveLink, null);
          _.removeElemClass($signUpForm, activeClass, null);
        }
      });
    } else {
      _.options.isMenuSignUplinkActive = true;
      _.addElemClass($menuSignUplink, classActiveLink, null);
      $signUpForm.velocity('slideDown', {
        duration: 200,
        complete: function(elem) {
          _.addElemClass($signUpForm, activeClass, null);
        }
      });
    }
  };

  usaShowMenu.prototype.addShowMenuCustomScroll = function () {

    var _ = this,
        $showMenu = _.$showMenu,
        $showMenuWrap = _.$showMenuWrap,
        classShowMenuScrollEnd = _.options.classShowMenuScrollEnd;

    _.options.isMenuCustomScrollActive = true;

    $showMenu.mCustomScrollbar({
      axis: 'y',
      autoHideScrollbar: true,
      theme: 'light',
      scrollbarPosition: 'inside',
      callbacks: {
        whileScrolling: function () {
          if (this.mcs.topPct <= 97) {
            _.removeElemClass($showMenuWrap, classShowMenuScrollEnd, null);
          } else {
            _.addElemClass($showMenuWrap, classShowMenuScrollEnd, null);
          }
        }
      }
    });
  };

  usaShowMenu.prototype.destroyShowMenuCustomScroll = function () {

    var _ = this,
        $showMenu = _.$showMenu,
        $showMenuWrap = _.$showMenuWrap,
        classShowMenuScrollEnd = _.options.classShowMenuScrollEnd;

    _.options.isMenuCustomScrollActive = false;

    $($showMenu).mCustomScrollbar('destroy');
    _.removeElemClass($showMenuWrap, classShowMenuScrollEnd, null);

  };

  usaShowMenu.prototype.addEvents = function () {

    var _ = this,
        $menuOpenButton = _.$menuOpenButton,
        $signUpForm = _.$signUpForm,
        $menuSignUplink = _.$menuSignUplink,
        resizeTimeOut = _.options.resizeTimeOut;

    $(window)
        .bind('scroll', function (e) {
          var $window = this;

          if (_.options.isMenuOpenButtonActive) {
            _.initMenuOpenHandler();
          }

          if (_.options.isMenuSignUplinkActive) {
            _.initSignUpFormHandler();
          }
        })
        .bind('resize', function (e) {

          var $window = this;

          _.setTimeout(function () {

            _.updateParamsValue();

            if (_.options.isMobileBp) {

              if (!_.options.isMenuCustomScrollActive) {
                _.addShowMenuCustomScroll();
              }

            } else {

              if (_.options.isMenuOpenButtonActive) {
                _.initMenuOpenHandler();
              }

              if (_.options.isMenuSignUplinkActive) {
                _.initSignUpFormHandler();
              }

              if (_.options.isMenuCustomScrollActive) {
                _.destroyShowMenuCustomScroll();
              }
            }
          }, resizeTimeOut);
        });

    $($menuOpenButton).bind('click', function () {
      _.initMenuOpenHandler();
    });

    // show || hide - sign up form
    $($signUpForm).on('click', _.options.signUpFormCloseButtonSelector, function () {
      _.initSignUpFormHandler();
    });

    $($menuSignUplink).bind('click', function (e) {
      e.preventDefault();
      _.initSignUpFormHandler();
    });
  };

  usaShowMenu.prototype.updateParamsValue = function () {

    var _ = this;

    _.options.isMobileBp = _.checkMatchWindowWidth('max', _.options.showMenuMobileBp);
  };

  // init usaShowMenu app
  usaShowMenu.prototype.init = function (creation) {

    console.info('init');

    var _ = this;

    if (creation && !_.$mainWrap.hasClass(_.options.initAppClass)) {
      _.$mainWrap.addClass(_.options.initAppClass);
      _.updateParamsValue();
      _.addEvents();
      if (_.options.isMobileBp) {
        _.addShowMenuCustomScroll();
      }
    }
  };

  //=================================
  // create jQuery method usaShowMenu
  //=================================
  $.fn.usaShowMenu = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaShowMenu = new usaShowMenu(_[i], opt);
      else
        ret = _[i].usaShowMenu[opt].apply(_[i].usaShowMenu, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {
    $('.show-new-design #header #block-usanetwork-tv-shows-usanetwork-tv-shows-nd-menu').usaShowMenu();
  });
})(jQuery);
