(function($) {
  Drupal.behaviors.usanetwork_menu_now_and_next = {
    attach: function (context, settings) {
      usanetworkMenuGetNNBlockInfo();

      function usanetworkMenuGetNNBlockInfo() {
        var periods = 'now,next';
        var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: Drupal.settings.basePath + 'ajax/render-running-show/' + timezoneOffset + '/' + periods,
          success: function(message) {
            var nowNextBlock = $('.pane-usanetwork-menu-usanetwork-menu-sm-now-and-next .pane-content');

            if (typeof message.html != undefined) {
              nowNextBlock.html(message.html);

              var trackingObject = Drupal.behaviors.omniture_tracking;

              if (typeof trackingObject != 'undefined') {
                trackingObject.attach(context, settings);
              }
            }
          }
        });
      }
    }
  };
})(jQuery);
