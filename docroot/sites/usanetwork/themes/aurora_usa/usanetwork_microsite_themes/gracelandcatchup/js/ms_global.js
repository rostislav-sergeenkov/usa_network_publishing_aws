/**
 * Global js functions for microsite navigation
 */
var initialPageLoad = 1;
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
      if ($('html.ie9').length > 0) {
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
      if (sectionId != 'videos') {
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
        Drupal.behaviors.ms_global.setOmnitureData(sectionId);
        Drupal.behaviors.ms_global.changeUrl(sectionId, anchorFull);
usa_debug('========== waypointResponse -- ' + sectionId + ' ' + scrollDirection);
      }
    },

    // initializeWaypoints -- for triggering section scroll events
    waypoints: {'down': {}, 'up': {}},
    initializeWaypoints: function() {
      // When scrolling down, send Omniture page call when top of next section hits bottom of sticky nav
      // When scrolling up, send Omniture page call when bottom of previous section hits bottom of window
      var sectionTimer;
      function handler(event, sectionId, direction){
        usa_debug('handler(' + event + ', ' + sectionId + ', ' + direction + ')');

        // if more than one function call arrives before the timeout is done,
        // clear the timer and start over. This is to prevent, rapid scrolling
        // or navigation clicks from triggering Omniture calls
        clearTimeout(sectionTimer);
        sectionTimer = setTimeout(function(){
          var anchorFull = Drupal.settings.microsites_settings.base_path + '/' + sectionId,
              urlSection = Drupal.behaviors.ms_global.parseUrl()['section'];
          if (urlSection != sectionId) {
            usa_debug('========== handler event triggered on ' + sectionId);
            $('.section.active').removeClass('active');
            $('#' + sectionId).addClass('active');
            Drupal.behaviors.ms_global.waypointResponse(direction, sectionId);
          }
        }, 1000);
      }

      // loop through each section
      $('.section').each(function(){
        var sectionId = $(this).attr('id'),
            firstSection = $('.section:first').attr('id'),
            lastSection = $('.section:last').attr('id'),
            downEnabled = (sectionId == firstSection || sectionId == 'site-nav') ? false : true,
            upEnabled = (sectionId == lastSection || sectionId == 'site-nav') ? false : true;

usa_debug('========= initializing waypoints for section ' + sectionId);
        if (sectionId != 'site-nav') {
          Drupal.behaviors.ms_global.waypoints['down'][sectionId] = new Waypoint.Inview({
            element: document.getElementById(sectionId),
//            enter: function(direction) { handler('enter', sectionId, direction); },
            entered: function(direction) {
//              if (sectionId == firstSection || sectionId == lastSection)
                handler('entered', sectionId, direction);
            },
            exit: function(direction) { handler('exit', sectionId, direction); },
//            exited: function(direction) { handler('exited', sectionId, direction); }
          })
        }
      }); // end each section loop
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

    // setOmnitureData
    setOmnitureData: function(anchor, itemTitle) {
      var anchor = anchor || null,
          itemTitle = itemTitle || '',
          siteName = Drupal.settings.microsites_settings.title,
          basePageName = siteName + ' | USA Network';
      if (!anchor) {
        var sectionData = Drupal.behaviors.ms_global.parseUrl();
        anchor = sectionData['section'];
      }
      var sectionTitle = Drupal.behaviors.ms_global.toTitleCase(anchor),
          pageName = basePageName;
      s.pageName = siteName;
      s.prop3 = sectionTitle;
      s.prop4 = siteName + ' : ' + sectionTitle;
      s.prop5 = s.prop4;
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
      }

      // set section-specific overrides
      switch (anchor) {
        case 'videos':
          s.prop3 = 'Video';
          s.prop4 = siteName + ' : Video';
          if (itemTitle == '') itemTitle = $('#microsite #videos-content .video-title').text();
          s.prop5 = siteName + ' : Video : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Video | ' + pageName;
          break;
        case 'timeline':
          // @TODO: DV -- DYNAMICALLY GET THE timelineTitle IN THE LINE BELOW
          var timelineTitle = 'Graceland Catchup Timeline'; // $('#microsite #timeline').text();
          s.prop3 = 'Gallery';
          s.prop4 = siteName + ' : Gallery'; // This is intentional per Loretta!
          if (itemTitle == '') itemTitle = $('#microsite #timeline .timeline-items .timeline-item.active .timeline-item-details > h2').text();
          s.prop5 = siteName + ' : Timeline SlideShow : ' + timelineTitle;
          s.pageName = s.prop5 + ' : ' + itemTitle;
          pageName = itemTitle + ' | Timeline Slideshow | ' + pageName;
          break;
        case 'quizzes':
          s.prop3 = 'Quiz';
          s.prop4 = siteName + ' : Quiz';
          if (itemTitle == '') itemTitle = $('#microsite #quizzes .full-pane #viewport .active-quiz-title > h1').text();
          if (itemTitle == '') itemTitle = $('#microsite #quizzes .full-pane #viewport .active-quiz-title > h3.quiz-title').text();
          s.prop5 = siteName + ' : Quiz : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Quiz | ' + pageName;
          break;
        case 'characters':
          s.prop3 = 'Bio';
          s.prop4 = 'Profile Page'; // This is intentional per Loretta!
          if (itemTitle == '') itemTitle = $('#microsite #characters-content #character-info li.active > h3').text();
          if (itemTitle == '') itemTitle = $('#microsite #characters-content #character-info li.active > h1').text();
          s.prop5 = (itemTitle != '') ? siteName + ' : Bio : ' + itemTitle : siteName + ' : Bio';
          s.pageName = s.prop5;
          pageName = (itemTitle != '') ? itemTitle + ' | Bio | ' + pageName : 'Bio | ' + pageName;
          break;
/* DON'T DELETE THE FOLLOWING, BECAUSE IT CAN BE USED IN FUTURE MICROSITES
        case 'about':
          pageName = sectionTitle + ' | ' + pageName;
          s.pageName += ' : ' + sectionTitle;
          break;
        case 'galleries':
          var slider = $('#microsite #galleries .microsite-gallery .flexslider'),
              $slider = slider.data('flexslider'),
              currentSlide = $slider.currentSlide + 1;
          if (!currentSlide) currentSlide = 1;
          s.prop3 = 'Gallery';
          s.prop4 = siteName + ' : Gallery';
          if (itemTitle == '') itemTitle = $('#microsite #galleries-content .microsite-gallery-meta h2.gallery-title').text();
          if (itemTitle == '') itemTitle = $('#microsite #galleries-content .microsite-gallery-meta h1.gallery-title').text();
          s.prop5 = siteName + ' : Gallery : ' + itemTitle;
          s.pageName = s.prop5 + ' : Photo ' + currentSlide;
          pageName = itemTitle + ' | Gallery | ' + pageName;
          break;
        case 'episodes':
          s.prop3 = 'Episode Guide';
          s.prop4 = siteName + ' : Episode Guide';
          if (itemTitle == '') itemTitle = $('#microsite #episodes-content #episode-info li.active > h3.episode-title').text();
          if (itemTitle == '') itemTitle = $('#microsite #episodes-content #episode-info li.active > h1.episode-title').text();
          s.prop5 = siteName + ' : Episode Guide : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Episode Guide | ' + pageName;
          break;
*/
      }
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

    // 300x250 -- not for video companion ads!!
    create300x250Ad: function (section) {
      var $ad = $('.dart-name-300x250_ifr_reload_' + section);
      var $ad220x60 = $('.dart-name-220x60_ifr_reload_' + section);

      if ($ad.hasClass('loading')) {
        // do nothing
      }
      else {
        $ad.addClass('loading');
        $ad220x60.addClass('loading');

        //usa_debug('create300x250Ad(' + section + ')');
        if (section != 'videos' && section != 'home') {
          // check to see if there's already an ad
          if ($('.dart-name-300x250_ifr_reload_' + section + ' iframe').length) {
            adBlock = '.dart-name-300x250_ifr_reload_' + section;
            Drupal.behaviors.ms_global.usa_refreshMicrositeAdsBySection(adBlock);
          }
          else if ($('.dart-name-220x60_ifr_reload_' + section + ' iframe').length) {
            adBlock = '.dart-name-220x60_ifr_reload_' + section;
            Drupal.behaviors.ms_global.usa_refreshMicrositeAdsBySection(adBlock);
          }
          else {
            iframeQueue = [];
            Drupal.DART.tag('{"machinename":"300x250_ifr_reload_' + section + '","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord=' + ord + '?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord=' + ord + '?"}}');
            // write iframe ad units to page
            if (iframeQueue.length) {
              for (var i = 0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
                // 300x250 second
                if (iframeQueue[i].tag.indexOf('300x250') != '-1') {
                  $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
                }
                // 220x60 last
                if (iframeQueue[i].tag.indexOf('220x60') != '-1') {
                  $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
                }
              }
            }
          }
        }

        $ad.removeClass('loading');
        $ad220x60.removeClass('loading');
      }
    },

    // createAds
    // there is a race condition if we try to create both the 728x90
    // and the 300x250 at about the same time, so we create the 728x90
    // first and then create the 300x250
    create728x90Ad: function (section) {
      if (!section) {
        section = $('#sections .section.active').attr('id') || 'home';
      }
      var $ad = $('.dart-name-728x90_ifr_reload_' + section);

      if ($ad.hasClass('loading')) {
        // do nothing
      }
      else {
        //usa_debug('create728x90Ad(' + section + ')');
        $ad.addClass('loading');

        // check to see if there is an ad already there
        if ($('.dart-name-728x90_ifr_reload_' + section + ' iframe').length) {
          adBlock = '.dart-name-728x90_ifr_reload_' + section;
          Drupal.behaviors.ms_global.usa_refreshMicrositeAdsBySection(adBlock);
        }
        // if no 728x90 ad in this section yet, create it
        else {
          // we have to clear the iframeQueue first and then re-build it using
          // the Drupal.DART.tag, then we write the iframes by looping through
          // the iframeQueue

          // start 728x90
          iframeQueue = new Array();

          Drupal.DART.tag('{"machinename":"728x90_ifr_reload_' + section + '","name":"728x90 script","pos":"7","sz":"728x90","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"728x90","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord=' + ord + '?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord=' + ord + '?"}}');

          // write iframe ad units to page
          if (iframeQueue.length) {
            for (var i = 0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
              // 728x90
              if (iframeQueue[i].tag.indexOf('728x90') != '-1') {
                $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
              }
            }
          }
        }
        // add styles for iframe
        $('#' + section + ' .ad-leaderboard iframe').load(function () {
          $('#' + section + ' .ad-leaderboard iframe').contents().find('head').append("<style type='text/css'>img {max-width: 100%; }object {max-width: 100%; height: 90px;}object * {max-width: 100%; max-height: 90px;}@media (max-width: 300px){img {max-height: 50px;}object {max-width: 300px; max-height: 50px;}object * {max-width: 300px; max-height: 50px;}}</style>");
        });

        $ad.removeClass('loading');
      }
    },

    // SECTIONS
    //scroll to top
    scrollToTop: function() {
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    // sectionScroll
    sectionScroll: function(anchor, item, itemTitle) {
      item = item || '';
      itemTitle = itemTitle || '';
      var basePath = Drupal.settings.microsites_settings.base_path,
          anchorItem = $('#nav-' + anchor),
          anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor,
          nextSection = '#' + anchor,
          nextSectionId = $(nextSection).attr('id');

      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
        window.location.href = anchorFull.replace('/home', '');
        return false;
      }

      // open or load item content, if needed
      if (item != '') {
        switch(anchor) {
          case 'characters':
            Drupal.behaviors.ms_characters.showCharacterInfo(item);
            break;
          case 'quizzes':
            var quizNodeId = $('#microsite #quizzes #quizzes-nav-list a[href="' + basePath + '/quizzes/' + item + '"]').parent().attr('data-node-id');
            Drupal.behaviors.ms_quizzes.switchQuizzes(quizNodeId);
            break;
        }
      }

      // now scroll to the next section
      var siteNavHeight = (anchor != 'home' && anchor != 'videos') ? $('#site-nav').height() : 0,
          nextSectionElem = document.getElementById(anchor),
          nextSectionTop = nextSectionElem.offsetTop; // nextSectionElem.offsetTop - siteNavHeight;
      $('body').animate({'scrollTop': nextSectionTop}, 1000, 'jswing', function () {
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
          Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
          if (videoContainer.attr('data-ad-start') == 'true') {
            videoContainer.find('.active-player .custom-play').addClass('active').show();
            videoContainer.find('.active-player .custom-play').click(function () {
              $pdk.controller.clickPlayButton(true);
              $pdk.controller.pause(false);
              $('.active-player .custom-play').removeClass('active').hide();
            });
          }
        }

        // set active menu item
        $('#site-nav-links li').removeClass('active disabled');
        $('#nav-' + anchor).addClass('active');
      });
      Drupal.behaviors.ms_global.globalInitialPageLoad = false;
    },

    attach: function (context, settings) {
      var startPathname = window.location.pathname;
      if (!$('html.ie9').length) {
        history.pushState({"state": startPathname}, startPathname, startPathname);
      }

      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      // set hover state for hamburger menu on mobile devices
      var wwidth = $(window).width(),
          $siteNav = $('#site-nav');

      if (wwidth < 844) {
        $siteNav.addClass('mobile');
      }
      else {
        $siteNav.removeClass('mobile');
      }

      $('#video-container').addClass('active');
      var urlParts = self.parseUrl(history.state['path']);
      if (urlParts['section'] == 'videos' && urlParts['item']) {
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer(true, null, null, true);
      }
      else {
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer(false, null, null, true);
      }

      // TIME OUT
      // we need to allow time for the page to load -- especially videos
      setTimeout(function(){
        // initialize clicks in microsite menu
        $('#microsite li.internal a').on('click', function(e){
          e.preventDefault();

usa_debug('======== clicked on ' + $(this).parent().attr('id'));
          if ($('#site-nav-links li').hasClass('disabled')) {
            return false;
          }
          else {
            $('#site-nav-links li').addClass('disabled');
          }

          var anchor = $(this).parent().attr('data-menuanchor');
          Drupal.behaviors.ms_global.sectionScroll(anchor);
          if (anchor == 'videos') Drupal.behaviors.ms_videos.micrositeSetPlayPlayer();
        });

        // initialize graceland cu logo click
        $('#gracelandcu-logo').on('click', function(){
          var anchor = 'home',
              anchorFull = basePath + '/' + anchor;

          Drupal.behaviors.ms_global.sectionScroll(anchor);
        });

        // initialize the waypoints
        self.initializeWaypoints();

        // check url and scroll to specific content
        var urlParts = self.parseUrl(),
            activeSection = $('.section.active');
        if (activeSection != urlParts['section']) {
          setTimeout(function(){
            self.sectionScroll(urlParts['section'], urlParts['item']);
          }, 1000);
        }
        else {
          self.globalInitialPageLoad = false;
        }

        self.create728x90Ad();
      }, 500);
      // END TIME OUT

      // Turn off the popstate/hashchange tve-core.js event listeners
      $(window).off('popstate');
      $(window).off('hashchange');

      // Turn on browser history functionality -- for example, browser back button.
      // Popped variable is used to detect initial (useless) popstate.
      // If history.state exists, assume browser isn't going to fire initial popstate.
      var popped = ('state' in window.history && window.history.state !== null),
          initialURL = location.href;
      $(window).on('popstate');
      $(window).bind('popstate', function(event) {
        // Ignore inital popstate that some browsers fire on page load
        var initialPop = !popped && location.href == initialURL
        popped = true;

        if (initialPop) return;

        usa_debug('============= onpopstate activated! new state: ');
        usa_debug(history.state);
        var urlParts = self.parseUrl(history.state['path']),

            anchor = urlParts['section'],
            item = urlParts['item'];
        self.sectionScroll(anchor, item);
      });

      // RESIZE
      // set resize and orientation change
      var resizeTimer;
      $(window).bind('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
          var wwidth = $(window).width(),
              $siteNav = $('#site-nav');

          if (wwidth < 844) {
            $siteNav.addClass('mobile');
          }
          else {
            $siteNav.removeClass('mobile');
          }

          if (typeof Waypoint != 'undefined') Waypoint.refreshAll();
        }, 250);
      });
//      window.addEventListener('orientationchange', self.reloadSliders);

    }
  }
})(jQuery);
