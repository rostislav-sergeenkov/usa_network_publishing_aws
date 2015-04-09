/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.microsite_graceland_cu = {

    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    setSiteNavPosition: function() {
      var yScrollPos = window.pageYOffset,
          scrollPosTest = Drupal.behaviors.microsite_graceland_cu.getHeightHomeSection();

      if (yScrollPos > scrollPosTest) {
        $('#site-nav').css({'position': 'fixed'});
      }
      else {
        $('#site-nav').css({'position': 'relative'});
      }
    },

    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      self.setSiteNavPosition();

      $(window).on('scroll', function() {
        self.setSiteNavPosition();
      });

    }
  }
})(jQuery);
