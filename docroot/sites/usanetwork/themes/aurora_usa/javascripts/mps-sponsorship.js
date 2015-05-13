(function ($) {

  Drupal.behaviors.mpsSponsorShip = {

    insertLogo: function (selector, style, fileId) {
      mps.usa.insertLogo(mps._select(selector), style, fileId);
    },

    execShowCard: function (selector, fileId) {
      mps.usa.execShowCard('.showcard-open', '.showcard-open .ad-container', '/node/41');
    },

    // init Sponsored Block for many elements
    initSponsoredBlock: function (block, styleBlock) {
      block.each(function (index, element) {
        var sponsoredBlock = $(element).find('.sponsored');
        console.info('ee');
        if (sponsoredBlock.length) {
          var fileId = sponsoredBlock.data('mpspath');
          Drupal.behaviors.mpsSponsorShip.insertLogo(mps._select(sponsoredBlock), styleBlock, fileId);
        }
      });
    },

    // exec Show Card Sponsored Block
    execSponsoredBlock: function (block) {
      block.each(function (index, element) {
        var sponsoredBlock = $(element).find('.sponsored');
        if (sponsoredBlock.length) {
          var fileId = sponsoredBlock.data('mpspath');
          Drupal.behaviors.mpsSponsorShip.execShowCard(sponsoredBlock,  fileId);
        }
      });
    },

    attach: function (context, settings) {

      var body = $('body');

      // styles Sponsored Block
      var style = {
        bleed: 'bleed',
        dark: 'dark',
        dark_stacked: 'dark-stacked',
        dark_themed: 'dark-themed',
        light: 'light',
        smalldark: 'smalldark'
      };

      // main menu
      Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), style.light);

      // home page
      if (body.hasClass('front')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.featured-carousel li'), style.light);
      }

      // node-type-tv-show
      if (body.hasClass('node-type-tv-show')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .show-aspot .slide'), style.light);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .episodes-list'), style.dark);
      }

      // page-videos
      if (body.hasClass('page-videos')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.carousel-wrapper .carousel-block'), style.dark_stacked);
      }

      // page-file
      if (body.hasClass('page-file')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .nav-bar-tabs'), style.light);
      }
    }
  };
}(jQuery));
