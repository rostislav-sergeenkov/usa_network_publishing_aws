(function ($) {

  Drupal.behaviors.gigya_person = {
    gigyaSharebar: function gigyaSharebar() {
      if (typeof Drupal.gigya != 'undefined') {
        var container = $('.consumptionator-characters-main-block');
        var $sharebarsId = [];
        container.find('.field-name-field-gigya-share-bar > div').each(function(){
          $sharebarsId.push($(this).attr('id'));
        });
        if ($sharebarsId.length > 0) {
          var $currentDescription = $('.description-item[data-tab = "character-bio"]').text();
          if ($currentDescription == '' && $('meta[property="og:description"]').length > 0) {
            $currentDescription = $('meta[property="og:description"]').attr('content');
          }
          var $imageContainer = container.find('.block-character-info-content .asset-img'),
              $currentImageUrl = $imageContainer.find('div[data-media]').attr('data-src')? $imageContainer.find('div[data-media]').attr('data-src'): $('meta[property="og:image"]');

          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if ($sharebarsId.indexOf(sharebar.gigyaSharebar.containerID) != -1) {
              sharebar.gigyaSharebar.ua.linkBack = window.location.href;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = $currentImageUrl;
              sharebar.gigyaSharebar.ua.description = $currentDescription;
              if (typeof Drupal.gigya.showSharebar == 'function') USAN.initUSAGigya(sharebar);
            }
          });
        }
      }
    },
    attach: function (context, settings) {

      $('body').once(function () {
        Drupal.behaviors.gigya_person.gigyaSharebar();
      })
    }
  }
}(jQuery));
