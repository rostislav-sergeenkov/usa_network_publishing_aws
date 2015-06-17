/**
 * Global js functions for Specific Microsite
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    // resizeResponse
    resizeResponse: function() {
      var wwidth = $(window).width();

      if (typeof usa_deviceInfo != 'undefined' && usa_deviceInfo.mobileDevice && wwidth < 748) {
        $('.ad-leaderboard').css({'width': '300px', 'height': '50px'});
      }
      else {
        $('.ad-leaderboard').css({'width': '728px', 'height': '90px'});
      }

      if ($('#videos').length > 0) Drupal.behaviors.ms_videos.setVideoHeight();

      Drupal.behaviors.ms_site.initIframeResize();
    },

    // initIframeResize
    initIframeResize: function(delay) {
      delay = delay || 700;
      setTimeout(function() {
        var ifrm = document.getElementById('offerpop-iframe'),
            hostname = window.location.hostname,
            env = hostname.replace('.usanetwork.com', '');
        ifrm.contentWindow.postMessage(env, 'http://offerpop.com');
//usa_debug('========== initIframeResize(), env: ' + env);
      }, delay);
    },

    // setIframeHeight
    setIframeHeight: function(ifrmHeight) {
//usa_debug('============== parent.setIframeHeight(' + ifrmHeight + ')');
      var ifrm = document.getElementById('offerpop-iframe');
      ifrm.style.visibility = 'hidden';
      ifrm.style.height = ifrmHeight;
      ifrm.style.visibility = 'visible';
    },

    // ATTACH
    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      // Create IE + others compatible event handler
      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

      // Listen to message from child window
      eventer(messageEvent,function(e) {
        if (e.origin == 'http://offerpop.com') {
//usa_debug('parent received message!:  ' + e.data);
          self.setIframeHeight(e.data);
        }
      }, false);

      setTimeout(function(){
        if (Drupal.behaviors.ms_global.globalInitialPageLoad) {
          $('header').prepend('<div id="head-leaderboard" class="ad-leaderboard"></div>');
          Drupal.behaviors.ms_global.create728x90Ad();

          // set-up menu gigya share bar
          var $infoContainer = $('#mega-nav'),
              gigyaSettings = {
                containerId: 'menu-gigya-share',
                title: siteName,
                description: $infoContainer.find('.description').text().trim(),
                imageSrc: $infoContainer.find('.asset-img img').attr('src'),
                url: window.location.href
              };
          if (typeof Drupal.behaviors.ms_gigya != 'undefined' && typeof Drupal.behaviors.ms_gigya.updateGigyaSharebar == 'function') Drupal.behaviors.ms_gigya.updateGigyaSharebar(1, gigyaSettings);
        }
        $('#offerpop-iframe').on('load', function(){ self.initIframeResize(4000); });
      }, 500);

      // RE-SIZING
      var resizeTimer;
      $(window).bind('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(self.resizeResponse, 800);
      });
      window.addEventListener('orientationchange', self.resizeResponse);
    }
  }
})(jQuery);
