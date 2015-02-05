var NBCUEndShareCard = {};

NBCUEndShareCard.CardBlockerHeight = "100%";
NBCUEndShareCard.AppearsToBeIE = false;
NBCUEndShareCard.AppearsToBeIELessThan10 = false;
NBCUEndShareCard.AppearToBeFF = false;
NBCUEndShareCard.HTML5 = false;
NBCUEndShareCard.ShareLink = "";
NBCUEndShareCard.NowPlaying = {
  title: "",
  description: ""
};
NBCUEndShareCard.autoPlay = false;
NBCUEndShareCard.countdown = 10;
NBCUEndShareCard.currentCountdown = 0;
NBCUEndShareCard.countdownTimer = null;

NBCUEndShareCard.Pa = true; // Playable? If the client is non-desktop and content is full episode, this value is false.

NBCUEndShareCard.SentFromEndCard = 0; // 0 is not from another card, 1 is from share card, 2 is from end card.
NBCUEndShareCard.isMediaSet = false;
NBCUEndShareCard.processingYMALRight = false;

NBCUEndShareCard.PlayerWidth = 660;  // Can be updated by tpconfig.playerWidth
NBCUEndShareCard.ScriptRoot = ""; // Can be updated by tpconfig.imageRoot
NBCUEndShareCard.ShareURL = ""; // Can be updated by tpconfig.shareURL. e.g. http://<YourSite>/videos/share.php
NBCUEndShareCard.Embed = ""; // Can be updated by tpconfig.embedURL e.g. http://<YourSite>/videos/embed/embed.php?/videos/small/<VIDEO>
NBCUEndShareCard.EmbedCode = "";
NBCUEndShareCard.Feed = ""; // Can be updated by tpconfig.endCardFeed
NBCUEndShareCard.embedWidth = "300";  // Can be updated by tpconfig.embedWidth
NBCUEndShareCard.embedHeight = "170";  // Can be updated by tpconfig.embedHeight
NBCUEndShareCard.endCardFeedAnnex = null;  // Can be updated by tpconfig.endCardFeedAnnex
NBCUEndShareCard.emailUrl = "";
NBCUEndShareCard.currentTitle = "";
NBCUEndShareCard.disableEndcard = false;
NBCUEndShareCard.currentThumbnailUrl = "";
NBCUEndShareCard.facebookPlayer = "";
NBCUEndShareCard.currentPid = "";
NBCUEndShareCard.embedCardPlacholderWidthText = 'width';
NBCUEndShareCard.embedCardPlacholderHeightText = 'height';

NBCUEndShareCard.version = "13.04.04.0";

var tpController = $pdk.controller;

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
  if ($pdk.parentUrl) {
    cwd = $pdk.parentUrl.replace(/\/$/, "");
    cwd = cwd.split("/");
    cwd.splice(cwd.length - 1, 1);
    cwd = cwd.join("/");
  } else if (tpconfig && tpconfig.imageRoot) {
    cwd = tpconfig.imageRoot;
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

NBCUEndShareCard.Debug = function (log) {
  if (typeof window.console !== "undefined") {
    if (typeof window.console.log !== "undefined") {
      console.log("[EndShareCard] "+ log);
    }
  }
};

NBCUEndShareCard.DebugWarn = function (log) {
  NBCUEndShareCard.Debug(log);
};

NBCUEndShareCard.AddTask = function (task) {
  NBCUEndShareCard.Debug("task added: " + task.type)
};

NBCUEndShareCard.hasGuid = function (item) {
  return (item["guid"] && item.guid != "");
}

NBCUEndShareCard.IsEmpty = function(input) {
  if(input === null || input === undefined || input === ""){
    return true;
  } else {
    return false;
  }
};

NBCUEndShareCard.setMedia = function (clip) {
  NBCUEndShareCard.NowPlaying = clip.baseClip;
  // TODO: Based on the window width, create the proper end card??
  var titleStr = NBCUEndShareCard.NowPlaying.title;
  if (NBCUEndShareCard.IsEmpty(titleStr)) {
    titleStr = clip.title;
    if (!NBCUEndShareCard.IsEmpty(titleStr)) {
      NBCUEndShareCard.NowPlaying.title = titleStr;
      NBCUEndShareCard.Debug("NowPlayer title is set to " + titleStr);
    }
  }
  if (!NBCUEndShareCard.IsEmpty(titleStr)  && !NBCUEndShareCard.isMediaSet) {

    NBCUEndShareCard.BuildNewEndCard();
    NBCUEndShareCard.BuildEmailCard();
    NBCUEndShareCard.BuildEmbedCard();
    if (NBCUEndShareCard.Feed != "") {
      NBCUEndShareCard.GetYouMayAlsoLike();
    }

    NBCUEndShareCard.ShareLink = NBCUEndShareCard.ShareURL;
    if (NBCUEndShareCard.ShareLink != "") {
      NBCUEndShareCard.ShareLink = NBCUEndShareCard.ShareURL.replace("<VIDEO>","_vid" + NBCUEndShareCard.NowPlaying.guid);
      NBCUEndShareCard.ShareLink = NBCUEndShareCard.ShareLink.replace("<GUID>", NBCUEndShareCard.NowPlaying.guid);
      NBCUEndShareCard.ShareLink = NBCUEndShareCard.ShareLink.replace("<RID>", NBCUEndShareCard.NowPlaying.releaseID);
    } else {
      NBCUEndShareCard.ShareLink = window.location.href;
    }

    if (NBCUEndShareCard.Embed != "") {
      NBCUEndShareCard.EmbedCode = NBCUEndShareCard.Embed.replace("<VIDEO>","_vid" + NBCUEndShareCard.NowPlaying.guid);
      NBCUEndShareCard.EmbedCode = NBCUEndShareCard.EmbedCode.replace("<GUID>", NBCUEndShareCard.NowPlaying.guid);
      NBCUEndShareCard.EmbedCode = NBCUEndShareCard.EmbedCode.replace("<RID>", NBCUEndShareCard.NowPlaying.releaseID);
    } else {
      NBCUEndShareCard.EmbedCode = window.location.href;
    }

    //$(".urllinktext, .endcardlinktext, .endcardlinktextFF").val('<iframe width="' + NBCUEndShareCard.embedWidth +'" height="' + NBCUEndShareCard.embedHeight + '" frameborder="0" scrolling="no" src="' + NBCUEndShareCard.EmbedCode + '"></iframe>');

    $(".emailvideotitle").html(titleStr);
    $(".endcardvideotitle").html(titleStr);
    $(".embedCardvideotitle").html(titleStr);
    NBCUEndShareCard.currentTitle = titleStr;

    $(".endcardtext").val(window.location.toString());
    NBCUEndShareCard.isMediaSet = true;
    NBCUEndShareCard.Debug("Media set to " + titleStr )
  } else {
    NBCUEndShareCard.Debug("Failed to set media. Both Clip title and baseClip title are empty");
  }
}

NBCUEndShareCard.OnSetReleaseUrl = function (releaseUrlObj) {
  var jsonUrl = '';

  if (releaseUrlObj.data !== '') {
    var urlArray = releaseUrlObj.data.split("?");
    jsonUrl = urlArray[0] + '?' + '&format=script';
  }
  else {
    return;
  }

  $.getJSON(jsonUrl, function (data) {
    NBCUEndShareCard.currentThumbnailUrl = data.defaultThumbnailUrl;
  });
}

NBCUEndShareCard.OnMediaStart = function (evt) {
  NBCUEndShareCard.Debug("[OnMediaStart]");
  if (!NBCUEndShareCard.isMediaSet) {
    var clip = evt.data;
    NBCUEndShareCard.setMedia(clip);
  }
};


NBCUEndShareCard.OnReleaseStart = function (evt) {
  NBCUEndShareCard.Debug("[OnReleaseStart]");
  NBCUEndShareCard.isMediaSet = false;
  var playlist = evt.data;
  var clip = playlist.clips[0];
  var clips = playlist.clips;
  /*for (var i = 0; i < clips.length; i++) {
   var item = clips[i];
   if (!item.baseClip.isAd) {
   NBCUEndShareCard.currentPid = item.baseClip.releaseID;
   break;
   }
   }*/
  NBCUEndShareCard.currentPid = playlist.releasePID;
  NBCUEndShareCard.setMedia(clip);
}

NBCUEndShareCard.ToggleUrlLink = function(forcedAction) {
  NBCUEndShareCard.Debug("[ToggleUrlLink]");
  if(!NBCUEndShareCard.IsEmpty(forcedAction)){
    if(forcedAction == "h"){
      $(".urllinkinner").fadeOut("slow");
      tpController.dispatchEvent("OnCloseUrlLink",null);
      tpController.dispatchEvent("OnReleaseRackHide","embedLink");
    } else {
      tpController.showFullScreen(false);
      $(".urllinkinner").fadeIn("slow");
      tpController.dispatchEvent("OnPreventRackHide","embedLink");
    }
  } else {
    if(!$(".urllinkinner").is(":visible")){
      tpController.showFullScreen(false);
      $(".urllinkinner").fadeIn("slow");
      tpController.dispatchEvent("OnPreventRackHide","embedLink");
    } else {
      $(".urllinkinner").fadeOut("slow");
      tpController.dispatchEvent("OnCloseUrlLink",null);
      tpController.dispatchEvent("OnReleaseRackHide","embedLink");
    }
  }
};


NBCUEndShareCard.BuildNewEndCard = function(){
  NBCUEndShareCard.Debug("[BuildEndCard]");
  $(".endcardblocker").remove();

  var thumbUrl = 'about:blank';
  if(NBCUEndShareCard.currentThumbnailUrl && NBCUEndShareCard.currentThumbnailUrl !== ''){
    thumbUrl = NBCUEndShareCard.currentThumbnailUrl;
  }

  var endCardBlocker = $('<div class="endcardblocker" style="height:' + NBCUEndShareCard.CardBlockerHeight + ';"></div>');
  var endCardDark = $('<div class="endcarddark"></div>'); endCardBlocker.append(endCardDark);
  var endCardSheath = $('<div class="endcardsheath"></div>'); endCardBlocker.append(endCardSheath);
  var endCardInner = $('<div class="endcardinner cardInner"></div>'); endCardSheath.append(endCardInner);
  var heading = $('<div class="endcardheading"></div>'); endCardInner.append(heading);
  var headingTable = $('<table></table>'); heading.append(headingTable);
  var headingTblTr = $('<tr></tr>');
  var imageTd = $('<td></td>');
  var thumb = $('<img src="'+thumbUrl+'" class="endcardMainThumb" />'); imageTd.append(thumb);
  var replay = $('<a class="endcardreplay" data-guid="'+this.NowPlaying.guid+'" href="#"></a>'); imageTd.append(replay);
  headingTblTr.append(imageTd);
  var headingElements = $('<td class="endcardTitleTd"><div class="endcardgenericheading">Replay</div><div class="endcardvideotitle"></div></td>'); headingTblTr.append(headingElements);
  headingTable.append(headingTblTr);
  var social = $('<div class="endcardsocialheading">Share this video:</div>'); endCardInner.append(social);
  var socialButtons = $('<div class="socialButtons"></div>'); endCardInner.append(socialButtons);
  var em = $('<a href="#" class="socialem social"></a>'); socialButtons.append(em);
  var fb = $('<a href="#" class="socialfb social"></a>'); socialButtons.append(fb);
  var tw = $('<a href="#" class="socialtw social"></a>'); socialButtons.append(tw);
  var su = $('<a href="#" class="socialsu social"></a>'); socialButtons.append(su);
  var dg = $('<a href="#" class="socialdg social"></a>'); socialButtons.append(dg);
  var rd = $('<a href="#" class="socialrd social"></a>'); socialButtons.append(rd);
  var p1 = $('<a href="#" class="socialp1 social"></a>'); socialButtons.append(p1);
  var p2 = $('<div class="socialp1wrap"><g:plusone annotation="none" href="' + NBCUEndShareCard.ShareURL + '"></g:plusone></div>'); socialButtons.append(p2);
  /*var linkTextLabel = ""; if(NBCUEndShareCard.PlayerWidth < 545){linkTextLabel = '<p class="endcardlabel">Direct link:</p>'};
   if (NBCUEndShareCard.AppearToBeFF) {
   // to resolve the text selection issue on FF.
   var linkText = $(linkTextLabel + '<input type="text" class="endcardlinktextFF" value=" ' + window.location.toString() + '" />'); endCardInner.append(linkText);
   var separator = $('<div class="endcardseparatorFF"></div>'); endCardInner.append(separator);
   } else {
   var linkText = $(linkTextLabel + '<input type="text" class="endcardlinktext" value=" ' + window.location.toString() + '" />'); endCardInner.append(linkText);
   var separator = $('<div class="endcardseparator"></div>'); endCardInner.append(separator);
   }*/
  var ymalHeading = $('<div class="endcardymalheading">You may also like:</div>'); endCardInner.append(ymalHeading); ymalHeading.hide();
  var endCardCloseButton = $('<a href="#" class="endCardCloseButton cardCloseButton"></a>'); endCardBlocker.append(endCardCloseButton);
  var embedText;
  if (NBCUEndShareCard.AppearToBeFF) {
    embedText = $('<div style="display:none;"><p class="endcardlabel">Embed code:</p><div class="endcardembedtextwrap"><div class="endcardembedtextsheath"><input type="text" class="endcardembedtextFF" value="" /></div></div></div>');
  } else {
    embedText = $('<div style="display:none;"><p class="endcardlabel">Embed code:</p><div class="endcardembedtextwrap"><div class="endcardembedtextsheath"><input type="text" class="endcardembedtext" value="" /></div></div></div>');
  }
  endCardInner.append(embedText);

  replay.click(function(e){
    e.preventDefault();
    NBCUEndShareCard.ReplayVideo($(this));
  });

  em.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShowEmailCard(NBCUEndShareCard.SentFromEndCard);})
  fb.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('fb');})
  tw.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('tw');})
  su.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('su');})
  dg.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('dg');})
  rd.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('rd');})
  p1.click(function(evt){evt.preventDefault(); NBCUEndShareCard.ShareSocial('p1');})

  endCardCloseButton.click(function(e){
    e.preventDefault();
    NBCUEndShareCard.HideEndCard("CLOSE");
  })

  if(!NBCUEndShareCard.AppearsToBeIE){
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  }

  $("#player").append(endCardBlocker);
}

NBCUEndShareCard.ShowEndCard = function(){
  NBCUEndShareCard.Debug("[ShowEndCard]");
  NBCUEndShareCard.ToggleUrlLink("h");
  tpController.pause(true);
  tpController.showFullScreen(false);
  tpController.dispatchEvent("OnPreventRackHide","endCard");
  $(".endcardgenericheading").html("Replay");

  if (NBCUEndShareCard.countdown && NBCUEndShareCard.countdown > 0 && NBCUEndShareCard.Feed != "") {
    if ($('.ymalcountdown').length == 0 || !$('.ymalcountdown').hasClass('ymalcountdownpaused')) {
      if(NBCUEndShareCard.countdownTimer) {
        clearInterval(NBCUEndShareCard.countdownTimer);
        NBCUEndShareCard.countdownTimer = null;
      }
      NBCUEndShareCard.currentCountdown = NBCUEndShareCard.countdown;
      NBCUEndShareCard.countdownTimer = setInterval(NBCUEndShareCard.onCountdown, 1000);
    }
  }
  $(".endcardreplay").css({'background': 'url("'+NBCUEndShareCard.ScriptRoot+'images/replay.png") no-repeat scroll 0 0 transparent'}).removeClass("endcardreplayshare").addClass("endcardreplaynormal");;
  $(".endcardreplay").unbind('click');
  $(".endcardreplay").click(function(e){
    e.preventDefault();
    NBCUEndShareCard.ReplayVideo($(this));
  });
  $(".endcardMainThumb").hide();
  $(".endcardblocker .endCardCloseButton").hide();
  $(".endcardinner").removeClass("sharemode");
  $(".endcardsocialheading").removeClass("shsharemode");
  $(".endcardTitleTd").removeClass("endcardTitleTdShare");
  $(".endcardgenericheading").removeClass("endcardheadingshare").addClass("endcardheadingnormal");
  $(".endcardvideotitle").removeClass("endcardheadingshare").addClass("endcardheadingnormal");
  if (NBCUEndShareCard.Feed != "") {
    $(".endcardymalheading").show();
    $(".endcardymalitems").show();
  }
  if($(".endcardymalheading").css("display") != "none"){
    if (NBCUEndShareCard.AppearToBeFF) {
      $(".endcardseparatorFF").show();
    } else {
      $(".endcardseparator").show();
    }
  }
  NBCUEndShareCard.SentFromEndCard = 2;
  $(".endcardblocker").fadeIn("slow");
}

NBCUEndShareCard.HideEndCard = function(r){
  NBCUEndShareCard.Debug("[HideEndCard (" + r + ")]");
  tpController.dispatchEvent("OnReleaseRackHide","endCard");

  if(NBCUEndShareCard.countdownTimer) {
    clearInterval(NBCUEndShareCard.countdownTimer);
    NBCUEndShareCard.countdownTimer = null;
  }
  switch(r){
    case "RP":
      $(".endcardblocker").fadeOut('slow');
      break;
    case "UP":
      $(".endcardblocker").fadeOut("fast",function(){tpController.pause(false)});
      break;
    case "CLOSE":
      $(".endcardblocker").fadeOut("fast",function(){tpController.hidePlayerCard("forms");});
      break;
    case "SS":
      $(".endcardblocker").fadeOut("fast",function(){});
      break;
    case "PRV":
      $(".endcardblocker").fadeOut("fast",function(){});
      break;
    default:
      $(".endcardblocker").fadeOut("fast",function(){});
      if(NBCUEndShareCard.HTML5){
        NBCUEndShareCard.AddTask({"type":"playerover","data":{"delay":1000}});
      }
      break;
  }
}

NBCUEndShareCard.BuildEmbedCard = function(){
  NBCUEndShareCard.Debug("[BuildembedCard]");
  $(".embedCardblocker").remove();
  var embedCardBlocker = $('<div class="embedCardblocker"></div>');
  var embedCardDark = $('<div class="embedCarddark"></div>'); embedCardBlocker.append(embedCardDark);
  var embedCardInner = $('<div class="embedCardinner cardInner"></div>'); embedCardBlocker.append(embedCardInner);
  var heading = $('<div class="embedCardheading"><span class="embedCardgenericheading">Embed</span><span class="embedCardvideotitle"></span></div>'); embedCardInner.append(heading);
  var embed = $('<span class="embedCardembed"></span>'); heading.append(embed);
  var select = $('<div class="embedCardselect"><div class="embedCardselectheading">1. Select your size:</div></div>'); embedCardInner.append(select);

  var selectStr = '';
  if(NBCUEndShareCard.AppearsToBeIELessThan10){
    selectStr = '<div class="embedCardselections"><div class="embedCardselection1 embedCardselection">960x720</div><div class="embedCardselection2 embedCardselection">640x480</div><div class="embedCardselection3 embedCardselection">480x360</div><div class="embedCardselection4 embedCardselection">420x315</div>' +
    '<div class="embedCardCustomDivider"></div><div class="embedCardselectioncustom"><div class="embedCardselectioncustomTitle">Choose a custom size</div><div class="embedCardselectioncustomSize"><input type="text" value="' + NBCUEndShareCard.embedCardPlacholderWidthText + '" class="embedCardCustomW" /> X <input type="text" value="' + NBCUEndShareCard.embedCardPlacholderHeightText + '" class="embedCardCustomH" /></div></div></div>';
  }
  else {
    selectStr = '<div class="embedCardselections"><div class="embedCardselection1 embedCardselection">960x720</div><div class="embedCardselection2 embedCardselection">640x480</div><div class="embedCardselection3 embedCardselection">480x360</div><div class="embedCardselection4 embedCardselection">420x315</div>' +
    '<div class="embedCardCustomDivider"></div><div class="embedCardselectioncustom"><div class="embedCardselectioncustomTitle">Choose a custom size</div><div class="embedCardselectioncustomSize"><input type="text" placeholder="' + NBCUEndShareCard.embedCardPlacholderWidthText + '"  class="embedCardCustomW" /> X <input type="text" placeholder="' + NBCUEndShareCard.embedCardPlacholderHeightText + '" class="embedCardCustomH" /></div></div></div>';
  }

  var selections = $(selectStr);
  select.append(selections);
  var embed = $('<div class="embedCardembedcode"><div class="embedCardembedheading">2. Copy embed code:</div></div>'); embedCardInner.append(embed);
  if (NBCUEndShareCard.AppearToBeFF) {
    var embedCode = $('<textarea class="embedCardembedcodesetionFF embedCardembedcodeinput"></textarea>'); embed.append(embedCode);
  } else {
    var embedCode = $('<textarea class="embedCardembedcodesetion embedCardembedcodeinput"></textarea>'); embed.append(embedCode);
  }
  var embedCardCloseButton = $('<a href="#" class="embedCardclosebutton cardCloseButton"></a>'); embedCardBlocker.append(embedCardCloseButton);

  embedCardCloseButton.click(function(evt){
    evt.preventDefault();
    $(".embedCardblocker").fadeOut("fast",function(){tpController.hidePlayerCard("forms");});
  })

  $("#player").append(embedCardBlocker);
  $(".embedCardCustomW").change(function(){
    NBCUEndShareCard.OnCustomSizeChange();
  });
  $(".embedCardCustomH").change(function(){
    NBCUEndShareCard.OnCustomSizeChange();
  });
  $(".embedCardCustomW").focus(function(){
    NBCUEndShareCard.OnCustomSizeChange();
    if(NBCUEndShareCard.AppearsToBeIELessThan10){
      if($(this).val() === NBCUEndShareCard.embedCardPlacholderWidthText){
        $(this).val('');
      }
    }
  });
  $(".embedCardCustomH").focus(function(){
    NBCUEndShareCard.OnCustomSizeChange();
    if(NBCUEndShareCard.AppearsToBeIELessThan10){
      if($(this).val() === NBCUEndShareCard.embedCardPlacholderHeightText){
        $(this).val('');
      }
    }
  });

  if(NBCUEndShareCard.AppearsToBeIELessThan10){
    $(".embedCardCustomW").blur(function(){
      if($(this).val() === ''){
        $(this).val(NBCUEndShareCard.embedCardPlacholderWidthText);
      }
    });
    $(".embedCardCustomH").blur(function(){
      if($(this).val() === ''){
        $(this).val(NBCUEndShareCard.embedCardPlacholderHeightText);
      }
    });
  }
  $(".embedCardselection1").click(NBCUEndShareCard.OnEmbedSize1Selected);
  $(".embedCardselection2").click(NBCUEndShareCard.OnEmbedSize2Selected);
  $(".embedCardselection3").click(NBCUEndShareCard.OnEmbedSize3Selected);
  $(".embedCardselection4").click(NBCUEndShareCard.OnEmbedSize4Selected);
  NBCUEndShareCard.OnEmbedSize2Selected();
}

NBCUEndShareCard.OnCustomSizeChange = function (evt) {
  var width = parseInt($(".embedCardCustomW").val());
  var height = parseInt($(".embedCardCustomH").val());
  if (!isNaN(width) && !isNaN(height)) {
    NBCUEndShareCard.UpdateEmbedCode( NBCUEndShareCard.GenerateEmbedCode(width, height));
    NBCUEndShareCard.MakeSelection("");
  }
}

NBCUEndShareCard.MakeSelection = function (classname) {
  $(".embedCardselection").removeClass("embedCardSelected");
  if (classname != "") {
    $(classname).addClass("embedCardSelected");
  }
}

NBCUEndShareCard.OnEmbedSize1Selected = function (evt) {
  NBCUEndShareCard.MakeSelection(".embedCardselection1");
  NBCUEndShareCard.UpdateEmbedCode( NBCUEndShareCard.GenerateEmbedCode(960, 720));
}

NBCUEndShareCard.OnEmbedSize2Selected = function (evt) {
  NBCUEndShareCard.MakeSelection(".embedCardselection2");
  NBCUEndShareCard.UpdateEmbedCode( NBCUEndShareCard.GenerateEmbedCode(640, 480));
}

NBCUEndShareCard.OnEmbedSize3Selected = function (evt) {
  NBCUEndShareCard.MakeSelection(".embedCardselection3");
  NBCUEndShareCard.UpdateEmbedCode( NBCUEndShareCard.GenerateEmbedCode(480, 360));
}

NBCUEndShareCard.OnEmbedSize4Selected = function (evt) {
  NBCUEndShareCard.MakeSelection(".embedCardselection4");
  NBCUEndShareCard.UpdateEmbedCode( NBCUEndShareCard.GenerateEmbedCode(420, 315));
}

NBCUEndShareCard.GenerateEmbedCode = function (w,h) {
  NBCUEndShareCard.Debug("[GenerateEmbeCode]");
  var code = '<iframe width="' + w +'" height="' + h + '" frameborder="0" scrolling="no" src="' + NBCUEndShareCard.EmbedCode + '"></iframe>';
  return code;
}

NBCUEndShareCard.UpdateEmbedCode = function (embedCode) {
  $(".embedCardembedcodeinput").val(embedCode);
}

NBCUEndShareCard.ShowEmbedCard = function(){
  NBCUEndShareCard.Debug("[ShowEmbedCard]");
  tpController.pause(true);
  tpController.showFullScreen(false);
  NBCUEndShareCard.OnEmbedSize2Selected();
  tpController.dispatchEvent("OnPreventRackHide","endCard");
//	$(".endcardreplay").css({'background': 'url("'+NBCUEndShareCard.ScriptRoot+'images/replay.png") no-repeat scroll 0 0 transparent', 'top': '0px'});
  $(".embedCardblocker").fadeIn("slow");
}

NBCUEndShareCard.ShowShareCard = function(){
  NBCUEndShareCard.Debug("[ShowShareCard]");
  tpController.pause(true);
  tpController.showFullScreen(false);
  tpController.dispatchEvent("OnPreventRackHide","shareCard");
  NBCUEndShareCard.SentFromEndCard = 1;
  $(".endcardgenericheading").html("You are watching:");
  $(".endcardreplay").css({'background': 'url("'+NBCUEndShareCard.ScriptRoot+'images/play.png") no-repeat scroll 0 0 transparent'}).removeClass("endcardreplaynormal").addClass("endcardreplayshare");
  $(".endcardMainThumb").show();
  $(".endcardinner").addClass("sharemode");
  $(".endcardsocialheading").addClass("shsharemode");
  $(".endcardTitleTd").addClass("endcardTitleTdShare");
  $(".endcardreplay").unbind('click');
  $(".endcardreplay").click(function(evt){evt.preventDefault(); NBCUEndShareCard.HideEndCard("UP");})
  $(".endcardgenericheading").removeClass("endcardheadingnormal").addClass("endcardheadingshare");
  $(".endcardvideotitle").removeClass("endcardheadingnormal").addClass("endcardheadingshare");
  $(".endcardymalheading").hide();
  $(".endcardymalitems").hide();
  if (NBCUEndShareCard.AppearToBeFF) {
    $(".endcardseparatorFF").hide();
  } else {
    $(".endcardseparator").hide();
  }
  $(".endCardCloseButton").show();
  $(".endcardblocker").fadeIn("slow");
}

NBCUEndShareCard.ShareSocial = function(sm){
  NBCUEndShareCard.Debug("[ShareSocial]");
  switch(sm){
    case "em":
      NBCUEndShareCard.ShowEmailCard(0);
      break;
    case "fb":
      var facebookPlayer = NBCUEndShareCard.ShareLink;
      if (NBCUEndShareCard.facebookPlayer) {
        facebookPlayer = NBCUEndShareCard.facebookPlayer + "/select/" + NBCUEndShareCard.currentPid;
      }

      window.open ("https://www.facebook.com/sharer/sharer.php?u=" + facebookPlayer + "&t=" + encodeURIComponent(NBCUEndShareCard.NowPlaying.title),"sharefacebook");
      break;
    case "tw":
      window.open ("https://twitter.com/intent/tweet?text=" + encodeURIComponent(NBCUEndShareCard.NowPlaying.title) + encodeURIComponent(" -- ") + encodeURIComponent(NBCUEndShareCard.ShareLink),"sharetwitter");
      break;
    case "su":
      window.open ("http://www.stumbleupon.com/submit?url=" + NBCUEndShareCard.ShareLink + "&title=" + encodeURIComponent(NBCUEndShareCard.NowPlaying.title),"sharestumble");
      break;
    case "dg":
      window.open ("http://digg.com/submit?phase=2&url=" + NBCUEndShareCard.ShareLink + "&title=" + encodeURIComponent(NBCUEndShareCard.NowPlaying.title),"sharedigg");
      break;
    case "rd":
      window.open ("http://reddit.com/submit?url=" + NBCUEndShareCard.ShareLink + "&title=" + encodeURIComponent(NBCUEndShareCard.NowPlaying.title),"sharereddit");
      break;
    case "p1":
      break;
    default:
      break;
  }
};

NBCUEndShareCard.BuildEmailCard = function(){
  NBCUEndShareCard.Debug("[BuildEmailCard]");

  $(".emailblocker").remove();
  var emailBlocker = $('<div class="emailblocker" style="height:' + NBCUEndShareCard.CardBlockerHeight + ';"></div>');
  var emailDark = $('<div class="emaildark"></div>'); emailBlocker.append(emailDark);
  var emailInner = $('<div class="emailInner cardInner"></div>'); emailBlocker.append(emailInner);
  var heading = $('<div class="emailheading"><span class="emailgenericheading">Email to a friend</span><span class="emailvideotitle"></span></div>'); emailInner.append(heading);
  var emailCloseButton = $('<a href="#" class="endCardCloseButton cardCloseButton"></a>'); emailBlocker.append(emailCloseButton);

  var table = $('<table class="emailtable"></table>'); emailInner.append(table);
  var tbody = $('<tbody></tbody>'); table.append(tbody);
  var row1 = $('<tr class="emailrow1"></tr>'); tbody.append(row1);
  var fNameLabel = $('<td class="emaillabelcell"><label class="emailfriendnamelabel">Friend&#39;s Name:</label></td>'); row1.append(fNameLabel);
  var fName = $('<td class="emailpr10"><input type="text" class="emailfriendname"/></td>'); row1.append(fName);
  var fEmailLabel = $('<td class="emaillabelcell"><label class="emailfriendemaillabel">Friend&#39;s Email:</label></td>'); row1.append(fEmailLabel);
  var fEmail = $('<td class="emailInputs"><input type="text" class="emailfriendemail"/></td>'); row1.append(fEmail);

  var row2 = $('<tr class="emailrow2"></tr>'); tbody.append(row2);
  var yNameLabel = $('<td class="emaillabelcell"><label class="emailyournamelabel">Your Name:</label></td>'); row2.append(yNameLabel);
  var yName = $('<td class="emailpr10"><input type="text" class="emailyourname"/></td>'); row2.append(yName);
  var yEmailLabel = $('<td class="emaillabelcell"><label class="emailyouremaillabel">Your Email:</label></td>'); row2.append(yEmailLabel);
  var yEmail = $('<td class="emailInputs"><input type="text" class="emailyouremail"/></td>'); row2.append(yEmail);

  var row4 = $('<tr class="emailrow4"></tr>'); tbody.append(row4);
  var messageLabel = $('<td valign="top"><label class="emailmessagelabel">Message:</label></td>'); row4.append(messageLabel);
  var message = $('<td colspan="3"><textarea cols="1" rows="1" class="emailmessage"></textarea></td>'); row4.append(message);

  var row5 = $('<tr class="emailrow5"><td></td></tr>'); tbody.append(row5);
  var row5col = $('<td colspan="3"></td>'); row5.append(row5col);
  var submit = $('<a href="#" class="emailsubmit">Submit</a>'); row5col.append(submit);

  $("#player").append(emailBlocker);
  submit.click(function(evt){evt.preventDefault();NBCUEndShareCard.SendEmail();});
  emailCloseButton.click(function(evt){evt.preventDefault();NBCUEndShareCard.HideEmailCard();});
};

NBCUEndShareCard.ShowEmailCard = function(fromCard){
  NBCUEndShareCard.Debug("[ShowEmailCard]");
  NBCUEndShareCard.SentFromEndCard = fromCard;
  tpController.pause(true);
  tpController.showFullScreen(false);
  tpController.dispatchEvent("OnPreventRackHide","emailCard");
  $(".emailblocker").fadeIn("slow");
  if (fromCard != 0) {
    NBCUEndShareCard.HideEndCard();
  }
}

NBCUEndShareCard.HideEmailCard = function(){
  NBCUEndShareCard.Debug("[HideEmailCard]");
  $(".emailblocker").fadeOut("fast",function(){NBCUEndShareCard.ClearEmailForm();});
  if(NBCUEndShareCard.SentFromEndCard == 1){
    NBCUEndShareCard.ShowShareCard();
  } else if (NBCUEndShareCard.SentFromEndCard == 2){
    NBCUEndShareCard.ShowEndCard();
  } else {
    tpController.dispatchEvent("OnReleaseRackHide","emailCard");
  }
}

NBCUEndShareCard.ClearEmailForm = function(){
  NBCUEndShareCard.Debug("[ClearEmailForm]");
  $(".emailfriendname").val("");
  $(".emailfriendemail").val("");
  $(".emailyourname").val("");
  $(".emailyouremail").val("");
  $(".emailmessage").val("");
  tpController.dispatchEvent("OnCloseEmailForm",null);
};

NBCUEndShareCard.SendEmail = function(){
  NBCUEndShareCard.Debug("[SendEmail]");
  var greenLight = true;
  var emailErrorMessage = "";

  if(greenLight){
    if(NBCUEndShareCard.IsEmpty($('.emailfriendname').val())){
      greenLight = false;
      emailErrorMessage = "Sorry, you must provide your friend's name.";
    }
  }

  if(greenLight){
    if(!NBCUEndShareCard.IsValidEmail($('.emailfriendemail').val())){
      greenLight = false;
      emailErrorMessage = "Sorry, your friend's email address doesn't appear to be correct.";
    }
  }

  if(greenLight){
    if(NBCUEndShareCard.IsEmpty($('.emailyourname').val())){
      greenLight = false;
      emailErrorMessage = "Sorry, you must provide your name.";
    }
  }

  if(greenLight){
    if(!NBCUEndShareCard.IsValidEmail($('.emailyouremail').val())){
      greenLight = false;
      emailErrorMessage = "Sorry, your email address doesn't appear to be correct.";
    }
  }

  if(greenLight){
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: NBCUEndShareCard.emailUrl,
      data: 	'friendsName=' + $('.emailfriendname').val() +
      '&friendsEmail=' + $('.emailfriendemail').val() +
      '&yourName=' + $('.emailyourname').val() +
      '&yourEmail=' + $('.emailyouremail').val() +
      '&message=' + $('.emailmessage').val() +
      '&link=' + NBCUEndShareCard.ShareURL,
      success: function (response) {
        if(response.success.toString() != '1'){
          emailErrorMessage = "Sorry, a problem occurred and we could not send your email.\n\n";
          for(var i = 0; i < response.errors.length; i++){
            try{
              emailErrorMessage += response.errors[i].description + "\n";
            } catch(e){}
          }
          alert(emailErrorMessage);
        } else {
          NBCUEndShareCard.HideEmailCard();
        }
      },
      error: function (jqXHR, response, errorMsg) {
        if (NBCUEndShareCard.IsEmpty(errorMsg)) {
          errorMsg = jqXHR.state();
        }
        var emailErrorMessage = "Sorry, a problem occurred and we could not send your email.\n\n" + response + ":" + errorMsg;
        alert(emailErrorMessage);
        NBCUEndShareCard.HideEmailCard();
      }
    });
  } else {
    alert(emailErrorMessage);
  }
};

NBCUEndShareCard.IsValidEmail = function(str){
  NBCUEndShareCard.Debug("[IsValidEmail]");
  if(NBCUEndShareCard.IsEmpty(str)){
    return false;
  }
  var emailRe = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if(!emailRe.test(str)){
    return false;
  } else {
    return true;
  }
};

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
      success: function(data){NBCUEndShareCard.ParseYouMayAlsoLikeNew(data)}
    });
  } else {
    var yReq = new tpJSONRequest(NBCUEndShareCard.Feed + feedAnnex, "NBCUEndShareCard.ParseYouMayAlsoLikeNew");
    yReq.send();
  }
}

NBCUEndShareCard.getFormattedCountdown = function (insec) {
  var min = Math.floor(insec / 60);
  var sec = insec - (min * 60);
  var formatted = ((min < 10) ? "0" + min.toString() : min.toString()) + ":";
  formatted += (sec < 10) ? "0" + sec.toString() : sec.toString();
  return formatted;
}

NBCUEndShareCard.onCountdown = function (evt) {
  NBCUEndShareCard.currentCountdown--;
  if (NBCUEndShareCard.currentCountdown > 0) {
    $(".ymalcountdown").html(NBCUEndShareCard.getFormattedCountdown(NBCUEndShareCard.currentCountdown));
  } else {
    clearInterval(NBCUEndShareCard.countdownTimer);
    NBCUEndShareCard.PlayRelatedVideo($('.ymaltitlenext'));
  }
}

NBCUEndShareCard.findTheCurrentIndex = function (arrVideo) {
  var foundIndex = -1;
  for (var i=0; i < arrVideo.length; i++) {
    if (arrVideo[i].title == NBCUEndShareCard.currentTitle || arrVideo[i].title == NBCUEndShareCard.NowPlaying.title) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

NBCUEndShareCard.onTimerClick = function () {
  if (NBCUEndShareCard.countdownTimer) {
    // Pause the timer
    clearInterval(NBCUEndShareCard.countdownTimer);
    NBCUEndShareCard.countdownTimer = null;
    $(".ymalcountdown").addClass("ymalcountdownpaused");
    $(".ymalcountdownpause").html("Click to resume").addClass("ymalcountdownpaused");
  } else {
    NBCUEndShareCard.countdownTimer = setInterval(NBCUEndShareCard.onCountdown, 1000);
    $(".ymalcountdown").removeClass("ymalcountdownpaused");
    $(".ymalcountdownpause").html("Click to pause").removeClass("ymalcountdownpaused");;
  }
}

// Mached if target has one of filter items.
NBCUEndShareCard.isMatched = function (arrTarget, arrFilter) {
  var fMatched = false;

  if (NBCUEndShareCard.IsEmpty(arrTarget) || NBCUEndShareCard.IsEmpty(arrFilter)) {
    return false;
  }

  for (var i = 0; i < arrFilter.length && !fMatched; i++) {
    if (arrTarget.indexOf(arrFilter[i]) >= 0) {
      fMatched = true;
    }
  }

  return fMatched;
}

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

  // Find 3 items for the selected show

  /*
   for (var i = currentIndex;(i < arrData.length && relatedContents.length < 3); i++) {
   if (NBCUEndShareCard.isMatched(arrData[i].pl1$show,currentShow) && currentTitle != arrData[i].title) {
   relatedContents.push(arrData[i]);
   NBCUEndShareCard.Debug("Select the related item from feed based on show. ItemIndex : " + i);
   }
   }
   */

  // Find items for the selected people

  /*
   if (relatedContents.length < 3) {
   NBCUEndShareCard.Debug("RelatedItems are not enough for show. adding more based on person.");
   for (var i = currentIndex; (i < arrData.length && relatedContents.length < 3); i++) {
   if (NBCUEndShareCard.isMatched(arrData[i].pl1$people, currentPeople) && currentTitle != arrData[i].title) {
   if (relatedContents.indexOf(arrData[i]) == -1) {
   NBCUEndShareCard.Debug("Select the related item based on the person from feed. ItemIndex : " + i);
   relatedContents.push(arrData[i]);
   }
   }
   }
   }
   */

  if (relatedContents.length < 3) {
    NBCUEndShareCard.Debug("RelatedItems are not enough for show YET!. adding more.");
    for (var i = currentIndex; relatedContents.length <= 3 && i < arrData.length; i++) {
      // Just add the next items in the feed.
      if (relatedContents.indexOf(arrData[i]) == -1 && currentTitle != arrData[i].title) {
        relatedContents.push(arrData[i]);
        NBCUEndShareCard.Debug("Select the related item from the feed. ItemIndex : " + i);
      }
    }
  }
  return relatedContents;
};

NBCUEndShareCard.ParseYouMayAlsoLikeNew = function(data){
  NBCUEndShareCard.Debug("[ParseYouMayAlsoLike]");
  var ymal;
  var wo = "94%";
  var wi = "90%";
  ymal = $('<div class="endcardymalitems"></div>'); $('.endcardinner').append(ymal);

  if(!NBCUEndShareCard.IsEmpty(data.entries)){
    NBCUEndShareCard.YMAL = data.entries;

    /// TODO : Implement this.
    /// Pick four most related items.


    var selectedItems = NBCUEndShareCard.PickMostRelatedItems(data.entries, NBCUEndShareCard.NowPlaying.title);
    if (selectedItems.length == 0) {
      // We failed to get the related itmes. Try to use the feed.
      selectedItems = data.entries;
    }


    if(selectedItems.length > 0){
      ymal.empty();
      var startingIndex = 0;
      // Show the first one.
      var nr = '';
      nr += '<div class="ymalitemwrapnext">';
      nr += '<a class="ymalitemnext" href="#" id="ymal-' + selectedItems[startingIndex].guid + '" data-guid="' + selectedItems[startingIndex].guid +
        '" data-account-id="' + selectedItems[startingIndex].account_id +
        '" data-video-id="' + selectedItems[startingIndex].video_id +
        '" data-player-id="' + selectedItems[startingIndex].player_id + '">';
      nr += '<img class="ymalthumbnext" src="' + NBCUEndShareCard.GetDefaultThumbnail(selectedItems[startingIndex]) + '" alt="" /><span class="ymalplay"></span>';
      nr += '</a>';
      nr += '<a class="ymaltitlenext" href="#" data-guid="' + selectedItems[startingIndex].guid + '">' + selectedItems[startingIndex].title + '</a>';
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
          rh += '<a class="ymalitemnew" href="#" id="ymal-' + selectedItems[i].guid + '" data-guid="' + selectedItems[i].guid + '">';
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


  $(".ymalitemnext").click(function(evt){evt.preventDefault();NBCUEndShareCard.PlayRelatedVideo($(this))});
  $(".ymaltitlenext").click(function(evt){evt.preventDefault();NBCUEndShareCard.PlayRelatedVideo($(this))});
  $(".ymalitemnew").click(function(evt){evt.preventDefault();NBCUEndShareCard.PlayRelatedVideo($(this))});
  $(".ymaltitlenew").click(function(evt){evt.preventDefault();NBCUEndShareCard.PlayRelatedVideo($(this))});
};

NBCUEndShareCard.GetDefaultThumbnail = function(m,a){
  var url;
  if(m.media$thumbnails.length == 1){
    url = m.media$thumbnails[0].plfile$url;
  } else {
    for(var i = 0; i < m.media$thumbnails.length; i++){
      if(m.media$thumbnails[i].plfile$contentType == "image" && m.media$thumbnails[i].plfile$isDefault){
        url = m.media$thumbnails[i].plfile$url;
      }
    }
  }
  if(NBCUEndShareCard.IsEmpty(url)){
    for(var i = 0; i < m.media$thumbnails.length; i++){
      if(m.media$thumbnails[i].plfile$contentType == "image"){
        url = m.media$thumbnails[i].plfile$url;
      }
    }
  }
  if(NBCUEndShareCard.IsEmpty(url)){
    NBCUEndShareCard.Debug("Warning: could not find thumbnail for this video: " + m.title)
    url = "images/this-is-a-missing-image.png";
  }
  return url;
};

NBCUEndShareCard.YMALleft = function(){
  NBCUEndShareCard.Debug("[YMALleft]");
  $(".ymalleft").unbind("click");
  $(".ymalleft").click(function(evt){evt.preventDefault()});

  var target;
  target = $(".endcardymalitemsinner");

  target.animate({"left": "+=173", "duration": 1000}, function(){
    var detached = $(".ymalitemwrap").eq($(".ymalitemwrap").length-1).detach();
    target.prepend(detached);
    target.css("left","-173px");
    $(".ymalleft").click(function(evt){evt.preventDefault(); NBCUEndShareCard.YMALleft();});
  })
}

NBCUEndShareCard.YMALright = function(){
  this.Debug("[YMALright]");
  $(".ymalright").unbind("click");
  $(".ymalright").click(function(evt){evt.preventDefault()});

  var target;
  target = $(".endcardymalitemsinner");

  target.animate({"left": "-=173", "duration": 1000}, function(){
    var detached = $(".ymalitemwrap").eq(0).detach();
    target.append(detached);
    target.css("left","-173px");
    $(".ymalright").click(function(evt){evt.preventDefault(); NBCUEndShareCard.YMALright();});
  })
}

NBCUEndShareCard.PlayRelatedVideo = function(sender){
  NBCUEndShareCard.Debug("[PlayRelatedVideo]");
  for(var i = 0; i < NBCUEndShareCard.YMAL.length; i++){
    if(NBCUEndShareCard.YMAL[i].guid == sender.attr("data-guid")){
      NBCUEndShareCard.NowPlaying = NBCUEndShareCard.YMAL[i];
      break;
    }
  }
  NBCUEndShareCard.HideEndCard("PRV");
  NBCUEndShareCard.ActivateMedia(true);
};

NBCUEndShareCard.ReplayVideo = function(sender){
  NBCUEndShareCard.Debug("[ReplayVideo]");
  for(var i = 0; i < NBCUEndShareCard.YMAL.length; i++){
    if(NBCUEndShareCard.YMAL[i].guid == sender.attr("data-guid")){
      NBCUEndShareCard.NowPlaying = NBCUEndShareCard.YMAL[i];
      break;
    }
  }
  NBCUEndShareCard.HideEndCard("RP");
  NBCUEndShareCard.ActivateMedia(true);
};

NBCUEndShareCard.ActivateMedia = function (playNow) {
  NBCUEndShareCard.Debug("[ActivateMedia]");
  if(!NBCUEndShareCard.IsEmpty(NBCUEndShareCard.NowPlaying)){
    var m = NBCUEndShareCard.NowPlaying;
    if(NBCUEndShareCard.StandaloneAutoPlay){
      playNow = true;
    }
    if(playNow){
      m.playNow = "Y";
    } else {
      m.playNow = "N";
    }
    if(NBCUEndShareCard.UsePlaylist){
      if(NBCUEndShareCard.PlaylistBasedOnGuid){
        NBCUEndShareCard.PlaylistStartId = m.guid;
      } else {
        //NBCUEndShareCard.PlaylistStartId = m.pl1$vcmsIdentifier;
        NBCUEndShareCard.PlaylistStartId = m.pl1$directLinkIdentifier;
      }
      //NBCUEndShareCard.DeterminePlaylistIndex();
      NBCUEndShareCard.HighlightWidgetIfExists();
    }
    NBCUEndShareCard.ShareLink = NBCUEndShareCard.ShareURL + encodeURIComponent("#/vid:") + NBCUEndShareCard.NowPlaying.guid;
    if($(".endcardblocker").is(":visible")){
      $(".endcardblocker").hide();
    }
    if($(".emailblocker").is(":visible")){
      $(".emailblocker").hide();
    }
    if(NBCUEndShareCard.Pa){
      if(NBCUEndShareCard.HTML5){
        NBCUEndShareCard.NowPlaying.selectedReleaseURL = NBCUEndShareCard.GetDefaultVideoObject(NBCUEndShareCard.NowPlaying, false) + "&manifest=m3u";
        if(playNow){
          tpController.setReleaseURL(NBCUEndShareCard.NowPlaying.selectedReleaseURL);
        } else {
          NBCUEndShareCard.Debug("Loading release URL (1)", true);
          tpController.loadReleaseURL(NBCUEndShareCard.NowPlaying.selectedReleaseURL);
        }
        //var releaseURLdebug = $("<input type='text' size='100' value='" + NBCUEndShareCard.NowPlaying.selectedReleaseURL + "'/>"); $("BODY").eq(0).append(releaseURLdebug);
        NBCUEndShareCard.PopulateMetaData(m);
      } else {
        NBCUEndShareCard.Debug("Loading release URL (2)", true);
        if(playNow){
          tpController.setReleaseURL(NBCUEndShareCard.GetDefaultVideoObject(NBCUEndShareCard.NowPlaying, false));
        } else {
          tpController.loadReleaseURL(NBCUEndShareCard.GetDefaultVideoObject(NBCUEndShareCard.NowPlaying, false));
        }
        NBCUEndShareCard.PopulateMetaData(m);
      }
    } else {
      NBCUEndShareCard.SetPlayerMessage("This content is unavailable on your device"); /*** This content is unavailable on your device ***/
    }
  } else {
    NBCUEndShareCard.DebugWarn("WARNING: the NowPlaying object is empty");
  }
  if(NBCUEndShareCard.countdownTimer) {
    clearInterval(NBCUEndShareCard.countdownTimer);
    NBCUEndShareCard.countdownTimer = null;
  }
};

NBCUEndShareCard.PopulateMetaData = function (m) {

};

NBCUEndShareCard.GetDefaultVideoObject = function(m,f){
  NBCUEndShareCard.Debug("[GetDefaultVideoObject (f:" + f + ")]", true);
  var result;
  var acceptableFormats = ["FLV","MPEG4"];
  var selectedVideo = {"br": 0}; /*** output, br:?? ,v:??, f:?? ***/
  if(NBCUEndShareCard.HTML5){
    acceptableFormats = ["MPEG4"];
  }
  if(m.media$content.length == 1){
    NBCUEndShareCard.Debug("Only one video object available, so will play that");
    if(f){
      selectedVideo.v = m.media$content[0];
      selectedVideo.f = m.media$content[0];
    } else {
      selectedVideo.v = m.media$content[0].plfile$url;
      selectedVideo.f = m.media$content[0];
    }
  } else {
    for(var i = 0; i < m.media$content.length; i++){
      if(m.media$content[i].plfile$contentType == "video" && m.media$content[i].plfile$isDefault){
        NBCUEndShareCard.Debug("We have a default video");
        var formatApproved = NBCUEndShareCard.ApproveFormat(m.media$content[i].plfile$format, acceptableFormats);
        if(formatApproved){
          if(f){
            selectedVideo.v = m.media$content[i];
            selectedVideo.f = m.media$content[i];
          } else {
            selectedVideo.v = m.media$content[i].plfile$url;
            selectedVideo.f = m.media$content[i];
          }
        }
      }
    }
  }
  if(NBCUEndShareCard.IsEmpty(selectedVideo.v)){
    /*
     if(!f){
     NBCUEndShareCard.Debug("We didn't find a default video, so we're going to select the MIDDLE bitrate one ");
     }
     */
    var candidates = [];
    var middleIndex = 0;
    for(var i = 0; i < m.media$content.length; i++){
      candidates = NBCUEndShareCard.PushToArrayBasedOnBitrate(candidates, m.media$content[i], acceptableFormats);
    }
    var cdb = "";
    for(var i = 0; i < candidates.length; i++){
      try{
        cdb += candidates[i].plfile$bitrate + " (" + candidates[i].plfile$format + ")\n";
      } catch(e) {
        NBCUEndShareCard.Debug("Warning: we have a candidate problem");
      }
    }
    //alert(cdb);
    if(candidates.length > 1){
      middleIndex = Math.ceil((candidates.length - 1) / 2);
    } else {
      middleIndex = 0;
    }
    for(var i = 0; i < m.media$content.length; i++){
      if(m.media$content[i].plfile$contentType == "video"){
        if(f){
          // We want the full object
          selectedVideo.v = candidates[middleIndex];
          selectedVideo.f = candidates[middleIndex];
        } else {
          // We only want the URL
          try{
            selectedVideo.v = candidates[middleIndex].plfile$url;
          } catch(e) {
            NBCUEndShareCard.Debug("Warning: we have a candidate problem");
          }
          selectedVideo.f = candidates[middleIndex];
        }
      }
    }
  }
  result = selectedVideo.v;
//	NBCUEndShareCard.Debug("We've selected a video that has a format of  " + selectedVideo.f.plfile$format + " and a bitrate of " + selectedVideo.br);
//	for(var j in selectedVideo.f){
//		NBCUEndShareCard.Debug(" . . . " + j + ":" + selectedVideo.f[j]);
//	}
  if(NBCUEndShareCard.IsEmpty(result)){
    NBCUEndShareCard.Debug("Warning: could not find a result for this video: " + m.title)
  }
  return result;
}

NBCUEndShareCard.PushToArrayBasedOnBitrate = function(arr,obj,f){
  var formatApproved = NBCUEndShareCard.ApproveFormat(obj.plfile$format, f);
  if(formatApproved){
    var added = false;
    if(arr.length == 0){
      arr.push(obj);
      added = true;
    } else {
      for(var i = 0; i < arr.length; i++){
        if(arr[i].plfile$bitrate < obj.plfile$bitrate){
          arr.splice(i,0,obj);
          added = true;
          break;
        }
      }
    }
    if(!added){
      arr.push(obj);
    }
  }
  return arr;
}
/*** Check if the entry is acceptable format such as MPEG4 or FLV ***/
NBCUEndShareCard.ApproveFormat = function(m,f){
  var approved = false;
  for(var i = 0; i < f.length; i++){
    if(m == f[i]){
      approved = true;
    }
  }
  return approved;
};

NBCUEndShareCard.OnShowControls = function (evt) {
  var fShow = evt.data.visible;
  NBCUEndShareCard.Debug("OnShowLink: control is " + (fShow? "visible" : "hidden"));

}

// JSONRequest.js
//
// A helper object for creating JSON requests against thePlatform Portal Server
//
// Copyright (c) 2006 thePlatform for Media, Inc.

// create a JSONRequest object
function tpJSONRequest(URL, Callback, Context)
{
  // get the head tag
  var head = document.getElementsByTagName("head");
  if (!head)
  {
    alert("You need to define a <head> element to use the JSONRequest object.");
    return false;
  }
  this.headTag = head.item(0);

  // check the URL
  if (URL == null || URL.length == 0)
  {
    alert("You need to provide the URL.");
    return false;
  }
  this.url = URL;

  // add callback and/or context
  if (Callback != null && Callback.length > 0)
  {
    this.url += "&callback=" + escape(Callback);
  }
  if (Context != null && Context.length > 0)
  {
    this.url += "&context=" + escape(Context);
  }

  // determine the ID for this script
  this.scriptID = "JSONRequest" + tpJSONRequest.index++;
}

// a counter for ID references
tpJSONRequest.index = 1;

// send the request
tpJSONRequest.prototype.send = function ()
{
  // Create a script element
  var scriptObj = document.createElement("script");

  // Set the attributes
  scriptObj.setAttribute("type", "text/javascript");
  scriptObj.setAttribute("src", this.url);
  scriptObj.setAttribute("id", this.scriptID);

  // Add it to the <head>; this will immediately run it
  this.headTag.appendChild(scriptObj);
}