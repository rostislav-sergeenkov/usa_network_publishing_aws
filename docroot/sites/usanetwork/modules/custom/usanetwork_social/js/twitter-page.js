(function ($) {
Drupal.behaviors.twitter_page = {
  attach: function(context){
    var EchoRiverClient;
    
    function initEchoRiverClient() {
      EchoRiverClient = new Echo.Stream({
        "target": $('#echo-stream'),
        "appkey": echoAppKey,
        "query": twitterEQL,
        "maxBodyCharacters": 2000,
        "viaLabel": {"icon": true,"text": true},
        "reTag": false,
        "streamStateLabel": {"icon": true,"text": true},
        "aggressiveSanitization": false,
        "plugins": [{
          "name": "LinksBlank"
        }, {
          "name": "TwitterIntents"
        }, {
          "name": "FbImages"
        }, {
          "name": "InlineMedia"
        }]
      });
    }
    
    initEchoRiverClient();
  }
}
})(jQuery);

