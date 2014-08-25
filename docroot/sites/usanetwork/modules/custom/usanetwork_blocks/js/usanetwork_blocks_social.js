(function ($) {
  Drupal.behaviors.usanetwork_blocks_social = {
    attach: function (context, settings) {
      $('.usa-twitter-share').once('twitter-share', function() {
        $(this).on('click', function() {
          var url = $(this).attr('url');
          var x = (screen.width/2) - (536/2);
          var y = (screen.height/2) - (450/2);
          window.open(url,'Twitter Follow','width=536,height=450,top=' + y + ',left=' + x);
        });
      });
    }
  };

}(jQuery));
