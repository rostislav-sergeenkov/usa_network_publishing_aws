(function($) {
  Drupal.behaviors.usanetwork_video_live = {
    right_rail: function () {
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
    related_content: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-related/' + timezoneOffset,
        success: function(data) {

          if (typeof data.rendered != 'undefined') {
            $('.consum-related').before(data.rendered);
          }

        },
        error: function () {
          console.info('error');
        }
      });
    },
    attach: function (context, settings) {
      $('body').once(function () {
        Drupal.behaviors.usanetwork_video_live.right_rail();
        Drupal.behaviors.usanetwork_video_live.related_content();
      })
    }
  };
})(jQuery);
