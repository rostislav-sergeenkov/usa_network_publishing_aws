(function ($) {

  Drupal.behaviors.consumptionator_video = {
    attach: function (context, settings) {

      var current_iframe = $('.consumptionator-video-page .video-player-wrapper iframe');
      var iframe_height = current_iframe.width()*9/16;
      current_iframe.height(iframe_height);

      $(window).bind('resize', function () {
        iframe_height = current_iframe.width()*9/16;
        current_iframe.height(iframe_height);
        current_iframe.src = current_iframe.src;
      });

    }
  };


}(jQuery));
