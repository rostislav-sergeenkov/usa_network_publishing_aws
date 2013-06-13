// scroll
(function ($) {
  Drupal.behaviors.social_sync_scroll = {

    attach: function (context, settings) {
   
      $(window).load(function(){
          $(".usa-sync-scroll").mCustomScrollbar({
            horizontalScroll: false,
            autoDraggerLength: true,
            autoHideScrollbar: true,
            advanced: {
              updateOnBrowserResize: true,
              updateOnContentResize: false
            }
          });
      });
    },
  };

}(jQuery));
