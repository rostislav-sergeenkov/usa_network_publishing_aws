/**
 * Global js functions for Specific Microsite
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    // resizeResponse

    addWidth: function (windowWidth) {
      if (typeof usa_deviceInfo != 'undefined' && usa_deviceInfo.mobileDevice && windowWidth < 748) {
        $('.ad-leaderboard').css({'width': '300px', 'height': '50px'});
      }
      else {
        $('.ad-leaderboard').css({'width': '728px', 'height': '90px'});
      }
    },

    resizeResponse: function() {
      var wwidth = $(window).width();

      Drupal.behaviors.ms_site.addWidth(wwidth);

      if ($('#videos').length > 0) Drupal.behaviors.ms_videos.setVideoHeight();

      try {
        usa_debug('ms_site : Drupal.behaviors.ms_site.initIframeResize');
        Drupal.behaviors.ms_site.initIframeResize();
      } catch (e) {
        usa_debug('error ms_site : Drupal.behaviors.ms_site.initIframeResize');
      }
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

    // ATTACH
    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      var search = window.location.search;
      if (search.indexOf('contentId') > -1 && search.indexOf('campaignId') > -1) {
        usa_debug('********* USA: offerpop params in url so scroll down to Offerpop iframe');
        Drupal.behaviors.ms_global.scrollToElem('#offerpop');
      }

      setTimeout(function(){
        if (Drupal.behaviors.ms_global.globalInitialPageLoad) {
          $('header').prepend('<div id="head-leaderboard" class="ad-leaderboard"></div>');
          self.addWidth($(window).width());
          
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

        // initialize click on #SuitsInspiration
        jQuery('#suits-inspiration-link').click(function(){
          usa_debug('********* USA: clicked on suits-inspiration-link');
          Drupal.behaviors.ms_global.scrollToElem('#offerpop');
        });

      }, 500);

      // RE-SIZING
      var resizeTimer;
      $(window).bind('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(self.resizeResponse, 800);
      });
      window.addEventListener('orientationchange', function() { setTimeout(self.resizeResponse, 800); });
    }
  }
})(jQuery);
