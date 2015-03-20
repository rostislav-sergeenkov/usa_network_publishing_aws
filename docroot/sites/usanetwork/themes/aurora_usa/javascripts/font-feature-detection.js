// Use Modernizr to detect font features to allow a fallback for webfont ligatures
(function ($) {
  Drupal.behaviors.fontFeatureDetection = {
    attach: function (context, settings) {
      if (Modernizr.hasOwnProperty('prefixed') && Modernizr.prefixed("fontFeatureSettings")) {
        //ligatures supported
        $('html').addClass('font-feature-settings');
      } else {
        //ligatures not supported
        $('html').addClass('no-font-feature-settings');
      }
    },
  };

}(jQuery));
