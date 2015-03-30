// Use Modernizr to detect font features to allow a fallback for webfont ligatures
(function ($) {
  var Modernizr_origin = Modernizr;
  Drupal.behaviors.fontFeatureDetection = {
    attach: function (context, settings) {
      if (Modernizr_origin.prefixed("fontFeatureSettings")) {
        //ligatures supported
        $('html').addClass('font-feature-settings');
      } else {
        //ligatures not supported
        $('html').addClass('no-font-feature-settings');
      }
    },
  };

}(jQuery));
