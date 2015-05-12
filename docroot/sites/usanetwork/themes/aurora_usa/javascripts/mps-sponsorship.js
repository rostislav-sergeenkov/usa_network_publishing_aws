(function ($) {

  Drupal.behaviors.mpsSponsorship = {

    // style name for sponsorship
    styleName: {
      bleed: 'bleed',
      light: 'light',
      dark: 'dark',
      smalldark: 'smalldark',
      dark_themed: 'dark-themed',
      dark_stacked: 'dark-stacked'
    },

    insertLogo: function (selector, style, fileId) {
      mps.usa.insertLogo(mps._select(selector), style, fileId);
    },

    execShowCard: function (selector, style, fileId) {
      mps.usa.execShowCard('.showcard-open', '.showcard-open .ad-container', '/node/41');
    },

    attach: function (context, settings) {

      // main menu
      var nodePromo = $('header .full-episodes-list .node-usanetwork-promo');
      nodePromo.each(function (index, element) {
        var sponsoredBlock = $(element).find('.sponsored');
        if(sponsoredBlock.length) {
          var fileId =sponsoredBlock.data('mpspath'),
              style = Drupal.behaviors.mpsSponsorship.styleName.light;

          Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsoredBlock), style, fileId);
        }
      });

      // page-videos
      if($('body').hasClass('page-videos')) {
        var carouselBlock = $('.carousel-wrapper .carousel-block');
        carouselBlock.each(function (index, element) {
          var sponsoredBlock = $(element).find('.sponsored');
          if(sponsoredBlock.length) {
            var fileId =sponsoredBlock.data('mpspath'),
                style = Drupal.behaviors.mpsSponsorship.styleName.dark_stacked;

            Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsoredBlock), style, fileId);
          }
        });
      }
    }
  };
}(jQuery));

