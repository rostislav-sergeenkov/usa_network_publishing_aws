/* RF device detection code */
// @TODO: move to external JS
function usa_detectCurrentDevice () {
    var agent = navigator.userAgent.toLowerCase();
    var scrWidth = screen.width;
    var scrHeight = screen.height;
    // The document.documentElement dimensions seem to be identical to
    // the screen dimensions on all the mobile browsers I've tested so far
    var elemWidth = document.documentElement.clientWidth;
    var elemHeight = document.documentElement.clientHeight;
    // We need to eliminate Symbian, Series 60, Windows Mobile and Blackberry
    // browsers for this quick and dirty check. This can be done with the user agent.
    var otherBrowser = (agent.indexOf("series60") != -1) || (agent.indexOf("symbian") != -1) || (agent.indexOf("windows ce") != -1) || (agent.indexOf("blackberry") != -1);
    // If the screen orientation is defined we are in a modern mobile OS
    var mobileOS = typeof orientation != 'undefined' ? true : false;
    // If touch events are defined we are in a modern touch screen OS
    var touchOS = ('ontouchstart' in document.documentElement) ? true : false; //var touchOS = Modernizr.touch;

    // iPhone and iPad can be reliably identified with the navigator.platform
    // string, which is currently only available on these devices.
    var iOS = ((navigator.platform).toLowerCase().indexOf("iphone") != -1) ||
                ((navigator.platform).toLowerCase().indexOf("ipad") != -1) ||
            ((navigator.platform).toLowerCase().indexOf("ipod") != -1) ||
                ((agent).toLowerCase().indexOf("iphone") != -1) ||
            ((agent).toLowerCase().indexOf("ipod") != -1) ||
                ((agent).toLowerCase().indexOf("ipad") != -1) ? true : false;

    // If the user agent string contains "android" then it's Android. If it
    // doesn't but it's not another browser, not an iOS device and we're in
    // a mobile and touch OS then we can be 99% certain that it's Android.
    var android = (agent.indexOf("android") != -1) || (!iOS && !otherBrowser && touchOS && mobileOS) ? true : false;
    var smartphone = false;
    var mobileDevice = (iOS || android || mobileOS || touchOS || otherBrowser) ? true : false;

    var smartphoneWidthThreshold = 331; // 768; 
    var bW = window.innerWidth;
    var bH = window.innerHeight;
    if (window.innerWidth && window.innerHeight)
    {
        if (bW < smartphoneWidthThreshold && mobileDevice)
        {
            smartphone = true;
        }
    }

    return {
        otherBrowser : otherBrowser,
        mobileOS : mobileOS,
        touchOS : touchOS,
        iOS : iOS,
        android : android,
        mobileDevice : mobileDevice,
        smartphone : smartphone
    }
}

/*
 * Determine which show this video is related to 
 */
function usa_OnLoadReleaseUrl(evt) {
	// determine if we are about to play a full episode or a short form clip - cannot use as FW is called before this is known, have to pass in as param to player URL
	/*var customValuesArray = evt.data.customValues || null;
	
	if (!customValuesArray) {
		// assume short form if we don't get the right data back here... 
	} else {
		for (var i=0 ; i<customValuesArray.length ; i++) {
			if (customValuesArray[i].fieldName == 'fullEpisode') {
				//console.log('Found Full Episode Flag');
				usa_fullEpisodeFlag = customValuesArray[i].value;
				break;
			}
		}
	}*/
	
	// which show does this clip belong to? 
	var categoriesArray = evt.data.categories || null;
	if (!categoriesArray) {
		// no categories. so cannot load club scripts
	} else {
		for (var i=0 ; i<categoriesArray.length ; i++) {
			var categoryPieces = categoriesArray[i].name.split('/');

			if (categoryPieces.length >= 2) {
				var showName = categoryPieces[1];
				
				// disable on mobile devices for now...
				if (!usa_deviceInfo.mobileDevice) {
					if (!usa_clubJSloaded) {
						if (typeof usa_getUrlVars()['clubEnv'] != 'undefined') {
							loadScript('http://www2.usanetwork.com/_tp/js/usa_club_ps.js', function() { usa_club_env = usa_getUrlVars()['clubEnv']; clubDomainPrefix = usa_getUrlVars()['clubEnv'] + '.'; currentShowName = showName; usa_clubInit(); } );
						} else {
							loadScript('http://www2.usanetwork.com/_tp/js/usa_club_ps.js', function() { usa_club_env = 'prod'; clubDomainPrefix = ''; currentShowName = showName; usa_clubInit(); } );
						}
					} else {
						currentShowName = showName; 
						usa_clubInit();
					}
				}
				
				break;
			}
		}
	}
	
}

/*
 * RF Append device-specific values to the site section - Setting site/sect not doable here...
 */
function fw_config() {
	// set DFP tags for 300x250 companions
	/*var usa_dfpSect = Drupal.settings.USA.DART.values.sect || 'video';
	var usa_dfpSub = Drupal.settings.USA.DART.values.sub || 'video';
	var usa_dfpSub2 = Drupal.settings.USA.DART.values.sub2 || '';
	var usa_dfp300x250 = 'http://ad.doubleclick.net/adj/nbcu.usa/'+usa_dfpSect+'_'+usa_dfpSub+';sect='+usa_dfpSect+';sub='+usa_dfpSub+';site=usa;!category=usa;!category=videoplayer;sz=300x250;pos=7;tile=7;ord=';
*/
	if (usa_deviceInfo.mobileDevice) {
		if (usa_deviceInfo.smartphone) {
			return { 
				// smartphone
				siteSectionId : usa_freewheelSiteSection + "_hh"/*,
				keyValues : "dfp300_url="+encodeURIComponent(usa_dfp300x250)*/
			};
		} else {
			return { 
				// tablet
				siteSectionId : usa_freewheelSiteSection + "_tab"/*,
				keyValues : "dfp300_url="+encodeURIComponent(usa_dfp300x250)*/
			};
		}
	} else {
		return { 
			// desktop
			siteSectionId : usa_freewheelSiteSection/*,
			keyValues : "dfp300_url="+encodeURIComponent(usa_dfp300x250)*/
		};
	}
}

/*
 * RF Set not available graphic
 */
function usa_setNotAvailableMessage() {
	if (typeof jQuery == 'undefined') {
		// jQuery will not be loaded at this point so don't try and keep loading it
		loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
			// show custom message for mobile devices
			jQuery('div#player').css('display', 'none');
			jQuery('div.layout').append('<div style="width: 100%; height: 100%;z-index:2000000; position: relative;"><a href="#"><img src="http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/images/device_unavailable_v1.jpg" style="width:100%;height:100%;"></a></div>');
			
		});
	} else {
		jQuery('div#player').css('display', 'none');
		jQuery('div.layout').append('<div style="width: 100%; height: 100%;z-index:2000000; position: relative;"><a href="#"><img src="http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/images/device_unavailable_v1.jpg" style="width:100%;height:100%;"></a></div>');
	}
}

function usa_getUrlVars() {
       var vars = [], hash;
       var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
       for(var i = 0; i < hashes.length; i++) {
           hash = hashes[i].split('=');
           vars.push(hash[0]);
           vars[hash[0]] = hash[1];
       }
       return vars;
}

/*
 * RF Script Loader
 */
function loadScript(url, callback) {
	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState) { //IE
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else { //Others
		script.onload = function () {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function usa_OnMediaStart(evt) {
	var isAd = evt.data.baseClip.isAd || false;
	var possibleFiles = (evt.data.baseClip.possibleFiles) ? evt.data.baseClip.possibleFiles.length : -1;
	var clipTitle = evt.data.baseClip.title || '';
		
	if (!isAd && possibleFiles <= 0 && clipTitle == 'User Agent Restriction') {
		usa_setNotAvailableMessage();
		$pdk.controller.suspendPlayAll();
		$pdk.controller.cancelMedia();
	}
}

function usa_OnPlayerLoaded(evt) {
	// set auto play for some videos
    
    if ((usa_playerURLcontainerPage != usa_playerURL) && (unescape(usa_playerURLcontainerPage) == 'http://www.usanetwork.com/videos')) {
    	usa_autoPlay = false;
    }
    if (usa_deviceInfo.mobileDevice) {
    	usa_autoPlay = false;
    }
    if ((unescape(usa_playerURLcontainerPage)).indexOf('?tid') != -1) {
    	usa_autoPlay = false;
    }
    if (usa_autoPlay) {
    	$pdk.controller.clickPlayButton();
    }
}


// RF - setting global vars
var usa_deviceInfo = usa_detectCurrentDevice();
var usa_freewheelSiteSection = 'usa_hub_index_';
var usa_isAvailableOnDeviceFlag = false;
var usa_playerURL = window.location.href;
var usa_autoPlay = true;
var usa_fullEpisodeFlag = typeof usa_getUrlVars()['usa_fullEpisode'] != 'undefined' ? (usa_getUrlVars()['usa_fullEpisode']).replace('#playerurl', '') : false;
var usa_clubJSloaded = false;

if (usa_fullEpisodeFlag == 'false') {
	usa_freewheelSiteSection += 'short';
} else {
	usa_freewheelSiteSection += 'full';
}

var usa_playerURLparts = usa_playerURL.split('#');
if (usa_playerURLparts.length > 0) {
	var usa_playerURLminusHash = usa_playerURLparts[0];
	if (usa_playerURLparts.length >= 2) {
		var usa_playerURLcontainerPage = usa_playerURLparts[1].replace('playerurl=', '');
	} else {
		var usa_playerURLcontainerPage = usa_playerURL;
	}
		
	
} else {
	var usa_playerURLminusHash = usa_playerURL;
}



var usa_playerURLembed = usa_playerURLminusHash + '&usa_t=embed';
var usa_playerURLshare = unescape((typeof usa_playerURLcontainerPage != 'undefined') ? usa_playerURLcontainerPage : usa_playerURLminusHash);

window._PDK_SUPRESS_INITIALIZE = true;

var NBCUMetaOverlaySetting = NBCUMetaOverlaySetting || {};
var pdkCustomScripts = pdkCustomScripts || {};
pdkCustomScripts.normalMetaLayoutPath = "http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/data/normalMetaLayout.xml";
pdkCustomScripts.smallMetaLayoutPath = "http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/data/smallMetaLayout.xml";
pdkCustomScripts.skinUrl = "http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/skin.json";

tpconfig = {
    imageRoot:"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player",
	disableEndcard : true,
    endCardFeed: "http://feed.theplatform.com/f/OyMl-B/8IyhuVgUXDd_?form=json",
    endCardFeedAnnex : "&startIndex=1&endIndex=12&fields=guid,title,thumbnails,description,content,defaultThumbnailUrl&fileFields=url,duration,contentType,format,isDefault",
    embedURL : usa_playerURLembed, //"http://www.usanetwork.com/video/",
    embedWidth: "400",
    embedHeight: "225",
    autoPlay: false,
    //countdown: 15,
    //facebookPlayer: "http://player.theplatform.com/p/mq3BAC/l35VYDOSlMw2",
    emailUrl: "http://www2.usanetwork.com/_tp/email/email.php",
    shareURL: usa_playerURLshare
};

var pdkOverrides = {
	"player": {
		"skinUrl": pdkCustomScripts.skinUrl,
		"layoutUrl": pdkCustomScripts.normalMetaLayoutPath
	}
};

pdkCustomScripts.configure = function () {
	if ($(window).width() < 450) {
		pdkOverrides.player.layoutUrl = pdkCustomScripts.smallMetaLayoutPath;
	}

    // Initialize the PDK
	pdkCustomScripts.applyPdkOverrides();
    $pdk.initialize();
    
    // RF this was added so that we can determine what type of clip this is before other components need to know
    $pdk.controller.addEventListener("OnLoadReleaseUrl", "usa_OnLoadReleaseUrl");
    //$pdk.controller.addEventListener("OnMediaStart", "usa_OnMediaStart");
    $pdk.controller.addEventListener("OnMediaLoadStart", "usa_OnMediaStart");
    $pdk.controller.addEventListener("OnPlayerLoaded", "usa_OnPlayerLoaded");
    
    /*$pdk.controller.addEventListener("OnMediaError", "usa_OnMediaError");
    $pdk.controller.addEventListener("OnMediaLoadStart", "usa_OnMediaLoadStart");
    $pdk.controller.addEventListener("OnReleaseError", "usa_OnReleaseError");
    $pdk.controller.addEventListener("OnReleaseSelected", "usa_OnReleaseSelected");
    $pdk.controller.addEventListener("OnReleaseStart", "usa_OnReleaseStart");*/
    
	pdkCustomScripts.appendCompanionAdBlock();
    NBCUOmniture.initialize(null);
    NBCUEndShareCard.Initialize();
    NBCUMetaOverlay.initialize();
}

pdkCustomScripts.applyPdkOverrides = function () {
	var pageDivs = document.getElementsByTagName("div");
	var pdkDivs = [];
	for ( var pageDivIndex=0;pageDivIndex<pageDivs.length;pageDivIndex++) {
		if ( pageDivs[pageDivIndex].className.indexOf("tp") == 0) {
			pdkDivs.push(pageDivs[pageDivIndex]);
		}
	}

	for ( var pdkDivIndex=0;pdkDivIndex<pdkDivs.length;pdkDivIndex++){
		for ( pdkOverrideKey in pdkOverrides) {
			if ( pdkDivs[pdkDivIndex].id == pdkOverrideKey)   {
				for ( pdkOverrideParameter in pdkOverrides[pdkOverrideKey] ) {
					if ( pdkDivs[pdkDivIndex].attributes["tp:"+pdkOverrideParameter] != undefined) {
						pdkDivs[pdkDivIndex].attributes.removeNamedItem("tp:"+pdkOverrideParameter);
					}
					pdkDivs[pdkDivIndex].setAttribute("tp:"+pdkOverrideParameter, pdkOverrides[pdkOverrideKey][pdkOverrideParameter]);
				}
			}
		}
	}
}

function tpExtCompanionAdScriptCallback (htmlAdContent,deprecatedParam,height,width,mimeType,slotCustomId) {
	// RF no companions for smartphones
	if (usa_deviceInfo.smartphone) {
		return;
	}
	
	var companionAdEventObj = {
		htmlAdContent : htmlAdContent,
		height : height,
		width : width,
		mimeType : mimeType,
		slotCustomId : slotCustomId
	};
	$pdk.controller.dispatchEvent("OnCompanionAd",companionAdEventObj);
}

pdkCustomScripts.appendCompanionAdBlock = function () {
	// RF no companions for smartphones
	if (usa_deviceInfo.smartphone) {
		return;
	}
	
	// RF we are adding these to the player page inside the iframe to tell Freewheel how many slots are available
	//  ads will NOT be served in here, instead they will be transferred to the parent page using an event
	var adBlockMarkup300x250 = '<span id="300x250slot" class="_fwph">' +
								'<form id="_fw_form_300x250slot" style="display:none">' +
									'<input type="hidden" name="_fw_input_300x250slot" id="_fw_input_300x250slot" value="w=300&amp;h=250&amp;envp=g_js&amp;sflg=-nrpl;">' +
								'</form>' +
								'<span id="_fw_container_300x250slot" class="_fwac">' +
									'<span style="display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;"></span>' +
								'</span>' +
							'</span>';
	
	var adBlockMarkup728x90 = '<span id="728x90slot" class="_fwph">' +
								'<form id="_fw_form_728x90slot" style="display:none">' +
									'<input type="hidden" name="_fw_input_728x90slot" id="_fw_input_728x90slot" value="w=728&amp;h=90&amp;envp=g_js&amp;sflg=-nrpl;">' +
								'</form>' +
								'<span id="_fw_container_728x90slot" class="_fwac">' +
									'<span style="display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;"></span>' +
								'</span>' +
							'</span>';
	
	var adBlockMarkup300x60 = '<span id="300x60slot" class="_fwph">' +
								'<form id="_fw_form_300x60slot" style="display:none">' +
									'<input type="hidden" name="_fw_input_300x60slot" id="_fw_input_300x60slot" value="w=300&amp;h=60&amp;envp=g_js&amp;sflg=-nrpl;">' +
								'</form>' +
								'<span id="_fw_container_300x60slot" class="_fwac">' +
									'<span style="display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;"></span>' +
								'</span>' +
							'</span>';
	
	jQuery('body').append(adBlockMarkup728x90);
	jQuery('body').append(adBlockMarkup300x250);
	jQuery('body').append(adBlockMarkup300x60);
}

window.onload = function() {
	pdkCustomScripts.configure();
}