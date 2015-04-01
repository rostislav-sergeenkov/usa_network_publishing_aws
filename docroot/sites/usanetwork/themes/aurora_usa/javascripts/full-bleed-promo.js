// FULL BLEED PROMO
(function ($) {
  Drupal.behaviors.fullBleedPromo = {

    change_src: function (mobileImgUrl, desktopImgUrl, img) {
      if (usa_deviceInfo.smartphone || usa_deviceInfo.mobileDevice) {
        img.attr({src: mobileImgUrl});
      } else {
        if (window.innerWidth >= window_size_tablet) {
          img.attr({src: desktopImgUrl});
        } else if (window.innerWidth < window_size_tablet){
          img.attr({src: mobileImgUrl});
        }
      }
    },
    attach: function (context, settings) {

      var mobileImgUrl = $('#full-bleed-promo .mobile-content').attr('data-url'),
          desktopImgUrl = $('#full-bleed-promo .desktop-content').attr('data-url'),
          img = $('#full-bleed-promo .responsive-image');

      Drupal.behaviors.fullBleedPromo.change_src(mobileImgUrl, desktopImgUrl, img);

      var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
          if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
          }
          if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
          }
          timers[uniqueId] = setTimeout(callback, ms);
        };
      })();

      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          Drupal.behaviors.fullBleedPromo.change_src(mobileImgUrl, desktopImgUrl, img);
        }, 50, "home full bleed promo");
      });
    }
  };
}(jQuery));
