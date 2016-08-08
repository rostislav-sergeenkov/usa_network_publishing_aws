(function ($) {
  Drupal.behaviors.usanetwork_menu_onnow_tonight = {
    attach: function (context, settings) {

      if (usa_deviceInfo.mobileDevice && !usa_deviceInfo.smartphone) {
        usanetworkMenuGetOTBlockInfo();
      } else {
        usanetworkMenuGetOTBlockInfo();
      }

      function usanetworkMenuGetOTBlockInfo() {
        var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: Drupal.settings.basePath + 'ajax/render-onnow-tonight/' + timezoneOffset,
          success: function (message) {
            var onnowTonightBlock = $('#block-usanetwork-menu-usanetwork-menu-aspot-ot .content');

            if (typeof message.html != undefined) {
              onnowTonightBlock.html(message.html);
              scheduleInit();
            }
          }
        });
      }

      // Init schedule carousel
      function scheduleInit() {
        $('#block-usanetwork-menu-usanetwork-menu-aspot-ot .schedule-buttons a').on('click', scheduleBtnClick);
        $('#block-usanetwork-menu-usanetwork-menu-aspot-ot .schedule-on-tonight a.calendar-reminder').on('click', function (e) {
          e.preventDefault();
        });
        if (window.hasOwnProperty('seeit_remind_plugin')) {
          window.seeit_remind_plugin.init();
        }
      }

      // Changed class schedule carousel
      var scheduleBtnClick = function (e) {
        e.preventDefault();

        var current_class = $(this).attr('data-class');

        $('#block-usanetwork-menu-usanetwork-menu-aspot-ot .schedule-carousel')
            .removeClass('on-tonight on-now')
            .addClass(current_class);
      };
    }
  };

})(jQuery);
