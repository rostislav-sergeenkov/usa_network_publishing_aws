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

      $(window).bind('resize', function () {
        iframe_height = current_iframe.width()*9/16;
        current_iframe.height(iframe_height);
        var current_src = current_iframe.attr('src');
        current_iframe.attr('src', '');
        current_iframe.attr('src', current_src);
      });

      Drupal.behaviors.consumptionator_video.mobileModal();

      //init custom scrollbar for social block
      //var container = $('#block-usanetwork-mpx-video-usanetwork-social-content .content .show-border');

      //if(container.length > 0) {
      //  $(container).mCustomScrollbar({
      //    axis: "y",
      //    theme: "light",
      //    scrollEasing: "easeOut"
      //  });
      //}
    }
  };



}(jQuery));
