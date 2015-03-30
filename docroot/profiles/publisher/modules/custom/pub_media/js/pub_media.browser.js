
/**
 * Returns the commonly used options for the dialog.
 */
Drupal.media.popups.getDialogOptions = function () {
  return {
    buttons: {},
    dialogClass: 'media-wrapper',
    modal: true,
    draggable: false,
    resizable: false,
    minWidth: 500,
    width: 860,
    height: 280,
    position: 'center',
    overlay: {
      backgroundColor: '#000000',
      opacity: 0.4
    },
    zIndex: 10000
  };
};

/**
 * Suppress AJAX HTML IDs during beforeSerialize.
 */
var mediaBeforeSerialize = function (element, options) {
  // Explicitly include in options.data only what we need.
  options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
  options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
  if (Drupal.settings.ajaxPageState.jquery_version) {
    options.data['ajax_page_state[jquery_version]'] = Drupal.settings.ajaxPageState.jquery_version;
  }
};

(function ($) {

  Drupal.behaviors.pubmedia_mediabrowser = {
    attach: function (context, settings) {

      // Override beforeSerialize for attach button.
      if (settings.media && settings.media.elements) {
        $.each(settings.media.elements, function (selector) {
          var attachButton = $(selector).find('.attach').first();
          if (attachButton.length > 0) {
            Drupal.ajax[attachButton.attr('id')].beforeSerialize = mediaBeforeSerialize;
          }
        });
      }

      // Override beforeSerialize for remove buttons.
      $('.remove').filter(':input').each(function (index) {
        Drupal.ajax[this.id].beforeSerialize = mediaBeforeSerialize;
      });
    }
  };

})(jQuery);
