(function ($) {
  $('#navTwitterOnNow').live("click",function(){
    $('#navTwitterOnNow span').removeClass('navTwitter').addClass('navTwitter-selected');
    $('#navChatterOnNow span').removeClass('navChatter-selected').addClass('navChatter');
    $('#navFbOnNow span').removeClass('navFb-selected').addClass('navFb');
    $('#navPinterestOnNow span').removeClass('navPinterest-selected').addClass('navPinterest');
    $('#navGetGlueOnNow span').removeClass('navGetGlue-selected').addClass('navGetGlue');
    $('#navInstagramOnNow span').removeClass('navInstagram-selected').addClass('navInstagram');
    $('#echo-stream').show();
    $('#pinterest').hide();
    $('#pinterest').empty();
    $('#instagram').hide();
    $('#get-glue').hide();   
    var node_id = $(this).attr("name");
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"twitter"}).done(function ( data ) {
      $('#socialblock_on_now_content').html(data);
    });
  });
  $('#navChatterOnNow').live("click",function(){
    $('#navTwitterOnNow span').removeClass('navTwitter-selected').addClass('navTwitter');
    $('#navChatterOnNow span').removeClass('navChatter').addClass('navChatter-selected');
    $('#navFbOnNow span').removeClass('navFb-selected').addClass('navFb');
    $('#navPinterestOnNow span').removeClass('navPinterest-selected').addClass('navPinterest');
    $('#navGetGlueOnNow span').removeClass('navGetGlue-selected').addClass('navGetGlue');
    $('#navInstagramOnNow span').removeClass('navInstagram-selected').addClass('navInstagram');
    var node_id = $(this).attr("name");
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"chatter"}).done(function ( data ) {
      $('#socialblock_on_now_content').html(data);
    });
    $('#echo-stream').show();
    $('#pinterest').hide();
    $('#pinterest').empty();
    $('#instagram').hide();
    $('#get-glue').hide();
  });

  $('#navFbOnNow').live("click",function(){
    $('#navTwitterOnNow span').removeClass('navTwitter-selected').addClass('navTwitter');
    $('#navChatterOnNow span').removeClass('navChatter-selected').addClass('navChatter-selected');
    $('#navFbOnNow span').removeClass('navFb').addClass('navFb-selected');
    $('#navPinterestOnNow span').removeClass('navPinterest-selected').addClass('navPinterest');
    $('#navGetGlueOnNow span').removeClass('navGetGlue-selected').addClass('navGetGlue');
    $('#navInstagramOnNow span').removeClass('navInstagram-selected').addClass('navInstagram');
    var node_id = $(this).attr("name");
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"facebook"}).done(function ( data ) {
      $('#socialblock_on_now_content').html(data);
    });  
    $('#echo-stream').show();
    $('#pinterest').hide();
    $('#pinterest').empty();
    $('#instagram').hide();
    $('#get-glue').hide();   
  });

  $('#navPinterestOnNow').live("click",function(){
    $('#navPinterestOnNow span').removeClass('navPinterest').addClass('navPinterest-selected');
    $('#navChatterOnNow span').removeClass('navChatter-selected').addClass('navChatter');
    $('#navTwitterOnNow span').removeClass('navTwitter-selected').addClass('navTwitter');
    $('#navFbOnNow span').removeClass('navFb-selected').addClass('navFb');
    $('#navGetGlueOnNow span').removeClass('navGetGlue-selected').addClass('navGetGlue');
    $('#navInstagramOnNow span').removeClass('navInstagram-selected').addClass('navInstagram');
    var pinterestUrl = $(this).attr("name");
    $('#pinterest').html('<a data-pin-do="embedUser" href="'+pinterestUrl+'"></a></a><script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>');
    $('#echo-stream').hide();
    $('#sticker').empty();
    $('#get-glue').hide();
    $('#instagram').hide();
    $('#pinterest').show();
  });

  $('#navGetGlueOnNow').live("click",function(){
    var getGlueUrlAndShow = $(this).attr("name");
    var getGlueArray = getGlueUrlAndShow.split("urlshowseperator");
    var getGlueUrl = getGlueArray[0];
    var getGlueShowName = getGlueArray[1];
    $('#navGetGlueOnNow span').removeClass('navGetGlue').addClass('navGetGlue-selected');
    $('#navChatterOnNow span').removeClass('navChatter-selected').addClass('navChatter');
    $('#navTwitterOnNow span').removeClass('navTwitter-selected').addClass('navTwitter');
    $('#navFbOnNow span').removeClass('navFb-selected').addClass('navFb');
    $('#navPinterestOnNow span').removeClass('navPinterest-selected').addClass('navPinterest');
    $('#navInstagramOnNow span').removeClass('navInstagram-selected').addClass('navInstagram');
    $('#sticker').html('<script>var s=document.createElement("script"); s.src="//widgets.getglue.com/checkin.js"; var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n);</script><a class="glue-checkin-widget" href="' +getGlueUrl+ '" data-type="conversation" data-width="530" data-headerBgColor="#dddddd" data-bgColor="#ffffff" data-rolloverBgColor="#f9f9f9" data-borderColor="#d3d3d3" data-replyBgColor="#f1f2f4" data-linkColor="#2269b9" data-textColor="#000000" data-subtextColor="#ababab">'+getGlueShowName+'</a>');
    $('#echo-stream').hide();
    $('#pinterest').hide();
    $('#pinterest').empty();
    $('#instagram').hide();
    $('#get-glue').show();
  });

  $('#navInstagramOnNow').live("click",function(){
    var instagramShowId = $(this).attr("name");
    $('#navInstagramOnNow span').removeClass('navInstagram').addClass('navInstagram-selected');
    $('#navChatterOnNow span').removeClass('navChatter-selected').addClass('navChatter');
    $('#navTwitterOnNow span').removeClass('navTwitter-selected').addClass('navTwitter');
    $('#navFbOnNow span').removeClass('navFb-selected').addClass('navFb');
    $('#navPinterestOnNow span').removeClass('navPinterest-selected').addClass('navPinterest');
    $('#navGetGlueOnNow span').removeClass('navGetGlue-selected').addClass('navGetGlue');
    $('#instagram').html('<script src = "http://cdn.echoenabled.com/sdk/v3/loader.js"></script><div class="echo-canvas echo-canvas-'+instagramShowId+'" data-canvas-appkey="echo.echo.streamserver.usanetwork.prod" data-canvas-id="usanetwork/'+instagramShowId+'"></div><script type="text/javascript"> Echo.Loader.init(); </script>');
    $('#echo-stream').hide();
    $('#pinterest').hide();
    $('#pinterest').empty();
    $('#sticker').empty();
    $('#get-glue').hide();
    $('#instagram').show();
  });
})(jQuery);
