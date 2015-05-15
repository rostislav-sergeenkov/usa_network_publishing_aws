(function ($) {

  Drupal.behaviors.consumptionator_video = {
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

      //init custom scrollbar for social block
      var container = $('#block-usanetwork-mpx-video-usanetwork-social-content .content');

      $(container).mCustomScrollbar({
        axis: "y",
        theme: "light",
        scrollEasing: "easeOut"
      });

    }
  };



}(jQuery));
