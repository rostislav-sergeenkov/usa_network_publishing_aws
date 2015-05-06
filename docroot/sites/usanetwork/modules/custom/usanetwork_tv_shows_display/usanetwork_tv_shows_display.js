(function ($) {

  // Set settings to promo expandable container
  Drupal.behaviors.show_more_toggle_rows = {
    attach: function(context, settings) {
      if (settings.usanetwork_tv_shows !== undefined && settings.usanetwork_tv_shows.promo_rows !== undefined && !isNaN(settings.usanetwork_tv_shows.promo_rows)) {
        var $container = $('.field-name-field-usa-tv-promo').parents('.expandable-container');
        var options = $container.data('show_more_toggle');
        if (options == undefined) {
          options = {};
        }
        options.display_rows = settings.usanetwork_tv_shows.promo_rows;
        $container.data('show_more_toggle', options);
      }
    }
  };

}(jQuery));
