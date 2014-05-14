(function($) {
  $(document).ready(function() {
    if (typeof Drupal.settings.usanetwork_facebook_tracking != 'undefined'
      && typeof Drupal.settings.usanetwork_facebook_tracking.id != 'undefined') {
      (function() {
        var _fbq = window._fbq || (window._fbq = []);
        if (!_fbq.loaded) {
          var fbds = document.createElement('script');
          fbds.async = true;
          fbds.src = '//connect.facebook.net/en_US/fbds.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(fbds, s);
          _fbq.loaded = true;
        }
        _fbq.push(['addPixelId', Drupal.settings.usanetwork_facebook_tracking.id]);
      })();
      window._fbq = window._fbq || [];
      window._fbq.push(["track", "PixelInitialized", {}]);
    }
  });
})(jQuery);
