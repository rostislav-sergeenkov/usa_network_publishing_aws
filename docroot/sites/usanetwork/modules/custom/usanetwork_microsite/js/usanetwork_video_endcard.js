(function ($) {
  Drupal.usanetwork_video_endcard = {
    'OnCountdownEnd': function(data) {
      Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(true, null, data);
    },
    'OnYmalitemnewClick': function(data) {
      Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(true, null, data);
    }
  };

  $(window).load(function() {
    if (typeof tpController !== 'undefined') {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      tpController.addEventListener('OnYmalitemnewClick', Drupal.usanetwork_video_endcard.OnYmalitemnewClick);
    }
    var previewItem = $('#thumbnail-list .item-list ul li, #show-aspot-microsite .aspot-link');
    previewItem.click(function(e){
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    });
  });
})(jQuery);
