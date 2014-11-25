(function($) {
  Drupal.behaviors.usanetwork_menu_onnow_tonight = {
    attach: function (context, settings) {
      usanetworkMenuGetOTBlockInfo();

      function usanetworkMenuGetOTBlockInfo() {
        var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          data: {},
          url: 'ajax/render-onnow-tonight/' + timezoneOffset,
          success: function(message) {
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
        $('.schedule-carousel').carouFredSel({
          auto: false,
          circular: false,
          infinite: false,
          direction: "left",
          prev: $('.schedule-on-tonight').find('.schedule-buttons .on-now'),
          next: $('.schedule-on-tonight').find('.schedule-buttons .on-tonight'),
          responsive: true,
          items: {
            visible: 1,
            start: $('.schedule-block .on-tonight')
          },
          scroll: {
            items: 1,
            duration: 300,
            pauseOnHover: true
          }
        });
      }

      // Changed class schedule carousel
      $(".schedule-buttons a").click(function (e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
          var current_class = $(this).attr('data-class');

          $(".schedule-buttons a").removeClass('active');
          $(this).parent().removeClass('on-tonight on-now');
          $(this).parent().addClass(current_class);
          $(this).addClass('active');
        }
      });
    }
  };
})(jQuery);
