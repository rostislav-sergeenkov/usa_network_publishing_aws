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

      if(!block.hasClass('advert-enable')) {
        // block - parent element ".slides li .node-usanetwork-promo"
        var showCarouselItem = '.show-carousel .slides li.',
            fileId = block.data('mpspath'),
            itemParent = block.closest('li'),
            itemParentClass;

        if(itemParent.hasClass('first')) {
          itemParentClass = 0;
        } else {
          itemParentClass = itemParent.attr('class');
        }

        Drupal.behaviors.mpsSponsorShip.execShowCard(showCarouselItem  + itemParentClass + ' .show-info-block-wrapper', showCarouselItem + itemParentClass + ' .advert .showcardad',  fileId);

        block.addClass('advert-enable');
      }
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

      body.once(function () {
        // main menu
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .full-episodes-list .node-usanetwork-promo'), style.dark);

        // home page
        if (body.hasClass('front')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.featured-carousel li'), style.dark);
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#full-bleed-promo'), style.bleed);

          //var itemCarousel = $('#block-usanetwork-home-usanetwork-home-shows-queue .slides > li');
          //
          //itemCarousel.each(function (index, elem) {
          //  var item = $(this),
          //      itemParent,
          //      backgroundItem,
          //      itemAdvert,
          //      fileId = item.find('.node').data('mpspath');
          //
          //  if(item.hasClass('first')) {
          //    itemParent = 0;
          //  } else {
          //    itemParent = item.attr('class');
          //  }
          //
          //  backgroundItem = '#block-usanetwork-home-usanetwork-home-shows-queue .slides li.' + itemParent + ' .show-info-block-wrapper';
          //  itemAdvert = '#block-usanetwork-home-usanetwork-home-shows-queue .slides li.' + itemParent + ' .advert .showcardad';
          //
          //  Drupal.behaviors.mpsSponsorShip.execShowCard(backgroundItem, itemAdvert, fileId);
          //});
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
        if (body.hasClass('page-videos')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('.carousel-wrapper .carousel-block'), style.light_stacked);
        }

        // page-file
        if (body.hasClass('page-file')) {
          Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('header .nav-bar-tabs'), style.dark);
        }
      });
    }
  };
}(jQuery));
