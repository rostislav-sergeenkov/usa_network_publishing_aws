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
      var location = urlPath.replace(Drupal.settings.microsites_settings.base_path, ''),
          activeCategory = '';
      if (location != '') {
        var parse = location.split('/');
        activeSection = parse[1];
        activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
        if (activeItem != '' && parse.hasOwnProperty(3)) {
          activeCategory = parse[2];
          activeItem = parse[3];
        }
      }
      else {
        activeSection = 'home';
        activeItem = '';
      }

      return {'section': activeSection, 'category': activeCategory, 'item': activeItem};
    },

    loadJSON: function(file, callback) {
      $.ajax({
        url: file,
        dataType: 'json'
      })
      .done(function(response) {
        usa_debug('loadJSON(' + file + ') -- response: ', response);
        callback(response);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        usa_debug('loadJSON(' + file + ') -- textStatus: ' + textStatus + ', errorThrown: ' + errorThrown);
      });
    },

    getActiveVideoFilter: function() {
      return $('#video-filter li.filter-item.active').attr('data_filter_class');
    },

    // change url address
    changeUrl: function(anchor, anchorFull) {
      var basePath = Drupal.settings.microsites_settings.base_path;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        return false;
      }

      if (anchor != 'home') {
        history.pushState({"path": anchorFull}, anchorFull, anchorFull);
      }
      else {
        history.pushState({"path": basePath}, basePath, basePath);
      }
      //usa_debug('========== changeUrl(' + anchor + ', ' + anchorFull + ')');
    },

    // toTitleCase
    toTitleCase: function(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },

    // NAVIGATION
    // waypointResponse
    waypointResponse: function(scrollDirection, sectionId) {
      // make sure user stays on section long enough to see it before
      // sending Omniture calls and resetting the url
      // also prevent Omniture calls when using site nav to auto-scroll
      // to different sections
      var activeItemId = null,
          anchorFull = Drupal.settings.microsites_settings.base_path + '/' + sectionId;

      // pause video, if needed
      if ($('#videos').length && sectionId != 'videos') {
        Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
      }

      switch(sectionId) {
        case 'characters':
          var $characterInfo = $('#characters #character-info'),
              activeItem = $characterInfo.find('li.active'),
              activeItemId = (activeItem.length > 0) ? activeItem.attr('id') : null;
          if (activeItemId != null) anchorFull = anchorFull + '/' + activeItemId;
          break;
      }
      if (!Drupal.behaviors.ms_global.globalInitialPageLoad) {
        Drupal.behaviors.ms_global.changeUrl(sectionId, anchorFull);
        Drupal.behaviors.ms_global.setActiveMenuItem(sectionId);
        Drupal.behaviors.ms_global.setOmnitureData(sectionId);
        //Drupal.behaviors.ms_global.create728x90Ad(sectionId);
        //Drupal.behaviors.ms_global.refreshMPS728x90Ad(sectionId);
        if (sectionId != 'videos') Drupal.behaviors.ms_global.refreshAds(sectionId);
      }
    },

    // waypointHandler
    sectionTimer: null,
    waypointHandler: function(event, sectionId, direction){
      // if more than one function call arrives before the timeout is done,
      // clear the timer and start over. This is to prevent, rapid scrolling
      // or navigation clicks from triggering Omniture calls
      clearTimeout(Drupal.behaviors.ms_global.sectionTimer);
      Drupal.behaviors.ms_global.sectionTimer = setTimeout(function(){
        var urlSection = Drupal.behaviors.ms_global.parseUrl()['section'];
        if (urlSection != sectionId) {
          usa_debug('========== waypointHandler event triggered on ' + sectionId);
          $('.section.active').removeClass('active');
          $('#' + sectionId).addClass('active');
          Drupal.behaviors.ms_global.waypointResponse(direction, sectionId);
        }
      }, 1000);
    },


    // initializeWaypoints -- for triggering section scroll events
    waypoints: {},
    initializeWaypoints: function() {
      // When scrolling down, trigger section changes when top of next section hits bottom of sticky nav
      // When scrolling up, trigger section changes when bottom of previous section hits bottom of window

      // loop through each section
      $('#sections > .section').each(function(){
        var sectionId = $(this).attr('id');
        if (sectionId != 'site-nav') {
          Drupal.behaviors.ms_global.waypoints[sectionId] = new Waypoint.Inview({
            element: document.getElementById(sectionId),
//            enter: function(direction) { handler('enter', sectionId, direction); },
            entered: function(direction) {
              Drupal.behaviors.ms_global.waypointHandler('entered', sectionId, direction);
            },
            exit: function(direction) {
              Drupal.behaviors.ms_global.waypointHandler('exit', sectionId, direction);
            },
//            exited: function(direction) { handler('exited', sectionId, direction); }
          })
        }
      }); // end each section loop
    },

    // setSectionIdsArray
    sectionIds: [],
    setSectionIdsArray: function() {
      $('.section').each(function(index, section) {
        Drupal.behaviors.ms_global.sectionIds[index] = $(this).attr('id');
      });
    },

    // getScrollDirectionUsingSections
    getScrollDirectionUsingSections: function(nextSection) {
      var currentActiveSection = $('.section.active').attr('id'),
          currentActiveSectionPosition = Drupal.behaviors.ms_global.sectionIds.indexOf(currentActiveSection),
          nextSectionPosition = Drupal.behaviors.ms_global.sectionIds.indexOf(nextSection),
          direction = ((nextSectionPosition - currentActiveSectionPosition) > 0) ? 'down' : 'up';
      return direction;
    },

    // getScrollDirection
    lastYScrollPosition: 0,
    getScrollDirection: function() {
      scrollDirection = (Drupal.behaviors.ms_global.lastYScrollPosition > window.pageYOffset) ? 'up' : 'down';
      Drupal.behaviors.ms_global.lastYScrollPosition = window.pageYOffset;
      return scrollDirection;
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

    // OMNITURE
    //change page title current section item
    changeTitle: function(item, section, basePageName) {
      $('title').text(item + ' | ' + section + ' | ' + basePageName);
    },

    // @TODO: set up Omniture for button clicks
    setOmnitureButtonClick: function (elem) {
      var $self = elem,
          social_name = $self.data('name'),
          name = social_name.charAt(0).toUpperCase() + social_name.substr(1);

      s.linkTrackVars='events,eVar74';
      s.linkTrackEvents = s.events = 'event40';
      s.eVar74 = name;

      if ($self.attr('href') != '#') {
        s.bcf = function() {
          setTimeout(function() {
            window.location = $self.attr('href');
          }, 500);
        };
      }

      s.tl(this,'o','Social Follow');
      s.manageVars("clearVars", s.linkTrackVars, 1);
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

      usa_debug('sendSocialShareOmniture(' + title + ') -- shareTitle: ' + shareTitle);

      if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
        s.linkTrackVars = 'events,eVar73,eVar74';
        s.linkTrackEvents = s.events = 'event41';
        s.eVar73 = shareTitle.trim();
        s.eVar74 = shareType;
        s.tl(this, 'o', 'Social Share');
        s.manageVars('clearVars', s.linkTrackVars, 1);
      }
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
        case 'timeline':
          contentType = 'Gallery';
          altContentType = 'Timeline';
          contentName = $('#timeline #timeline-content > h1 > div').text();
          if (!contentName) contentName = $('#timeline #timeline-content > h2').text();
          contentName = Drupal.behaviors.ms_global.toTitleCase(contentName);
          var $item = $('#microsite #timeline .timeline-items .timeline-item.active'),
              itemSeason = $item.attr('data-season-num'),
              itemEpisode = $item.attr('data-episode-num'),
              itemEpisodeName = $item.attr('data-episode-name'),
              itemScene = $item.attr('data-description');
          specificContentName = 'S' + itemSeason + ' E' + itemEpisode + ' ' + itemScene;
          break;
        case 'galleries':
          // DV: This is being called from /sites/usanetwork/themes/aurora_usa/javascripts/consumptionator-gallery.js, usaGallery.prototype.callAdobeTracking
          contentType = 'Gallery';
          contentName = $('#galleries #galleries-nav-list li.active .gallery-title > div').text();
          break;
      }

      usa_debug('setOmnitureData(' + anchor + ', ' + content + ') -- contentName: ' + contentName);

      // Build array of omniture "nodes" that make up the pageName
      // This array must have the nodes in the correct order:
      // show_name : microsite_name : content_type : content_name : specific_content_name
      // If show_name == microsite_name, show only microsite_name
      // Example 1: Dig : Gallery : Ancient Relics : Photo 1
      // Example 2: Graceland : Graceland Catchup : Timeline : Graceland Timeline : S1 E2 Scene 3
      var joinStr = ' : ',
          omnitureArray = [],
          showName = s.prop10;
      if (showName != siteName) {
        omnitureArray.push(showName); // show_name
      }
      omnitureArray.push(siteName); // microsite_name
      if (altContentType) omnitureArray.push(altContentType); // content_type
      else omnitureArray.push(contentType); // content_type
      if (contentName) omnitureArray.push(contentName); // content_name
      if (specificContentName) omnitureArray.push(specificContentName); // specific_content_name
      s.pageName = omnitureArray.join(joinStr);
      s.prop3 = (contentType == 'Home') ? 'Features' : contentType;
      s.prop4 = (contentType == 'Bio') ? 'Profile Page' : omnitureArray[0] + joinStr + omnitureArray[1]; // 'Profile Page' is intentional per Loretta!
      s.prop5 = omnitureArray[0] + joinStr + omnitureArray[1] + joinStr + omnitureArray[2];

      var reverseOmnitureArray = omnitureArray.reverse();
      pageName = (reverseOmnitureArray.join(' | ') + ' | USANetwork').replace('Home | ', '');


      $('title').text(pageName);

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
    },

    // ADS
    usa_refreshMicrositeAdsBySection: function (adContainer) {
      usa_debug('usa_refreshMicrositeAdsBySection(' + adContainer + ')');
      $(adContainer + ' iframe').attr('src', $(adContainer + ' iframe').attr('src'));
    },

    loadAds: function(selector, adslot) {
      usa_debug('loadAds(' + selector + ', ' + adslot + ')');
      if (typeof mps != 'undefined' && typeof mps.insertAd == 'function') {
        mps.insertAd(selector, adslot);
      }
      else {
        setTimeout(function(){
          loadAds(selector, adslot);
        }, 500);
      }
    },

    refreshAds: function(section) {
      usa_debug('refreshAds(' + section + ') SUCCESS');
      var selector = '#' + section + ' .ad-leaderboard',
          $ad = $(selector),
          adslot = (section == 'home') ? 'topbanner' : 'midbanner';
      if ($ad.html() != '' && $ad.find('iframe').length > 0) {
        mps.refreshAds(adslot);
      }
      else {
        if (section != 'home') {
          mps.cloneAd(selector, adslot);
        }
        else {
          Drupal.behaviors.ms_global.loadAds(selector, adslot);
        }
      }
    },

    // SECTIONS
    setActiveMenuItem: function(anchor) {
      // set active menu item
      $('#site-nav-links li, #site-nav-links-mobile li').removeClass('active disabled');
      if (anchor == 'videos') {
        var activeVideoFilter = Drupal.behaviors.ms_global.getActiveVideoFilter();
        if (activeVideoFilter != '' && activeVideoFilter != 'full-episodes') anchor = activeVideoFilter;
      }
      $('#site-nav-links li.' + anchor + ', #site-nav-links-mobile li.' + anchor).addClass('active');

      setTimeout(function(){
        Drupal.behaviors.ms_site.setSiteNav();
      }, 200);
      //usa_debug('setActiveMenuItem(' + anchor + ') is done');
    },

    //scroll to top
    scrollToTop: function() {
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    // sectionScroll
    allWaypointsSet: false,
    sectionScroll: function(anchor, item, itemTitle) {
      item = item || '';
      itemTitle = itemTitle || '';
      var basePath = Drupal.settings.microsites_settings.base_path,
          anchorItem = $('#nav-' + anchor),
          anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor,
          nextSection = '#' + anchor,
          nextSectionId = $(nextSection).attr('id'),
          direction = Drupal.behaviors.ms_global.getScrollDirectionUsingSections(anchor),
          offsetDirection = (direction == 'down') ? 1 : -1;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        // if the window is scrolling, the page must be almost completely
        // loaded, so the initial page load is complete
        Drupal.behaviors.ms_global.globalInitialPageLoad = false;
        return false;
      }

      // check to make sure we have all waypoints set
      if (!Drupal.behaviors.ms_global.allWaypointsSet) {
        var numSections = $('#sections > .section').length;
        if ($('#site-nav').length > 0) numSections = numSections - 1;
        if (Object.keys(Drupal.behaviors.ms_global.waypoints).length != numSections) {
          Waypoint.refreshAll();
        }
        else {
          Drupal.behaviors.ms_global.allWaypointsSet = true;
        }
      }
      // if this is the initial page load and we're scrolling, the page must be almost completely
      // loaded, so let's refresh the waypoints
      if (typeof Waypoint != 'undefined' && Drupal.behaviors.ms_global.globalInitialPageLoad) Waypoint.refreshAll();

      // now scroll to the next section
      var nextSectionElem = document.getElementById(anchor),
          offsetAmount = -60,
          nextSectionTop = (nextSectionElem != null && anchor != 'home') ? nextSectionElem.offsetTop + offsetAmount : 0;

      //usa_debug('========= sectionScroll(' + anchor + ', ' + item + ', ' + itemTitle + ') -- nextSectionTop: ' + nextSectionTop);

      $('html, body').animate({'scrollTop': nextSectionTop}, 1000, 'jswing', function () {
        $('.section').removeClass('active');
        $(nextSection).addClass('active');

        var videoContainer = $('#video-container');

        if (nextSectionId == 'videos') {
          if (!videoContainer.hasClass('active')) {
            videoContainer.addClass('active');
            Drupal.behaviors.ms_videos.micrositeSetVideoPlayer();
          }
        }
        if (nextSectionId != 'videos') {
          if ($('#videos').length) {
            Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
            if (videoContainer.attr('data-ad-start') == 'true') {
              videoContainer.find('.active-player .custom-play').click(function () {
                $pdk.controller.clickPlayButton(true);
                $pdk.controller.pause(false);
              });
            }
          }
        }

        Drupal.behaviors.ms_global.setActiveMenuItem(anchor);
      });

      // if the window is scrolling, the page must be almost completely
      // loaded, so the initial page load is complete
      Drupal.behaviors.ms_global.globalInitialPageLoad = false;
    },

    // RESIZING
    // resize response
    resizeResponse: function() {
      var wwidth = window.innerWidth,
          $siteNav = $('#site-nav');

      Drupal.behaviors.ms_videos.moveVideoFilters();
      Drupal.behaviors.ms_global.moveGalleryFilters();

      if (wwidth < 874) {
        $siteNav.addClass('mobile');
      }
      else {
        $siteNav.removeClass('mobile');
      }

      if (typeof Waypoint != 'undefined') Waypoint.refreshAll();

      if ($('#videos').length > 0) Drupal.behaviors.ms_videos.setVideoHeight();

      if ($('#quizzes').length > 0) {
        Drupal.behaviors.ms_quizzes.reloadSliders();
        Drupal.behaviors.ms_quizzes.refresh300x250Ad();
      }

      mps.responsiveApply();
    },

    // menu click to navigate to a specific video filter
    selectVideoFilter: function(anchor, filterClass){
      Drupal.behaviors.ms_global.sectionScroll('videos');

      var filterClass = filterClass || 'cast-interviews',
          $this = $('#video-filter li.filter-item[data_filter_class="' + filterClass + '"]'),
          $filterItems = $('#video-filter li.filter-item'),
          $filterMenu = $('#video-filter .filter-menu');

      usa_debug('selectVideoFilter(' + anchor + ', ' + filterClass + '), $this: ', $this);

      // set active nav
      Drupal.behaviors.ms_global.setActiveMenuItem('videos');

      // set video filter
      if ($this.hasClass('active')) {
        return false;
      }
      else {
        $filterItems.removeClass('active');
        $this.addClass('active');
        $('#video-filter .filter-child-item').removeClass('active');

        var categoryName = $this.attr('data-filter-name'),
            offset = 0,
            $childItems = $this.find('.filter-child-item'),
            url;
        if ($childItems.length == 0) {
          url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset;
        }
        else {
          if (categoryName == 'Full episodes') {
            var season_num = $childItems.last().attr('data-season-num');
            $childItems.last().addClass('active');
          }
          else {
            var season_num = $childItems.first().attr('data-season-num');
            $childItems.first().addClass('active');
          }
          url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset + '/' + season_num;
        }

        $('#thumbnail-list .expandable-toggle li').text('more').removeClass('less').addClass('more');
        $('#thumbnail-list').removeClass('expanded');

        Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName, filterClass);
        //if (anchor == 'videos') Drupal.behaviors.ms_videos.micrositeSetPlayPlayer();
      }
    },

    // GALLERIES
    galleryIsLoading: false,
    showHideLoader: function() {
      var activeGallery = $('#galleries .microsite-gallery'),
          gLoader = $('#galleries #gallery-loader'),
          gHeight = activeGallery.find('.flex-viewport').height();

      gLoader.height(gHeight);

      if (Drupal.behaviors.ms_global.galleryIsLoading) {
        // show spinner
        gLoader.show().animate({'opacity': 1}, 1000);
      } else {
        // hide spinner
        gLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

    moveGalleryFilters: function() {
      var wwidth = window.innerWidth,
          $filters = $('#galleries .filter-wrapper')
          $highPos = $('#galleries .full-pane'),
          $lowPos = $('#galleries .right-pane');
      if (wwidth < 1174) {
        $lowPos.prepend($filters);
      }
      else {
        $highPos.before($filters);
      }
    },

    showGallery: function($activeGallery) {
      var $nextGallery = document.getElementById('galleries'),
          nextTop = $nextGallery.offsetTop;

      //usa_debug('========= showGallery() -- nextTop: ' + nextTop);

      $('html, body').animate({'scrollTop': nextTop}, 1000, 'jswing', function () {
        $activeGallery.animate({'opacity': 1}, 1000, function(){
          Drupal.behaviors.ms_global.showHideLoader();
        });
      });
    },

    switchGallery: function(nid, callback) {
      callback = callback || null;

      Drupal.behaviors.ms_global.galleryIsLoading = true;
      Drupal.behaviors.ms_global.showHideLoader();

      // Make ajax call to '/ajax/get-gallery/' + nid
      var newGallery = $.ajax({
        url: '/ajax/get-gallery/' + nid + '/' + Drupal.settings.microsites_settings.nid,
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data, textStatus, jqXHR){
        usa_debug('switchGallery(' + nid + ') -- data: ', data);
        var // activeGalleryMeta = $('#galleries .microsite-gallery-meta'),
            $activeGallery = $('#galleries .microsite-gallery .gallery-wrapper'),
            $galleryNavList = $('#galleries #galleries-nav-list'),
            shareBarHtml = '<div class="field field-name-field-gigya-share-bar field-type-gigya-sharebar field-label-hidden"><div id="gigya-share"></div></div>';

        $activeGallery.animate({'opacity': 0}, 1000, function(){

          if (data.h1.length > 0 && data.title.length > 0) {
            titleHtml = '<h2 class="seo-h1">' + data.h1 + '</h2><h2 class="gallery-title">' + data.title + '</h2>' + shareBarHtml;
          } else if (data.title.length > 0) {
            titleHtml = '<h2 class="gallery-title">' + data.title + '</h2>' + shareBarHtml;
          }

          $galleryNavList.find('li').removeClass('active');
          $galleryNavList.find('li[data-node-id="' + nid + '"]').addClass('active');

          // initialize gallery
          $activeGallery.parent().html(data.rendered);
          Drupal.settings.microsite_gallery_data = data;
          setTimeout(function(){
            $('#galleries .microsite-gallery .gallery-wrapper').usaGallery();
            //Drupal.behaviors.ms_site.galleryLazyLoad();
            Drupal.behaviors.ms_global.showGallery($activeGallery);
            Drupal.behaviors.ms_global.setOmnitureData('galleries');

            // initialize Gigya share bar clicks
            $('#galleries #gigya-share .gig-button-container td > div').unbind('click');
            $('#galleries #gigya-share .gig-button-container td > div').bind('click', function(){
              var title = $('#galleries .gallery-wrapper .gallery-name:first').text();
              Drupal.behaviors.ms_global.sendSocialShareOmniture($(this), title);
            });

            Drupal.behaviors.ms_global.galleryIsLoading = false;
            if (callback !== null) callback();
          }, 2000);
        });
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        //usa_debug('********************\najax fail: ');
        //usa_debug(errorThrown);
      })
    },

    changeGalleryHandler: function(e) {
      var anchorFull = this.href,
          anchorPathParts = Drupal.behaviors.ms_global.getUrlPath(anchorFull),
          $navItems = $('#galleries #galleries-nav-list li a');

      // Unbind click while selected gallery loading
      $navItems.unbind('click').bind('click', function(e) {
        e.preventDefault();
      });

      // if this is an internal microsite url
      // prevent the default action
      // and show the correct microsite item without a page reload
      if (anchorPathParts[0] == 'royalpains' && anchorPathParts[1] == 'farewell') {
        e.preventDefault();

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull;
          return false;
        }

        // scroll to top of galleries section
        $('#microsite #galleries').animate({ scrollTop: 0 }, 1000);

        // switch gallery
        var nid = $(this).parent().attr('data-node-id'),
            activeGalleryNavItem = nid;
        Drupal.behaviors.ms_global.switchGallery(nid, function() {
          $navItems.bind('click', Drupal.behaviors.ms_global.changeGalleryHandler);
        });

        history.pushState({"state": anchorFull}, anchorFull, anchorFull);
      }
    },

    showVideoSection: function() {
      $('#video-loader').animate({'opacity': 0}, 500, function(){
        $(this).css('display', 'none');
        $('#microsite #videos .full-pane, #microsite #videos .filter-wrapper').animate({'opacity': 1}, 500);
      });
    },

    attach: function (context, settings) {
      var startPathname = window.location.pathname;

      if (!$('html').hasClass('ie9')) {
        history.pushState({"state": startPathname}, startPathname, startPathname);
      }

      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this,
          urlParts = self.parseUrl(window.location.href);

      // set hover state for hamburger menu on mobile devices
      var wwidth = $(window).width(),
          $siteNav = $('#site-nav');

      if (wwidth < 874) {
        $siteNav.addClass('mobile');
      }
      else {
        $siteNav.removeClass('mobile');
      }

      self.moveGalleryFilters();

      // Turn off the popstate/hashchange tve-core.js event listeners
      $(window).off('popstate');
      $(window).off('hashchange');

      // initialize gallery nav clicks
      $('#galleries #galleries-nav-list li a').bind('click', self.changeGalleryHandler);

      // RESIZE
      // set resize and orientation change
      var resizeTimer;
      $(window).bind('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
          if (!self.globalInitialPageLoad) self.resizeResponse();
        }, 250);
      });

      $(window).load(function(){
        if ($('#videos').length > 0) {
          Drupal.behaviors.ms_videos.setVideoHeight();

          // put video filter text in <p>
          // this is to allow vertical alignment of single and multiple row text
          Drupal.behaviors.ms_videos.placeVideoFiltersInParagraphs();

          $('#video-container').addClass('active');
          if (urlParts['section'] == 'videos' && urlParts['item']) {
            Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('true', null, null, true, self.showVideoSection);

            // designers want video filters in a certain order
            Drupal.behaviors.ms_videos.setVideoFilterOrder(false, Drupal.behaviors.ms_videos.moveVideoFilters);
          }
          else {
            Drupal.behaviors.ms_videos.setVideoFilterOrder(false, function(){
              Drupal.behaviors.ms_videos.moveVideoFilters();
              Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('false', null, null, true, self.showVideoSection);
            });
          }
        }

        // initialize gallery Gigya share bar clicks
        $('#galleries #gigya-share .gig-button-container td > div').bind('click', function(){
          var title = $('#galleries .gallery-wrapper .gallery-name:first').text();
          Drupal.behaviors.ms_global.sendSocialShareOmniture($(this), title);
        });

        // TIME OUT
        // we need to allow time for the page to load -- especially videos
        setTimeout(function(){

          // initialize clicks in microsite menu
          $('#microsite li.internal a').on('click', function(e){
            e.preventDefault();
            var $parent = $(this).parent(),
                anchor = $parent.attr('data-menuanchor');

            if ($('#site-nav-links li').hasClass('disabled')) {
              return false;
            }
            else {
              $('#site-nav-links li').addClass('disabled');
            }

            Drupal.behaviors.ms_global.sectionScroll(anchor);
          });

          // initialize site nav logo click
          $('#site-nav-logo').on('click', function(){
            Drupal.behaviors.ms_global.sectionScroll('home');
          });

          self.setSectionIdsArray();

          // initialize the waypoints
          if (!$('html').hasClass('ie9')) self.initializeWaypoints();

          // check url and scroll to specific content
          // This scroll is necessary -- even if we're loading the "homepage",
          // because we need to set globalInitialPageLoad to false, which
          // is done in sectionScroll
          setTimeout(function(){
            self.sectionScroll(urlParts['section'], urlParts['item']);
          }, 2000);
        }, 2000);
        // END TIME OUT

        mps._ready(function(){
          usa_debug('MPS READY');
          if (urlParts['section'] != 'videos') self.refreshAds(urlParts['section']);
        });
      });
    }
  }
})(jQuery);
