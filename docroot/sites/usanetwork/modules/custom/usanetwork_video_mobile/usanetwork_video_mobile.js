(function ($) {
  Drupal.behaviors.video_mobile = {
    inited: false,
    disablePlayer: false,
    performIosRedirect: false,

    showMobileVideoModal : function(os) {

      if ($('#mobileVideoModalOverlay').length == 0) {
        // create overlay
        $('body').append('<div id="mobileVideoModalOverlay"></div>');
        $('#mobileVideoModalOverlay').click(function() {
          Drupal.behaviors.video_mobile.hideMobileVideoModal();
        });
      }
      if ($('#mobileVideoModal').length == 0) {
        // create modal dialog
        var $modal = $('<div id="mobileVideoModal"></div>');
        $modal.append(Drupal.settings.usanetwork_video_mobile.modal);
        $modal.find('.close-reveal-modal').click(function(e) {
          e.preventDefault();
          Drupal.behaviors.video_mobile.hideMobileVideoModal();
        });
        $('body').append($modal);
      }
      $('#mobileVideoModalOverlay').show();
      $('#mobileVideoModal').show();
    },
    hideMobileVideoModal : function() {
      $('#mobileVideoModalOverlay').hide();
      $('#mobileVideoModal').hide();
    },

    iosRedirect: function() {
      var usaDeepLinking = this;

      var iframe = '<iframe ' +
          'class="usa-app-detect" ' +
          'style="display: none;" ' +
          'src="' + this.settings.usa.deepLinking + '" />';
      $('body', this.context).append(iframe);

      return this;
    },

    /**
     * Load the mobile modal to cover the screen and give the user instructions
     * to proceed to the app or go back to the previous page.
     */
    loadMobileModal: function() {
      var usaDeepLinking = this;

      if (typeof usa_deviceInfo == 'undefined'
          || typeof Drupal.settings.usanetwork_video_mobile == 'undefined'
          || window.location.pathname == '/videos') {
        return;
      }
      // check if user uses mobile device
      if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
        var os = usa_deviceInfo.iOS ? 'iOS' : 'android';
        if($('#microsite').length == 0){
          // show modal dialog
          Drupal.behaviors.video_mobile.showMobileVideoModal(os);
          if (os === 'iOS' && Drupal.settings.usa.itunesAppLink) {
            $('a.download-app-button').attr('href', Drupal.settings.usa.itunesAppLink);
          } else {
            $('a.download-app-button').attr('href', Drupal.settings.usanetwork_video_mobile.url[os]);
          }
        }
      }

      return this;
    },

    init: function (context, settings) {
      this.inited = true;
      this.context = context;
      this.settings = settings;

      // If we don't have the settings we need, simply return.
      if (typeof settings.usa === "undefined" || typeof MobileEsp === "undefined") {
        return this;
      }

      // Determine if we should perform a redirect on iOS.
      this.performIosRedirect = MobileEsp.DetectIos()
      && typeof settings.usa.itunesAppId !== "undefined"
      && typeof settings.usa.itunesAppLink !== "undefined"
      && typeof settings.usa.msAppId !== "undefined"
      && typeof settings.usa.deepLinking !== "undefined";

      return this;
    },

    attach : function (context, settings) {

      if(usa_deviceInfo.mobileDevice) {
        // If this has already run once on this page, don't run it again.
        if (this.inited) {
          return this;
        }

        // Initialize the object.
        this.init.apply(this, arguments);

        // Disable the player on all mobile devices.
        if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
          this.loadMobileModal();
          if (!$('body').hasClass('page-videos-live') && !$('body').hasClass('page-auth-video') && !$('body').hasClass('page-node-microsite')) {
            Drupal.behaviors.consumptionator_video.changeSrc();
            Drupal.behaviors.consumptionator_video.initPlayerBind();
          }
        }

        // Perform a redirect to the app on full episodes from iOS devices.
        if (this.performIosRedirect && ($('body').hasClass('page-auth-video') || $('body').hasClass('page-videos-live'))) {
          this.iosRedirect();
        }

        return this;
      }
    }
  };
}) (jQuery);
