(function ($) {
  Drupal.behaviors.mpsAdvert = {

    addAd: function(selector, nameAd) {
      // nameAd = sting, example 'topbanner'
      // selector = 'body' || '#selector' || '.selector'
      mps.insertAd(mps._select(selector),nameAd);
    },

    //removeAd: function(nameAd) {
    //  // nameAd = sting, example 'topbanner'
    //  var removeslot =  nameAd;
    //  mps._remove('#' + mps.adslots[removeslot]);
    //  delete(gpt[mps.advars[removeslot]]);
    //},

    refreshAd: function(nameAd) {
      //mps.refreshAds(nameAd);
      //mps.refreshAds(nameAd);
      mps.refreshAds(nameAd, 0);
    },

    homeShowsQueue: function() {

      var homeShowQueue = $('#block-usanetwork-home-usanetwork-home-shows-queue'),
          slides = homeShowQueue.find('.slides'),
          showPromo = homeShowQueue.find('.node-usanetwork-promo'),
          showOpenButton = showPromo.find('.show-open'),
          showCloseButton = showPromo.find('.close-button'),
          counter = 0;

      showOpenButton.click(function () {

        setTimeout(function() {
          if(homeShowQueue.find('.node-usanetwork-promo.open')) {
            var showPromoActive = homeShowQueue.find('.node-usanetwork-promo.open'),
                showcardad = showPromoActive.find('.showcardad'),
                showcardadClass = showcardad.attr('class'),
                selector = '#' + showcardadClass,
                nameAd = showcardadClass;

            showcardad.attr('id', showcardadClass);

            if(counter > 0) {
              Drupal.behaviors.mpsAdvert.refreshAd(nameAd);
            }

            Drupal.behaviors.mpsAdvert.addAd(selector, nameAd);
            counter = counter + 1;
          }
        }, 600);
      });

      showCloseButton.click(function () {
        setTimeout(function() {
          if(showPromo.find('#showcardad')) {
            var nameAd = showPromo.find('#showcardad').attr('class');
            //Drupal.behaviors.mpsAdvert.removeAd(nameAd);
            showPromo.find('#showcardad').removeAttr('id').empty();
          }
        }, 500);

      });
    },

    attach: function (context, settings) {

      var body = $('body');

      $(window).load(function () {
        // home page shows queue
        if(body.hasClass('front')) {
          Drupal.behaviors.mpsAdvert.homeShowsQueue();
        }
      });

    }
  };
}(jQuery));

