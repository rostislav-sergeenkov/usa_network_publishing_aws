(function ($) {

  Drupal.behaviors.mpsSponsorShip = {

    insertLogo: function (selector, style, fileId) {
      mps.usa.insertLogo(mps._select(selector), style, fileId);
    },

    execShowCard: function (selector, selectorAd, fileId) {
      //mps.usa.execShowCard('.showcard-open', '.showcard-open .ad-container', '/node/41');
      mps.usa.execShowCard(selector, selectorAd, fileId);
    },

    // init Sponsored Block for many elements
    initSponsoredBlock: function (block, styleBlock) {
      block.each(function (index, element) {
        var sponsoredBlock = $(element).find('.sponsored');
        if (sponsoredBlock.length) {
          var fileId = sponsoredBlock.data('mpspath');
          Drupal.behaviors.mpsSponsorShip.insertLogo(mps._select(sponsoredBlock), styleBlock, fileId);
        }
      });
    },

    // exec Show Card Sponsored Block
    execSponsoredBlock: function (block) {

      // block - parent element ".slides li .node-usanetwork-promo"
      var showCarouselItem = '.show-carousel .slides li.active',
          fileId = block.data('mpspath');

      Drupal.behaviors.mpsSponsorShip.execShowCard(showCarouselItem  + ' .show-info-block-wrapper', showCarouselItem + ' .advert .showcardad',  fileId);
    },

    // remove exec Show Card Sponsored Block
    removeExecSponsoredBlock: function (block) {
      //block.find('.show-info-block-wrapper').removeAttr('style');
      //block.find('.advert .showcardad').empty();
    },

    attach: function (context, settings) {

      var body = $('body');

      // styles Sponsored Block
      var style = {
        bleed: 'bleed',
        dark: 'dark',
        light: 'light',
        light_stacked: 'light-stacked'
      };

      // main menu
      Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), style.dark);

      // home page
      if (body.hasClass('front')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.featured-carousel li'), style.dark);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#full-bleed-promo'), style.bleed);
      }

      // node-type-tv-show
      if (body.hasClass('node-type-tv-show')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .show-aspot .slide'), style.dark);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .episodes-list'), style.light);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#full-bleed-promo'), style.bleed);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.pane-usanetwork-tv-shows-usanetwork-tv-shows-best-of .node-usanetwork-promo'), style.dark);
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.pane-usanetwork-tv-shows-usanetwork-tv-shows-related .node-usanetwork-promo'), style.dark);
      }

      // page-videos
      if (body.hasClass('page-videos')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.carousel-wrapper .carousel-block'), style.light_stacked);
      }

      // page-file
      if (body.hasClass('page-file')) {
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .nav-bar-tabs'), style.dark);
      }
    }
  };
}(jQuery));
