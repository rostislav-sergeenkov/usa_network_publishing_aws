/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.microsite_graceland_cu = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    setSiteNavPosition: function(yPos) {
      var yScrollPos = window.pageYOffset;
//usa_debug('=============== setSiteNavPosition\nyScrollPos: ' + yScrollPos + '\nscrollPosTest: ' + yPos);
      if (yScrollPos >= yPos) {
        $('#site-nav').css({'position': 'fixed'}).animate({'opacity': 1, 'height': '80px'}, 300);
      }
      else {
        $('#site-nav').css({'position': 'relative'}).animate({'opacity': 0, 'height': '0px'}, 300);
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
        self.yPos = self.getHeightHomeSection(),
        self.setSiteNavPosition(self.yPos);

        $(window).on('scroll', function() {
//           clearTimeout(self.setSiteNavPositionTimer);
//           self.setSiteNavPositionTimer = setTimeout(function() {
            self.setSiteNavPosition(self.yPos);
//          }, 100);
        });
      });

    }
  }
})(jQuery);
