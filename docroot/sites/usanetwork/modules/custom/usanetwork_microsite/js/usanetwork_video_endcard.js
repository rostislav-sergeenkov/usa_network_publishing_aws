(function ($) {

  Drupal.usanetwork_video_endcard = {
    'OnCountdownEnd': function(e) {
      var url = e.data;
      console.log(e);
      //window.location.href = url;

      ///var nextVideoItem = $('.endcardblocker .ymalitemwrapnext');

    }
  };

  $(window).load(function() {
    var previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li, #show-aspot-microsite .aspot-link');

    if (typeof tpController !== 'undefined') {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    }

    previewItem.click(function(e){
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    });
  });

})(jQuery);
