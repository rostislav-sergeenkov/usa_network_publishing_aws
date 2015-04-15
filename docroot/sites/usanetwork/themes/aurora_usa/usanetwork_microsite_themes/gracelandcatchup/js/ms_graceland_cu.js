/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_graceland_cu = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    showSiteNav: function() {
      var $siteNav = $('#site-nav');
      if ($siteNav.css('opacity') == 0) {
//usa_debug('========= showSiteNav()');
        $siteNav.css({'opacity': 1}).animate({'max-height': '80px'}, 700);
      }
    },

    hideSiteNav: function() {
      var $siteNav = $('#site-nav');
      if ($siteNav.css('opacity') == 1) {
//usa_debug('========= hideSiteNav()');
        $siteNav.animate({'max-height': '0'}, 700, function(){
          $(this).css({'opacity': 0});
        });
      }
    },

    setSiteNav: function() {
//usa_debug('=============== setSiteNavPosition\nyScrollPos: ' + yScrollPos + '\nscrollPosTest: ' + yPos);
      if (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav')) {
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
            scrollTimer;
        setTimeout(function(){
          homeSectionHeight = self.getHeightHomeSection();
          self.setSiteNav();
        }, 500);

        $(window).on('scroll', function() {
          if (typeof siteNavPositionTimer == 'undefined') {
            siteNavPositionTimer = setTimeout(function(){
              var position = (window.pageYOffset >= homeSectionHeight) ? 'fixed' : 'relative';
              $('#site-nav').css({'position': position});
              siteNavPositionTimer = clearTimeout(siteNavPositionTimer);
            }, 20);
          }

          if (typeof siteNavTimer == 'undefined') {
            siteNavTimer = setTimeout(function(){
              self.setSiteNav();
              siteNavTimer = clearTimeout(siteNavTimer);
            }, 200);
          }

          if (typeof scrollTimer == 'undefined') {
            scrollTimer = setTimeout(function() {

             $('#microsite .section').each(function(){
                var sectionId = $(this).attr('id');
                if (sectionId != 'site-nav' && Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard'))
                  Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                  scrollTimer = clearTimeout(scrollTimer);
              });
            }, 500);
          }
        });
      });

    }
  }
})(jQuery);
