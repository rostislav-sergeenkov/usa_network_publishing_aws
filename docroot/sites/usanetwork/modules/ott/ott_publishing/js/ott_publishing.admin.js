/**
 * @file
 * JS behaviours of TVE Publishing module.
 */

(function ($) {
  /**
   * Provide the summary information for the OTT Publishing vertical tabs.
   */
  Drupal.behaviors.ottPublishingTabSummary = {
    attach: function (context) {
      $('fieldset.ott-publishing-instance', context).each(function (i, el) {
        $(el).drupalSetSummary(function (context) {
          return $(el).find('input[name="published_status"]', context).val();
        });
      });
    }
  };

  /**
   * Monitor form changes and update publishing buttons state accordingly.
   */
  Drupal.behaviors.OttPublishingFormMonitor = {
    attach: function (context) {
      $('.ott-save-publish-button', context).hide();

      var updatePublishingControls = function() {
        if ($('.ott-save-publish-button', context).length) {
          $('.ott-publish-button', context).hide();
          $('.ott-save-publish-button', context).show();
        }

        // One-time serving function did its job.
        updatePublishingControls = function() {};
      };

      if (Drupal.settings.ott_publishing_form_id) {
        $('#' + Drupal.settings.ott_publishing_form_id, context)
          .change(updatePublishingControls)
          .keyup(updatePublishingControls);
      }
    }
  }
})(jQuery);
