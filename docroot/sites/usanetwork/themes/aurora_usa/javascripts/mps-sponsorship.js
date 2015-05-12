(function ($) {

  Drupal.behaviors.mpsSponsorship = {

    // style name sponsorship
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
        var sponsor = $(element).find('.sponsored');
        if(sponsor.length) {
          var fileId =sponsor.data('mpspath'),
              style = Drupal.behaviors.mpsSponsorship.styleName.dark_stacked;

          Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsor), style, fileId);
        }
      });

      // page-videos
      if($('.page-videos')) {
        var carouselBlock = $('.carousel-wrapper .carousel-block');
        carouselBlock.each(function (index, element) {
          var sponsor = $(element).find('.sponsored');
          if(sponsor.length) {
            var fileId =sponsor.data('mpspath'),
                style = Drupal.behaviors.mpsSponsorship.styleName.dark_stacked;

            Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsor), style, fileId);
          }
        });
      }
    }
  };
}(jQuery));

