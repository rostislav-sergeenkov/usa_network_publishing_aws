(function($) {
  Drupal.behaviors.usanetwork_menu_live_video_header = {
    attach: function (context, settings) {
      usanetworkMenuGetLVHeader();

      function usanetworkMenuGetLVHeader() {
        var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: Drupal.settings.basePath + 'ajax/render-live-video-header/' + timezoneOffset,
          success: function(message) {
            var headerBlock = $("#block-usanetwork-menu-usanetwork-menu-consumptionator .content");

            if (typeof message.html != 'undefined') {
              headerBlock.html(message.html);
            }
          }
        });
      }
    }
  };
})(jQuery);
