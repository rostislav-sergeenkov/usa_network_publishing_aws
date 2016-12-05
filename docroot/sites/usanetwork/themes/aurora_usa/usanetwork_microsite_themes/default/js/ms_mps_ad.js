/**
 * Js functions for microsite mps advert
 */
(function ($) {
  Drupal.behaviors.ms_mpsAd = {

    // Drupal.behaviors.microsite_scroll.mpsLoadAd(anchor, true);

    getActiveSectionName: function () {
      return $('#sections .section.active').attr('id');
    },

    mpsLoadAd: function (sectionName, reloadAd) {

      var topbanner = 'topbanner',
          topbox = 'topbox';

      initAd($('#' + sectionName + ' .' + topbanner), topbanner);
      initAd($('#' + sectionName + ' .' + topbox), topbox);

      function initAd(adBanner, nameAd) {
        $.each(adBanner, function (index, item) {
          try {
            Drupal.behaviors.ms_mpsAd.loadAd($(item), nameAd, reloadAd);
          } catch (e) {
            usa_debug('error: mps loadAd');
          }
        })
      }
    },

    loadAd: function (block, nameAd, reloadAd) {

      // block = $(elem) - elem for init
      // name = string - topbanner || topbox || etc.
      // reload = boolean - used for mpsMakeRequest

      var $item = $(block);

      nameAd = nameAd || '';
      reloadAd = reloadAd || '';

      try {
        usa_debug('done: load mps ad ' + nameAd);

        if (!reloadAd) {
          Drupal.behaviors.mpsAdvert.mpsLoadAd($item, nameAd);
        } else if (reloadAd) {
          $item.empty();
          Drupal.behaviors.mpsAdvert.mpsMakeRequest();
          Drupal.behaviors.mpsAdvert.mpsLoadAd($item, nameAd);
        }
      } catch (e) {
        usa_debug('error: load mps ad ' + nameAd);
      }

    }
  }
})(jQuery);
