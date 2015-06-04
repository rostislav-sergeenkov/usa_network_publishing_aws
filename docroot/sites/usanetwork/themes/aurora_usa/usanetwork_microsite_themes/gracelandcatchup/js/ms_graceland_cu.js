/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_graceland_cu = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    showSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 0) {
        $siteNav.css({'opacity': 1}).animate({'max-height': '70px'}, 700, function(){
          if ($(this).hasClass('mobile')) {
            $(this).css({'overflow': 'visible'}); // to allow hamburger hover state to work
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
          $(this).css({'opacity': 0});
        });
      }
    },

    setSiteNav: function() {
      if (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav') || Drupal.behaviors.ms_global.isScrolledIntoView('#home-usa-logo')) {
        Drupal.behaviors.ms_graceland_cu.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_graceland_cu.showSiteNav();
      }
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

      setTimeout(function(){
        homeSectionHeight = self.getHeightHomeSection();
        self.setSiteNav();
      }, 500);


      // SCROLLING
      $(window).on('scroll', function() {
        if (typeof siteNavPositionTimer == 'undefined') {
          siteNavPositionTimer = setTimeout(function(){
            var position = (window.pageYOffset >= homeSectionHeight) ? 'fixed' : 'relative';
            $('#site-nav').css({'position': position});
            siteNavPositionTimer = clearTimeout(siteNavPositionTimer);
          }, 15);
        }

        if (typeof siteNavTimer == 'undefined') {
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
