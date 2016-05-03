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
        stickyClass: 'usa-sticky-header', // string value

        // functionality
        initStickyOffSetY: 50, // number value
        sticky: true, // boolean
        stickyMobile: true // boolean
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      _.options.isMobileDevice = usa_deviceInfo.mobileDevice;
      _.options.pageYOffset = window.pageYOffset;

      // elements
      _.$body = $(document.body);
      _.$header = $(element);
      _.$headerSpacer = $('#' + _.options.headerSpacerId);

      // data attributes value
      _.data = {};

      // init app
      _.init(_.checkStickyOff());
    }

    return usaStickyHeader;

  }());

  //=============================
  // helpers
  //=============================

  usaStickyHeader.prototype.checkStickyOff = function () {
    
    var _ = this;

    if (_.options.isMobileDevice) {
      return _.options.stickyMobile;
    } else {
      return _.options.sticky;
    }
  };

  //=============================
  // main functionality
  //=============================

  usaStickyHeader.prototype.setHeaderSpacerHeight = function () {

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer;

    $headerSpacer.css({
      display: 'block',
      height: $header.outerHeight()
    });
  };

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

  usaStickyHeader.prototype.activateSticky = function () {
    
    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer,
        initStickyOffSetY = _.options.initStickyOffSetY,
        pageYOffset = _.options.pageYOffset,
        stickyClass = _.options.stickyClass.trim();

    if (pageYOffset >= initStickyOffSetY) {
      $header.addClass(stickyClass);
    } else {
      $header.removeClass(stickyClass);
    }

    _.setHeaderSpacerHeight();
  };

  usaStickyHeader.prototype.addEvents = function () {

    var _ = this;

    $(window)
        .on('scroll', function (e) {

          var $window = this;
          _.options.pageYOffset = $window.pageYOffset;
          _.activateSticky();
        })
        .on('resize', function (e) {

          var $window = this;
          _.setHeaderSpacerHeight();
        });
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaStickyHeader.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$header.hasClass('usa-sticky-header-initialized')) {
      _.$header.addClass('usa-sticky-header-initialized');
      _.checkHeaderSpacer();
      _.setHeaderSpacerHeight();
      _.activateSticky();
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
    if ($('body').hasClass('show-new-design')) {
      $('#header').usaStickyHeader();
    }
  });

  //=============================
  // end usaStickyHeader app
  //=============================

  Drupal.behaviors.usanetwork_new_menu_dropdown = {
    
    attach: function (context) {

      var timer_id;

      $(document.body).once('window-events', function () {
        var tablet = false;

        if (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) {
          tablet = true;
        }

        var newMenuOpenHandler = function (e) {

          var menu_link = $(".menu-open-button"),
              menu_container = $('#block-usanetwork-tv-shows-usanetwork-tv-shows-nd-menu');

          // Open main menu action
          var openMenu = function () {
            menu_link.addClass('active');
            menu_container.addClass('active');
          };

          // Close main menu action
          var closeMenu = function () {
            menu_link.removeClass('active');
            menu_container.removeClass('active');
          };

          if (!menu_link.hasClass('active')) {
            openMenu();
          } else {
            closeMenu();
          }
        };

        $(".menu-open-button").bind('click', newMenuOpenHandler);

        $(window).on('resize', function (e) {
          clearTimeout(timer_id);
          timer_id = setTimeout(function () {

          }, 300);
        });

      });
    }
  }
})(jQuery);
