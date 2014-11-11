(function($) {
  Drupal.behaviors.usanetwork_menu_watch_live = {
    attach: function (context, settings) {
      usanetworkMenuGetWLBlockInfo();

      function usanetworkMenuGetWLBlockInfo() {
        var periods = 'now';
        var timezoneOffset = new Date().getTimezoneOffset() * 60;

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: 'ajax/render-watch-live/' + timezoneOffset,
          success: function(message) {
            var watchNowBlock = $('.pane-usanetwork-menu-usanetwork-menu-sm-watch-live .pane-content');

            if (typeof message.html != undefined) {
              watchNowBlock.html(message.html);
            }
          }
        });
      }
    }
  };
})(jQuery);
