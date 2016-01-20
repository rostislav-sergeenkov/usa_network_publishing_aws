(function ($) {

  var counter = 0;
  Drupal.behaviors.mpsAdvert = {

    mpsNameAD: {
        topbanner: 'topbanner',
        midbanner: 'midbanner',
        topbox: 'topbox',
        showcardad: 'showcardad',
        galleryadrepeat: 'galleryadrepeat'
    },

    // MPS events
    // selector = 'body' || '#selector' || '.selector'

    mpsLoadAd: function (selector, nameAd) {
      if (typeof mps.insertAd === "function") {
        mps.insertAd(mps._select(selector), nameAd);
      } else {
        usa_debug('mps.insertAd error');
      }
    },

    mpsRemoveAd: function (nameAd) {
      if (typeof mps._remove === "function") {
        mps._remove('#' + mps.adslots[nameAd]);
        delete(gpt[mps.advars[nameAd]]);
      } else {
        usa_debug('mps._remove error');
      }
    },

    mpsInsertInterstitial: function (selector) {
      if (typeof mps.usa.insertInterstitial === "function") {
        usa_debug('mps.usa.insertInterstitial init');
        mps.usa.insertInterstitial(selector);
      } else {
        usa_debug('mps.usa.insertInterstitial error');
      }
    },

    mpsRefreshAd: function (nameAd) {
      if (typeof mps.refreshAds === "function") {
        mps.refreshAds(nameAd);
      } else {
        usa_debug('mps.refreshAds error');
      }
    },

    mpsMakeRequest: function () {
      if (typeof mps.makeRequest === "function") {
        mps.makeRequest('more');
      } else {
        usa_debug('mps.makeRequest error');
      }
    },

    mpsResponsive: function () {
      if (typeof mps.responsiveApply === "function") {
        mps.responsiveApply();
      } else {
        usa_debug('mps.responsiveApply error');
      }
    },
    //--------------------------------------//

    // home pages
    homeShowsQueueInsertAd: function (slide) {
      var showcardad = slide.find('.showcardad'),
          showcardadClass = showcardad.attr('class'),
          selector = '#' + showcardadClass,
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.showcardad;

      showcardad.attr('id', showcardadClass);

      if(counter > 0){

      }
      Drupal.behaviors.mpsAdvert.mpsMakeRequest();
      Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
      counter = counter + 1;
    },

    homeShowsQueueRemoveAd: function (slide) {
      slide.find('#showcardad').removeAttr('id').empty();
    },

    // ajax load blocks RELATED CONTENT
    ajaxLoadBlock: function () {
      var blockAd = $('.ajax-load-block .midbanner').last(),
          blockAdId = blockAd.attr('id'),
          selector = '#' + blockAdId,
          nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.midbanner;

      if(blockAd.find('.mps-slot').length > 0) {
        return false;
      } else {

        var lastList = $('.ajax-load-block ul').last(),
            listElem = lastList.find('.node-usanetwork-promo');

        Drupal.behaviors.mpsAdvert.mpsMakeRequest();
        Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);

        // init sponsored for ajax content mid-banner
        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock(listElem, 'dark');
      }
    },

    consumptionatorChangeAd: function (mainBlock, infoBlock) {
      var infoBlockAd = infoBlock.find('.advert .topbox'),
          sidebarAd = $('.consum-sidebar .advert .topbox'),
          nameAd = 'topbox',
          selector = '#' + nameAd;

      if(window.matchMedia("(min-width: " + window_size_tablet + "px)").matches) {
        sidebarAd.attr('id', nameAd);
        Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
      } else {
        mainBlock.addClass('mobile');
        infoBlockAd.attr('id', nameAd);
        Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
      }

      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          if(window.matchMedia("(min-width: " + window_size_tablet + "px)").matches && mainBlock.hasClass('mobile')) {

            mainBlock.removeClass('mobile');
            sidebarAd.attr('id', nameAd);
            infoBlockAd.removeAttr('id').empty();

            Drupal.behaviors.mpsAdvert.mpsMakeRequest();
            Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);

          } else if(window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches && !mainBlock.hasClass('mobile')){

            mainBlock.addClass('mobile');
            infoBlockAd.attr('id', nameAd);
            sidebarAd.removeAttr('id').empty();

            Drupal.behaviors.mpsAdvert.mpsMakeRequest();
            Drupal.behaviors.mpsAdvert.mpsLoadAd(selector, nameAd);
          }
        }, 0, "ad change");
      });
    },

    attach: function (context, settings) {

      var body = $('body');

      //$(window).bind('resize', function () {
      //  waitForFinalEvent(function(){
      //    self.micrositeReloadBxSlider();
      //  }, 500, "home Cast & Crew gallery");
      //});

      body.once(function () {
        // init mps block for node-type-person
        var mainBlock, infoBlock;

        if(body.hasClass('node-type-person')) {

           mainBlock = $('.consumptionator-characters-main-block');
           infoBlock = $('.character-info-block .block-character-info-content');

          Drupal.behaviors.mpsAdvert.consumptionatorChangeAd(mainBlock, infoBlock);
        }

        // init mps block for node-type-tv-episode
        if(body.hasClass('node-type-tv-episode')) {

          mainBlock = $('.consumptionator-episode-main-block');
          infoBlock = $('.episode-info-main-block');

          Drupal.behaviors.mpsAdvert.consumptionatorChangeAd(mainBlock, infoBlock);
        }

        // init mps block for node-type-quiz
        if(body.hasClass('node-type-quiz')) {

          mainBlock = $('#block-usanetwork-quiz-usanetwork-quiz-main');
          infoBlock = $('.consumptionator-quiz-main-block article.node-quiz');

          Drupal.behaviors.mpsAdvert.consumptionatorChangeAd(mainBlock, infoBlock);
        }

        // init mps block for node-type-consumpt-post
        if(body.hasClass('node-type-consumpt-post')) {

          mainBlock = $('.consumptionator-post-main-block');
          infoBlock = $('.post-info-main-block');

          Drupal.behaviors.mpsAdvert.consumptionatorChangeAd(mainBlock, infoBlock);
        }

        // init mps block for node-type-catchall-page
        if(body.hasClass('node-type-catchall-page')) {
          if(settings.CatchallRefreshSettings) {

            var interval = settings.CatchallRefreshSettings.time * 1000;

            setInterval(function() {
              Drupal.behaviors.mpsAdvert.mpsRefreshAd(Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner);
            }, interval);
          }
        }
      });
    }
  };
}(jQuery));

