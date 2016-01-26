(function ($) {

  Drupal.behaviors.consumptionator_video = {

    // player init bind
    initPlayerBind: function ($cookies) {
      for (key in $pdk.controller.listeners) {
        delete $pdk.controller.listeners[key];
      }
      $pdk.bindPlayerEvents();
      if (typeof Drupal.usanetwork_video_endcard !== "undefined" && typeof Drupal.usanetwork_video_endcard.OnCountdownEnd === "function") {
        $pdk.controller.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      }
    },

    /**
     * Change iframe src after Authentication.
     */
    changeSrcFullVideos: function (mvpd) {
      var iframe = $('.video-player-wrapper #pdk-player'),
          str = iframe.data('src'),
          current_src = parseURL(str);

      if (current_src.params.MVPDid){
        str = str.replace('MVPDid='+current_src.params.MVPDid, 'MVPDid='+mvpd);
        iframe.attr('src', str);
      } else {
        var i=str.indexOf('#');

        if (i != -1){
          str = myStr(str,'&MVPDid='+mvpd,i);
          iframe.attr('src', str);
        } else {
          str += '&MVPDid='+mvpd;
        }
      }

      function parseURL(url) {
        var a =  document.createElement('a');
        a.href = url;
        return {
          source: url,
          protocol: a.protocol.replace(':',''),
          host: a.hostname,
          port: a.port,
          query: a.search,
          params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
              if (!seg[i]) { continue; }
              s = seg[i].split('=');
              ret[s[0]] = s[1];
            }
            return ret;
          })(),
          file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
          hash: a.hash.replace('#',''),
          path: a.pathname.replace(/^([^\/])/,'/$1'),
          relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
          segments: a.pathname.replace(/^\//,'').split('/')
        };
      }

      function myStr(str1,str2,i) {
        return str1.slice(0,i)+str2+str1.slice(i)
      }

      iframe.removeAttr('data-src');
    },
    /**
     * Change iframe src without Authentication.
     */
    changeSrc: function () {

      var iframe = $('.video-player-wrapper #pdk-player'),
          str = iframe.data('src');

      iframe.attr('src', str).removeAttr('data-src');
    },

    attach: function (context, settings) {

      var current_iframe = $('.consumptionator-video-page .video-player-wrapper iframe');
      var iframe_height = current_iframe.width() * 9 / 16;
      current_iframe.height(iframe_height);

      $(window).load(function () {
        if (usa_deviceInfo.mobileDevice) {
          if($('#pdk-player').length > 0) {
            if (!$('body').hasClass('page-videos-live') && !$('body').hasClass('page-auth-video') && !$('body').hasClass('page-node-microsite')) {
              Drupal.behaviors.consumptionator_video.changeSrc();
              Drupal.behaviors.consumptionator_video.initPlayerBind();
            }
          }
        }
      })
    }
  };


}(jQuery));
