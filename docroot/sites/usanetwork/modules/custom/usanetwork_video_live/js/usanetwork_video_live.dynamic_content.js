(function($) {
  Drupal.behaviors.usanetwork_video_live = {
    right_rail: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-right-rail/' + timezoneOffset,
        success: function(data) {
          console.info(data);
          if ( data != null && typeof data != 'undefined') {
            $('.consum-sidebar .items-block').remove();
            videoBlock.removeClass('show-app');
            $('.consum-sidebar .download-app').after(data.rendered);
            Drupal.behaviors.bxslider_carousels.initVSliders();
            Drupal.behaviors.bxslider_carousels.initHSliders();
          }
        },
        error: function () {
          console.info('error');
          $('.consum-sidebar .items-block').remove();
          videoBlock.addClass('show-app');
        }
      });
    },
    related_content: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-related/' + timezoneOffset,
        success: function(data) {

          if (data != null && typeof data != 'undefined') {
            $('.consum-sidebar .gallery-wrapper').remove();
            if(!videoBlock.hasClass('show-gallery')) {
              videoBlock.addClass('show-gallery');
            }
            $('.consum-sidebar').after(data.rendered);
            $('.consum-sidebar').after('<h2 class="section-title"><span class="section-title-wrapper show-border secondary">Related content</span></h2>');
            window.onload = function() {
              $('.gallery-wrapper').usaGallery();
            };
          }

        },
        error: function () {
          console.info('error');
          $('h2.section-title').remove();
          $('.gallery-wrapper').remove();
          videoBlock.removeClass('show-gallery');
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
