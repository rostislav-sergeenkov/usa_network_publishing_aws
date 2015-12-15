(function ($) {
  Drupal.usanetwork_video_endcard = {
    'GetAnchors': function (data) {
      var next_url_splited = data.data.next_url.split('/'),
          anchor = next_url_splited[next_url_splited.length - 2],
          dataVideoUrl = next_url_splited[next_url_splited.length - 1],
          anchorFull = Drupal.settings.microsites_settings.base_path + '/' + anchor + '/' + dataVideoUrl;

        return [anchor, anchorFull, dataVideoUrl];
    },
    'SelectActiveThumb': function(data) {
      $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li').removeClass('active');
      $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' +
      Drupal.usanetwork_video_endcard.GetAnchors(data)[2] + '"]').addClass('active');
    },
    'OnCountdownEnd': function(data) {
      // @TODO: Consolidate or update the microsite js so that the following if-else statement is not needed.
      if (typeof Drupal.behaviors.microsite_scroll == 'object' && Drupal.behaviors.microsite_scroll.hasOwnProperty('micrositeSetVideoPlayer') && Drupal.behaviors.microsite_scroll.hasOwnProperty('micrositeChangeUrl')) {
        Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer('true', null, data);
        Drupal.behaviors.microsite_scroll.micrositeChangeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
          Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
      }
      else if (typeof Drupal.behaviors.ms_videos == 'object' && Drupal.behaviors.ms_videos.hasOwnProperty('micrositeSetVideoPlayer') && typeof Drupal.behaviors.ms_global == 'object' && Drupal.behaviors.ms_global.hasOwnProperty('changeUrl')) {
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('true', null, data);
        Drupal.behaviors.ms_global.changeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
          Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
      }
      Drupal.usanetwork_video_endcard.SelectActiveThumb(data);
    },
    'OnYmalitemnewClick': function(data) {
      // @TODO: Consolidate or update the microsite js so that the following if-else statement is not needed.
      if (typeof Drupal.behaviors.microsite_scroll == 'object' && Drupal.behaviors.microsite_scroll.hasOwnProperty('micrositeSetVideoPlayer') && Drupal.behaviors.microsite_scroll.hasOwnProperty('micrositeChangeUrl')) {
        Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer('true', null, data);
        Drupal.behaviors.microsite_scroll.micrositeChangeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
          Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
      }
      else if (typeof Drupal.behaviors.ms_videos == 'object' && Drupal.behaviors.ms_videos.hasOwnProperty('micrositeSetVideoPlayer') && typeof Drupal.behaviors.ms_global == 'object' && Drupal.behaviors.ms_global.hasOwnProperty('changeUrl')) {
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('true', null, data);
        Drupal.behaviors.ms_global.changeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
          Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
      }
      Drupal.usanetwork_video_endcard.SelectActiveThumb(data);
    }
  };

  $(window).load(function () {
    if (typeof tpController !== 'undefined') {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      tpController.addEventListener('OnYmalitemnewClick', Drupal.usanetwork_video_endcard.OnYmalitemnewClick);
    }
    var previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li, #show-aspot-microsite .aspot-link');
    previewItem.click(function (e) {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    });
  });
})(jQuery);
