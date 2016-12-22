(function ($) {
Drupal.behaviors.switch_nav = {
  attach: function(context){


    function toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    var EchoRiverClient;
    var usa_chatter = function() {
      this.twitterQuery = twitterEQL;
      this.chatWithFansQuery = chatWithFansEQL;
      this.facebookQuery = facebookEQL;
    }
    var usa_chatterObj = new usa_chatter();
    var initQuery = usa_chatterObj.twitterQuery;
    function initEchoRiverClient() {
      EchoRiverClient = new Echo.Stream({
        "target": $('#echo-stream'),
        "appkey": echoAppKey,
        "query": initQuery,
        "maxBodyCharacters": 2000,
        "viaLabel": {"icon": true,"text": true},
        "reTag": false,
        "streamStateLabel": {"icon": true,"text": true},
        "aggressiveSanitization": false,
        "defaultAvatar" : "//cdn.echoenabled.com/images/favicons/comments.png",
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
    $('#navTwitter span').once(function(){
      $('#navTwitter span').removeClass('navTwitter').addClass('navTwitter-selected');
      $('#join-tweets').show();
      initEchoRiverClient();
    });

    $('#navChatter').click(function(){
      $('#navChatter span').removeClass('navChatter').addClass('navChatter-selected');
      $('#navTwitter span').removeClass('navTwitter-selected').addClass('navTwitter');
      $('#navFb span').removeClass('navFb-selected').addClass('navFb');
      $('#navPinterest span').removeClass('navPinterest-selected').addClass('navPinterest');
      $('#navGetGlue span').removeClass('navGetGlue-selected').addClass('navGetGlue');
      $('#navInstagram span').removeClass('navInstagram-selected').addClass('navInstagram');
      EchoRiverClient.config.set("query", usa_chatterObj.chatWithFansQuery);
      EchoRiverClient.refresh();
      $('#pinterest').hide();
      $('#pinterest').empty();
      $('#sticker').empty();
      $('#get-glue').hide();
      $('#instagram').hide();
      $('#join-tweets').hide();
      $('#join-buzz').hide();
      $('#join-chatter').show();
    });
    $('#navTwitter').click(function(){
      $('#navTwitter span').removeClass('navTwitter').addClass('navTwitter-selected');
      $('#navChatter span').removeClass('navChatter-selected').addClass('navChatter');
      $('#navFb span').removeClass('navFb-selected').addClass('navFb');
      $('#navPinterest span').removeClass('navPinterest-selected').addClass('navPinterest');
      $('#navGetGlue span').removeClass('navGetGlue-selected').addClass('navGetGlue');
      $('#navInstagram span').removeClass('navInstagram-selected').addClass('navInstagram');
      EchoRiverClient.config.set("query", usa_chatterObj.twitterQuery);
      EchoRiverClient.refresh();
      $('#pinterest').hide();
      $('#pinterest').empty();
      $('#sticker').empty();
      $('#get-glue').hide();
      $('#instagram').hide();
      $('#join-buzz').hide();
      $('#join-chatter').hide();
      $('#join-tweets').show();
    });
    $('#navFb').click(function(){
      $('#navFb span').removeClass('navFb').addClass('navFb-selected');
      $('#navChatter span').removeClass('navChatter-selected').addClass('navChatter');
      $('#navTwitter span').removeClass('navTwitter-selected').addClass('navTwitter');
      $('#navPinterest span').removeClass('navPinterest-selected').addClass('navPinterest');
      $('#navGetGlue span').removeClass('navGetGlue-selected').addClass('navGetGlue');
      $('#navInstagram span').removeClass('navInstagram-selected').addClass('navInstagram');
      EchoRiverClient.config.set("query", usa_chatterObj.facebookQuery);
      EchoRiverClient.refresh();
      $('#pinterest').hide();
      $('#pinterest').empty();
      $('#sticker').empty();
      $('#get-glue').hide();
      $('#instagram').hide();
      $('#join-chatter').hide();
      $('#join-tweets').hide();
      $('#join-buzz').show();
    });
    $('#navPinterest').click(function(){
      $('#navPinterest span').removeClass('navPinterest').addClass('navPinterest-selected');
      $('#navChatter span').removeClass('navChatter-selected').addClass('navChatter');
      $('#navTwitter span').removeClass('navTwitter-selected').addClass('navTwitter');
      $('#navFb span').removeClass('navFb-selected').addClass('navFb');
      $('#navGetGlue span').removeClass('navGetGlue-selected').addClass('navGetGlue');
      $('#navInstagram span').removeClass('navInstagram-selected').addClass('navInstagram');
      $('#echo-stream').hide();
      $('#sticker').empty();
      $('#get-glue').hide();
      $('#instagram').hide();
      $('#pinterest').html('<a data-pin-do="embedUser" href="'+pinterestUrl+'"></a></a><script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>');
      $('#pinterest').show();
      $('#join-chatter').hide();
      $('#join-tweets').hide();
      $('#join-buzz').show();
    });
    $('#navGetGlue').click(function(){
      $('#navGetGlue span').removeClass('navGetGlue').addClass('navGetGlue-selected');
      $('#navChatter span').removeClass('navChatter-selected').addClass('navChatter');
      $('#navTwitter span').removeClass('navTwitter-selected').addClass('navTwitter');
      $('#navFb span').removeClass('navFb-selected').addClass('navFb');
      $('#navPinterest span').removeClass('navPinterest-selected').addClass('navPinterest');
      $('#navInstagram span').removeClass('navInstagram-selected').addClass('navInstagram');
      $('#echo-stream').hide();
      $('#pinterest').hide();
      $('#pinterest').empty();
      $('#instagram').hide();
      $('#sticker').html('<script>(function() { var s=document.createElement("script"); s.src="//widgets.getglue.com/checkin.js"; var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n); })();</script><a class="glue-checkin-widget" href="' +getGlueUrl+ '" data-type="conversation" data-width="530" data-headerBgColor="#dddddd" data-bgColor="#ffffff" data-rolloverBgColor="#f9f9f9" data-borderColor="#d3d3d3" data-replyBgColor="#f1f2f4" data-linkColor="#2269b9" data-textColor="#000000" data-subtextColor="#ababab">'+getGlueShowName+'</a>');
//      $('#sticker').html('<div id="showHomepageGetGlueMsg">Check-in and unlock exclusive ' + toTitleCase(getGlueShowName) + ' GetGlue stickers</div><script type="text/javascript" src="http://widgets.getglue.com/checkin.js"></script><a href="http://getglue.com/tv_shows/' + getGlueShowName + '" class="glue-checkin-widget" data-width="300" data-type="sticker" data-sticker="' + getGlueUrl + '" data-bgColor="#EFEFEF">' + getGlueShowName + '</a>');
      $('#get-glue').show();
      $('#join-chatter').hide();
      $('#join-tweets').hide();
      $('#join-buzz').show();
    });
    $('#navInstagram').click(function(){
      $('#navInstagram span').removeClass('navInstagram').addClass('navInstagram-selected');
      $('#navChatter span').removeClass('navChatter-selected').addClass('navChatter');
      $('#navTwitter span').removeClass('navTwitter-selected').addClass('navTwitter');
      $('#navFb span').removeClass('navFb-selected').addClass('navFb');
      $('#navPinterest span').removeClass('navPinterest-selected').addClass('navPinterest');
      $('#navGetGlue span').removeClass('navGetGlue-selected').addClass('navGetGlue');
      $('#echo-stream').hide();
      $('#pinterest').hide();
      $('#pinterest').empty();
      $('#sticker').empty();
      $('#get-glue').hide();
      $('#instagram').html('<div class="echo-canvas echo-canvas-'+instagramShowId+'" data-canvas-appkey="echo.echo.streamserver.usanetwork.prod" data-canvas-id="usanetwork/'+instagramShowId+'"></div>');
      if (typeof Echo == 'undefined') {
        $.getScript('http://cdn.echoenabled.com/sdk/v3/loader.js', function() {
          Echo.Loader.init();
        });
      }
      else {
        Echo.Loader.init();
      }
      $('#instagram').show();
      $('#join-chatter').hide();
      $('#join-tweets').hide();
      $('#join-buzz').show();
    });
    $('#join-tweets').click(function(){
      var currentUrl = location.href.replace(location.hash,"");
      window.location = currentUrl + '/social/tweets';
    });
    $('#join-chatter').click(function(){
      var currentUrl = location.href.replace(location.hash,"");
      window.location = currentUrl + '/social/chat-with-fans';
    });
    $('#join-buzz').click(function(){
      var currentUrl = location.href.replace(location.hash,"");
      window.location = currentUrl + '/social/latest';
    });


  }
}
})(jQuery);
