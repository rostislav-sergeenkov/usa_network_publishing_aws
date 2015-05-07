(function ($) {

  var counter = 0;

  Drupal.behaviors.mpsAdvert = {

    mpsLoadAd: function(selector, nameAd) {
      // nameAd = sting, example 'topbanner'
      // selector = 'body' || '#selector' || '.selector'
      mps.insertAd(mps._select(selector),nameAd);
    },

    mpsRemoveAd: function(nameAd) {
      // nameAd = sting, example 'topbanner'
      //var removeslot =  nameAd;
      //mps._remove('#' + mps.adslots[removeslot]);
      //delete(gpt[mps.advars[removeslot]]);
    },

    mpsRefreshAd: function(nameAd) {
      mps.refreshAds(nameAd);
    },

    mpsMakeRequest: function () {
      mps.makeRequest('more');
    },

    mpsResponsive: function () {
      mps.responsiveApply();
    },

    // home pages
    homeShowsQueueInsertAd: function (slide) {
      var showcardad = slide.find('.showcardad'),
          showcardadClass = showcardad.attr('class'),
          selector = '#' + showcardadClass,
          nameAd = showcardadClass;

      showcardad.attr('id', showcardadClass);

      if(counter > 0) {
        Drupal.behaviors.mpsAdvert.mpsMakeRequest();
      }

      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);

      counter = counter + 1;
    },

    homeShowsQueueRemoveAd: function (slide) {
      slide.find('#showcardad').removeAttr('id').empty();
    },

    // show page
    showLatestBlock: function (data) {
      var blockAd = $('.show-latest-block').find('.midbanner').last(),
          blockAdClass = blockAd.attr('class'),
          blockAdId = blockAdClass + '-' + counter,
          selector = '#' + blockAdId;

      blockAd.attr('id', blockAdId);

      if(counter > 0) {
        Drupal.behaviors.mpsAdvert.mpsMakeRequest();
      }

      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, blockAdClass);
      counter = counter + 1;
    },
    attach: function (context, settings) {

      //Drupal.behaviors.mpsAdvert.mpsResponsive();


      //$(window).resize(function () {
      //  if(window.innerWidth >= window_size_tablet) {
      //    Drupal.behaviors.mpsAdvert.mpsRefreshAd('topbanner');
      //    Drupal.behaviors.mpsAdvert.mpsRefreshAd('midbanner');
      //  }
      //})
    }
  };
}(jQuery));

