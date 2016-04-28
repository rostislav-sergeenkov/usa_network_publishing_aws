(function ($) {

  var usaStickyHeader = window.usaStickyHeader || {};

  usaStickyHeader = (function () {

    function usaStickyHeader(element, settings) {

      var _ = this;

      // default settings
      _.defaults = {
        // selectors
        headerSpacer: '#header-spacer',

        // functionality
        sticky: true
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // elements
      _.$body = $(document.body);
      _.$header = $(element);
      _.$headerSpacer = $(_.options.headerSpacer);

      // data attributes value
      _.data = {};

      // init app
      _.init(true);
    }

    return usaStickyHeader;

  }());

  usaStickyHeader.prototype.setHeaderHeight = function () {
    console.info('setHeaderHeight');

    var _ = this,
        $header = _.$header,
        $headerSpacer = _.$headerSpacer;

    $header.css({
      position: 'fixed',
      left: 0,
      top: 0,
      overflow: 'auto',
      'z-index': 1
    });

    $headerSpacer.css({
      display: 'block',
      height: $header.innerHeight()
    });
  };

  usaStickyHeader.prototype.addEvents = function () {
    console.info('addEvents');

    var _ = this,
        $header = _.$header,
        sticky = _.options.sticky;

    if (sticky) {
      $(window)
          .on('scroll', function (e) {

            console.info('window scroll');

            var $window = this,
                pageYOffset = $window.pageYOffset;

            if (pageYOffset >= 50) {
              _.$header.addClass('usa-sticky-header');
            } else {
              _.$header.removeClass('usa-sticky-header');
            }
          })
          .on('resize', function (e) {

            console.info('window resize');

            var $window = this;
            _.setHeaderHeight();

          });
    }
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaStickyHeader.prototype.init = function (creation) {

    console.info('usaStickyHeader init', this);

    var _ = this;

    if (creation && !_.$header.hasClass('usa-sticky-header-initialized')) {
      _.$header.addClass('usa-sticky-header-initialized');
     setTimeout( function () {
       _.setHeaderHeight();
     }, 3000);
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
    console.info('ready');
    if ($('body').hasClass('show-new-design')) {
      $('#header').usaStickyHeader();
    }
  });

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
