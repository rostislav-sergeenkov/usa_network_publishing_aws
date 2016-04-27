var tve_auth2_preview_window = false;
(function ($) {
  Drupal.behaviors.tve_auth2 = {
    attach: function (context, settings) {
      if (tve_auth2_preview_window !== false) {
        return;
      }
      var previewStep = Drupal.settings.tve_auth2.preview_step;
      if (previewStep) {
        var previewRedirect = Drupal.settings.tve_auth2.preview_url;
        tve_auth_preview_window = window.open(previewRedirect, '_blank');
      }
    }
  };
})(jQuery);
