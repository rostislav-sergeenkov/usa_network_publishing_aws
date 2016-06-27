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

var USAN = USAN || {};

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
        htmlSelector: 'html',
        headerSelector: '#header', // string
        headerSpacerSelector: '#header-spacer', // string
        topMenuBlockSelector: '.top-menu-block', // string
        bottomMenuBlockSelector: '.bottom-menu-block', // string
        socialBlockSelector: '.social-block', // string
        showMenuWrapSelector: '.show-menu-tab', // string
        showMenuSelector: '.show-menu', // string
        showMenuItemSelector: '.show-menu-item', // string
        menuOpenButtonSelector: '.menu-open-button',
        signUpFormMobileSelector: '#usa-newsletter-subscription-mobile',
        signUpFormDesktopSelector: '#usa-newsletter-subscription-desktop',
        signUpFormCloseButtonSelector: '.close-form',
        menuSignUplinkSelector: '.menu-sign-up',
        initAppClass: 'usa-show-menu-initialized',
        showMenuMobileBp: 768,
        activeClass: 'active',
        classHeaderMenuOpen: 'menu-open',
        classActiveLink: 'active-link',
        classAnimating: 'velocity-animating',
        classShowMenuScrollEnd: 'show-menu-scroll-end',
        classNoScroll: 'no-scroll',
        resizeTimeOut: 50, // number ms
        durationSlideForm: 200 // number ms
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // params
      _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.isTabletDevice = usa_deviceInfo.mobileDevice && !usa_deviceInfo.smartphone ? true : false;
      _.options.isSmartphoneDevice = usa_deviceInfo.smartphone;
      _.options.windowInnerHeight = window.innerHeight;
      _.options.isMobileBp = false;
      _.options.isMenuOpenButtonActive = false;
      _.options.isMenuSignUplinkActive = false;
      _.options.isMenuCustomScrollActive = false;
      _.options.isShowSignUpForm = false;
      _.options.scrollDirection = '';
      _.options.customScrollend = false;

      // elements
      _.$html = $(_.options.htmlSelector);
      _.$body = $(document.body);
      _.$header = $(_.options.headerSelector);
      _.$headerSpacer = $(_.options.headerSpacerSelector);
      _.$mainWrap = $(element);
      _.$topMenuBlock = _.$mainWrap.find(_.options.topMenuBlockSelector);
      _.$bottomMenuBlock = _.$mainWrap.find(_.options.bottomMenuBlockSelector);
      _.$socialMenuBlock = _.$mainWrap.find(_.options.socialBlockSelector);
      _.$showMenuWrap = _.$mainWrap.find(_.options.showMenuWrapSelector);
      _.$showMenu = _.$showMenuWrap.find(_.options.showMenuSelector);
      _.$showMenuItems = _.$showMenu.find(_.options.showMenuItemSelector);
      _.$menuOpenButton = _.$mainWrap.find(_.options.menuOpenButtonSelector);
      _.$signUpFormMobile = _.$mainWrap.find(_.options.signUpFormMobileSelector);
      _.$signUpFormDesktop = _.$mainWrap.find(_.options.signUpFormDesktopSelector);
      _.$menuSignUplink = _.$mainWrap.find(_.options.menuSignUplinkSelector);
      _.$menuSignUplinkWrap = _.$menuSignUplink.closest('.show-menu-item');
      _.$activeForm = _.$signUpFormDesktop;

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

  // check mobile device
  usaShowMenu.prototype.setMobileDeviceClass = function () {

    var _ = this,
        $header = _.$header;

    if (_.options.isSmartphoneDevice) {
      _.addElemClass($header, 'smartphone');
    } else if (_.options.isTabletDevice) {
      _.addElemClass($header, 'tablet')
    }
  };

  // setTimeout
  usaShowMenu.prototype.setTimeout = function (callback, delay) {

    var timeout = null;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }
    }, delay);

  };

  usaShowMenu.prototype.checkHeaderSpacer = function () {
    var _ = this,
        $headerHeight = _.$header.innerHeight(),
        $headerSpacerHeight = _.$headerSpacer.innerHeight();

    if ($headerSpacerHeight != $headerHeight) {
      _.setHeaderSpacerHeight($headerHeight);
    }
  };

  usaShowMenu.prototype.setHeaderSpacerHeight = function (height) {

    var _ = this,
        $headerSpacer = _.$headerSpacer;

    $headerSpacer.css({
      display: 'block',
      height: height + 'px'
    });
  };

  // scroll events
  usaShowMenu.prototype.getScrollDirection = function (newYOffset) {
    // newYOffset - window.pageYOffset

    var _ = this,
        currentYOffset = _.options.pageYOffset;

    if (currentYOffset > newYOffset) {
      _.options.scrollDirection = 'top';
    } else if (currentYOffset < newYOffset) {
      _.options.scrollDirection = 'down';
    }
  };

  // add || remove class
  usaShowMenu.prototype.addElemClass = function (elem, className, callback) {

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
        $html = _.$html,
        $header = _.$header,
        $menuOpenButton = _.$menuOpenButton,
        $mainWrap = _.$mainWrap,
        classHeaderMenuOpen = _.options.classHeaderMenuOpen,
        classNoScroll = _.options.classNoScroll,
        activeClass = _.options.activeClass;

    if (!_.options.isMenuOpenButtonActive) {
      _.options.isMenuOpenButtonActive = true;
      _.addElemClass($html, classNoScroll, null);
      _.addElemClass($header, classHeaderMenuOpen, null);
      _.addElemClass($menuOpenButton, activeClass, null);
      _.addElemClass($mainWrap, activeClass, null);
    } else {
      _.options.isMenuOpenButtonActive = false;
      _.removeElemClass($html, classNoScroll, null);
      _.removeElemClass($header, classHeaderMenuOpen, null);
      _.removeElemClass($menuOpenButton, activeClass, null);
      _.removeElemClass($mainWrap, activeClass, null);
      _.checkHeaderSpacer();
    }
  };

  usaShowMenu.prototype.initSignUpFormHandler = function () {

    var _ = this,
        $showMenu = _.$showMenu,
        $menuSignUplink = _.$menuSignUplink,
        $menuSignUplinkWrap = _.$menuSignUplinkWrap,
        classActiveLink = _.options.classActiveLink,
        classAnimating = _.options.classAnimating,
        activeClass = _.options.activeClass,
        duration = _.options.durationSlideForm,
        $form = _.$activeForm;
    
    if ($form.hasClass(classAnimating)) {
      $form.velocity('finish');
    }

    if (_.options.isMenuSignUplinkActive) {
      _.options.isMenuSignUplinkActive = false;
      $form.velocity('slideUp', {
        duration: duration,
        complete: function(elem) {
          _.removeElemClass($menuSignUplinkWrap, classActiveLink, null);
          _.removeElemClass($menuSignUplink, classActiveLink, null);
          _.removeElemClass($form, activeClass, function () {
            _.options.isShowSignUpForm = false;
          });
        }
      });
    } else {
      _.options.isMenuSignUplinkActive = true;
      _.addElemClass($menuSignUplinkWrap, classActiveLink, null);
      _.addElemClass($menuSignUplink, classActiveLink, null);
      $form.velocity('slideDown', {
        duration: duration,
        complete: function(elem) {
          _.addElemClass($form, activeClass, function () {
            if (_.options.isMobileDevice && $showMenu.mCustomScrollbar !== undefined) {
              $($showMenu).mCustomScrollbar("scrollTo",$form,{
                scrollInertia: 200
              });
            }
            _.options.isShowSignUpForm = true;
          });
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
      scrollInertia: 0,
      axis: 'y',
      autoHideScrollbar: false,
      documentTouchScroll: false,
      theme: 'light',
      scrollbarPosition: 'inside',
      callbacks: {
        whileScrolling: function () {
          if (this.mcs.topPct <= 97) {
            _.removeElemClass($showMenuWrap, classShowMenuScrollEnd, null);
          } else {
            _.addElemClass($showMenuWrap, classShowMenuScrollEnd, null);
          }
        },
        onTotalScroll:function(){
          console.info("scrolled to bottom");
          _.options.customScrollend = true;
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

  usaShowMenu.prototype.resetForms = function () {

    var _ = this,
        $signUpFormMobile = _.$signUpFormMobile,
        $signUpFormDesktop = _.$signUpFormDesktop;

    $signUpFormMobile.removeAttr('style');
    $signUpFormDesktop.removeAttr('style');
  };

  usaShowMenu.prototype.checkSignUpForm = function () {
    
    var _ = this,
        $signUpFormMobile = _.$signUpFormMobile,
        $signUpFormDesktop = _.$signUpFormDesktop;

    if (_.options.isMobileBp) {
      _.$activeForm = $signUpFormMobile;
    } else {
      _.$activeForm = $signUpFormDesktop;
    }
  };

  usaShowMenu.prototype.addEvents = function () {

    var _ = this,
        $menuOpenButton = _.$menuOpenButton,
        $signUpFormMobile = _.$signUpFormMobile,
        $signUpFormDesktop = _.$signUpFormDesktop,
        $menuSignUplink = _.$menuSignUplink,
        resizeTimeOut = _.options.resizeTimeOut;

    $(window)
        .bind('scroll', function (e) {
          var $window = this;

          _.getScrollDirection($window.pageYOffset);

          /*if (_.options.customScrollend) {
            if (_.options.isMenuOpenButtonActive) {
              _.initMenuOpenHandler();
            }

            if (_.options.isMenuSignUplinkActive) {
              _.initSignUpFormHandler();
            }
          }

          // close menu & form on scroll to top
          if (USAN.hasOwnProperty('scrollToTop') && USAN.scrollToTop) {
            if (_.options.isMenuOpenButtonActive) {
              _.initMenuOpenHandler();
            }

            if (_.options.isMenuSignUplinkActive) {
              _.initSignUpFormHandler();
            }
          }*/
        })
        .bind('resize', function (e) {

          var $window = this;

          _.setTimeout(function () {

            _.updateParamsValue();
            _.checkSignUpForm();

            if (_.options.isMobileBp) {

              if (!_.options.isMenuCustomScrollActive) {
                _.addShowMenuCustomScroll();
                _.resetForms();
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
                _.resetForms();
              }
            }
          }, resizeTimeOut);
        });

    $($menuOpenButton).bind('click', function () {
      _.initMenuOpenHandler();
    });

    // show || hide - sign up form
    $($signUpFormMobile).on('click', _.options.signUpFormCloseButtonSelector, function () {
      _.initSignUpFormHandler();
    });
    $($signUpFormDesktop).on('click', _.options.signUpFormCloseButtonSelector, function () {
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
    _.options.pageYOffset = window.pageYOffset;
    _.options.windowInnerHeight = window.innerHeight;
  };

  // init usaShowMenu app
  usaShowMenu.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$mainWrap.hasClass(_.options.initAppClass)) {
      _.$mainWrap.addClass(_.options.initAppClass);
      if (_.options.isMobileDevice) {
        _.setMobileDeviceClass();
      }
      _.updateParamsValue();
      _.checkSignUpForm();
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
