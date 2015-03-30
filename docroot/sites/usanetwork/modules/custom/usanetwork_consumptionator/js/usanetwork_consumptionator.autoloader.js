(function ($) {
  Drupal.behaviors.usanetwork_consumptionator_autoloader = {
    attach: function (context, settings) {
      $('#consumptionator').on('click', '.more-bottom-button', function() {
        consumptionatorGetContentAjax();
      });

      function consumptionatorGetContentAjax() {
        if (typeof Drupal.settings.consumptionatorDynamicData.start_from == 'undefined') {
          Drupal.settings.consumptionatorDynamicData.start_from = 0;
        }
        if (typeof Drupal.settings.consumptionatorDynamicData.limit == 'undefined') {
          Drupal.settings.consumptionatorDynamicData.limit = 6;
        }

        Drupal.settings.consumptionatorDynamicData.start_from += Drupal.settings.consumptionatorDynamicData.limit;

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: Drupal.settings.basePath + 'ajax/consumptionator/get-full-items/' +
            + Drupal.settings.consumptionatorDynamicData.show_nid + '?start_from=' +
            + Drupal.settings.consumptionatorDynamicData.start_from + '&limit=' +
            + Drupal.settings.consumptionatorDynamicData.limit,
          beforeSend: function() {
            $('.more-bottom-button').html('Please wait');
          },
          success: function(message) {
            if (typeof message.related != 'undefined' && typeof message.ymal != 'undefined') {
              $('.more-bottom-button').remove();
              var consumptionatorAdditionalContent = '<div class="consumptionator-content-block">' + message.related + message.ymal + '</div>';

              $('#consumptionator #main').append(consumptionatorAdditionalContent);
              $('#consumptionator #main').append('<a class="more-bottom-button">LOAD MORE</a>');
            }
          }
        });
      }
    }
  }
})(jQuery);
