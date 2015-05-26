(function ($) {

  Drupal.behaviors.consumptionator_video = {

    mobileModal: function () {
      // check if user uses mobile device
      if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
        var os = usa_deviceInfo.iOS ? 'iOS' : 'android';
        Drupal.behaviors.video_mobile.showMobileVideoModal(os);
      }
    },
    attach: function (context, settings) {

      var current_iframe = $('.consumptionator-video-page .video-player-wrapper iframe');
      var iframe_height = current_iframe.width()*9/16;
      current_iframe.height(iframe_height);

      if($('.consum-sidebar .full-video').length > 0) {
        Drupal.behaviors.consumptionator_video.mobileModal();
      }
    }
  };



}(jQuery));
