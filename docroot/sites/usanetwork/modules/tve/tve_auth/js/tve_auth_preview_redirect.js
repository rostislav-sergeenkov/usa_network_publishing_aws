var tve_auth_preview_window = false;
(function ($) {
  Drupal.behaviors.tve_auth_preview = {
    attach: function (context, settings) {
      if (tve_auth_preview_window !== false) {
        return;
      }
      var previewStep = Drupal.settings.tveAdminUIPreviewStep;
      if (previewStep) {
        var previewRedirect = Drupal.settings.tveAdminUIPrevieRedirect;
        tve_auth_preview_window = window.open(previewRedirect, '_blank');
      }
    }
  };
})(jQuery);
