/**
 * Global js functions for microsite navigation
 */
(function ($) {
  Drupal.behaviors.ms_global = {

    // GENERAL
    globalInitialPageLoad: true,

    // getUrlPath
    getUrlPath: function(url) {
      url = url || window.location.href;
      var pathArray = url.replace('http://', '').replace('https://', '');
      pathArray = pathArray.split('/');
      if (pathArray[0].indexOf(window.location.hostname) >= 0
          || pathArray[0].indexOf('usanetwork.com') >= 0) pathArray.shift();
      return pathArray;
    },

    // parseUrl
    parseUrl: function() {
      urlPath = window.location.pathname;
      var sectionLocation = urlPath.replace(Drupal.settings.microsites_settings.base_path, '');
      if (sectionLocation != '') {
        var parse = sectionLocation.split('/');
        activeSection = parse[1];
        activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
      }
      else {
        activeSection = 'home';
        activeItem = '';
      }

      return {'section': activeSection, 'item': activeItem};
    },

    // change url address
    changeUrl: function(anchor, anchorFull) {
      var basePath = Drupal.settings.microsites_settings.base_path;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull.replace('/home', '');
        return false;
      }

      if (anchor != 'home') {
        history.pushState({"path": anchorFull}, anchorFull, anchorFull);
      }
      else {
        history.pushState({"path": basePath}, basePath, basePath);
      }
    },

    // toTitleCase
    toTitleCase: function(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },

    // OMNITURE
    //change page title current section item
    changeTitle: function(item, section, basePageName) {
      $('title').text(item + ' | ' + section + ' | ' + basePageName);
    },

    // setOmnitureData
    setOmnitureData: function(anchor, contentName) {
      var anchor = anchor || null;
      if (!anchor) {
        var sectionData = Drupal.behaviors.ms_global.parseUrl();
        anchor = sectionData['section'];
      }
      var contentName = contentName || null, // contentName aka itemTitle
          siteName = Drupal.settings.microsites_settings.title,
          pageName = null,
          contentType = Drupal.behaviors.ms_global.toTitleCase(anchor),
          altContentType = null,
          specificContentName = null;

      // set section-specific overrides
      switch (anchor) {
        case 'videos':
          contentType = 'Video';
          if (!contentName) contentName = $('#microsite #videos-content .video-title').text();
          break;
      }

      // Build array of omniture "nodes" that make up the pageName
      // This array must have the nodes in the correct order:
      // show_name : microsite_name : content_type : content_name : specific_content_name
      // If show_name == microsite_name, show only microsite_name
      // Example 1: Dig : Gallery : Ancient Relics : Photo 1
      // Example 2: Graceland : Graceland Catchup : Timeline : Graceland Timeline : S1 E2 Scene 3
      var joinStr = ' : ',
          omnitureArray = [];
      if (s.prop10 != siteName) { // s.prop10 == show_name
        omnitureArray.push(s.prop10); // show_name
      }
      omnitureArray.push(siteName); // microsite_name
      if (altContentType) omnitureArray.push(altContentType); // content_type
      else omnitureArray.push(contentType); // content_type
      if (contentName) omnitureArray.push(contentName); // content_name
      if (specificContentName) omnitureArray.push(specificContentName); // specific_content_name
      AdobeTracking.pageName = omnitureArray.join(joinStr); // s.pageName
      AdobeTracking.contentType = contentType; // s.prop3
      AdobeTracking.showSiteFeature = (contentType == 'Bio') ? 'Profile Page' : omnitureArray[0] + joinStr + omnitureArray[1]; // s.prop4 'Profile Page' is intentional per Loretta!
      AdobeTracking.showSiteFeatureII = omnitureArray[0] + joinStr + omnitureArray[1] + joinStr + omnitureArray[2]; // s.prop5

      var reverseOmnitureArray = omnitureArray.reverse();
      pageName = reverseOmnitureArray.join(' | ') + ' | USANetwork';
      $('title').text(pageName);

      usa_debug('=========== [USA DEBUG] setOmnitureData(' + anchor + ', ' + contentName + '), siteName: ' + siteName + ', contentType: ' + contentType + ', omnitureArray: ', omnitureArray);

      _satellite.track('virtPageTrack');
/*
      var AdobeTracking = new Object();
      AdobeTracking.division = 'Cable';
      AdobeTracking.businessUnit = 'USA Network';
      AdobeTracking.contentGroup = 'Drama';
      AdobeTracking.contentType = 'Home'; // s.prop3
      AdobeTracking.showSite = 'Suits'; // s.prop10
      AdobeTracking.pageName = s.pageName;
      AdobeTracking.showSiteFeature = s.prop4;
      AdobeTracking.showSiteFeatureII = s.prop5;

      _satellite.pageBottom();

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
*/

    },

    // ADS
    refreshAd: function(section) {
      var mpsslot = jQuery('#' + section + ' .mps-slot').data('mps-slot');
      if (mpsslot) {
        mps.refreshAds(mpsslot);
        usa_debug('mps.refreshAds(' + section + ', ' + mpsslot + ')');
      }
      else {
        var adslot = (section == 'videos') ? 'topbox' : 'topbanner',
            adSelector = (section == 'videos') ? '.ad' : '.ad-leaderboard';
        mps.cloneAd(jQuery('#' + section + ' ' + adSelector), adslot)
        usa_debug('mps.cloneAds(' + section + ', ' + adslot + ')');
      }
    },


    // SECTIONS
    //scroll to top
    scrollToTop: function() {
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    // IsScrolledIntoView
    // determines whether the entire element is in the viewable part of the window
    isScrolledIntoView: function(elem) {
      var $elem = $(elem),
          $window = $(window),
          docViewTop = $window.scrollTop(),
          docViewBottom = docViewTop + $window.height();

      if ($elem != null && $elem.offset() != null) {
        var elemTop = $elem.offset().top,
            elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
      else {
        return false;
      }
    },


    // ATTACH
    attach: function (context, settings) {
      var startPathname = window.location.pathname;
      if (!$('html').hasClass('ie9')) {
        history.pushState({"state": startPathname}, startPathname, startPathname);
      }

      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      // TIME OUT
      // we need to allow time for the page to load -- especially videos
      setTimeout(function(){
        if ($('#videos').length > 0) {
          Drupal.behaviors.ms_videos.setVideoHeight();

          self.refreshAd('page-header');
          self.refreshAd('videos');
          var style = {};
          style.dark = '';
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#home-content'), style.dark);

          $('#video-container').addClass('active');
          var urlParts = self.parseUrl(window.location.href); // history.state['path']);
          if (urlParts['section'] == 'videos' && urlParts['item']) {
            Drupal.behaviors.ms_videos.setVideoPlayer('true', null, null, true);
          }
          else {
            Drupal.behaviors.ms_videos.setVideoPlayer('true', null, null, true);
          }
        }

        self.globalInitialPageLoad = false;
      }, 2000);
      // END TIME OUT

      // Turn off the popstate/hashchange tve-core.js event listeners
      $(window).off('popstate');
      $(window).off('hashchange');
    }
  }
})(jQuery);
