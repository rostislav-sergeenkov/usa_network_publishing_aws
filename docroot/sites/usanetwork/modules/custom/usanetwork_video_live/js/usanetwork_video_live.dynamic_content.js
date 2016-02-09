(function($) {
  Drupal.behaviors.usanetwork_video_live_right_rail = {
    init: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-right-rail/' + timezoneOffset,
        success: function(data) {

          if (typeof data.rendered != 'undefined') {
            $('.right-rail').before(data.rendered);
          }

        },
        error: function () {
          console.info('error');
        }
      });
    },
    attach: function (context, settings) {
      $('body').once(function () {
        Drupal.behaviors.usanetwork_video_live_right_rail.init();
        //Drupal.behaviors.usanetwork_video_live_related_content.init();
      })
    }
  };
})(jQuery);
