(function ($) {

  var counter = 0;

  Drupal.behaviors.mpsAdvert = {

    mpsNameAD: {
        topbanner: 'topbanner',
        midbanner: 'midbanner',
        topbox: 'topbox',
        showcardad: 'showcardad'
    },

    // MPS events
    // selector = 'body' || '#selector' || '.selector'

    mpsLoadAd: function (selector, nameAd) {
      mps.insertAd(mps._select(selector), nameAd);
    },

    mpsRemoveAd: function (nameAd) {
      var removeslot =  nameAd;
      mps._remove('#' + mps.adslots[removeslot]);
      delete(gpt[mps.advars[removeslot]]);
    },

    mpsRefreshAd: function (nameAd) {
      mps.refreshAds(nameAd);
    },

    mpsMakeRequest: function () {
      mps.makeRequest('more');
    },

    mpsResponsive: function () {
      mps.responsiveApply();
    },

    //--------------------------------------//

    // home pages
    homeShowsQueueInsertAd: function (slide) {
      var showcardad = slide.find('.showcardad'),
          showcardadClass = showcardad.attr('class'),
          selector = '#' + showcardadClass,
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.showcardad;

      showcardad.attr('id', showcardadClass);

      if (counter > 0) {
        Drupal.behaviors.mpsAdvert.mpsMakeRequest();
      }
      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
      counter = counter + 1;
    },

    homeShowsQueueRemoveAd: function (slide) {
      slide.find('#showcardad').removeAttr('id').empty();
    },

    // ajax load blocks RELATED CONTENT
    ajaxLoadBlock: function () {
      var blockAd = $('.ajax-load-block .midbanner').last(),
          blockAdClass = blockAd.attr('class'),
          blockAdId = blockAd.attr('id'),
          selector = '#' + blockAdId,
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.midbanner;

      blockAd.attr('id', blockAdId);
      if (counter > 0) {
        Drupal.behaviors.mpsAdvert.mpsMakeRequest();
      }
      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
      counter = counter + 1;
    },

    // consum-sidebar
    consumSidebar: function () {
      var consumSidebarAd = $('.consum-sidebar .advertisement').attr('class'),
          selector = '.' + consumSidebarAd,
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.topbox;

      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
    },

    attach: function (context, settings) {
      // init ad
      Drupal.behaviors.mpsAdvert.consumSidebar();
    }
  };
}(jQuery));

