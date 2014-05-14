(function ($) {
  Drupal.usanetwork_video_endcard = {
    handlers: {
      getVideoData: function(e, args) {
        if (args.length > 0 && typeof args[0] == 'object') {
          var url = Drupal.settings.basePath + 'videos/ajax/get-data';
          $.post(url, {
            guids: args[0]
          }, function (data) {
            if (typeof e.source.postMessage === 'function') {
              e.source.postMessage({
                'namespace': 'USAEndShareCard',
                'message': {
                  'command': 'setVideoData',
                  'args': [data]
                }
              }, '*');
            }
          });
        }
      },
      videoNavigate: function(e, args) {
        if (args.length > 0 && typeof args[0] == 'string') {
          window.location.href = args[0];
        }
      }
    },
    initialize: function() {
      // attach OnMessage event handler
      if (typeof window.addEventListener !== 'undefined') {
        window.addEventListener("message", Drupal.usanetwork_video_endcard.messageHandler, false);
      }
      else {
        window.attachEvent('onmessage', Drupal.usanetwork_video_endcard.messageHandler);
      }
    },
    messageHandler: function(e) {
      var data = e.data;
      var origin = e.origin;

      // check origin to be player.theplatform.com
      var domain = new RegExp("https?:\/\/player.theplatform.com");
      if (domain.test(origin) && typeof data.namespace !== 'undefined' && data.namespace == 'USAEndShareCard') {
        if (typeof data.message.command !== 'undefined') {
          var command = data.message.command;
          var args = (typeof data.message.args === 'object') ? data.message.args : [];
          if (typeof Drupal.usanetwork_video_endcard.handlers[command] === 'function') {
            Drupal.usanetwork_video_endcard.handlers[command](e, args);
          }
        }
      }
    }
  };

  $(document).ready(function() {
    Drupal.usanetwork_video_endcard.initialize();
  });
})(jQuery);
