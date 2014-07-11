/**
 * toISOString support for old browsers
 */
if ( !Date.prototype.toISOString ) {
  ( function() {

    function pad(number) {
      var r = String(number);
      if ( r.length === 1 ) {
        r = '0' + r;
      }
      return r;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear()
        + '-' + pad( this.getUTCMonth() + 1 )
        + '-' + pad( this.getUTCDate() )
        + 'T' + pad( this.getUTCHours() )
        + ':' + pad( this.getUTCMinutes() )
        + ':' + pad( this.getUTCSeconds() )
        + '.' + String( (this.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
    };

  }() );
}

/**
 * USANetwork player endCard
 */
if (typeof NBCUEndShareCard !== 'undefined') {
  var tpController = $pdk.controller;

  USAEndShareCard = {
    debugFlag: false,
    entries: {},
    filterByCategory: true,
    clip: null,
    attempt: 0,
    debug: function(msg) {
      if (USAEndShareCard.debugFlag && typeof console != 'undefined') {
        if (typeof console.debug === 'function') {
          console.debug(msg);
        }
        else if (typeof console.log === 'function') {
          console.log(msg);
        }
      }
    },
    handlers: {
      setVideoData: function(e, args) {
        USAEndShareCard.debug('[USAEndShareCard set video data]');
        USAEndShareCard.debug(args);
        if (args.length > 0 && typeof args[0] == 'object') {
          var entries = [];
          var urls = args[0];
          for (var i = 0; i < USAEndShareCard.entries.length; i++) {
            var entry = USAEndShareCard.entries[i];
            if (NBCUEndShareCard.IsEmpty(entry.guid)) {
              continue;
            }

            var url = typeof urls[entry.guid] == 'undefined' ? false : urls[entry.guid];
            if (url) {
              entry.url = url;
              entries.push(entry);
            }
          }

          USAEndShareCard.entries = entries;
          USAEndShareCard.debug(USAEndShareCard.entries);
          NBCUEndShareCard.ParseYouMayAlsoLikeNew(USAEndShareCard.entries);
        }
      }
    },
    onMediaStart: function(e) {
      var clip = e.data.baseClip;
      if (!NBCUEndShareCard.IsEmpty(clip.guid)) {
        USAEndShareCard.clip = clip;
        USAEndShareCard.attempt = 0;
        NBCUEndShareCard.Feed = USAEndShareCard.getEndCardFeed(clip);
        NBCUEndShareCard.GetYouMayAlsoLike();
      }
    },
    Initialize: function() {
      USAEndShareCard.debug('[USAEndShareCard initialize]');

      if (tpconfig) {
        if (tpconfig.filterYMALByCategory) {
          USAEndShareCard.filterByCategory = (tpconfig.filterYMALByCategory === true || tpconfig.filterYMALByCategory === 'true') ? true : false;
        }
      }

      $pdk.controller.addEventListener("OnMediaStart", "USAEndShareCard.onMediaStart");

      // attach OnMessage event handler
      if (typeof window.addEventListener !== 'undefined') {
        window.addEventListener("message", USAEndShareCard.messageHandler, false);
      }
      else {
        window.attachEvent('onmessage', USAEndShareCard.messageHandler);
      }
    },
    getEndCardFeed: function(clip, attempt) {
      if (typeof attempt == 'undefined') {
        attempt = 0;
      }
      var feed_url = 'http://feed.theplatform.com/f/OyMl-B/F9JPwR6CJbmG?form=json&sort=pubDate|desc';

      // ignore not available videos
      var now = new Date();
      feed_url += '&byExpirationDate=' + encodeURIComponent(now.toISOString() + '~');

      // add full episode flag
      var fullEpisode = (usa_fullEpisodeFlag === true || usa_fullEpisodeFlag === 'true') ? true : false;
      if (fullEpisode && attempt == 0) {
        feed_url += '&byCustomValue=' + encodeURIComponent('{fullEpisode}{true}');
      }
      else {
        feed_url += '&byCustomValue=' + encodeURIComponent('{fullEpisode}{false}');
      }

      if (USAEndShareCard.filterByCategory == true) {
        // add category
        var category = '';
        for (var i in clip.categories) {
          if (category.length < clip.categories[i].name.length) {
            category = clip.categories[i].name;
          }
        }

        if (!fullEpisode && attempt > 0) {
          var categoryParts = category.split('/');
          categoryParts = categoryParts.slice(0, categoryParts.length - 1);
          category = categoryParts.join('/');
        }

        feed_url += '&byCategories=' + encodeURIComponent(category.replace(':', '\\:'));
      }

      USAEndShareCard.debug(feed_url);
      return feed_url;
    },
    RequestVideoData: function() {
      USAEndShareCard.debug('[USAEndShareCard request video data]');
      $(".endcardymalheading").hide();
      // get GUID list
      var guids = [];
      USAEndShareCard.debug(USAEndShareCard.entries);
      for (var i in USAEndShareCard.entries) {
        if (typeof USAEndShareCard.entries[i].guid != 'undefined') {
          guids.push(USAEndShareCard.entries[i].guid);
        }
        else {
          delete USAEndShareCard.entries[i];
        }
      }

      USAEndShareCard.postMessage({
        'command': 'getVideoData',
        'args': [guids]
      });
    },
    messageHandler: function(e) {
      var data = e.data;
      var origin = e.origin;

      // check origin to be usanetwork.com and subdomains
      var domain = new RegExp("https?:\/\/.*\.?usanetwork.com");
      if (domain.test(origin) && typeof data.namespace !== 'undefined' && data.namespace == 'USAEndShareCard') {
        if (typeof data.message.command !== 'undefined') {
          var command = data.message.command;
          var args = (typeof data.message.args === 'object') ? data.message.args : [];
          if (typeof USAEndShareCard.handlers[command] === 'function') {
            USAEndShareCard.handlers[command](e, args);
          }
        }
      }
    },
    postMessage: function(data) {
      if (window.parent != window) {
        var message = {
          namespace: 'USAEndShareCard',
          message: data
        };
        window.parent.postMessage(message, '*');
      }
    }
  };

  /**
   * NBCUEndShareCard Overrides
   */
  NBCUEndShareCard.Initialize = function () {
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
    /*tpController.resetPlayer();
    for(var i = 0; i < NBCUEndShareCard.YMAL.length; i++){
      if(NBCUEndShareCard.YMAL[i].guid == sender.attr("data-guid")){
        NBCUEndShareCard.NowPlaying = NBCUEndShareCard.YMAL[i];
        break;
      }
    }
    tpController.pause(false);
    NBCUEndShareCard.ActivateMedia(true);*/
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
      USAEndShareCard.postMessage({
        command: 'videoNavigate',
        args: [$('.ymaltitlenext').attr('href')]
      });
    }
  }

  NBCUEndShareCard.GetYouMayAlsoLike = function(){
    NBCUEndShareCard.Debug("[GetYouMayAlsoLike]");
    var feedAnnex = NBCUEndShareCard.endCardFeedAnnex ? NBCUEndShareCard.endCardFeedAnnex : "";
    if (NBCUEndShareCard.IsStandAlone) {
      if(NBCUEndShareCard.HTML5){
        feedAnnex += "&byContent=byAssetTypes%3DHTML5+Video%26byFormat%3DMPEG4";
      }
    }
    if (!NBCUEndShareCard.AppearsToBeIE) {
      $.ajax({
        url: NBCUEndShareCard.Feed + feedAnnex, // TO-DO: define fields
        dataType: 'json',
        success: function(data) {
          USAEndShareCard.debug(NBCUEndShareCard.Feed + feedAnnex);
          NBCUEndShareCard.GetYouMayAlsoLikeSuccess(data);
        },
        error: function(data) { NBCUEndShareCard.Debug('[GetYouMayAlsoLike] error getting feed') }
      });
    } else {
      var yReq = new tpJSONRequest(NBCUEndShareCard.Feed + feedAnnex, "NBCUEndShareCard.GetYouMayAlsoLikeSuccess");
      yReq.send();
    }
  }

  NBCUEndShareCard.GetYouMayAlsoLikeSuccess = function(data) {
    USAEndShareCard.debug('[USAEndShareCard feed request]');
    USAEndShareCard.debug(data);
    USAEndShareCard.entries = data.entries;
    if (data.entries.length <= 1) {
      if (USAEndShareCard.clip != null) {
        if (USAEndShareCard.attempt < 1) {
          // request another feed
          USAEndShareCard.attempt++;
          NBCUEndShareCard.Feed = USAEndShareCard.getEndCardFeed(USAEndShareCard.clip, USAEndShareCard.attempt);
          NBCUEndShareCard.GetYouMayAlsoLike();
        }
      }
    }
    else {
      USAEndShareCard.RequestVideoData(data.entries);
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

      /// TODO : Implement this.
      /// Pick four most related items.


      var selectedItems = NBCUEndShareCard.PickMostRelatedItems(entries);
      /*if (selectedItems.length == 0) {
        // We failed to get the related itmes. Try to use the feed.
        selectedItems = entries;
      }*/


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
    var relatedContents = [];
    var currentShow = [];
    var currentPeople = [];
    var currentTitle = NBCUEndShareCard.NowPlaying.title;
    var currentIndex = NBCUEndShareCard.findTheCurrentIndex(arrData);
    NBCUEndShareCard.Debug("PickMostRelatedItems. CurrentIndex : " + currentIndex + " outof " + arrData.length);

    if (currentIndex < 0) {
      currentIndex = 0; // current video is not in this feed.
    }

    if (typeof arrData[currentIndex] == 'undefined') {
      return relatedContents;
    }

    if (NBCUEndShareCard.currentThumbnailUrl == "") {
      $(".endcardMainThumb").attr("src",  NBCUEndShareCard.GetDefaultThumbnail(arrData[currentIndex]));
    }

    if (NBCUEndShareCard.IsEmpty(NBCUEndShareCard.NowPlaying.pl1$show)) {
      currentShow = arrData[currentIndex].pl1$show;
      currentPeople = arrData[currentIndex].pl1$people;
    } else {
      currentShow = NBCUEndShareCard.NowPlaying.pl1$show;
      currentPeople = NBCUEndShareCard.NowPlaying.pl1$people;
    }

    if (!currentShow) {
      currentShow = [];
    }

    if (!currentPeople) {
      currentPeople = [];
    }

    NBCUEndShareCard.Debug("PickMostRelatedItems. CurrentShow : " + currentShow.join() + ", CurrentPeople : " + currentPeople.join() + ", CurrentTitle : " + currentTitle);
    if (currentTitle == "") {
      currentTitle = arrData[currentIndex].title;
      $(".emailvideotitle").html(currentTitle);
      $(".endcardvideotitle").html(currentTitle);
      $(".embedCardvideotitle").html(currentTitle);
      NBCUEndShareCard.currentTitle = currentTitle;
      NBCUEndShareCard.Debug("PickMostRelatedItems. Current Title is guessed : " + currentTitle);
    }

    if (relatedContents.length < 3) {
      NBCUEndShareCard.Debug("RelatedItems are not enough for show YET!. adding more.");
      for (var i = currentIndex; relatedContents.length < 3 && i < arrData.length; i++) {
        // Just add the next items in the feed.
        if (relatedContents.indexOf(arrData[i]) == -1 && currentTitle != arrData[i].title) {
          relatedContents.push(arrData[i]);
          NBCUEndShareCard.Debug("Select the related item from the feed. ItemIndex : " + i);
        }
      }
      if (relatedContents.length < 3) {
        // start from the beginning
        for (var i = 0; relatedContents.length < 3 && i < currentIndex; i++) {
          if (relatedContents.indexOf(arrData[i]) == -1 && currentTitle != arrData[i].title) {
            relatedContents.push(arrData[i]);
            NBCUEndShareCard.Debug("Select the related item from the feed. ItemIndex : " + i);
          }
        }
      }
    }
    return relatedContents;
  };
}
