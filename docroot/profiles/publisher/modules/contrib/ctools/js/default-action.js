/**
 * @file
 * Helper to allow specifying the default form action.
 *
 * Taken almost verbatim from http://cgit.drupalcode.org/default_submit/tree/default_submit.js?h=7.x-1.x
 */

(function ($) {
  /**
   * When the enter key is pressed in an input or select element, find the
   * default submit button and trigger the click event on it.
   */
  Drupal.behaviors.CToolsDefaultAction = {
    attach: function(context) {
      $("form input, form select", context).keydown(function (e) {
        var defaultSubmitAction = $(this).parents('form').find('button[type=submit].ctools-default-action, input[type=submit].ctools-default-action');
        if (defaultSubmitAction.length > 0) {
          if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            defaultSubmitAction.click();
            e.preventDefault();
          }
        }
      });
    }
  };
})(jQuery);
