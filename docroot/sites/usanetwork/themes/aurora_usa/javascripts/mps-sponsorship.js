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
          sponsoredBlock.addClass('active');
          Drupal.behaviors.mpsSponsorShip.insertLogo(mps._select(sponsoredBlock), styleBlock, fileId);
        }
      });
    },

    // exec Show Card Sponsored Block
    execSponsoredBlock: function (block) {

      if(!$(block).hasClass('advert-enable')) {
        // block - parent element ".slides li .node-usanetwork-promo"
        var showCarouselItem = '.show-carousel .usa-carousel-left li.slide-',
            fileId = block.data('mpspath'),
            itemParent = block.closest('li'),
            itemParentClass = itemParent.data('slide-id');

        Drupal.behaviors.mpsSponsorShip.execShowCard(showCarouselItem + itemParentClass + ' .show-info-block-wrapper', showCarouselItem + itemParentClass + ' .advert .showcardad',  fileId);

        block.addClass('advert-enable');
      }
    },

    // remove exec Show Card Sponsored Block
    removeExecSponsoredBlock: function (block) {
      //block.find('.show-info-block-wrapper').removeAttr('style');
      //block.find('.advert .showcardad').empty();
    },

    attach: function (context, settings) {

      //init sponsored in for tab full-episodes-list in menu-dropdown.js line 142
      //init sponsored for ajax content mid-banner in mps-advert.js line 78

      var body = $('body');

      // styles Sponsored Block
      var style = {
        bleed: 'bleed',
        dark: 'dark',
        darkMenu: 'dark-menu',
        light: 'light',
        light_stacked: 'light-stacked'
      };

      body.once(function () {
        // main menu
        //Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), style.dark);

        // home page
        if (body.hasClass('front')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#block-usanetwork-aspot-usanetwork-aspot-carousel .slide'), style.dark);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.featured-carousel li'), style.dark);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#full-bleed-promo'), style.bleed);
        }

        // node-type-tv-show
        if (body.hasClass('node-type-tv-show')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .show-aspot .slide'), style.dark);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .episodes-list'), style.light);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#full-bleed-promo'), style.bleed);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.pane-usanetwork-tv-shows-usanetwork-tv-shows-best-of .node-usanetwork-promo'), style.dark);
        }

        // ajax-load-block
        if ($('.ajax-load-block').length > 0) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.ajax-load-block .node-usanetwork-promo'), style.dark);
        }

        // page-videos
        // used in global-carousels.js 
        // if (body.hasClass('page-videos')) {
        //   Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.carousel-wrapper .carousel-block'), style.light_stacked);
        // }

        // consumptionators pages
        if (body.hasClass('consumptionator-page')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .nav-bar-tabs'), style.dark);
        }
      });
    }
  };
}(jQuery));
