(function ($) {
Drupal.behaviors.twitter_page = {
  attach: function(context){
    var echoAppKey = $('#echoAppKey').html();
    var query = $('#echoQuery').html();
    var EchoRiverClient;
    
    function initEchoRiverClient() {
      EchoRiverClient = new Echo.Stream({
        "target": $('#echo-stream'),
        "appkey": echoAppKey,
        "query": query,
        "maxBodyCharacters": 2000,
        "viaLabel": {"icon": true,"text": true},
        "reTag": false,
        "streamStateLabel": {"icon": true,"text": true},
        "aggressiveSanitization": false,
        "plugins": [{
          "name": "TwitterIntents"
        }, {
          "name": "InlineMedia"
        }]
      });
    }
    
    initEchoRiverClient();
  }
}
})(jQuery);

