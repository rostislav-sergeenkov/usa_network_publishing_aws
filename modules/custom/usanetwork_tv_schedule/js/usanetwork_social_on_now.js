(function ($) {
  $('#navTwitterOnNow').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navTwitterOnNow span').addClass('onnow_social_selected');
    var node_id = $(this).attr("name");
    var tab_id = $(this).parent().parent().parent().attr('id');
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"twitter"}).done(function ( data ) {
      $('#'+tab_id+' #socialblock_on_now_content').html(data);
    });
    $('#'+tab_id+' #pinterest').hide();
    $('#'+tab_id+' #pinterest').empty();
    $('#'+tab_id+' #instagram').hide();
    $('#'+tab_id+' #sticker').empty();
    $('#'+tab_id+' #get-glue').hide();
    $('#'+tab_id+' #echo-stream').show();
    $('#'+tab_id+' #join-tweets').show();
    $('#'+tab_id+' #join-buzz').hide();
    $('#'+tab_id+' #join-chatter').hide();
  });
  $('#navChatterOnNow').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navChatterOnNow span').addClass('onnow_social_selected');
    var node_id = $(this).attr("name");
    var tab_id = $(this).parent().parent().parent().attr('id');
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"chatter"}).done(function ( data ) {
      $('#'+tab_id+' #socialblock_on_now_content').html(data);
    });
    $('#'+tab_id+' #pinterest').hide();
    $('#'+tab_id+' #pinterest').empty();
    $('#'+tab_id+' #instagram').hide();
    $('#'+tab_id+' #sticker').empty();
    $('#'+tab_id+' #get-glue').hide();
    $('#'+tab_id+' #echo-stream').show();
    $('#'+tab_id+' #join-tweets').hide();
    $('#'+tab_id+' #join-buzz').hide();
    $('#'+tab_id+' #join-chatter').show();
  });

  $('#navFbOnNow').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navFbOnNow span').addClass('onnow_social_selected');
    var node_id = $(this).attr("name");
    var tab_id = $(this).parent().parent().parent().attr('id');
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"facebook"}).done(function ( data ) {
      $('#'+tab_id+' #socialblock_on_now_content').html(data);
    });
    $('#'+tab_id+' #pinterest').hide();
    $('#'+tab_id+' #pinterest').empty();
    $('#'+tab_id+' #instagram').hide();
    $('#'+tab_id+' #sticker').empty();
    $('#'+tab_id+' #get-glue').hide();
    $('#'+tab_id+' #echo-stream').show();
    $('#'+tab_id+' #join-tweets').hide();
    $('#'+tab_id+' #join-buzz').show();
    $('#'+tab_id+' #join-chatter').hide();
  });

  $('#navPinterestOnNow').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navPinterestOnNow span').addClass('onnow_social_selected');
    var pinterestUrl = $(this).attr("name");
    var tab_id = $(this).parent().parent().parent().attr('id');
    $('#'+tab_id+' #pinterest').html('<a data-pin-do="embedUser" href="'+pinterestUrl+'"></a></a><script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>');
    $('#'+tab_id+' #echo-stream').hide();
    $('#'+tab_id+' #sticker').empty();
    $('#'+tab_id+' #get-glue').hide();
    $('#'+tab_id+' #instagram').hide();
    $('#'+tab_id+' #pinterest').show();
    $('#'+tab_id+' #join-tweets').hide();
    $('#'+tab_id+' #join-buzz').show();
    $('#'+tab_id+' #join-chatter').hide();
  });

  $('#navGetGlueOnNow').live("click",function(){
    var getGlueUrlAndShow = $(this).attr("name");
    var getGlueArray = getGlueUrlAndShow.split("urlshowseperator");
    var getGlueUrl = getGlueArray[0];
    var getGlueShowName = getGlueArray[1];
    var tab_id = $(this).parent().parent().parent().attr('id');
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navGetGlueOnNow span').addClass('onnow_social_selected');
    $('#'+tab_id+' #sticker').html('<script>(function() { var s=document.createElement("script"); s.src="//widgets.getglue.com/checkin.js"; var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n); })();</script><a class="glue-checkin-widget" href="' +getGlueUrl+ '" data-type="conversation" data-width="530" data-height="889" data-headerBgColor="#dddddd" data-bgColor="#ffffff" data-rolloverBgColor="#f9f9f9" data-borderColor="#d3d3d3" data-replyBgColor="#f1f2f4" data-linkColor="#2269b9" data-textColor="#000000" data-subtextColor="#ababab">'+getGlueShowName+'</a>');
    $('#'+tab_id+' #echo-stream').hide();
    $('#'+tab_id+' #pinterest').hide();
    $('#'+tab_id+' #pinterest').empty();
    $('#'+tab_id+' #instagram').hide();
    $('#'+tab_id+' #get-glue').show();
    $('#'+tab_id+' #join-tweets').hide();
    $('#'+tab_id+' #join-buzz').show();
    $('#'+tab_id+' #join-chatter').hide();
  });

  $('#navInstagramOnNow').live("click",function(){
    var instagramShowId = $(this).attr("name");
    var tab_id = $(this).parent().parent().parent().attr('id');
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navInstagramOnNow span').addClass('onnow_social_selected');
    $('#'+tab_id+' #instagram').html('<div class="echo-canvas echo-canvas-'+instagramShowId+'" data-canvas-appkey="echo.echo.streamserver.usanetwork.prod" data-canvas-id="usanetwork/'+instagramShowId+'"></div>');
    if (typeof Echo == 'undefined') {
      $.getScript('http://cdn.echoenabled.com/sdk/v3/loader.js', function() {
        Echo.Loader.init();
      });
    }
    else {
      Echo.Loader.init();
    }
    $('#'+tab_id+' #echo-stream').hide();
    $('#'+tab_id+' #pinterest').hide();
    $('#'+tab_id+' #pinterest').empty();
    $('#'+tab_id+' #sticker').empty();
    $('#'+tab_id+' #get-glue').hide();
    $('#'+tab_id+' #instagram').show();
    $('#'+tab_id+' #join-tweets').hide();
    $('#'+tab_id+' #join-buzz').show();
    $('#'+tab_id+' #join-chatter').hide();
  });

  $('#inner-on-now-panel ul li.first span.active').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navTwitterOnNow span').addClass('onnow_social_selected');
    var node_id = $(this).next().find("ul li.first #navTwitterOnNow").attr("name");
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"twitter"}).done(function ( data ) {
      $('#on-now-panel-tab #socialblock_on_now_content').html(data);
    });
    $('#on-now-panel-tab #pinterest').hide();
    $('#on-now-panel-tab #pinterest').empty();
    $('#on-now-panel-tab #instagram').hide();
    $('#on-now-panel-tab #sticker').empty();
    $('#on-now-panel-tab #get-glue').hide();
    $('#on-now-panel-tab #echo-stream').show();
    $('#on-now-panel #join-tweets').show();
    $('#on-now-panel #join-buzz').hide();
    $('#on-now-panel #join-chatter').hide();
  });

  $('#inner-on-now-panel ul li.last span.active').live("click",function(){
    $('.onnow_social_nav').removeClass('onnow_social_selected');
    $('#navTwitterOnNow span').addClass('onnow_social_selected');
    var node_id = $(this).next().find("ul li.first #navTwitterOnNow").attr("name");
    $.ajax({ url: "/usa-on-now-social-block/"+node_id+"/"+"twitter"}).done(function ( data ) {
      $('#up-next-panel-tab #socialblock_on_now_content').html(data);
    });
    $('#up-next-panel-tab #pinterest').hide();
    $('#up-next-panel-tab #pinterest').empty();
    $('#up-next-panel-tab #instagram').hide();
    $('#up-next-panel-tab #sticker').empty();
    $('#up-next-panel-tab #get-glue').hide();
    $('#up-next-panel-tab #echo-stream').show();
    $('#up-next-panel #join-tweets').show();
    $('#up-next-panel #join-buzz').hide();
    $('#up-next-panel #join-chatter').hide();
  });

  $("#inner-on-now-panel .echo-item-controls a").live("click", function() {
    window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes"); 
    return false;
  });

  $("#inner-on-now-panel .echo-item-controls a").live("mouseover", function() {
    //$(this).parent().addClass("tweetDisplay-activeButton");
    $(this).find('.echo-item-twitterIntentsIcon').addClass("tweetDisplay-activeButton");
  });

  $("#inner-on-now-panel .echo-item-controls a").live("mouseout", function() {
    $(this).find('.echo-item-twitterIntentsIcon').removeClass("tweetDisplay-activeButton");
  });

})(jQuery);
