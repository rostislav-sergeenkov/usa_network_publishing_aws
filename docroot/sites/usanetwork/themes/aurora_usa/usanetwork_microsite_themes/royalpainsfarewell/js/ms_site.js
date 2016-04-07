/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

/*
    setPersonRole: function() {
      var person = {"rami-malek": {"role": "Elliot Alderson"},"christian-slater": {"role": "Mr. Robot"}},
          $personList = $('#microsite #characters #character-nav ul');

      $personList.find('li').each(function(){
        var personId = $(this).attr('data-id');
        if (typeof person[personId] != 'undefined') {
          if (typeof person[personId]['role'] != 'undefined') $(this).find('.role').html(person[personId]['role']);
        }
      });
    },
*/
    showSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 0) {
        //usa_debug('showSiteNav()');
//        $siteNav.css({'opacity': 1}).animate({'max-height': '60px'}, 700, function(){
        $siteNav.css({'opacity': 1, 'max-height': '60px'}).animate({'top': '0'}, 700, function(){
          if (window.innerWidth < 874) {
            $siteNav.css({'overflow': 'visible'}); // to allow hamburger hover state to work
          }
        });
        $homeUsaLogo.animate({'opacity': 0}, 700);
      }
    },

    hideSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 1) {
        usa_debug('hideSiteNav()');
        $homeUsaLogo.animate({'opacity': 1}, 700);
//        $siteNav.css({'overflow': 'hidden'}).animate({'max-height': '0'}, 700, function(){
        $siteNav.animate({'top': '-60px'}, 700, function(){
          $siteNav.css({'opacity': 0, 'max-height': 0});
        });
      }
    },

    setSiteNav: function() {
//      var wPath = window.location.pathname,
      var homeAdInView = (Drupal.behaviors.ms_global.isScrolledIntoView('.dart-name-728x90_ifr_reload_home')) ? true : false,
          homeLogoInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-logo')) ? true : false,
          homeTuneInInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-tunein')) ? true : false,
          homeNavFirstInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav li:first')) ? true : false,
          homeNavLastInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav li:last')) ? true : false,
//          homeFinalePacketImageInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#finale-packet-image')) ? true : false,
          homeUSALogoInView = (Drupal.behaviors.ms_global.isScrolledIntoView('#home-usa-logo')) ? true : false;
      //usa_debug('setSiteNav()');
//      if (wPath == '/mrrobot/catchup' || homeLogoInView || homeTuneInInView || homeNavFirstInView || homeNavLastInView || homeFinalePacketImageInView || homeUSALogoInView) {
      if (homeAdInView || homeLogoInView || homeTuneInInView || homeNavFirstInView || homeNavLastInView || homeUSALogoInView) {
        Drupal.behaviors.ms_site.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_site.showSiteNav();
      }
    },

    placeVideoFiltersInParagraphs: function() {
      $('#videos #video-filter ul.filter-menu li').each(function(){
        var html = $(this).html();
        $(this).html('<p>' + html + '</p>');
      });
    },

    setVideoFilterOrder: function() {
      var desiredVideoFilterOrder = ['full-episodes', 'must-see-moments', 'clips', 'behind-the-scenes'];
//usa_debug('setVideoFilterOrder()');
      var mylist = $('#videos ul.filter-menu');
      var listitems = mylist.children('li').get();
      function reinitializeClicks() {
        // initialize video filter sub-item clicks
        $('#video-filter .filter-child-item').click(function () {
          Drupal.behaviors.ms_videos.processSubMenuClick($(this));
        });
      }
      function setLastClass() {
        mylist.find('.last').removeClass('last');
        mylist.find('li:last').addClass('last');
        reinitializeClicks();
      }
      listitems.sort(function(a, b) {
        //usa_debug('setVideoFilterOrder listitems.sort(a, b)');
        //usa_debug(a);
        //usa_debug(b);
        var aFilterClass = $(a).attr('data_filter_class'),
            bFilterClass = $(b).attr('data_filter_class'),
            aPos = desiredVideoFilterOrder.indexOf(aFilterClass),
            bPos = desiredVideoFilterOrder.indexOf(bFilterClass);
        //usa_debug('setVideoFilterOrder() aPos: ' + aPos + ', bPos: ' + bPos);
        return (aPos > bPos) ? 1 : -1;
      })
      var listitemsCount = 0;
      var listitemsNum = listitems.length;
      $.each(listitems, function(idx, itm) {
        mylist.append(itm);
        listitemsCount++;
        if (listitemsCount == listitemsNum) setLastClass();
      });
    },

    assignGalleryFilterClasses: function(callback) {
      callback = callback || null;
      Drupal.behaviors.ms_global.loadJSON('http://assets.usanetwork.com/royalpains/farewell/gallery-filter-list.json', function(response){
usa_debug('assignGalleryFilterClasses() -- response: ', response);
          var filters = JSON.parse(response)[0],
              $galleryNavList = jQuery('#galleries-list');
usa_debug('filters: ', filters);
          for (filter in filters) {
            usa_debug('filter: ' + filter);
            var nids = filters[filter];
            for (key in nids) {
              usa_debug('key: ' + key);
              var nid = nids[key];
              $galleryNavList.find('li[data-node-id=' + nid + ']').addClass(filter);
            }
          }
          if (typeof callback == 'function') callback();
      });
    },

    setGalleryFilter: function(filter) {
      var $galleryNavList = jQuery('#galleries-list'),
          $galleryFilterList = jQuery('#galleries-filter');
      $galleryNavList.animate({'opacity': 0}, 500, function(){
        $galleryFilterList.find('li').removeClass('active');
        $galleryFilterList.find('li[data-filter-class=' + filter + ']').addClass('active');
        $(this).find('li').addClass('hide');
        $(this).find('li.' + filter).removeClass('hide');
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
          self = this;

      var homeSectionHeight,
          siteNavTimer,
          siteNavPositionTimer,
          scrollTimer,
          allAdsLoaded = false,
          scrollDirection;

      jQuery('#timeline .section-title-block > h2').html('<span>Timeline</span>');

      $('.slides').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

/*
      self.assignGalleryFilterClasses(function(){
        self.setGalleryFilter('hankmed-highlights');

        // initialize gallery filter clicks
        jQuery('#galleries-filter li').click(function(){
          var filter = $(this).attr('data-filter-class');
          self.setGalleryFilter(filter);
        });
      });
*/
//      self.setPersonRole();

      setTimeout(function(){
        homeSectionHeight = self.getHeightHomeSection();

        // put video filter text in <p>
        // this is to allow vertical alignment of single and multiple row text
        self.placeVideoFiltersInParagraphs();

        // designers want the Must See Moments video filter to be
        // second in the list of filters
        self.setVideoFilterOrder();

        if ($('html').hasClass('ie9')) {
          self.showSiteNav();
        }
        else {
          self.setSiteNav();
        }
      }, 500);

      // Remove 'Scene ' from line dot hover hints
      setTimeout(function(){
        $('.timeline-node .timeline-node-desc').each(function(){
          $(this).text($(this).text().replace('Scene ', ''));
        });
      }, 3000);

      // SCROLLING
      $(window).on('scroll', function() {
/*
        if (typeof siteNavPositionTimer == 'undefined') {
          siteNavPositionTimer = setTimeout(function(){
            var position = (window.pageYOffset >= homeSectionHeight) ? 'fixed' : 'relative';
            $('#site-nav').css({'position': position});
            siteNavPositionTimer = clearTimeout(siteNavPositionTimer);
          }, 15);
        }
*/
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
              if (sectionId != 'site-nav') {
                if ($('#' + sectionId + ' .ad-leaderboard').html() == '') {
                  allAdsLoaded = false;
                  if (sectionId == 'videos') {
                    var $activeVideoThumb = $('#thumbnail-list .item-list ul li.thumbnail.active'),
                        dataFullEpisode = $activeVideoThumb.attr('data-full-episode');

                    if (dataFullEpisode == 'false' && Drupal.behaviors.ms_global.isScrolledIntoView('#videos .ad-leaderboard')) {
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
                  }
                  else {
                    if (Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard')) {
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
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
