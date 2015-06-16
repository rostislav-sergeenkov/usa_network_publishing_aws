/**
 * @file
 * Autosubmit the file view mode form when it's displayed.
 */

(function ($) {
  Drupal.behaviors.pubWysiwygMediaFormatForm = {
    attach: function (context, settings) {
      Drupal.media.formatForm.submit();
    }
  };

})(jQuery);
