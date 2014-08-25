/**
 * @file
 * Usanetwork Watchwith sidecar loader.
 */
(function($) {
  Drupal.behaviors.tve_watchwith = {
    attach: function (context, settings) {
      
      var breakPoint = getCurrentBreakpoint(),
      settings = Drupal.settings;
      
      Sidecar.load({
        "elementId": settings.tve_watchwith.elementId,
        "playerId": settings.tve_watchwith.playerId,
        "airingId": settings.tve_watchwith.airingId,
        "key": settings.tve_watchwith.key,
        "landscape": (breakPoint == 'desktop') ? false : true,
        "showAllEvents": settings.tve_watchwith.showAllEvents,
        "airingIdSource": settings.tve_watchwith.airingIdSource,
        "googleAnalyticsId": settings.tve_watchwith.googleAnalyticsId
      });
      
      function getCurrentBreakpoint() {
        var TABLET_DESKTOP = 1024,
        MOBILE = 'mobile',
        DESKTOP = 'desktop';
        return $(document).width() < TABLET_DESKTOP ? MOBILE : DESKTOP;
      }
    } 
  };
}(jQuery));