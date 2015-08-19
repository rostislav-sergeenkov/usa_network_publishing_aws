/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

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

    showSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 0) {
        $siteNav.css({'opacity': 1}).animate({'max-height': '72px'}, 700, function(){
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
        $homeUsaLogo.animate({'opacity': 1}, 700);
        $siteNav.css({'overflow': 'hidden'}).animate({'max-height': '0'}, 700, function(){
          $siteNav.css({'opacity': 0});
        });
      }
    },

    setSiteNav: function() {
      if (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav') || Drupal.behaviors.ms_global.isScrolledIntoView('#home-usa-logo')) {
        Drupal.behaviors.ms_site.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_site.showSiteNav();
      }
    },

    showInfographic: function() {
/*
      var wwidth = $(window).width();
      if (wwidth > 1000) {
        $('#character-infographic-overlay').css('display', 'block').animate({'opacity': 1}, 1000);
        $('#character-infographic-overlay .character-close').click(function(){
          $('#character-infographic-overlay').animate({'opacity': 0}, 1000).css('display', 'none');
        });
      }
      else {
*/
        var wHost = window.location.hostname,
            wUrl = (wHost == 'www.usanetwork.com') ? 'http://apps.usanetwork.com/mrrobot/catchup/infographic' : 'http://stage-apps.usanetwork.com/mrrobot/catchup/infographic',
            infographicWindow = window.open(wUrl, '_blank', 'menubar=no,resizable=yes,status=no,toolbar=no,scrollbars=yes', false);
//      }
    },

    // getFirstEpisodeNumberForMustSeeMomentsVideos
    // we need to know this when a user clicks "Must See Moments" in the global nav
    getFirstEpNumForMSMVideos: function(seasonNum) {
      var episodes = Object.keys(msmVideosByEpisode[seasonNum]),
          numEpisodes = episodes.length;
      for (var i=0; i <= numEpisodes; i++) {
        var numVideosInEpisode = episodes[i].length;
        if (numVideosInEpisode > 0) return i;
      }
    },

    // addMustSeeMomentsVideoFilterMenuDropdown
    // adds the dropdown menu for the must see moments (msm) video filter
    addMSMVideoFilterMenuDropdown: function(){
      var $msmVideoFilterButton = $('#videos #video-filter .filter-menu li[data_filter_class="must-see-moments"]'),
          msmButtonHtml = $msmVideoFilterButton.html(),
          childHtml = '',
          childClass = ' first',
          firstSeason,
          firstEpisodeWithVideos;

      // loop thru seasons (i)
      for (var i=1, numSeasons = Object.keys(msmVideosByEpisode).length; i <= numSeasons; i++) {
        //usa_debug('addMSMVideoInfo() in season ' + i);
        if (!firstSeason) firstSeason = i;
        // loop thru episodes (j)
        for (var j=1, numEpisodes = Object.keys(msmVideosByEpisode[i]).length; j <= numEpisodes; j++) {
          //usa_debug('addMSMVideoInfo() in season ' + i + ' and episode ' + j);
          // loop thru videos (k)
          var numVideos = Object.keys(msmVideosByEpisode[i][j]['fids']).length;
          if (numVideos > 0) {
            if (!firstEpisodeWithVideos) firstEpisodeWithVideos = j;
            childHtml += '<li class="filter-child-item' + childClass + '" data-season-num="' + i + '" data-episode-num="' + j + '">S' + i + ' EP' + j + '<span class="msm-episode-title">' + msmVideosByEpisode[i][j]['title'] + '</span></li>';
            childClass = '';
/*
            for (var k=0; k < numVideos; k++) {
              usa_debug('addMSMVideoInfo() -- season ' + i + ' episode ' + j + ' video ' + msmVideosByEpisode[i][j][k]);
              $msmVideos.find('li[data-fid="' + msmVideosByEpisode[i][j][k] + '"]').addClass('season' + i + ' episode' + j);
// jQuery('#videos #thumbnail-list ul.must-see-moments').find('li[data-fid="372006"]').addClass('testing testing2');
            }
*/
          }
        }
      }
      if (childHtml != '') {
        msmButtonHtml += '<span id="msm-selected-filter"> - S' + firstSeason + ' EP' + firstEpisodeWithVideos + '</span><div class="item-list"><ul class="filter-item" data-filter-name="Must See Moments" data_filter_class="must-see-moments">' + childHtml + '</ul></div>';
        $msmVideoFilterButton.html(msmButtonHtml);
        $('#videos #video-filter .filter-menu li:last').addClass('last');
      }

      // re-initialize video filter sub-item clicks
      $('#video-filter .filter-child-item').unbind('click');
      $('#video-filter .filter-child-item').bind('click', function () {
        Drupal.behaviors.ms_videos.processSubMenuClick($(this));
      });
    },

    // addMustSeeMomentsVideoInfo
    // add season and episode css selectors to Must See Moments video thumbnails
    addMSMVideoInfo: function(seasonNum, epNum){
      seasonNum = seasonNum || null;
      epNum = epNum || null;
      //usa_debug('addMSMVideoInfo()\nmsmVideosByEpisode: ', msmVideosByEpisode);
      var $msmVideos = $('#videos #thumbnail-list ul.must-see-moments'),
          firstSeason,
          firstEpisodeWithVideos;
      // loop thru seasons (i)
      for (var i=1, numSeasons = Object.keys(msmVideosByEpisode).length; i <= numSeasons; i++) {
        //usa_debug('addMSMVideoInfo() in season ' + i);
        if (!firstSeason) firstSeason = i;
        // loop thru episodes (j)
        for (var j=1, numEpisodes = Object.keys(msmVideosByEpisode[i]).length; j <= numEpisodes; j++) {
          //usa_debug('addMSMVideoInfo() in season ' + i + ' and episode ' + j);
          // loop thru videos (k)
          var numVideos = Object.keys(msmVideosByEpisode[i][j]['fids']).length;
          if (numVideos > 0) {
            if (!firstEpisodeWithVideos) firstEpisodeWithVideos = j;
            for (var k=0; k < numVideos; k++) {
              //usa_debug('addMSMVideoInfo() -- season ' + i + ' episode ' + j + ' video ' + msmVideosByEpisode[i][j][k]);
              $msmVideos.find('li[data-fid="' + msmVideosByEpisode[i][j]['fids'][k] + '"]').addClass('season' + i + ' episode' + j);
            }
          }
        }
      }
      if (!seasonNum) seasonNum = firstSeason;
      if (!epNum) epNum = firstEpisodeWithVideos;
      Drupal.behaviors.ms_site.showMSMVideosBySeasonNEpisode(seasonNum, epNum, false);
    },

    showMSMVideosBySeasonNEpisode: function(seasonNum, epNum, autoplay) {
      var autoplay = autoplay || true,
          seasonNum = seasonNum || 1,
          epNum = epNum || Drupal.behaviors.ms_site.getFirstEpNumForMSMVideos(seasonNum),
          $allMsmVideos = $('#videos #thumbnail-list ul.must-see-moments li'),
          $msmVideosInEpisode = $('#videos #thumbnail-list ul.must-see-moments li.season' + seasonNum + '.episode' + epNum),
          $firstVideoInEpisode = $msmVideosInEpisode.first(),
          $adBlock = $('#thumbnail-list .thumbnail.ad');
usa_debug('showMSMVideosBySeasonNEpisode(' + seasonNum + ', ' + epNum + ')');
      $allMsmVideos.hide();
      $msmVideosInEpisode.show()
      $('#videos #thumbnail-list ul.must-see-moments').animate({'opacity': 1}, 500, function(){
        $('#videos #msm-selected-filter').animate({'opacity': 0}, 500, function(){
          $(this).html(' - S' + seasonNum + ' EP' + epNum).animate({'opacity': 1}, 500, function(){
            // select 1st video in the list
            Drupal.behaviors.ms_videos.clickThumbnail($firstVideoInEpisode, autoplay);
            Drupal.behaviors.ms_videos.updateGigyaSharebar(0);
          });
        });

        var $thumbnails = $('#thumbnail-list .thumbnail');

        if (!$thumbnails.hasClass('ad')) {
          if ($thumbnails.eq(1)) {
            $thumbnails.eq(1).after($adBlock);
          } else {
            $thumbnails.last().after($adBlock);
          }
          $adBlock.addClass('added').hide();
        }

/*
        if (infoMore.toString() === 'false') {
          if ($thumbnails.length < 11) {
            $('#thumbnail-list .expandable-toggle-wrap').removeClass('active');
            $('#thumbnail-list .expandable-toggle-wrap').removeClass('spoiler');
          }
          else {
            $('#thumbnail-list .expandable-toggle-wrap li').addClass('less').text('close');
            $('#thumbnail-list .expandable-toggle-wrap').removeClass('active').addClass('spoiler');
            $('#thumbnail-list').addClass('expanded');
          }
        }
        else {
          $('#thumbnail-list .expandable-toggle-wrap').removeClass('spoiler').addClass('active');
          $('#thumbnail-list').removeClass('expanded');
        }

        if ($toggler) {
          $toggler.removeClass('processed');
        }
*/
        $thumbnails.unbind('click');
        $thumbnails.bind('click', function (e) {
          e.preventDefault();
          var elem = $(this);
          tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
          Drupal.behaviors.ms_videos.clickThumbnail(elem, autoplay);
        });

        Drupal.behaviors.ms_videos.setActiveThumbnail();

        if (typeof Waypoint != 'undefined') {
          //usa_debug('======== refreshing all waypoints');
          Waypoint.refreshAll();
        }
      });
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

//      self.setPersonRole();

      setTimeout(function(){
        homeSectionHeight = self.getHeightHomeSection();
        if ($('html').hasClass('ie9')) {
          self.showSiteNav();
        }
        else {
          self.setSiteNav();
        }

        // add dropdown menu to must see moments (msm) video filter
        self.addMSMVideoFilterMenuDropdown();

        // put video filter text in <p>
        // this is to allow vertical alignment of single and multiple row text
        self.placeVideoFiltersInParagraphs();

        // designers want the Must See Moments video filter to be
        // second in the list of filters
        self.setVideoFilterOrder();

        // set click on character infographic
        $('#character-infographic a').on('click', function() {
          self.showInfographic();
        });
      }, 500);

      // Remove 'Scene ' from line dot hover hints
      setTimeout(function(){
        $('.timeline-node .timeline-node-desc').each(function(){
          $(this).text($(this).text().replace('Scene ', ''));
        });
      }, 3000);

      // SCROLLING
      $(window).on('scroll', function() {
        if (typeof siteNavPositionTimer == 'undefined') {
          siteNavPositionTimer = setTimeout(function(){
            var position = (window.pageYOffset >= homeSectionHeight) ? 'fixed' : 'relative';
            $('#site-nav').css({'position': position});
            siteNavPositionTimer = clearTimeout(siteNavPositionTimer);
          }, 15);
        }

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
