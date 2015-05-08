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
//usa_debug('========= showSiteNav()');
        $siteNav.css({'opacity': 1}).animate({'max-height': '80px'}, 700, function(){
          if ($(this).hasClass('mobile')) {
            $(this).css({'overflow': 'visible'}); // to allow hamburger hover state to work
          }
        });
        $videoTitle.animate({marginTop: 105}, 700);
        $homeUsaLogo.animate({'opacity': 0}, 700);
      }
    },

    hideSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 1) {
//usa_debug('========= hideSiteNav()');
        $homeUsaLogo.animate({'opacity': 1}, 700);
        $videoTitle.animate({marginTop: 25}, 700);
        $siteNav.css({'overflow': 'hidden'}).animate({'max-height': '0'}, 700, function(){
          $(this).css({'opacity': 0});
        });
      }
    },

    setSiteNav: function() {
//usa_debug('=============== setSiteNavPosition\nyScrollPos: ' + yScrollPos + '\nscrollPosTest: ' + yPos);
      if (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav') || Drupal.behaviors.ms_global.isScrolledIntoView('#home-usa-logo')) {
        Drupal.behaviors.ms_graceland_cu.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_graceland_cu.showSiteNav();
      }
    },

    //scroll to top
    micrositeScrollToTop: function scrollToTop() {
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    // ATTACH
    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          setSiteNavPositionTimer,
          self = this;


      $(document).ready(function(){
        var homeSectionHeight,
            siteNavTimer,
            siteNavPositionTimer,
            scrollTimer
            allAdsLoaded = false;

        setTimeout(function(){
          homeSectionHeight = self.getHeightHomeSection();
          self.setSiteNav();
        }, 500);

        // scrolling
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
            console.log("============ Haven't scrolled in 250ms!");
            if (!allAdsLoaded) {
              allAdsLoaded = true;
              $('#microsite .section').each(function(){
                var sectionId = $(this).attr('id');
                if (sectionId != 'site-nav') {
                  if ($('#' + sectionId + ' .ad-leaderboard').html() == '') {
                    allAdsLoaded = false;
//usa_debug('============= 728x90 ad not loaded yet for #' + sectionId + ', allAdsLoaded: ' + allAdsLoaded);
                    if (Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard')) {
//usa_debug('============ scroll triggered create728x90Ad(' + sectionId + ')');
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
                  }

                  if (sectionId == 'quizzes') {
                    if ($('.dart-name-300x250_ifr_reload_quizzes').html() == '') {
                      allAdsLoaded = false;
//usa_debug('============= 300x250 ad not loaded yet for #' + sectionId + ', allAdsLoaded: ' + allAdsLoaded);
                      if (Drupal.behaviors.ms_global.isScrolledIntoView('.dart-name-300x250_ifr_reload_quizzes')) {
//usa_debug('============ scroll triggered create300x250Ad(' + sectionId + ')');
                        Drupal.behaviors.ms_global.create300x250Ad(sectionId);
                      }
                    }
                  }
                }
              });
            }
          }, 250);

/*
          if (!allAdsLoaded && typeof scrollTimer == 'undefined') {
            scrollTimer = setTimeout(function() {
              allAdsLoaded = true;
              $('#microsite .section').each(function(){
                var sectionId = $(this).attr('id');
                if (sectionId != 'site-nav') {
                  if ($('#' + sectionId + ' .ad-leaderboard').html() == '') {
                    allAdsLoaded = false;
usa_debug('============= 728x90 ad not loaded yet for #' + sectionId + ', allAdsLoaded: ' + allAdsLoaded);
                    if (Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard')) {
usa_debug('============ scroll triggered create728x90Ad(' + sectionId + ')');
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
                  }

                  if (sectionId == 'quizzes') {
                    if ($('.dart-name-300x250_ifr_reload_quizzes').html() == '') {
                      allAdsLoaded = false;
usa_debug('============= 300x250 ad not loaded yet for #' + sectionId + ', allAdsLoaded: ' + allAdsLoaded);
                      if (Drupal.behaviors.ms_global.isScrolledIntoView('.dart-name-300x250_ifr_reload_quizzes')) {
usa_debug('============ scroll triggered create300x250Ad(' + sectionId + ')');
                        Drupal.behaviors.ms_global.create300x250Ad(sectionId);
                      }
                    }
                  }
                }
              });
              scrollTimer = clearTimeout(scrollTimer);
            }, 500);
          }
*/
        });
      });

    }
  }
})(jQuery);
