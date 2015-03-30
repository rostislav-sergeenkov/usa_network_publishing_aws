(function ($) {
  Drupal.usanetwork_video_endcard = {
    'OnCountdownEnd': function(e) {
      var url = e.data;
      window.location.href = url;
    }
  };

  $(window).load(function() {
    if (typeof tpController !== 'undefined') {
      tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
    }
  });
})(jQuery);