(function ($) {
  Drupal.usanetwork_video_endcard = {
    'GetAnchors': function(data) {
      var next_url_splited = data.data.next_url.split('/'),
          anchor = next_url_splited[next_url_splited.length];
          anchorFull = Drupal.settings.microsites_settings.base_path + '/' + anchor;

      return [anchor, anchorFull];
    },
    'OnCountdownEnd': function(data) {
      Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(true, null, data);
      Drupal.behaviors.microsite_scroll.micrositeChangeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
        Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
    },
    'OnYmalitemnewClick': function(data) {
      Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(true, null, data);
      Drupal.behaviors.microsite_scroll.micrositeChangeUrl(Drupal.usanetwork_video_endcard.GetAnchors(data)[0],
        Drupal.usanetwork_video_endcard.GetAnchors(data)[1]);
    }
  };

  $(window).load(function() {
    if (typeof tpController !== 'undefined') {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      tpController.addEventListener('OnYmalitemnewClick', Drupal.usanetwork_video_endcard.OnYmalitemnewClick);
    }
    var previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li, #show-aspot-microsite .aspot-link');
    previewItem.click(function(e){
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    });
  });
})(jQuery);
