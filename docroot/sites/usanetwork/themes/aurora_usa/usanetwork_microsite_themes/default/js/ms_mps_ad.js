/**
 * Js functions for microsite mps advert
 */
(function ($) {
  Drupal.behaviors.ms_mpsAd = {
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
