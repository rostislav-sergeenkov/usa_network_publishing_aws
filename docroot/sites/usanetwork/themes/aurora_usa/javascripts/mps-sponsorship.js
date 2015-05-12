(function ($) {

  Drupal.behaviors.mpsSponsorship = {

    // style name for sponsorship
    styleName: {
      bleed: 'bleed',
      dark: 'dark',
      dark_stacked: 'dark-stacked',
      dark_themed: 'dark-themed',
      light: 'light',
      smalldark: 'smalldark'
    },

    insertLogo: function (selector, style, fileId) {
      mps.usa.insertLogo(mps._select(selector), style, fileId);
    },

    execShowCard: function (selector, style, fileId) {
      mps.usa.execShowCard('.showcard-open', '.showcard-open .ad-container', '/node/41');
    },

    attach: function (context, settings) {

      var body = $('body');

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

      // node-type-tv-show
      if(body.hasClass('node-type-tv-show')) {

        var aspotBlock = $('#main-slider .show-aspot'),
            episodesListBlock = $('#main-slider .episodes-list');

        aspotBlock.each(function (index, element) {

          var sponsoredBlock = $(element).find('.sponsored');

          if(sponsoredBlock.length) {

            var fileId =sponsoredBlock.data('mpspath'),
                style = Drupal.behaviors.mpsSponsorship.styleName.light;

            Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsoredBlock), style, fileId);
          }
        });

        episodesListBlock.each(function (index, element) {

          var sponsoredBlock = $(element).find('.sponsored');

          if(sponsoredBlock.length) {

            var fileId =sponsoredBlock.data('mpspath'),
                style = Drupal.behaviors.mpsSponsorship.styleName.dark;

            Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsoredBlock), style, fileId);
          }
        });
      };

      // page-videos
      if(body.hasClass('page-videos')) {

        var carouselBlock = $('.carousel-wrapper .carousel-block');

        carouselBlock.each(function (index, element) {

          var sponsoredBlock = $(element).find('.sponsored');

          if(sponsoredBlock.length) {
            var fileId =sponsoredBlock.data('mpspath'),
                style = Drupal.behaviors.mpsSponsorship.styleName.dark_stacked;

            Drupal.behaviors.mpsSponsorship.insertLogo(mps._select(sponsoredBlock), style, fileId);
          }
        });
      };
    }
  };
}(jQuery));

