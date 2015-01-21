/**
 * USANetwork player endCard
 */

if (typeof NBCUEndShareCard !== 'undefined') {
  var tpController = $pdk.controller;
  var tpconfig = tpconfig || {};

  NBCUEndShareCard.initialized = false;
  NBCUEndShareCard.Feed = 'http://qa.usanetwork.com/ajax/microcite/endcard/related';
  var playerurl = window.location.hash.match(/#playerurl=(.*)/);
  if (playerurl) {
    NBCUEndShareCard.ShareURL = decodeURIComponent(playerurl[1]);
  }

  /**
   * NBCUEndShareCard Overrides
   */
  NBCUEndShareCard.Initialize = function () {
    /* Set the feed URL */
    if(navigator.userAgent.toString().indexOf("MSIE") != -1){
      NBCUEndShareCard.AppearsToBeIE = true;
    }
    if(navigator.userAgent.toString().indexOf("MSIE 8") != -1 || navigator.userAgent.toString().indexOf("MSIE 9") != -1){
      NBCUEndShareCard.AppearsToBeIELessThan10 = true;
    }

    NBCUEndShareCard.AppearToBeFF = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
    try{
      if(usePlaylist === true){
        NBCUEndShareCard.UsePlaylist = true;
      }
    }catch(e){}

    // Check override values
    var cwd = "";
    if (tpconfig && tpconfig.imageRoot) {
      cwd = tpconfig.imageRoot;
    } else if ($pdk.parentUrl) {
      cwd = $pdk.parentUrl.replace(/\/$/, "");
      cwd = cwd.split("/");
      cwd.splice(cwd.length - 1, 1);
      cwd = cwd.join("/");
    }
    else {
      cwd = window.location.href.replace(/\/$/, "").split("/");
      cwd.splice(cwd.length - 1, 1);
      cwd = cwd.join("/");
    }
    NBCUEndShareCard.ScriptRoot = cwd + "/";

    var configData = $(window).data("tp-config");
    if (configData && configData.endCardFeed) {
      NBCUEndShareCard.Feed = configData.endCardFeed;
    } else if (tpconfig && tpconfig.endCardFeed) {
      NBCUEndShareCard.Feed = tpconfig.endCardFeed;
    }

    if (tpconfig) {
      if (tpconfig.shareURL) {
        NBCUEndShareCard.ShareURL = tpconfig.shareURL;
      }
      if (tpconfig.embedURL) {
        NBCUEndShareCard.Embed = tpconfig.embedURL;
      }
      if (tpconfig.embedWidth) {
        NBCUEndShareCard.embedWidth = tpconfig.embedWidth;
      }
      if (tpconfig.embedHeight) {
        NBCUEndShareCard.embedHeight = tpconfig.embedHeight;
      }
      if (tpconfig.autoPlay) {
        NBCUEndShareCard.autoPlay = tpconfig.autoPlay;
      }
      if (tpconfig.countdown != undefined) {
        NBCUEndShareCard.countdown = tpconfig.countdown;
      }
      if (tpconfig.PlayerWidth) {
        NBCUEndShareCard.PlayerWidth = tpconfig.playerWidth;
      }
      if (tpconfig.endCardFeedAnnex) {
        NBCUEndShareCard.endCardFeedAnnex = tpconfig.endCardFeedAnnex;
      }
      if (tpconfig.emailUrl) {
        NBCUEndShareCard.emailUrl = tpconfig.emailUrl;
      }
      if (tpconfig.disableEndcard) {
        NBCUEndShareCard.disableEndcard = tpconfig.disableEndcard;
      }
      if (tpconfig.facebookPlayer) {
        NBCUEndShareCard.facebookPlayer = tpconfig.facebookPlayer;
      }
    }
    NBCUEndShareCard.Debug("NBCUEndShareCard Initialized! window size:" + $(window).width());
    if (!NBCUEndShareCard.disableEndcard) {
      tpController.addEventListener("OnReleaseEnd", NBCUEndShareCard.ShowEndCard);
    }
    tpController.addEventListener("OnReleaseStart", NBCUEndShareCard.OnReleaseStart);
    tpController.addEventListener("OnMediaStart", NBCUEndShareCard.OnMediaStart);
    tpController.addEventListener("OnSetReleaseUrl", NBCUEndShareCard.OnSetReleaseUrl);

    NBCUEndShareCard.initialized = true;
  };

  NBCUEndShareCard.OnMediaStart = function (evt) {
    NBCUEndShareCard.Debug("[OnMediaStart]");
    if (!NBCUEndShareCard.isMediaSet) {
      var clip = evt.data;
      if (!NBCUEndShareCard.IsEmpty(clip.baseClip.guid)) {
        NBCUEndShareCard.setMedia(clip);
      }
    }
  };

  NBCUEndShareCard.OnReleaseStart = function (evt) {
    NBCUEndShareCard.Debug("[OnReleaseStart]");
    NBCUEndShareCard.isMediaSet = false;
    var playlist = evt.data;
    var clips = playlist.clips;
    var clip;
    for (var i = 0; i < clips.length; i++) {
      if (!NBCUEndShareCard.IsEmpty(clips[i].baseClip.guid)) {
        clip = clips[i];
        break;
      }
    }
    NBCUEndShareCard.currentPid = playlist.releasePID;
    if (clip != null) {
      NBCUEndShareCard.setMedia(clip);
    }
  }

  NBCUEndShareCard.ReplayVideo = function(sender){
    NBCUEndShareCard.Debug("[ReplayVideo]");
    tpController.clickPlayButton();
    NBCUEndShareCard.HideEndCard("RP");
  };

  NBCUEndShareCard.onCountdown = function (evt) {
    NBCUEndShareCard.currentCountdown--;
    if (NBCUEndShareCard.currentCountdown >= 0) {
      $(".ymalcountdown").html(NBCUEndShareCard.getFormattedCountdown(NBCUEndShareCard.currentCountdown));
    }
    if (NBCUEndShareCard.currentCountdown == 0) {
      clearInterval(NBCUEndShareCard.countdownTimer);
      var next_url = $('.ymalitemnext').attr('href');
      if (next_url) {
        tpController.dispatchEvent("OnEndcardCountdownEnd", next_url);
      }
    }
  }

  NBCUEndShareCard.GetYouMayAlsoLike = function(){
    NBCUEndShareCard.Debug("[GetYouMayAlsoLike]");
    var currentGuid = encodeURIComponent(NBCUEndShareCard.NowPlaying.guid);
    var url = NBCUEndShareCard.Feed + '/' + currentGuid;
    if (!NBCUEndShareCard.AppearsToBeIE) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function(data) {
          NBCUEndShareCard.ParseYouMayAlsoLikeNew(data);
        },
        error: function(data) {
          NBCUEndShareCard.Debug('[GetYouMayAlsoLike] error getting feed');
          $(".endcardymalheading").hide();
        }
      });
    } else {
      var yReq = new tpJSONRequest(url, "NBCUEndShareCard.ParseYouMayAlsoLikeNew");
      yReq.send();
    }
  }

  NBCUEndShareCard.ParseYouMayAlsoLikeNew = function(entries){
    NBCUEndShareCard.Debug("[ParseYouMayAlsoLike]");
    var ymal;
    var wo = "94%";
    var wi = "90%";

    if ($('.endcardinner .endcardymalitems').length > 0 ) {
      ymal = $('.endcardymalitems');
    }
    else {
      ymal = $('<div class="endcardymalitems"></div>');
      $('.endcardinner').append(ymal);
    }

    if(!NBCUEndShareCard.IsEmpty(entries)){
      NBCUEndShareCard.YMAL = entries;

      var selectedItems = entries;
      if(selectedItems.length > 0){
        $(".endcardymalheading").show();
        ymal.empty();
        var startingIndex = 0;
        // Show the first one.
        var nr = '';
        nr += '<div class="ymalitemwrapnext">';
        nr += '<a class="ymalitemnext" target="_parent" href="' + selectedItems[startingIndex].url + '" id="ymal-' + selectedItems[startingIndex].guid + '" data-guid="' + selectedItems[startingIndex].guid + '">';
        nr += '<img class="ymalthumbnext" src="' + NBCUEndShareCard.GetDefaultThumbnail(selectedItems[startingIndex]) + '" alt="" /><span class="ymalplay"></span>';
        nr += '</a>';
        nr += '<a class="ymaltitlenext" target="_parent" href="' + selectedItems[startingIndex].url + '" data-guid="' + selectedItems[startingIndex].guid + '">' + selectedItems[startingIndex].title + '</a>';
        // Countdown
        if (NBCUEndShareCard.countdown && NBCUEndShareCard.countdown > 0) {
          nr += '<div class="ymalcountdownmessage">This video will begin in</div><div class="ymalcountdown">' + NBCUEndShareCard.getFormattedCountdown(NBCUEndShareCard.countdown) + '</div><span class="ymalcountdownpause" href="#">Click to pause</span>';
          if(NBCUEndShareCard.countdownTimer) {
            clearInterval(NBCUEndShareCard.countdownTimer);
            NBCUEndShareCard.countdownTimer = null;
          }
        }
        nr += '</div><div class="ymalitemswrapnew"></div>';
        ymal.append($(nr));
        $(".ymalcountdown").click(NBCUEndShareCard.onTimerClick);
        $(".ymalcountdownpause").click(NBCUEndShareCard.onTimerClick);

        startingIndex++;

        var lastIndex = Math.min(selectedItems.length, (startingIndex + 2));

        // Show the rest.
        for(var i = startingIndex; i < lastIndex; i++){
          if(!NBCUEndShareCard.IsEmpty(NBCUEndShareCard.YMAL[i])){
            var release;
            var rh = '';
            rh += '<div class="ymalitemwrapnew">';
            rh += '<a class="ymalitemnew" target="_parent" href="' + selectedItems[i].url + '" id="ymal-' + selectedItems[i].guid + '" data-guid="' + selectedItems[i].guid + '">';
            rh += '<img class="ymalthumbnew" src="' + NBCUEndShareCard.GetDefaultThumbnail(selectedItems[i]) + '" alt="" /><span class="ymalplay"></span>';
            rh += selectedItems[i].title;
            rh += '</a>';

            rh += '</div>'
            release = $(rh);
            $(".ymalitemswrapnew").append(release);
          }
        }
      } else {
        // if we can find any related content nor items in the feed.
        if(NBCUEndShareCard.countdownTimer) {
          clearInterval(NBCUEndShareCard.countdownTimer);
          NBCUEndShareCard.countdownTimer = null;
        }
        $(".endcardymalheading").hide();
      }
    }
  };

  // Choose maximum three items based on show or person.
  NBCUEndShareCard.PickMostRelatedItems = function(arrData) {
    return arrData;
  };

  /**
   * Initialize EndShareCard
   */
  $(window).on('load', function() {
    if (!NBCUEndShareCard.initialized) {
      NBCUEndShareCard.Initialize();
    }
  });
}
