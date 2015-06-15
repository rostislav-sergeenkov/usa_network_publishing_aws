/**
 * Js functions for microsite Gigya share bars
 */
(function ($) {
  Drupal.behaviors.ms_gigya = {

    // Gigya share bar
    updateGigyaSharebar: function(initialPageLoad, settings) {
      initialPageLoad = initialPageLoad || 0;
      settings = settings || {
        containerId: 'gigya-share',
        title: s.pageName,
        description: '',
        imageSrc: null,
        url: window.location.href
      };
      if (typeof Drupal.gigya != 'undefined') {
        var sharebar = new Object(),
            containerId = (settings.containerId) ? settings.containerId : 'gigya-share',
            shareDescription = (settings.description) ? settings.description : '',
            shareTitle = (settings.title) ? settings.title : '',
            imageSrc = (settings.imageSrc) ? settings.imageSrc : preview_image,
            url = (settings.url) ? settings.url : window.location.href;

        sharebar.gigyaSharebar = {
          containerID: containerId,
          iconsOnly: true,
          layout: "horizontal",
          shareButtons: "facebook, twitter, tumblr, pinterest, share",
          shortURLs: "never",
          showCounts: "none"
        }

        sharebar.gigyaSharebar.ua = {
          description: shareDescription,
          imageBhev: "url",
          imageUrl: imageSrc,
          linkBack: url,
          title: shareTitle
        }
        if (typeof Drupal.gigya.showSharebar == 'function') Drupal.gigya.showSharebar(sharebar);

        // reset Gigya share bar clicks
        var $shareButtons = $('#' + containerId + ' .gig-share-button div');
//        $shareButtons.unbind('click');
        $shareButtons.on('click', function(){
          Drupal.behaviors.ms_gigya.sendSocialShareOmniture($(this), shareTitle);
        });
      }
    },

    // Gigya share bar clicks
    sendSocialShareOmniture: function($this, title) {
      title = title || null;
      var $container = $this.parents('.gig-button-container'),
          shareType = 'Share',
          shareTitle = title;
      if ($container.hasClass('gig-button-container-facebook')) {
        shareType = 'Facebook';
      }
      else if ($container.hasClass('gig-button-container-twitter')) {
        shareType = 'Twitter';
      }
      else if ($container.hasClass('gig-button-container-tumblr')) {
        shareType = 'Tumblr';
      }
      else if ($container.hasClass('gig-button-container-pinterest')) {
        shareType = 'Pinterest';
      }

      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
        s.linkTrackVars = 'events,eVar73,eVar74';
        s.linkTrackEvents = s.events = 'event41';
        s.eVar73 = shareTitle;
        s.eVar74 = shareType;
        s.tl(this, 'o', 'Social Share');
        s.manageVars('clearVars', s.linkTrackVars, 1);
      }
    },

    attach: function (context, settings) {
      var self = this;

    }
  }
})(jQuery);
