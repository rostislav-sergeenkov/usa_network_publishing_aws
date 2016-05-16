// selector - main aspot wrapper
// init $(selector).usaAspotHelper();

(function ($) {

  //=============================
  // usaStickyHeader app
  //=============================
  var usaAspotHelper = window.usaAspotHelper || {};

  usaAspotHelper = (function () {

    function usaAspotHelper(element, settings) {

      var _ = this;

      // default settings
      _.defaults = {
        home_page_aspot_previewId: 'home_page_aspot_preview',
        show_page_aspot_previewId: 'show_aspot_preview'
      };

      // create global options
      _.options = $.extend(true, _.defaults, settings);

      // set params
      // _.options.isMobileDevice = usa_deviceInfo.mobileDevice;

      // elements
      _.$body = $(document.body);
      _.$aspot = $(element);
      _.$home_page_aspot_preview = $('#' + _.options.home_page_aspot_previewId);
      _.$show_page_aspot_preview = $('#' + _.options.show_page_aspot_previewId);

      // data attributes value
      // _.data = {};

      // init app
      _.init(true);
    }

    return usaAspotHelper;

  }());

  usaAspotHelper.prototype.initChangeDraggableElementsPosition = function (elem) {

    $.each(elem, function (indexItem, itemElement) {
      var container = $(this);
      if (container.find('.aspot-draggable-element')) {
        var currentEl = container.find('.meta .aspot-draggable-element');
        $.each(currentEl, function (indexEl, elem) {
          var self = $(this),
              styleDesktop = $(this).attr('data-style-desktop'),
              styleMobile = $(this).attr('data-style-mobile'),
              elWidth, maxWidth, betweenWidth, myArr = [];

          if (window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches) {

            self.attr('style', styleDesktop);

            elWidth = self.data('width');

            // create attributes data width for bp 2500 & 640-768
            if (!self.data('max-width')) {
              if (elWidth === 'auto') {
                self.attr('data-max-width', elWidth);
              } else {
                maxWidth = (elWidth / 100 * 2500) + 'px';
                self.attr('data-max-width', maxWidth);
              }
            }

            if ($('body').hasClass('usa-tv-show') || container.attr('id') === 'show_aspot_preview') {

              if (!self.data('between-width')) {
                if (elWidth === 'auto') {
                  self.attr('data-between-width', elWidth);
                } else {
                  betweenWidth = elWidth + 'vw';
                  self.attr('data-between-width', betweenWidth);
                }
              }

              // change width on tv-show page
              if (window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches && window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) {
                self.css('width', self.data('between-width'));
              }

              if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches && window.matchMedia("(max-width: " + window_size_desktop_max_width_2500 + "px)").matches) {
                self.css('width', self.data('width') + '%');
              }
            }

            if (window.matchMedia("(min-width: " + window_size_desktop_max_width_2500 + "px)").matches) {
              self.css('width', self.data('max-width'));
            }

          } else if (window.matchMedia("(max-width: " + window_size_mobile_640 + "px)").matches) {
            self.attr('style', styleMobile);
          }
        });
      }
    });
  };

  usaAspotHelper.prototype.addEvents = function () {

    var _ = this;

    $(window)
        .on('resize', function (e) {
      
          var $window = this;

          waitForFinalEvent(function () {
            // init add style for Aspot druggeble elements
            if ($('body').hasClass('node-type-usanetwork-aspot')) {
              _.initChangeDraggableElementsPosition(_.$home_page_aspot_preview);
              _.initChangeDraggableElementsPosition(_.$show_page_aspot_preview);
            } else {
              _.initChangeDraggableElementsPosition(_.$aspot);
            }
          }, 50, "home A-spot draggable elements");

        });
  };

  //=============================
  // Init usaGallery app
  //=============================
  usaAspotHelper.prototype.init = function (creation) {

    var _ = this;

    if (creation && !_.$aspot.hasClass('usa-aspot-initialized')) {
      _.$aspot.hasClass('usa-aspot-initialized');
      _.initChangeDraggableElementsPosition(_.$aspot);
      _.addEvents();
    }
  };

  //================================
  // create jQuery method usaAspotHelper
  //================================
  $.fn.usaAspotHelper = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].usaAspotHelper = new usaAspotHelper(_[i], opt);
      else
        ret = _[i].usaAspotHelper[opt].apply(_[i].usaAspotHelper, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  //================================
  // event document ready
  //================================
  $(document).ready(function () {
    if ($('body').hasClass('node-type-movie')) {
      $('#aspot-usanetwork').usaAspotHelper();
    } else if ($('body').hasClass('node-type-usanetwork-aspot')) {
      $('#home_page_aspot_preview').usaAspotHelper();
      $('#show_aspot_preview').usaAspotHelper();
    }
  });
  
}(jQuery));
