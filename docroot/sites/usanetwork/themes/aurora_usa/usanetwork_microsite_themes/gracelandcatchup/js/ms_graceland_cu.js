/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_graceland_cu = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    showSiteNav: function() {
      if ($('#site_nav').hasClass('active')) {
        // do nothing
      }
      else {
//usa_debug('========= showSiteNav(' + homeSectionHeight + ')');
        if (window.pageYOffset >= Drupal.behaviors.ms_graceland_cu.homeSectionHeight) {
          $('#site-nav').addClass('active').css({'position': 'fixed'}).animate({'opacity': 1, 'height': '80px'}, 1000).removeClass('hidden');
        }
        else {
          $('#site-nav').addClass('active').css({'position': 'relative'}).animate({'opacity': 1, 'height': '80px'}, 1000).removeClass('hidden');
        }
      }
    },

    hideSiteNav: function() {
      if ($('#site-nav').hasClass('hidden')) {
        // do nothing
      }
      else {
//usa_debug('========= hideSiteNav()');
        $('#site-nav').addClass('hidden').css({'position': 'relative'}).animate({'opacity': 0, 'height': '0'}, 1000).removeClass('active');
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
        setTimeout(function(){
          self.homeSectionHeight = self.getHeightHomeSection(),
          self.setSiteNav();
        }, 500);

        $(window).on('scroll', function() {
          self.setSiteNav();

          $('#microsite .section').each(function(){
            var sectionId = $(this).attr('id');
            if (sectionId != 'site-nav' && Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard'))
              Drupal.behaviors.ms_global.create728x90Ad(sectionId);
          });
        });
      });

    }
  }
})(jQuery);
