var NBCUMetaOverlay = {};

NBCUMetaOverlay.isVisible = false;
NBCUMetaOverlay.isMediaSet = false;
NBCUMetaOverlay.isAd = false;

NBCUMetaOverlay.version = "1.0.130315";

NBCUMetaOverlay.debug = function(msg) {
	if (typeof window.console != "undefined") {	
		console.log("[MetaOverlay] " + msg);
	}
}	

NBCUMetaOverlay.initialize = function () {
	// Create a element for top meta overlay.
	var container = $("<div class='NBCUMetaOverlay' id='NBCUMetaOverlay'></div>");
	if (NBCUMetaOverlaySetting && NBCUMetaOverlaySetting.class && NBCUMetaOverlaySetting.class != "") {
		container.addClass(NBCUMetaOverlaySetting.class);
	}
	var transparentDiv = $("<div class='NBCUMetaOverlayTransparent' id='NBCUMetaOverlayTransparent'></div>");
	container.append(transparentDiv);
	var infoDiv = $("<div class='NBCUMetaInfo' id='NBCUMetaInfo'></div>");
	var showName = $("<div class='NBCUMeta_ShowName' id='NBCUMeta_ShowName'></div>");
	infoDiv.append(showName);
	var subtitle = $("<div class='NBCUMeta_Subtitle' id='NBCUMeta_Subtitle'></div>");
	infoDiv.append(subtitle);
	var description = $("<div class='NBCUMeta_Description' id='NBCUMeta_Description'></div>");
	infoDiv.append(description);
	container.append(infoDiv);
	container.hide();
	
	// Bottom Progress bar
	var bottomBar = $("<div class='NBCUBottomBar' id='NBCUBottomBar'><span class='NBCUBottomProgress' id='NBCUBottomProgress'></span></div>");
	bottomBar.hide();
	
	$("body").append(container);
	$("body").append(bottomBar);

	// Register event listeners.
	var tpController = $pdk.controller;
	$pdk.controller.addEventListener("OnReleaseStart", NBCUMetaOverlay.OnReleaseStart);
	$pdk.controller.addEventListener("OnReleaseEnd", NBCUMetaOverlay.OnReleaseEnd);
	$pdk.controller.addEventListener("OnShowControls", NBCUMetaOverlay.OnShowControls);
	$pdk.controller.addEventListener("OnMediaRollOver", NBCUMetaOverlay.OnMediaRollOver);
	$pdk.controller.addEventListener("OnMediaStart", NBCUMetaOverlay.OnMediaStart);
	$pdk.controller.addEventListener("OnMediaPlaying", NBCUMetaOverlay.OnMediaPlaying);
	//$pdk.controller.addEventListener("OnMediaBuffer", function () {console.log("onMediaBuffer")});
	NBCUMetaOverlay.debug("Initialized - " + NBCUMetaOverlay.version);
};

NBCUMetaOverlay.setupMedia = function (clip) {
	var baseClip = clip.baseClip;
	var clipTitle = baseClip.title? baseClip.title : clip.title;
	var clipDesc = baseClip.description;
	var subtitle = (baseClip.contentCustomData && baseClip.contentCustomData.hasOwnProperty("subtitle")) ? baseClip.contentCustomData["subtitle"] : "";
	if (subtitle == "") {
		subtitle = "<br />"
	}
	$("#NBCUMeta_ShowName").html(clipTitle);
	$("#NBCUMeta_Description").html(clipDesc);
	$("#NBCUMeta_Subtitle").html(subtitle);
	if (clipTitle || clipDesc || subtitle != "<br />") {
		NBCUMetaOverlay.isMediaSet = true;
		NBCUMetaOverlay.debug("Media is set. Title: " + clipTitle);
	} else {
		NBCUMetaOverlay.debug("Failed to set media. No media info provided.");
	}
};

NBCUMetaOverlay.OnReleaseStart = function (evt) {
	// Listen to OnRelaseStart event and set contents for overlay.
	var playlist = evt.data;
	var clip = playlist.clips[0];
	NBCUMetaOverlay.setupMedia(clip);
	$("#NBCUBottomProgress").css("padding-left", "0%");
	NBCUMetaOverlay.debug("OnReleaseStart");
};

NBCUMetaOverlay.OnShowControls = function (evt) {
	var fShow = evt.data.visible;
	if (fShow){	
		if (!NBCUMetaOverlay.isVisible && NBCUMetaOverlay.isMediaSet) {
			NBCUMetaOverlay.isVisible = true;
			$("#NBCUBottomBar").hide();
			$("#NBCUMetaOverlay").fadeIn();
		}
	} else {
		NBCUMetaOverlay.isVisible = false;
		$("#NBCUMetaOverlay").fadeOut();
		if (NBCUMetaOverlay.isMediaSet) {
			$("#NBCUBottomBar").show();		
		} else {
			$("#NBCUBottomBar").hide();		
		}
	}
};

NBCUMetaOverlay.OnMediaRollOver = function () {
	if (!NBCUMetaOverlay.isVisible && NBCUMetaOverlay.isMediaSet && !NBCUMetaOverlay.isAd) {
		NBCUMetaOverlay.isVisible = true;
		$("#NBCUBottomBar").hide();
		$("#NBCUMetaOverlay").fadeIn();
	} else if (NBCUMetaOverlay.isAd & NBCUMetaOverlay.isVisible) {
		$("#NBCUBottomBar").hide();
		$("#NBCUMetaOverlay").hide();
		NBCUMetaOverlay.isVisible = false;
	}
};

NBCUMetaOverlay.OnReleaseEnd = function () {
	$("#NBCUBottomBar").hide();
	$("#NBCUMetaOverlay").hide();

	NBCUMetaOverlay.isMediaSet = false;	
}

NBCUMetaOverlay.OnMediaStart= function (evt) {
	NBCUMetaOverlay.debug("OnMediaStart begins");
	var clip = evt.data;
	NBCUMetaOverlay.isAd = clip.baseClip.isAd;
	if (!NBCUMetaOverlay.isMediaSet) {
		NBCUMetaOverlay.setupMedia(clip);
	}

	if (NBCUMetaOverlay.isAd && NBCUMetaOverlay.isVisible) {
		$("#NBCUBottomBar").stop(true).hide();
		$("#NBCUMetaOverlay").stop(true).hide();

		NBCUMetaOverlay.isVisible = false;
	}
	NBCUMetaOverlay.debug("OnMediaStart ends");
};

NBCUMetaOverlay.OnMediaPlaying = function (evt) {
	if (!NBCUMetaOverlay.isAd) {
		var percentage = evt.data.percentCompleteAggregate;
		$("#NBCUBottomProgress").css("padding-left", ((percentage -1) + "%"));
	}
};

NBCUMetaOverlay.OnMediaProgress = function (evt) {
	if (!NBCUMetaOverlay.isAd) {
		var percentage = NBCUOmniture? NBCUOmniture.currentProgress : 0;
		$("#NBCUBottomProgress").css("padding-left", ((percentage -1) + "%"));
	}
};