(function ($) {

  var counter = 0;

  Drupal.behaviors.mpsAdvert = {

    loadAd: function(selector, nameAd) {
      // nameAd = sting, example 'topbanner'
      // selector = 'body' || '#selector' || '.selector'
      mps.insertAd(mps._select(selector),nameAd);
    },

    removeAd: function(nameAd) {
      // nameAd = sting, example 'topbanner'
      //var removeslot =  nameAd;
      //mps._remove('#' + mps.adslots[removeslot]);
      //delete(gpt[mps.advars[removeslot]]);
    },

    refreshAd: function(nameAd) {
      mps.refreshAds(nameAd);
    },

    // home pages
    homeShowsQueueInsertAd: function (slide) {
      var showcardad = slide.find('.showcardad'),
          showcardadClass = showcardad.attr('class'),
          selector = '#' + showcardadClass,
          nameAd = showcardadClass;

      showcardad.attr('id', showcardadClass);

      if(counter > 0) {
        Drupal.behaviors.mpsAdvert.refreshAd(nameAd);
      }

      Drupal.behaviors.mpsAdvert.loadAd(selector, nameAd);

      counter = counter + 1;
    },

    homeShowsQueueRemoveAd: function (slide) {
      //var nameAd = slide.find('#showcardad').attr('class');
      //Drupal.behaviors.mpsAdvert.removeAd(nameAd);
      slide.find('#showcardad').removeAttr('id').empty();
    },

    attach: function (context, settings) {


    }
  };
}(jQuery));

