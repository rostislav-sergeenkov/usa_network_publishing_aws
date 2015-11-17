// FULL BLEED PROMO
(function ($) {
  Drupal.behaviors.fullBleedPromo = {

    change_src: function (mobileImgUrl, desktopImgUrl, img) {
      if (usa_deviceInfo.smartphone || usa_deviceInfo.mobileDevice) {
        img.attr({src: mobileImgUrl});
      } else {
        if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches) {
          img.attr({src: desktopImgUrl});
        } else if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches){
          img.attr({src: mobileImgUrl});
        }
      }
    },
    attach: function (context, settings) {

      var mobileImgUrl = $('#full-bleed-promo .mobile-content').attr('data-url'),
          desktopImgUrl = $('#full-bleed-promo .desktop-content').attr('data-url'),
          img = $('#full-bleed-promo .responsive-image');

      $('#full-bleed-promo').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: false,

        callbackFunction: function(elem, action){
          Drupal.behaviors.fullBleedPromo.change_src(mobileImgUrl, desktopImgUrl, img);
        }
      });


      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          if($('#full-bleed-promo').hasClass('visible')){
            Drupal.behaviors.fullBleedPromo.change_src(mobileImgUrl, desktopImgUrl, img);
          }
        }, 0, "home full bleed promo");
      });
    }
  };
}(jQuery));
