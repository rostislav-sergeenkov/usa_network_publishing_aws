/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    galleryFilters: {},

    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    showSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 0) {
        //usa_debug('showSiteNav()');
        $siteNav.css({'opacity': 1, 'max-height': '60px'}).animate({'top': '0'}, 500, function(){
          if (window.innerWidth < 874) {
            $siteNav.css({'overflow': 'visible'}); // to allow hamburger hover state to work
          }
        });
        $homeUsaLogo.animate({'opacity': 0}, 500);
      }
    },

    hideSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 1) {
        usa_debug('hideSiteNav()');
        $homeUsaLogo.animate({'opacity': 1}, 500);
        $siteNav.animate({'top': '-60px'}, 500, function(){
          $siteNav.css({'opacity': 0, 'max-height': 0});
        });
      }
    },

    setSiteNav: function() {
      var homeNavInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav')) ? true : false,
          homeAdInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#head-leaderboard')) ? true : false,
          homeEmptyInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-empty')) ? true : false,
          homeLogoInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-logo')) ? true : false,
          homeCountdownInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#countHolder')) ? true : false;

      if (homeNavInView || homeLogoInView || homeCountdownInView || homeEmptyInView || homeAdInView) {
        Drupal.behaviors.ms_site.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_site.showSiteNav();
      }
    },

    getGalleryFilterClassNameByNodeId: function(nodeId) {
      if (galleryFilters.length) {
        for (filter in galleryFilters) {
          usa_debug('getGalleryFilterClassNameByNodeId(' + nodeId + ') -- filter: ' + filter);
          var nids = galleryFilters[filter];
          for (key in nids) {
            usa_debug('getGalleryFilterClassNameByNodeId(' + nodeId + ') -- key: ' + key);
            var nid = nids[key];
            if (nid == nodeId) return filter;
          }
        }
      }
      usa_debug('ERROR: getGalleryFilterClassNameByNodeId(' + nodeId + ') -- galleryFilters not set yet!');
      return false;
    },

    setActiveGalleryFilterFromUrl: function() {
      var $galleryNavList = $('#galleries-nav-list'),
          $galleryItem = $galleryNavList.find('li.active'),
          activeGalleryFilter = $galleryItem.attr('data-filter-class');
      usa_debug('setActiveGalleryFilterFromUrl() -- activeGalleryFilter: ' + activeGalleryFilter);
        Drupal.behaviors.ms_site.setGalleryFilter(activeGalleryFilter);
    },

    assignGalleryFilterClasses: function(callback) {
      callback = callback || null;
      Drupal.behaviors.ms_global.loadJSON('http://assets.usanetwork.com/royalpains/farewell/gallery-filter-list.json', function(response){
          usa_debug('assignGalleryFilterClasses() -- response: ', response);
          galleryFilters = response[0];
          usa_debug('assignGalleryFilterClasses() -- galleryFilters: ', galleryFilters);
          var $galleryNavList = jQuery('#galleries-nav-list');
          for (filter in galleryFilters) {
            //usa_debug('assignGalleryFilterClasses() -- filter: ' + filter);
            var nids = galleryFilters[filter];
            for (key in nids) {
              //usa_debug('assignGalleryFilterClasses() -- filter: ' + filter + ', key: ' + key);
              if ($('#galleries-nav-list ul.' + filter).length < 1) {
                $('#galleries-nav-list').append('<ul class="' + filter + '"></ul>');
              }
              var nid = nids[key];
              $('#galleries-nav-list ul.' + filter).append($galleryNavList.find('li[data-node-id=' + nid + ']').addClass(filter).attr('data-filter-class', filter));
            }
          }
          if (typeof callback == 'function') callback();
      });
    },

    setGalleryFilter: function(filter) {
      var $galleryNavList = jQuery('#galleries-nav-list'),
          $galleryFilterList = jQuery('#galleries-filter');
      $galleryNavList.animate({'opacity': 0}, 500, function(){
        $galleryFilterList.find('li').removeClass('active');
        $galleryFilterList.find('li[data-filter-class=' + filter + ']').addClass('active');
        $(this).find('li').removeClass('show').addClass('hide');
        $(this).find('li.' + filter).removeClass('hide').addClass('show');
        $(this).animate({'opacity': 1}, 500);
      });
    },

    // ATTACH
    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          setSiteNavPositionTimer,
          urlParts = Drupal.behaviors.ms_global.parseUrl(),
          item = urlParts['item'],
          isGallerySpecificUrl = (urlParts['section'] == 'galleries' && item != '') ? true : false,
          self = this;

      var //homeSectionHeight,
          siteNavTimer,
          siteNavPositionTimer,
          scrollTimer,
          allAdsLoaded = false,
          scrollDirection;

      usa_debug('attach() -- urlParts: ', urlParts);

      var wPath = window.location.path;
      if (wPath == '/royalpains/farewell') {
        jQuery('#home-seo').html('<h1 class="seo-h1">Royal Pains Farewell</h1>');
      }
      else {
       jQuery('#home-seo').html('<h2 class="seo-h1">Royal Pains Farewell</h2>');
      }

      // galleries
      if ($('#galleries').length) {
        self.assignGalleryFilterClasses(function(){
          // if the url specifies a single gallery,
          // set the active gallery filter and thumbnail items
          if (isGallerySpecificUrl) {
            self.setActiveGalleryFilterFromUrl();
          }
          else {
            self.setGalleryFilter('hankmed-highlights');
          }

          jQuery('.gallery-wrapper').usaGallery();

          // initialize gallery filter clicks
          jQuery('#galleries-filter li').click(function(){
            if (!jQuery(this).hasClass('active')) {
              var filter = $(this).attr('data-filter-class');
              self.setGalleryFilter(filter);

              // switch to 1st gallery in this filter
              var $navItems = $('#galleries #galleries-nav-list li a'),
                  $filteredGalleryNavList = $('#galleries-nav-list li[data-filter-class=' + filter + ']');
              $filteredGalleryNavList.eq(0).find('a').click();
            }
          });
        });
      }

      setTimeout(function(){
        if ($('html').hasClass('ie9')) {
          self.showSiteNav();
        }
        else {
          self.setSiteNav();
        }
      }, 500);

      // timeline
      if ($('#timeline').length) {
        $('#timeline .section-title-block > h2').html('<span>Timeline</span>');
        // Remove 'Scene ' from line dot hover hints
        setTimeout(function(){
          $('.timeline-node .timeline-node-desc').each(function(){
            $(this).text($(this).text().replace('Scene ', ''));
          });
        }, 3000);
      }

      // SCROLLING
      $(window).on('scroll', function() {
        if (!$('html').hasClass('ie9') && typeof siteNavTimer == 'undefined') {
          siteNavTimer = setTimeout(function(){
            self.setSiteNav();
            siteNavTimer = clearTimeout(siteNavTimer);
          }, 200);
        }

        // initial load of each ad as it comes into view
        scrollTimer = clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
          scrollDirection = Drupal.behaviors.ms_global.getScrollDirection();

          if (!allAdsLoaded) {
            allAdsLoaded = true;
            $('#microsite .section').each(function(){
              var sectionId = $(this).attr('id');
              if (sectionId != 'site-nav' && sectionId != 'videos') {
                if ($('#' + sectionId + ' .ad-leaderboard').html() == '') {
                  allAdsLoaded = false;
                  if (Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard')) {
                    Drupal.behaviors.ms_global.refreshAds(sectionId);
                  }
                }
              }
            });
          }
        }, 250);
      });
    }
  }
})(jQuery);
