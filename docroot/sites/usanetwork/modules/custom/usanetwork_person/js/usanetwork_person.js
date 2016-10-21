(function ($) {

  Drupal.behaviors.gigya_person = {
    gigyaSharebar: function gigyaSharebar() {
      if (typeof Drupal.gigya != 'undefined') {
        var container = $('.consumptionator-characters-main-block');
        var $sharebar = container.find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {

          var $currentDescription = $('.description-item[data-tab = "character-bio"]').text();
          if ($currentDescription == '' && $('meta[property="og:description"]').length > 0) {
            $currentDescription = $('meta[property="og:description"]').attr('content');
          }
          var $currentImage = container.find('.block-character-info-content .asset-img img');

          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
              sharebar.gigyaSharebar.ua.linkBack = window.location.href;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = $currentImage.attr('data-src-share') ? $currentImage.attr('data-src-share') : $currentImage.attr('src');
              sharebar.gigyaSharebar.ua.description = $currentDescription;
              if (typeof Drupal.gigya.showSharebar == 'function') USAN.initUSAGigya(sharebar);
            }
          });
        }
      }
    },
    attach: function (context, settings) {

      $('body').once(function () {
        Drupal.behaviors.gigya_person.gigyaSharebar()
      })
    }
  }
}(jQuery));
