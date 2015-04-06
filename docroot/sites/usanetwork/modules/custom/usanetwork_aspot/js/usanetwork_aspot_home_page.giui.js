(function ($) {
  Drupal.behaviors.usanetwork_aspot_home_page_giui = {
    attach: function (context, settings) {

      var aspotSlide = $('#block-usanetwork-aspot-usanetwork-aspot-carousel .slider .slide');

      // init add style for Aspot druggeble elements
      changeDraggableElementsPosition();

      function changeDraggableElementsPosition() {
        $.each(aspotSlide, function (indexItem, itemElement) {
          if(!$(this).hasClass('bx-clone')){
            var currentEl = $(this).find('.meta .aspot-draggable-element');
            $.each(currentEl, function(indexEl, elem){
              var styleDesktop = $(this).attr('data-style-desktop'),
                  styleMobile = $(this).attr('data-style-mobile');
              if (usa_deviceInfo.smartphone || usa_deviceInfo.mobileDevice) {
                $(this).attr('style', styleMobile);
              } else {
                if (window.innerWidth >= window_size_mobile_641) {
                  $(this).attr('style', styleDesktop);
                } else if (window.innerWidth < window_size_mobile_641){
                  $(this).attr('style', styleMobile);
                }
              }
            });
          }
        });
      }

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
          changeDraggableElementsPosition();
        }, 50, "home A-spot draggable elements");
      });
    }
  };
}(jQuery));
