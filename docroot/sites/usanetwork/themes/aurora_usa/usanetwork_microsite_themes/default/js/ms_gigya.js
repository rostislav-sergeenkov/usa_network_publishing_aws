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
            imageSrc = (settings.imageSrc) ? settings.imageSrc : $('meta[property="og:image"]').attr('content'), // preview_image,
            url = (settings.url) ? settings.url : window.location.href;

        USAN.initUSAGigya({
          gigyaSharebar: {
            ua: {
              description: shareDescription,
              imageUrl: imageSrc,
              linkBack: url,
              title: shareTitle
            },
            containerID: containerId
          }
        });

        // reset Gigya share bar clicks
        setTimeout(function(){
          var $shareButtons = $('#' + containerId + ' .gig-share-button');
          $shareButtons.unbind('click');
          $shareButtons.bind('click', function(){
            Drupal.behaviors.ms_gigya.sendSocialShareOmniture($(this), shareTitle);
          });
        }, 1000);
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
        s.linkTrackVars = 'events,prop73,eVar73,eVar74';
        s.linkTrackEvents = s.events = 'event41';
        s.prop73 = window.location.href;
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
