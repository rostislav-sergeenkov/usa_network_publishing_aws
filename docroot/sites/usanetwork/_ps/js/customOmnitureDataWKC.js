var NBCUOmniture = {};
NBCUOmniture.debugMode = false;

NBCUOmniture.isFullScreen = false;
NBCUOmniture.provider = "nobusinessunit";
NBCUOmniture.providerDefault = "nobusinessunit";
NBCUOmniture.divisionDefault = "nodivision";
NBCUOmniture.rsidDefault = "norsid";
NBCUOmniture.titleDefault = "notitle";
NBCUOmniture.adUnitDefault = "noadunit";
NBCUOmniture.isLongform = null;
NBCUOmniture.mediaName = "";
NBCUOmniture.timePlayed = 0;
NBCUOmniture.timeTracked = 0;
NBCUOmniture.isAd = false;
NBCUOmniture.overrideInitialized = false;
NBCUOmniture.monitorInitialized = false;
NBCUOmniture.NumOfChapters = 0;
NBCUOmniture.videoEndTracked = false;
NBCUOmniture.isFlash = null;
NBCUOmniture.adTrackingNeeded = true; // We need to set ad events manually, because we couldn't set the parameter on initialization.
//NBCUOmniture.hasMonitor = false;
NBCUOmniture.isLocal = false;
NBCUOmniture.currentProgress = 0;
NBCUOmniture.adStartManuallyTracked = false;
NBCUOmniture.causeByStreamSwitch = false;

// Default trackVars & trackEvents
NBCUOmniture.defaultTrackVars = "eVar11,eVar12,eVar13,eVar14,eVar27,eVar36,eVar37,eVar38,eVar39,eVar40,eVar41,eVar42,eVar43,eVar45,eVar47,eVar48,eVar50,prop2,prop8,prop9,prop20,prop42,prop43,prop44,prop45,prop46,prop50,products";
NBCUOmniture.longFormEvents = "event20,event21,event22,event23,event24,event25,event26,event27,event28,event29,event30,event31,event81,event82";
NBCUOmniture.shortFormEvents = "event70,event71,event72,event73,event74,event75,event76,event77,event78,event79,event80";
NBCUOmniture.additionalTrackVars = "";
NBCUOmniture.prop8 = "";
NBCUOmniture.prop42 = "";
NBCUOmniture.prop43 = "";
NBCUOmniture.prop45 = "";
NBCUOmniture.override = {}; // List of values to override.
NBCUOmniture.customPropertyOverride = {}; // List of values to override for custom properties.
NBCUOmniture.s = null;
NBCUOmniture.CustomSiteCatalystName = null;
NBCUOmniture.version = "1.0.130522.0";

NBCUOmniture.debug = function (str) {
	if (NBCUOmniture.debugMode && typeof window.console !== "undefined") {
		if (typeof window.console.log !== "undefined") {
			console.log("[NBCUOmniture] " + str);
		}
	}
};

NBCUOmniture.debug("Version " + NBCUOmniture.version);

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}

// Initialize the Omniture eVars & props before the media starts playing.
NBCUOmniture.initializeInternal = function (clip) {
	// Check if we have siteCatalyst instance.
	if (!NBCUOmniture.s && NBCUOmniture.CustomSiteCatalystName) {
		// use the existing instance of the SiteCatalyst.
		NBCUOmniture.s = eval(NBCUOmniture.CustomSiteCatalystName);
	}

	if (!NBCUOmniture.isDefined(NBCUOmniture.s)) {
		// If we still don't have s instance, just use window.s
		NBCUOmniture.s = window.s;
	}

	// Initialize override value list. This should be called first in the function.
	NBCUOmniture.initializeOverride();

	// Check if the content specific initialization is done. If not, do it now.
	NBCUOmniture.makeSureInitialization(clip);

	// Set date time evars
	NBCUOmniture.setTrackingValue("eVar11", NBCUOmniture.getHour(false))
	NBCUOmniture.setTrackingValue("eVar12", NBCUOmniture.getHour(true /*hourOnly*/));
	NBCUOmniture.setTrackingValue("eVar13", NBCUOmniture.getDayOfWeek());
	NBCUOmniture.setTrackingValue("eVar14", NBCUOmniture.getDate());
	
	// content custom data may not be available.
	NBCUOmniture.provider = NBCUOmniture.getCustomProperty(clip, "metrics.Metric6" ,NBCUOmniture.providerDefault);
	NBCUOmniture.provider = NBCUOmniture.adjustProviderName(NBCUOmniture.provider.toLowerCase());
	NBCUOmniture.setTrackingValue("eVar45", NBCUOmniture.provider);

	// Get Brand dependent eVar36
	var v36 = NBCUOmniture.getEVar36(clip);
	NBCUOmniture.setTrackingValue("eVar36", v36);
	var clipTitle = clip.title;
	//NBCUOmniture.setTrackingValue("eVar40", (clipTitle && clipTitle !== "") ? clip.title : NBCUOmniture.titleDefault);
	

	var clipGuid = clip.baseClip.guid;
	var clipContentId = clip.baseClip.contentID;
	
	if (!clipGuid || clipGuid == "") {
	    NBCUOmniture.setTrackingValue("eVar42", "noguid");
	}

	if (!clipContentId || clipContentId == "") {
	    NBCUOmniture.setTrackingValue("eVar50", "noclipid");
	} else {
		NBCUOmniture.setTrackingValue("eVar50", clipContentId); // RF Added else to make sure evar50 is set for valid IDs
	}

	var metric2 = NBCUOmniture.getCustomProperty(clip, "metrics.Metric2" ,NBCUOmniture.rsidDefault);
    var arrMetric2 = metric2.split("|"); 
	// Modify metric2 if needed.
	if (arrMetric2.length === 2 && NBCUOmniture.NumOfChapters > 0)
	{
		metric2 = arrMetric2[0];
	} else if (arrMetric2.length === 2) {
        metric2 = arrMetric2[1];
    }; 
    
    // RF SETTING THIS FOR FIRST ITEM ALL THE TIME
    // Metric2: nbcuusanetworkd|nbcuusanetbu,
    metric2 = arrMetric2[0];

	NBCUOmniture.setTrackingValue("prop20", metric2);
	NBCUOmniture.setTrackingValue("eVar38", NBCUOmniture.isFullScreen ? "fullscreen" : "normal");

    // NETWORK|Series|SHOWNAME|CATEGORY|TITLE
    // Or
    // NETWORK|Series|SHOWNAME|CATEGORY|SUBTITLE|TITLE
	
	// RF UPDATE START
	//if (typeof console != 'undefined') { console.log(clip); }
	
	if (clip.baseClip.categories.length >= 3) {
		for (var i=0 ; i<clip.baseClip.categories.length ; i++) {
			var clipSubCategoryParts = String(clip.baseClip.categories[i].name).split('/');
			if (clipSubCategoryParts.length >=3) {
				var clipSubCategory = clipSubCategoryParts[2];
				break;
			}
		}
		
	} else {
		var clipSubCategory = '';
	}
	 
	var eVar37 = NBCUOmniture.provider + "|Series|" + v36 + "|" + clipSubCategory + "|";

	// RF UPDATE END
	
	//var eVar37 = NBCUOmniture.provider + "|Series|" + v36 + "|CATEGORY|";
	
	var subtitle = NBCUOmniture.getCustomProperty(clip, "subtitle", "");
	eVar37 += (subtitle !== "" ? (subtitle + "|") : ""); // Add subtitle if there is.
	eVar37 += clipTitle;
	NBCUOmniture.setTrackingValue("eVar37", eVar37);

	var eVar40expanded = clipSubCategory + ": " + clipTitle;
	NBCUOmniture.setTrackingValue("eVar40", eVar40expanded);

	// Set static string values
	if (!NBCUOmniture.isLocal) {
		NBCUOmniture.setTrackingValue("eVar39","Video Player");
		NBCUOmniture.setTrackingValue("eVar48","Embedded Video Player");
	}

	NBCUOmniture.setTrackingValue("eVar43", window.location.href);
    // Save some properties to use it later
    NBCUOmniture.prop8 = NBCUOmniture.getCustomProperty(clip, "metrics.Metric1", NBCUOmniture.divisionDefault);

	NBCUOmniture.prop42 = clipGuid && clipGuid !== "" ? clipGuid : "noguid";
	NBCUOmniture.prop43 = clipContentId && clipContentId !== "" ? clipContentId : "noclipid";
	NBCUOmniture.prop45 = clip.baseClip.bitrate.toString();

	NBCUOmniture.isAd = clip.baseClip.isAd;
	if (NBCUOmniture.isAd) {
		// Mark prop46 as 'ad starting'
		NBCUOmniture.setTrackingValue("prop46", "adStart");
		NBCUOmniture.setTrackingValue("eVar41", "noadunit");

	}
    // Set media monitor callback
	if (!NBCUOmniture.monitorInitialized && NBCUOmniture.s.Media) {
		NBCUOmniture.s.Media.monitor = NBCUOmniture.onMediaMonitor;
		NBCUOmniture.monitorInitialized = true;
	}
	NBCUOmniture.timePlayed = 0;
	NBCUOmniture.timeTracked = new Date();
	NBCUOmniture.videoEndTracked = false;
	NBCUOmniture.s.linkTrackVars = (NBCUOmniture.additionalTrackVars != "" ? NBCUOmniture.mergeTrackVars(NBCUOmniture.additionalTrackVars) : NBCUOmniture.defaultTrackVars);
	NBCUOmniture.s.linkTrackEvents = NBCUOmniture.longFormEvents + "," + NBCUOmniture.shortFormEvents;
	NBCUOmniture.debug("initializeInternal completed");	
};

// Initialize content specific evar and events, if it's not done.
NBCUOmniture.makeSureInitialization = function (clip){
	if (!NBCUOmniture.isDefined(NBCUOmniture.isLongform)) {
		// Detect whether the current base clip is longform or not.
		// Check the custom field "fullEpisode"
		var fullEpisode = NBCUOmniture.getCustomProperty(clip, "fullEpisode", null);

		if (fullEpisode != null) {
			var bFullEpisode = NBCUOmniture.stringToBoolean(fullEpisode)
			NBCUOmniture.initializeContentParam(bFullEpisode);
		} else {
			// if we don'e see the custom field, use the number of chapter.
			var bLongform = NBCUOmniture.NumOfChapters > 1;
			NBCUOmniture.initializeContentParam(bLongform);
		}
	}

	if (!NBCUOmniture.isDefined(NBCUOmniture.isFlash)) {
		// Detect the player type.
		var isFlash = NBCUOmniture.detectFlashPlayer();
		NBCUOmniture.initializePlayerParam(isFlash);
	}
	NBCUOmniture.debug("makeSureInitialization completed");	
};

NBCUOmniture.stringToBoolean = function (str) {
	var trueArray = ["yes", "true","1"];
	return trueArray.indexOf(str.toLowerCase()) > 0; 
};

// initialize content related param (longform/shortform)
NBCUOmniture.initializeContentParam = function (isLongform) {
	NBCUOmniture.isLongform = isLongform;
	NBCUOmniture.setTrackingValue("eVar47", (isLongform ? "Full Episode Ad Format" : "Clip Ad Format"));
	NBCUOmniture.debug("Initialized based on content type:" + (isLongform ? "longform" : "shortform"));
};

NBCUOmniture.initializePlayerParam = function (isFlash) {
	NBCUOmniture.isFlash = isFlash;
	NBCUOmniture.setTrackingValue("eVar27", (isFlash ? "Flash" : "HTML5"));
};

NBCUOmniture.detectFlashPlayer = function () {
	var fFlash = $pdk.env.Detect.getInstance().getPlaybackRuntime() == "flash";
	NBCUOmniture.debug("Player instance: " + (fFlash ? "flash" : "HTML5"));
	return fFlash;
};

// Initialze the list of override values.
NBCUOmniture.initializeOverride = function () {
	// Initialize override list only once.
	if (NBCUOmniture.s && !NBCUOmniture.overrideInitialized) {
		// Check eVar & prop override from the plugin param
		for (var j=0; j<2; j++) {
			var valuePrefix = (j === 0 ? "eVar" : "prop");
			for (var i=0; i < 100; i++) {
				var valueName = valuePrefix + i.toString();
				var value = NBCUOmniture.s[valueName];
				if (value !== undefined) {
					// There is a value we want to override.
					NBCUOmniture.override[valueName] = value;
				}
			}
		}


		// Initialize custom field override from the page parameters
		if ((window.location.search) && (window.location.search !== ""))
		{
			var query = window.location.search.substring(1);
			var parms = query.split('&');
			for (var i=0; i<parms.length; i++) {
				var pos = parms[i].indexOf('=');
				if (pos > 0) {
					 var key = parms[i].substring(0,pos);
					 var val = parms[i].substring(pos+1);
					 NBCUOmniture.customPropertyOverride[key.toLowerCase()] = val;
				}
			}
		}

		NBCUOmniture.overrideInitialized = true;
	}

};

// Get the custom field data from the clip. 
// If there's page level override, use the override.
// FallbackValue will be used when both custom field data and override are not available.
NBCUOmniture.getCustomProperty = function (clip, propName, fallbackValue) {
	var lowerCasePropName = propName.toLowerCase();
	var overrideValue = NBCUOmniture.customPropertyOverride[lowerCasePropName];
	var propValue = null;
	if (overrideValue != undefined) {
		propValue = overrideValue;
	} else if (clip.baseClip.contentCustomData && clip.baseClip.contentCustomData.hasOwnProperty(propName)) {
		propValue = clip.baseClip.contentCustomData[propName];
	}

	if (propValue == null) {
		propValue = fallbackValue;
	}

	return propValue;

};

// Set tracking value unless override value exists.
// Use this function to set any s.* . Otherwise overriding functionality won't work.
NBCUOmniture.setTrackingValue = function (valueName, value, overrideEmptyString) {
	if (NBCUOmniture.override.hasOwnProperty(valueName)) {
		// Use override value
		var overrideValue = NBCUOmniture.override[valueName];
		if (overrideEmptyString == true && overrideValue == "") {
			NBCUOmniture.s[valueName] = value;
		} else {
			NBCUOmniture.s[valueName] = overrideValue;
		}
	} else {
		// Set the value using function param 'value'.
		NBCUOmniture.s[valueName] = value;
	}
};

// Get the time after the previous tracking, and set the last tracking time.
NBCUOmniture.setTrackingMark = function () {
	var now =  new Date();
	var elapsedTime = now.getTime() - NBCUOmniture.timeTracked.getTime();
	NBCUOmniture.timeTracked = now;
	return Math.abs(Math.round(elapsedTime / 1000));
};

// tpContoller Event handlers
//
NBCUOmniture.onMediaMonitor = function (s, media) {
    NBCUOmniture.mediaName = media.name;
    // Set date time.
    NBCUOmniture.setTrackingValue("eVar11", NBCUOmniture.getHour(false));
    NBCUOmniture.setTrackingValue("eVar12", NBCUOmniture.getHour(true /*hourOnly*/));  
    switch (media.mediaEvent) {
        case "OPEN":
            if (!NBCUOmniture.isAd) {
                // Add extra properties.
                //NBCUOmniture.hasMonitor = true;
                NBCUOmniture.debug("Monitor Open");
                NBCUOmniture.setTrackingValue("prop2", "Video Player");
                NBCUOmniture.setTrackingValue("prop8", NBCUOmniture.prop8);
                NBCUOmniture.setTrackingValue("prop9", NBCUOmniture.provider);
                NBCUOmniture.setTrackingValue("prop42", NBCUOmniture.prop42);
                NBCUOmniture.setTrackingValue("prop43", NBCUOmniture.prop43);
                NBCUOmniture.setTrackingValue("prop44", NBCUOmniture.isFullScreen ? "fullscreen" : "normal");
                NBCUOmniture.setTrackingValue("prop45", NBCUOmniture.prop45);
                NBCUOmniture.setTrackingValue("prop50", NBCUOmniture.provider);
				NBCUOmniture.setTrackingValue("prop46", "videoStart" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
				NBCUOmniture.setTrackingValue("eVar41", ""); // Remove Ad related value.
                var trackingEvents = (NBCUOmniture.isLongform ? "event23,event24" : "event73,event74");
                var milestoneTimePlayed = media.timePlayed - NBCUOmniture.timePlayed;
                NBCUOmniture.s.events = trackingEvents;
                NBCUOmniture.s.products = (NBCUOmniture.isLongform ? "event23=0" : "event73=0");
            } else {
                // Playing Ad now
                if (NBCUOmniture.isLongform) {
                    NBCUOmniture.s.events = "event20,event22";
                    NBCUOmniture.s.products = ";;;;event22=0";
                } else {
                    NBCUOmniture.s.events = "event70,event72";
                    NBCUOmniture.s.products = ";;;;event72=0";
                }
            }
            NBCUOmniture.timePlayed = 0;
            NBCUOmniture.setTrackingMark();
            NBCUOmniture.s.Media.track(media.name);
            // cleanup all extra properties which were set for start video
            
            // RF FIXING prop20 reset actually dont reset any of these...
            //NBCUOmniture.s.prop2 = NBCUOmniture.s.prop8 = NBCUOmniture.s.prop20 = NBCUOmniture.s.prop42 = NBCUOmniture.s.prop43 = NBCUOmniture.s.prop44 = NBCUOmniture.s.prop45 = NBCUOmniture.s.prop50 = "";
            //NBCUOmniture.s.prop2 = NBCUOmniture.s.prop8 = NBCUOmniture.s.prop42 = NBCUOmniture.s.prop43 = NBCUOmniture.s.prop44 = NBCUOmniture.s.prop45 = NBCUOmniture.s.prop50 = "";
            break;
        case "CLOSE":
        	//NBCUOmniture.hasMonitor = false;
			NBCUOmniture.debug("Monitor Close");
            break;

        case "MILESTONE":
			NBCUOmniture.debug("Monitor Milestone");
            var additonalEvents = (NBCUOmniture.isLongform ? "event23," : "event73,");
            var milestoneTimePlayed = NBCUOmniture.setTrackingMark();
			var currentPercent = Math.floor(media.percent);
			if (currentPercent > 10 && currentPercent <= 35) {
				additonalEvents += (NBCUOmniture.isLongform ? "event26" : "event75");
				NBCUOmniture.setTrackingValue("prop46", "video25Percent" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
			} else if (currentPercent > 35 && currentPercent <= 60) {
				additonalEvents += (NBCUOmniture.isLongform ? "event27" : "event76");
				NBCUOmniture.setTrackingValue("prop46", "video50Percent" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
			} else if (currentPercent > 60 && currentPercent <= 85) {
				additonalEvents += (NBCUOmniture.isLongform ? "event28" : "event77");
				NBCUOmniture.setTrackingValue("prop46", "video75Percent" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
            } else {
				additonalEvents = "";
			}
            NBCUOmniture.timePlayed = media.timePlayed;
            NBCUOmniture.s.products = (NBCUOmniture.isLongform ? ";;;;event23=" : ";;;;event73=") + milestoneTimePlayed.toString();
            NBCUOmniture.s.events = additonalEvents;
            if (additonalEvents != "") {
            	NBCUOmniture.s.Media.track(media.name);
            }
		    NBCUOmniture.s.prop44 = NBCUOmniture.s.prop45 = "";
            break;
    }

};

NBCUOmniture.onMediaPause = function(evt) {
    var clip = evt.data.clip;
    if (NBCUOmniture.isLongform) {
        NBCUOmniture.s.events = (clip.baseClip.isAd ? "event30" : "event82") + ",event23";
    } else {
        NBCUOmniture.s.events = "event80,event73";
    }
	var eventName = "videoPause" + (NBCUOmniture.isLongform? "_longform" : "_shortform");
	var currentMediaTime = Math.round(clip.mediaTime / 1000);
	var milestoneTimePlayed = NBCUOmniture.setTrackingMark();

	NBCUOmniture.timePlayed = currentMediaTime;
	NBCUOmniture.s.products = (NBCUOmniture.isLongform ? ";;;;event23=" : ";;;;event73=") + milestoneTimePlayed.toString();
	NBCUOmniture.setTrackingValue("prop46", eventName );
	if (clip.baseClip.isAd) {
		NBCUOmniture.s.trackLink(this, 'o', eventName);
	} else {
		NBCUOmniture.s.Media.track(NBCUOmniture.mediaName);
	}
};

NBCUOmniture.handleMediaCompletion = function(curTime) {
	if (!NBCUOmniture.videoEndTracked) {
		NBCUOmniture.videoEndTracked = true;
	    var trackingEvents = (NBCUOmniture.isLongform ? "event23,event29" : "event73,event78");
		var milestoneTimePlayed = NBCUOmniture.setTrackingMark();
		var eventName = "videoEnd" + (NBCUOmniture.isLongform? "_longform" : "_shortform");

		NBCUOmniture.timePlayed = curTime;
		NBCUOmniture.s.events = trackingEvents;
		NBCUOmniture.s.products = (NBCUOmniture.isLongform ? ";;;;event23=" : ";;;;event73=") + milestoneTimePlayed.toString();
		NBCUOmniture.setTrackingValue("prop46", eventName );
		/*if (NBCUOmniture.hasMonitor) {
			NBCUOmniture.s.Media.track(NBCUOmniture.mediaName);
			NBCUOmniture.debug("handleMediaCompletion - monitor");
			
		} else {
			// If video ended already, use TrackLink function instead of media.track		
			NBCUOmniture.s.trackLink(this, 'o', eventName);
			NBCUOmniture.debug("handleMediaCompletion - track link");
		}
		NBCUOmniture.debug("Video end tracked");*/
		NBCUOmniture.s.trackLink(this, 'o', eventName);  // use only s.trackLink() and not Media.track() since SiteCatalyst can "CLOSE" before that is called.
		NBCUOmniture.debug("Video end - Track Link - event name = "+ eventName);
	}
};


NBCUOmniture.onMediaSeek = function (evt) {
    NBCUOmniture.s.events = (NBCUOmniture.isLongform ? "event81,event23" : "event79,event73");
    var clip = evt.data.clip;
	var currentMediaTime = Math.round(clip.mediaTime / 1000);
	var milestoneTimePlayed = NBCUOmniture.setTrackingMark();

	NBCUOmniture.timePlayed = currentMediaTime;
    NBCUOmniture.s.products = (NBCUOmniture.isLongform ? ";;;;event23=" : ";;;;event73=") + milestoneTimePlayed.toString();
	NBCUOmniture.setTrackingValue("prop46", "videoSeek" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
    NBCUOmniture.s.Media.track(NBCUOmniture.mediaName);
	if (NBCUOmniture.isVideoEndApproaching(evt.data.end.percentCompleteAggregate, evt.data.end.durationAggregate) && !NBCUOmniture.videoEndTracked && !NBCUOmniture.isAd) {
			var curTime = Math.round(evt.data.end.mediaTime / 1000);
			NBCUOmniture.handleMediaCompletion(curTime);
			NBCUOmniture.debug("tracking video end on seek event")
	}    
};

NBCUOmniture.validRange = function (start, current) {
	return ((start <= current) && (current <= (start + 3000)));
};

NBCUOmniture.onMediaStart = function (evt) {
	NBCUOmniture.debug("OnMediaStart");
    var baseClip = evt.data.baseClip;
    var clip = evt.data;
    NBCUOmniture.isAd = baseClip.isAd;
    NBCUOmniture.debug((baseClip.isAd ? "Ad" : "video") + " starting");
    if (baseClip.isAd && NBCUOmniture.adTrackingNeeded) {
    	// We may need to track ad manually.
    	var eventName =  "adStart" + (NBCUOmniture.isLongform ? "_longform" : "_shortform");
    	NBCUOmniture.s.products = "";
    	
    	// RF Fixing of Events for manual Ad Tracking
    	if (NBCUOmniture.isLongform) {
    		NBCUOmniture.s.events = "event20,event22";
    	} else {
    		NBCUOmniture.s.events = "event70,event72";
    	}
		
    	NBCUOmniture.s.trackLink(this, 'o', eventName);
		NBCUOmniture.adStartManuallyTracked = true;
		NBCUOmniture.debug("Ad start event tracked manually");
    } else if (NBCUOmniture.adTrackingNeeded  && NBCUOmniture.isLongform && clip.chapter.contentIndex > 0 && NBCUOmniture.validRange(clip.startTime, clip.mediaTime)) {
		NBCUOmniture.setTrackingValue("prop46", "videoChapterStart_longform");
        NBCUOmniture.s.events = "event25";
        NBCUOmniture.s.products = "";
		NBCUOmniture.s.Media.track(NBCUOmniture.mediaName);
		NBCUOmniture.debug("sending chapter mark manually. currentMediaTime:" + clip.mediaTime);
    } 
};

NBCUOmniture.isVideoEndApproaching = function(percent, totalLengh) {
	var fVideoEnd = (totalLengh < 60000 && percent > 92) || (percent > 97);
	return fVideoEnd;
};

NBCUOmniture.onMediaPlaying = function (evt) {
	NBCUOmniture.currentProgress = evt.data.percentCompleteAggregate;
	// Temp workaround.
	//if (NBCUMetaOverlay != null) {NBCUMetaOverlay.OnMediaProgress(NBCUOmniture.currentProgress);}
	// Temp workaround
	if (NBCUOmniture.isAd) {
		// Setting these values to send on Ad Completed event. 
		// We can't use handleMediaCompletion, because tracking is sent befor the event fires.
		var curTime = Math.round(evt.data.currentTime / 1000);
		NBCUOmniture.s.products = ( NBCUOmniture.isLongform ? ";;;;event22=" : ";;;;event72=") + curTime.toString();
		NBCUOmniture.setTrackingValue("prop46", "adEnd" + (NBCUOmniture.isLongform? "_longform" : "_shortform"));
		if( evt.data.percentCompleteAggregate > 94) {
			NBCUOmniture.trackAdEnd(curTime); // Workaround to make sure the Ad end event is fired.
		}
		
	} else if (NBCUOmniture.isVideoEndApproaching(evt.data.percentCompleteAggregate, evt.data.durationAggregate) && !NBCUOmniture.videoEndTracked && !NBCUOmniture.isAd) {
		NBCUOmniture.debug("onMediaPlaying - about to call handleMediaCompletion...");	
		var curTime = Math.round(evt.data.mediaTime / 1000);
		NBCUOmniture.handleMediaCompletion(curTime);
	}
};

NBCUOmniture.setPropertyForAd = function (baseClip) {
    if (baseClip.isAd) {
		// Mark prop46 as 'ad starting'
		NBCUOmniture.setTrackingValue("prop46", "adStart");
		if (baseClip.contentID && baseClip.contentID != "") {
			NBCUOmniture.setTrackingValue("eVar41", baseClip.contentID); 
		} else {
			NBCUOmniture.setTrackingValue("eVar41", NBCUOmniture.adUnitDefault);    	
		}
    	var eventName =  "adStart" + (NBCUOmniture.isLongform ? "_longform" : "_shortform");
    	NBCUOmniture.setTrackingMark();
    	NBCUOmniture.setTrackingValue("prop46", eventName);
    	NBCUOmniture.s.events = NBCUOmniture.isLongform ? "event20" : "event70";

	}
};

NBCUOmniture.onMediaLoadStart = function (evt) {
	var baseClip = evt.data.baseClip;
    NBCUOmniture.isAd = baseClip.isAd;
	NBCUOmniture.setPropertyForAd(baseClip);
	NBCUOmniture.debug("OnMediaLoadStart");
};

NBCUOmniture.onMediaEnd = function (evt) {
	NBCUOmniture.debug("OnMediaEnd.");
	
	var baseClip = evt.data.baseClip;
    if (NBCUOmniture.adTrackingNeeded && baseClip.isAd) {
    	// We need to track ad manually.
    	NBCUOmniture.debug("Ad Tracked Manually so calling trackAdEnd()");
    	NBCUOmniture.trackAdEnd(Math.round(evt.data.mediaTime / 1000));
    }
}

NBCUOmniture.trackAdEnd = function (mediaTime) {
	// We need to track ad manually.
	NBCUOmniture.debug("Tracking Ad end event requested");
	if (NBCUOmniture.adStartManuallyTracked) {
		var eventName =  "adEnd" + (NBCUOmniture.isLongform ? "_longform" : "_shortform");
		NBCUOmniture.setTrackingValue("prop46", eventName);
		NBCUOmniture.s.events = NBCUOmniture.isLongform ? "event21,event22" : "event71,event72";
		NBCUOmniture.s.products = ( NBCUOmniture.isLongform ? ";;;;event22=" : ";;;;event72=") + mediaTime.toString();
		NBCUOmniture.s.trackLink(this, 'o', eventName);
		NBCUOmniture.adStartManuallyTracked = false;
		NBCUOmniture.debug("Ad end event tracked manually.");
	}	
}

NBCUOmniture.onShowFullScreen = function(evt) {
	NBCUOmniture.isFullScreen = evt.data;
	NBCUOmniture.setTrackingValue("eVar38", NBCUOmniture.isFullScreen ? "fullscreen" : "normal", true);
	NBCUOmniture.setTrackingValue("prop44", NBCUOmniture.isFullScreen ? "fullscreen" : "normal", true);
	NBCUOmniture.debug("Screen mode changed : " +  (NBCUOmniture.isFullScreen ? "fullscreen" : "normal"));
};

NBCUOmniture.onStreamSwitched = function (evt) {
	NBCUOmniture.prop45 =  evt.data.newFileInfo.bitrate;
	NBCUOmniture.setTrackingValue("prop45", evt.data.newFileInfo.bitrate, true);
	NBCUOmniture.debug("Stream switched : bitrate=" +  evt.data.newFileInfo.bitrate);
}

NBCUOmniture.onReleaseStart = function(evt) {
	NBCUOmniture.reset();
	var playlist = evt.data;
	if (playlist.chapters) {
		NBCUOmniture.NumOfChapters = playlist.chapters.chapters.length;
	} else {
		NBCUOmniture.NumOfChapters = 0;
	}

	// Find the first clip which is not ad.
	var clips = playlist.clips;
	var firstClip = null;
	if (clips.length > 0) {
		var trialCount = 0;
		firstClip = clips[0];

		while (firstClip.baseClip.isAd == true && trialCount < clips.length && trialCount < 4) {
			trialCount++;
			firstClip = clips[trialCount];
		}
		NBCUOmniture.initializeInternal(firstClip);
	} else {
		NBCUOmniture.debug("Error: Could not initialize NBCUOmniture with the proper content.");
	}

	NBCUOmniture.debug("OnReleaseStart");
};

NBCUOmniture.getDayOfWeek = function() {
	var date = new Date()
	switch (date.getDay()) {
		case 0: return "Sunday";
		case 1: return "Monday";
		case 2: return "Tuesday";
		case 3: return "Wednesday";
		case 4: return "Thursday";
		case 5: return "Friday";
		case 6: return "Saturday";
	}
};

// Get date and return formatted string "MM/DD/YYYY"
NBCUOmniture.getDate = function () {
	var today = new Date();
	var mm = today.getMonth() + 1;
	var dd = today.getDate();
	var yyyy = today.getFullYear();
	var formatted = (mm < 10 ? "0" : "") + mm.toString() + "/" + (dd < 10 ? "0" : "") + dd.toString() + "/" + yyyy.toString();
	return formatted;
};

// Return formatted string "HH:MM".
// fHourOnly : if true, set MM into 00
NBCUOmniture.getHour = function (fHourOnly) {
	var now = new Date();
	var hh = now.getHours();
	var mm = fHourOnly? 0 : now.getMinutes();
	var formatted = (hh < 10 ? "0" : "") + hh.toString() + ":" + (mm < 10 ? "0" : "") + mm.toString();
	return formatted;
};

NBCUOmniture.parseCategoryName = function(categories) {
	var value = "";
	var regEx = /[Shows|Series]\/([^\/]*)\/?/;
	if(categories && categories.name  && regEx.test(categories.name)) {
		var m = categories.name.match(regEx);
		if(m.length > 0) {
			value = m[1];
		}
	}	
	return value;

};

NBCUOmniture.isDefined = function (value) {
	return (value != null && value != undefined);
};



NBCUOmniture._removeAllListener = function () {
	$pdk.controller.removeEventListener('OnMediaPause', NBCUOmniture.onMediaPause); 
	$pdk.controller.removeEventListener('OnMediaSeek', NBCUOmniture.onMediaSeek);
	$pdk.controller.removeEventListener('OnMediaStart', NBCUOmniture.onMediaStart);
	$pdk.controller.removeEventListener('OnMediaLoadStart', NBCUOmniture.onMediaLoadStart);
	$pdk.controller.removeEventListener('OnMediaPlaying', NBCUOmniture.onMediaPlaying);
	$pdk.controller.removeEventListener('OnShowFullScreen', NBCUOmniture.onShowFullScreen);
	$pdk.controller.removeEventListener('OnReleaseStart', NBCUOmniture.onReleaseStart);
	$pdk.controller.removeEventListener("OnMediaEnd", NBCUOmniture.onMediaEnd);
	$pdk.controller.removeEventListener("OnStreamSwitched", NBCUOmniture.onStreamSwitched);
};

NBCUOmniture.reset = function () {
	NBCUOmniture.isFullScreen = false;
	NBCUOmniture.mediaName = "";
	NBCUOmniture.timePlayed = 0;
	NBCUOmniture.timeTracked = 0;
	NBCUOmniture.isAd = false;
	NBCUOmniture.monitorInitialized = false;
	NBCUOmniture.NumOfChapters = 0;
	NBCUOmniture.videoEndTracked = false;
	NBCUOmniture.adTrackingNeeded = true; // We need to set ad events manually, because we couldn't set the parameter on initialization.
	//NBCUOmniture.hasMonitor = false;

	NBCUOmniture.prop8 = "";
	NBCUOmniture.prop42 = "";
	NBCUOmniture.prop43 = "";
	NBCUOmniture.prop45 = "";
	NBCUOmniture.debug("reset");
};


/*** Functions that should be called from the host page ***/

// Get the standard parameter string to setup the Omniture plugin for NBCU.
// isLongform : boolean indicating whether the content is FEP (longform), 
// if this value is null, we will use the nubmber of chapters to figure it out.
// fFlash: Boolean indicating whether the player is a flash player.
NBCUOmniture.getStandardParameter = function (isLongform, fFlash, additionalTrackVars) {
	NBCUOmniture.isLongform = isLongform;
	NBCUOmniture.isFlash = fFlash;
	NBCUOmniture.isLocal = true;
	NBCUOmniture.additionalTrackVars = additionalTrackVars;
	
	// trackVars
	var omnitureParam = "|trackVars=" + (additionalTrackVars ? NBCUOmniture.mergeTrackVars(additionalTrackVars) : NBCUOmniture.defaultTrackVars );

	// trackEvents
	if (isLongform == true) {
		omnitureParam += ("|trackEvents=" + NBCUOmniture.longFormEvents);
	} else if (isLongform == false) {
		omnitureParam += ("|trackEvents=" + NBCUOmniture.shortFormEvents);
	} else {
		// Don't know what video type is. Use the merged trackEvents.
		omnitureParam += ("|trackEvents=" + NBCUOmniture.longFormEvents + "," + NBCUOmniture.shortFormEvents);
	}

	// Static strings 
	// Flash/HTML5 Related.
	if (NBCUOmniture.isDefined(fFlash)) {
		omnitureParam += "|eVar27=" + (fFlash ? "Flash" : "HTML5")	
	}

	// Long form/short form related.
	if (NBCUOmniture.isDefined(isLongform)) {
		omnitureParam += ("|eVar47=" + (isLongform ? "Full Episode Ad Format" : "Clip Ad Format"));
	}

	omnitureParam += "|eVar39=Video Player|eVar48=Embedded Video Player";
	
	// Context Data Mapping
	omnitureParam += "|a.media.name=eVar40|mediaCategoryVars=eVar36|mediaGuidVars=eVar42|mediaIdVars=eVar50|trackMilestones=25%25,50%25,75%25";

	// Values to Override. For example eVar11 will be always "something to override", and eVar20 will be excluded from the tracknig data.
	//omnitureParam += "|eVar11=something to override|eVar20=";
	
	// Event setting
	if (NBCUOmniture.isDefined(isLongform)) {
		omnitureParam += (isLongform ? "|a.media.segmentView=event25|adViewEvent=event20|adCompleteEvent=event21,event22" : "|adViewEvent=event70|adCompleteEvent=event71,event72");
		NBCUOmniture.adTrackingNeeded = false;
	} else {
		// We couldn't add ad Events on the initialization param. Track ad manually.
		NBCUOmniture.adTrackingNeeded = true;

	}
	NBCUOmniture.debug(omnitureParam);
	return omnitureParam;
};

// Set up event listeners to set the custom tracking data.
NBCUOmniture.initialize = function (sitecatalystInstance) {

	if (sitecatalystInstance) {
		NBCUOmniture.s = eval(sitecatalystInstance);
		NBCUOmniture.CustomSiteCatalystName = sitecatalystInstance;
	}

	$pdk.controller.addEventListener('OnMediaPause', NBCUOmniture.onMediaPause); 
	$pdk.controller.addEventListener('OnMediaSeek', NBCUOmniture.onMediaSeek);
	$pdk.controller.addEventListener('OnMediaStart', NBCUOmniture.onMediaStart);
	$pdk.controller.addEventListener('OnMediaLoadStart', NBCUOmniture.onMediaLoadStart);
	$pdk.controller.addEventListener('OnMediaPlaying', NBCUOmniture.onMediaPlaying);
	$pdk.controller.addEventListener('OnShowFullScreen', NBCUOmniture.onShowFullScreen);
	$pdk.controller.addEventListener('OnReleaseStart', NBCUOmniture.onReleaseStart);
	$pdk.controller.addEventListener("OnMediaEnd", NBCUOmniture.onMediaEnd);
	$pdk.controller.addEventListener("OnStreamSwitched", NBCUOmniture.onStreamSwitched);

};

/*** End of Functions that should be called from the host page ***/

/*** Optional Helper Functions ***/
// Merge trackVars with the additional eVars & props.
NBCUOmniture.mergeTrackVars = function (additional) {
	var arrDefaultVars = NBCUOmniture.defaultTrackVars.split(",");
	var arrAdditional = additional ? additional.split(",") : [];
	for (var i = 0; i < arrAdditional.length; i++) {
		if (arrDefaultVars.indexOf(arrAdditional[i]) < 0) {
			arrDefaultVars.push(arrAdditional[i]);
		}
	}
	
	return arrDefaultVars.join();

};

/*** End of Optional Helper Functions ***/

/*** DIFFERENT SETTING PER BRAND ***/

NBCUOmniture.adjustProviderName = function (providerName) {
    var adjustedName = providerName;
    switch (adjustedName) {
        case "bravo":
            if (NBCUOmniture.isLongform) {
                adjustedName = "bravofullepisode";
            }
            break;
        case "usa network":
            adjustedName = "usa";
            break;
        case "oxygen":
            if (NBCUOmniture.isLongform) {
                adjustedName = "oxygenfullepisode";
            }
            break;
        case "scifi.com":
            adjustedName = NBCUOmniture.isLongform ? "scififullepisode" : "scifi";
            break;
        case "":
            adjustedName = "nobusinessunit";
            break;
    }

    return adjustedName;
};

// eVar36 is different per brand.
NBCUOmniture.getEVar36 = function (_clip) {
    var eVar36 = "";
    /*var subtitle = NBCUOmniture.getCustomProperty(_clip, "subtitle", "");
    if (_clip.baseClip.categories && _clip.baseClip.categories.length >= 1) {
        var category = _clip.baseClip.categories[_clip.baseClip.categories.length - 1];
        eVar36 = NBCUOmniture.parseCategoryName(category);
    }*/
    eVar36 = "WKC";
    
    return eVar36;
}

/*** END OF DIFFERENT SETTING PER BRAND ***/