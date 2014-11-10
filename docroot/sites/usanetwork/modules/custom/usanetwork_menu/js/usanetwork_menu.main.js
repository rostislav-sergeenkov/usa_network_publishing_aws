(function($) {
  Drupal.behaviors.usanetwork_menu_main = {
    attach: function (context, settings) {
      usanetworkMenuGetNNBlockInfo();

      function usanetworkMenuGetNNBlockInfo() {
        var periods = 'now,next';
        var timezoneOffset = new Date().getTimezoneOffset() * 60;

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: 'ajax/render-running-show/' + timezoneOffset + '/' + periods,
          success: function(message) {
            var nowNextBlock = $('.pane-usanetwork-menu-usanetwork-menu-sm-now-and-next');
console.log(message);
            if (typeof message.html != undefined) {
              nowNextBlock.html(message.html);
            }
          }
        });
      }
    }
  };
})(jQuery);
