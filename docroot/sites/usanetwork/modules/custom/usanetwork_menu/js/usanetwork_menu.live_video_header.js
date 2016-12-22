(function ($) {
  Drupal.behaviors.usanetwork_menu_live_video_header = {
    init: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset();

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        data: {},
        url: Drupal.settings.basePath + 'ajax/render-live-video-header/' + timezoneOffset,
        success: function (message) {

          var headerBlock = $("#block-usanetwork-menu-usanetwork-menu-consumptionator .content");

          if (typeof message.on_now_vars != 'undefined') {
            var on_now_vars = JSON.parse(message.on_now_vars);
            headerBlock.find('.show-name a').attr('href', on_now_vars.show_url);
            headerBlock.find('.show-name a span').text(on_now_vars.show_name);
            headerBlock.find('h1 a span').text(on_now_vars.episode.title);
            headerBlock.find('.info-tab .asset-img img').attr('src', on_now_vars.episode.image_url);
            headerBlock.find('.info-tab .caption').text(on_now_vars.episode.video_type);
            headerBlock.find('.info-tab .title').text(on_now_vars.episode.title);
            var additional = on_now_vars.episode.additional + ' ' + on_now_vars.episode.running_time;
            headerBlock.find('.info-tab .additional').html(additional);
            headerBlock.find('.info-tab .description').text(on_now_vars.episode.description);
            $('body').addClass(on_now_vars.episode.episode_class);
          }

          USAN.initUSAGigya({
            gigyaSharebar: {
              ua: {
                description: 'Stream USA Network TV live on your desktop',
                imageUrl: Drupal.settings.usanetwork_menu.usa_live_tv_img,
                linkBack: window.location.href.split('#')[0],
                title: 'USA Network Live TV Streaming'
              },
              containerID: "gigya-share-live-video"
            }
          });
        },
        error: function () {
          console.info('error');
        }
      });
    },
    attach: function (context, settings) {
      $('body').once(function () {
        Drupal.behaviors.usanetwork_menu_live_video_header.init();
      })
    }
  };
})(jQuery);
