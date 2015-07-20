(function ($) {
  Drupal.behaviors.usanetwork_aspot_home_page_giui = {
    attach: function (context, settings) {

      var aspotHomeSlide = $('#block-usanetwork-aspot-usanetwork-aspot-carousel .slide'),
          aspotShowSlide = $('#main-slider .slide .slide-content'),
          aspotMovieSlide = $('#block-usanetwork-movie-usanetwork-movie-main-block .slide .slide-content');

      // init add style for Aspot druggeble elements
      if($('body').hasClass('usa-tv-show')) {
        changeDraggableElementsPosition(aspotShowSlide);
      } else if($('body').hasClass('page-home')) {
        changeDraggableElementsPosition(aspotHomeSlide);
      } else if($('body').hasClass('node-type-movie')) {
        changeDraggableElementsPosition(aspotMovieSlide);
      }

      function changeDraggableElementsPosition(elem) {
        $.each(elem, function (indexItem, itemElement) {
          var container = $(this);
          if(container.find('.aspot-draggable-element')){
            var currentEl = container.find('.meta .aspot-draggable-element');
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

      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          // init add style for Aspot druggeble elements
          if(!$('body').hasClass('usa-tv-show')) {
            changeDraggableElementsPosition(aspotHomeSlide);
          } else {
            changeDraggableElementsPosition(aspotShowSlide);
          }
        }, 50, "home A-spot draggable elements");
      });
    }
  };
}(jQuery));
