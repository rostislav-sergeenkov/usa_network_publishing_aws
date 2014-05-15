{
    "id": "http://data.player.theplatform.com/player/data/Player/9827",
    "guid": "KvDfEBPQ_jGgCgXGJV9zc2Jt_tQNbRpj",
    "updated": 1372257654000,
    "title": "USA Network Video Player Precision v1.3",
    "description": "Player for USA Network - final version",
    "added": 1370398797000,
    "ownerId": "http://access.auth.theplatform.com/data/Account/2140458126",
    "addedByUserId": "https://identity.auth.theplatform.com/idm/data/User/mpx/372808",
    "updatedByUserId": "https://identity.auth.theplatform.com/idm/data/User/mpx/372808",
    "version": 22,
    "locked": false,
    "paddingLeft": -1,
    "paddingTop": -1,
    "paddingRight": -1,
    "paddingBottom": -1,
    "height": 0,
    "width": 0,
    "allowFullScreen": true,
    "backgroundImageUrl": "",
    "colorSchemeId": "http://data.player.theplatform.com/player/data/ColorScheme/9343",
    "columns": 0,
    "disabled": false,
    "headerImageHeight": 0,
    "headerImageUrl": "",
    "itemsPerPage": 0,
    "layoutId": "http://data.player.theplatform.com/player/data/Layout/1120",
    "limitToCategories": [
        
    ],
    "overlayImageUrl": "",
    "feedUrl": "http://feed.theplatform.com/f/OyMl-B/Mm9cP9dhEl6T",
    "feedUrlParams": "manifest=true",
    "releaseUrlParams": "",
    "skinId": "http://data.player.theplatform.com/player/data/Skin/9342",
    "showAirdate": false,
    "showAuthor": false,
    "showBitrate": false,
    "thumbnailHeight": 0,
    "thumbnailWidth": 0,
    "allowSearch": true,
    "allowEmail": true,
    "allowGetLink": true,
    "allowEmbed": true,
    "alwaysShowOverlay": true,
    "autoPlay": false,
    "controlRackHeight": 0,
    "embedAllowFullScreen": true,
    "embedHeight": 0,
    "embedWidth": 0,
    "playAll": true,
    "playerUrl": "",
    "linkUrl": "",
    "endCardFeedUrl": "",
    "showAllChoice": false,
    "showFullTime": true,
    "showMostPopularChoice": false,
    "showNav": false,
    "shuffle": false,
    "useFloatingControls": true,
    "restrictionId": null,
    "embedRestrictionId": null,
    "adPolicyId": "http://data.delivery.theplatform.com/delivery/data/AdPolicy/27962",
    "embedAdPolicyId": null,
    "preferredRuntimes": [
        "Flash",
        "HTML5"
    ],
    "preferredFormats": [
        
    ],
    "aspectRatioWidth": 16,
    "aspectRatioHeight": 9,
    "controlLayoutXml": "",
    "customHtml": "",
    "customCss": "html, body {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\toverflow: hidden;\n\t\t\tborder: 0;\n\t\t}\n\t\t.layout {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t\t.tpMessage {\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #bebebe;\n\t\t\tbackground: #131313;\n\t\t}\n\t\t#player {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t\t.background {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tpadding:0px;\n}",
    "customJavaScript": "/* RF device detection code */\n// @TODO: move to external JS\nfunction usa_detectCurrentDevice () {\n    var agent = navigator.userAgent.toLowerCase();\n    var scrWidth = screen.width;\n    var scrHeight = screen.height;\n    // The document.documentElement dimensions seem to be identical to\n    // the screen dimensions on all the mobile browsers I've tested so far\n    var elemWidth = document.documentElement.clientWidth;\n    var elemHeight = document.documentElement.clientHeight;\n    // We need to eliminate Symbian, Series 60, Windows Mobile and Blackberry\n    // browsers for this quick and dirty check. This can be done with the user agent.\n    var otherBrowser = (agent.indexOf(\"series60\") != -1) || (agent.indexOf(\"symbian\") != -1) || (agent.indexOf(\"windows ce\") != -1) || (agent.indexOf(\"blackberry\") != -1);\n    // If the screen orientation is defined we are in a modern mobile OS\n    var mobileOS = typeof orientation != 'undefined' ? true : false;\n    // If touch events are defined we are in a modern touch screen OS\n    var touchOS = ('ontouchstart' in document.documentElement) ? true : false; //var touchOS = Modernizr.touch;\n\n    // iPhone and iPad can be reliably identified with the navigator.platform\n    // string, which is currently only available on these devices.\n    var iOS = ((navigator.platform).toLowerCase().indexOf(\"iphone\") != -1) ||\n                ((navigator.platform).toLowerCase().indexOf(\"ipad\") != -1) ||\n            ((navigator.platform).toLowerCase().indexOf(\"ipod\") != -1) ||\n                ((agent).toLowerCase().indexOf(\"iphone\") != -1) ||\n            ((agent).toLowerCase().indexOf(\"ipod\") != -1) ||\n                ((agent).toLowerCase().indexOf(\"ipad\") != -1) ? true : false;\n\n    // If the user agent string contains \"android\" then it's Android. If it\n    // doesn't but it's not another browser, not an iOS device and we're in\n    // a mobile and touch OS then we can be 99% certain that it's Android.\n    var android = (agent.indexOf(\"android\") != -1) || (!iOS && !otherBrowser && touchOS && mobileOS) ? true : false;\n    var smartphone = false;\n    var mobileDevice = (iOS || android || mobileOS || touchOS || otherBrowser) ? true : false;\n\n    var smartphoneWidthThreshold = 768; \n    var bW = window.innerWidth;\n    var bH = window.innerHeight;\n    if (window.innerWidth && window.innerHeight)\n    {\n        if (bW < smartphoneWidthThreshold && mobileDevice)\n        {\n            smartphone = true;\n        }\n    }\n\n    return {\n        otherBrowser : otherBrowser,\n        mobileOS : mobileOS,\n        touchOS : touchOS,\n        iOS : iOS,\n        android : android,\n        mobileDevice : mobileDevice,\n        smartphone : smartphone\n    }\n}\n\n/*\n * IF If needed for AdOps... Currently NOT USED\n */\nfunction usa_convertShowName(input) {\n\tvar output = input;\n\tswitch(input) {\n\t\tcase 'Burn Notice': output = 'burnnotice'; break;\n\t\tcase 'Covert Affairs': output = 'covertaffairs'; break;\n\t\tcase 'Psych': output = 'psych'; break;\n\t\t// ...\n\t}\n\treturn output;\n}\n\n/*\n * Determine long/short form type and set FW site section accordingly \n */\nfunction usa_OnLoadReleaseUrl(evt) {\n\t//if (typeof console != 'undefined') { console.log('calling usa_OnLoadReleaseUrl()'); }\n\t//if (typeof console != 'undefined') { console.log(evt); }\n\t\n\t// determine if we are about to play a full episode or a short form clip\n\t/*var customValuesArray = evt.data.customValues || null;\n\t\n\tif (!customValuesArray) {\n\t\t// assume short form if we don't get the right data back here... \n\t} else {\n\t\tfor (var i=0 ; i<customValuesArray.length ; i++) {\n\t\t\tif (customValuesArray[i].fieldName == 'fullEpisode') {\n\t\t\t\t//console.log('Found Full Episode Flag');\n\t\t\t\tusa_fullEpisodeFlag = customValuesArray[i].value;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}*/\n\t\n\t// which show does this clip belong to? NOT CURRENTLY USED\n\t/*\n\tvar categoriesArray = evt.data.categories || null;\n\tif (!categoriesArray) {\n\t\t// no categories. so we stick with our defaults\n\t\t//console.log('No Categories');\n\t} else {\n\t\tfor (var i=0 ; i<categoriesArray.length ; i++) {\n\t\t\tvar categoryPieces = categoriesArray[i].name.split('/');\n\t\t\t//console.log(categoryPieces);\n\t\t\tif (categoryPieces.length >= 2) {\n\t\t\t\tusa_freewheelSiteSection = 'usa_hub_' + usa_convertShowName(categoryPieces[1]) + '_';\n\t\t\t\t//console.log(usa_freewheelSiteSection);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\t*/\n}\n\n/*\n * RF Can this device see this video? NOT USED - this only works if the player has the restriction on it, as opposed to the media\n */\n/*\nfunction usa_isAvailableOnDevice() {\n\tif (typeof tpResponse != 'undefined') {\n\t\tif (typeof tpResponse.title != 'undefined' && typeof tpResponse.responseCode != 'undefined') {\n\t\t\tif (tpResponse.title == \"UserAgentBlockedException\" && tpResponse.responseCode == 403) {\n\t\t\t\tusa_setNotAvailableMessage();\n\t\t\t\treturn false;\n\t\t\t} else {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t} else {\n\t\t\treturn true;\n\t\t}\n\t} else {\n\t\t// assume true\n\t\treturn true;\n\t}\n}\n*/\n\n/*\n * RF Append device-specific values to the site section - Setting site/sect not doable here...\n */\nfunction fw_config() {\n\tif(typeof console !== 'undefined') {\n\t\tif(typeof console.log !== 'undefined') {\n\t\t\tconsole.log(\"fw_config() fired...\");\n\t\t}\n\t}\n\t\n\t// set DFP tags for 300x250 companions\n\t/*var usa_dfpSect = Drupal.settings.USA.DART.values.sect || 'video';\n\tvar usa_dfpSub = Drupal.settings.USA.DART.values.sub || 'video';\n\tvar usa_dfpSub2 = Drupal.settings.USA.DART.values.sub2 || '';\n\tvar usa_dfp300x250 = 'http://ad.doubleclick.net/adj/nbcu.usa/'+usa_dfpSect+'_'+usa_dfpSub+';sect='+usa_dfpSect+';sub='+usa_dfpSub+';site=usa;!category=usa;!category=videoplayer;sz=300x250;pos=7;tile=7;ord=';\n*/\n\tif (usa_deviceInfo.mobileDevice) {\n\t\tif (usa_deviceInfo.smartphone) {\n\t\t\treturn { \n\t\t\t\t// smartphone\n\t\t\t\tsiteSectionId : usa_freewheelSiteSection + \"_hh\"/*,\n\t\t\t\tkeyValues : \"dfp300_url=\"+encodeURIComponent(usa_dfp300x250)*/\n\t\t\t};\n\t\t} else {\n\t\t\treturn { \n\t\t\t\t// tablet\n\t\t\t\tsiteSectionId : usa_freewheelSiteSection + \"_tab\"/*,\n\t\t\t\tkeyValues : \"dfp300_url=\"+encodeURIComponent(usa_dfp300x250)*/\n\t\t\t};\n\t\t}\n\t} else {\n\t\treturn { \n\t\t\t// desktop\n\t\t\tsiteSectionId : usa_freewheelSiteSection/*,\n\t\t\tkeyValues : \"dfp300_url=\"+encodeURIComponent(usa_dfp300x250)*/\n\t\t};\n\t}\n}\n\n/*\n * RF Set not available graphic\n */\nfunction usa_setNotAvailableMessage() {\n\tif (typeof jQuery == 'undefined') {\n\t\t// jQuery will not be loaded at this point so don't try and keep loading it\n\t\tloadScript(\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js\", function () {\n\t\t\t// show custom message for mobile devices\n\t\t\tjQuery('div#player').css('display', 'none');\n\t\t\tjQuery('div.layout').append('<div style=\"width: 100%; height: 100%;z-index:2000000; position: relative;\"><a href=\"#\"><img src=\"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/images/device_unavailable_v1.jpg\" style=\"width:100%;height:100%;\"></a></div>');\n\t\t\t\n\t\t});\n\t} else {\n\t\tjQuery('div#player').css('display', 'none');\n\t\tjQuery('div.layout').append('<div style=\"width: 100%; height: 100%;z-index:2000000; position: relative;\"><a href=\"#\"><img src=\"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/images/device_unavailable_v1.jpg\" style=\"width:100%;height:100%;\"></a></div>');\n\t}\n}\n\nfunction getUrlVars() {\n       var vars = [], hash;\n       var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n       for(var i = 0; i < hashes.length; i++) {\n           hash = hashes[i].split('=');\n           vars.push(hash[0]);\n           vars[hash[0]] = hash[1];\n       }\n       return vars;\n}\n\n/*\n * RF Script Loader\n */\nfunction loadScript(url, callback) {\n\tvar script = document.createElement(\"script\")\n\tscript.type = \"text/javascript\";\n\n\tif (script.readyState) { //IE\n\t\tscript.onreadystatechange = function () {\n\t\t\tif (script.readyState == \"loaded\" || script.readyState == \"complete\") {\n\t\t\t\tscript.onreadystatechange = null;\n\t\t\t\tcallback();\n\t\t\t}\n\t\t};\n\t} else { //Others\n\t\tscript.onload = function () {\n\t\t\tcallback();\n\t\t};\n\t}\n\n\tscript.src = url;\n\tdocument.getElementsByTagName(\"head\")[0].appendChild(script);\n}\n\nfunction usa_OnMediaStart(evt) {\n\t/*if (typeof console != 'undefined') { console.log('calling usa_OnMediaStart()'); }\n\tif (typeof console != 'undefined') { console.log(evt); }\n\tif (typeof console != 'undefined') { console.log('title: ' + evt.data.baseClip.title); }\n\tif (typeof console != 'undefined') { console.log('description: ' + evt.data.baseClip.description); }\n\tif (typeof console != 'undefined') { console.log('possible files: ' + evt.data.baseClip.possibleFiles.length); }\n\tif (typeof console != 'undefined') { console.log('overlay: ' + evt.data.baseClip.isOverlay); }*/\n\t\n\tvar isAd = evt.data.baseClip.isAd || false;\n\tvar possibleFiles = (evt.data.baseClip.possibleFiles) ? evt.data.baseClip.possibleFiles.length : -1;\n\tvar clipTitle = evt.data.baseClip.title || '';\n\t\n\t//if (typeof console != 'undefined') { console.log('isAd: ' + isAd); }\n\t//if (typeof console != 'undefined') { console.log('possibleFiles: ' + possibleFiles); }\n\t//if (typeof console != 'undefined') { console.log('clipTitle: ' + clipTitle); }\n\t\n\tif (!isAd && possibleFiles <= 0 && clipTitle == 'User Agent Restriction') {\n\t\t//if (typeof console != 'undefined') { console.log('setting message...'); }\n\t\tusa_setNotAvailableMessage();\n\t\t$pdk.controller.suspendPlayAll();\n\t\t$pdk.controller.cancelMedia();\n\t\t//$pdk.controller.resetPlayer()\n\t}\n}\n\nfunction usa_OnPlayerLoaded(evt) {\n\t// set auto play for some videos\n    \n    if ((usa_playerURLcontainerPage != usa_playerURL) && (unescape(usa_playerURLcontainerPage) == 'http://www.usanetwork.com/videos')) {\n    \tusa_autoPlay = false;\n    }\n    if (usa_deviceInfo.mobileDevice) {\n    \tusa_autoPlay = false;\n    }\n    if ((unescape(usa_playerURLcontainerPage)).indexOf('?tid') != -1) {\n    \tusa_autoPlay = false;\n    }\n    if (usa_autoPlay) {\n    \t$pdk.controller.clickPlayButton();\n    }\n}\n\n\n// RF - setting global vars\nvar usa_deviceInfo = usa_detectCurrentDevice();\nvar usa_freewheelSiteSection = 'usa_hub_index_';\nvar usa_isAvailableOnDeviceFlag = false;\nvar usa_playerURL = window.location.href;\nvar usa_autoPlay = true;\nvar usa_fullEpisodeFlag = typeof getUrlVars()['usa_fullEpisode'] != 'undefined' ? (getUrlVars()['usa_fullEpisode']).replace('#playerurl', '') : false;\n\nif (usa_fullEpisodeFlag == 'false') {\n\tusa_freewheelSiteSection += 'short';\n} else {\n\tusa_freewheelSiteSection += 'full';\n}\n\nvar usa_playerURLparts = usa_playerURL.split('#');\nif (usa_playerURLparts.length > 0) {\n\tvar usa_playerURLminusHash = usa_playerURLparts[0];\n\tif (usa_playerURLparts.length >= 2) {\n\t\tvar usa_playerURLcontainerPage = usa_playerURLparts[1].replace('playerurl=', '');\n\t} else {\n\t\tvar usa_playerURLcontainerPage = usa_playerURL;\n\t}\n\t\t\n\t\n} else {\n\tvar usa_playerURLminusHash = usa_playerURL;\n}\n\n\n\nvar usa_playerURLembed = usa_playerURLminusHash + '&usa_t=embed';\nvar usa_playerURLshare = unescape((typeof usa_playerURLcontainerPage != 'undefined') ? usa_playerURLcontainerPage : usa_playerURLminusHash);\n\nwindow._PDK_SUPRESS_INITIALIZE = true;\n\nvar NBCUMetaOverlaySetting = NBCUMetaOverlaySetting || {};\nvar pdkCustomScripts = pdkCustomScripts || {};\npdkCustomScripts.normalMetaLayoutPath = \"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/data/normalMetaLayout.xml\";\npdkCustomScripts.smallMetaLayoutPath = \"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/data/smallMetaLayout.xml\";\npdkCustomScripts.skinUrl = \"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player/skin.json\";\n\ntpconfig = {\n    imageRoot:\"http://www.usanetwork.com/sites/usanetwork/modules/custom/usanetwork_video/player\",\n\tdisableEndcard : true,\n    endCardFeed: \"http://feed.theplatform.com/f/OyMl-B/8IyhuVgUXDd_?form=json\",\n    endCardFeedAnnex : \"&startIndex=1&endIndex=12&fields=guid,title,thumbnails,description,content,defaultThumbnailUrl&fileFields=url,duration,contentType,format,isDefault\",\n    embedURL : usa_playerURLembed, //\"http://www.usanetwork.com/video/\",\n    embedWidth: \"400\",\n    embedHeight: \"225\",\n    autoPlay: false,\n    //countdown: 15,\n    //facebookPlayer: \"http://player.theplatform.com/p/mq3BAC/l35VYDOSlMw2\",\n    emailUrl: \"http://www2.usanetwork.com/_tp/email/email.php\",\n    shareURL: usa_playerURLshare\n};\n\nvar pdkOverrides = {\n\t\"player\": {\n\t\t\"skinUrl\": pdkCustomScripts.skinUrl,\n\t\t\"layoutUrl\": pdkCustomScripts.normalMetaLayoutPath\n\t}\n};\n\npdkCustomScripts.configure = function () {\n\tif (typeof console != 'undefined') { console.log('calling pdkCustomScripts()...'); }\n\t\n\tif ($(window).width() < 450) {\n\t\tpdkOverrides.player.layoutUrl = pdkCustomScripts.smallMetaLayoutPath;\n\t}\n\n    // Initialize the PDK\n\tpdkCustomScripts.applyPdkOverrides();\n    $pdk.initialize();\n    \n    // RF this was added so that we can determine what type of clip this is before other components need to know\n    //$pdk.controller.addEventListener(\"OnLoadReleaseUrl\", \"usa_OnLoadReleaseUrl\");\n    //$pdk.controller.addEventListener(\"OnMediaStart\", \"usa_OnMediaStart\");\n    $pdk.controller.addEventListener(\"OnMediaLoadStart\", \"usa_OnMediaStart\");\n    $pdk.controller.addEventListener(\"OnPlayerLoaded\", \"usa_OnPlayerLoaded\");\n    \n    /*$pdk.controller.addEventListener(\"OnMediaError\", \"usa_OnMediaError\");\n    $pdk.controller.addEventListener(\"OnMediaLoadStart\", \"usa_OnMediaLoadStart\");\n    $pdk.controller.addEventListener(\"OnReleaseError\", \"usa_OnReleaseError\");\n    $pdk.controller.addEventListener(\"OnReleaseSelected\", \"usa_OnReleaseSelected\");\n    $pdk.controller.addEventListener(\"OnReleaseStart\", \"usa_OnReleaseStart\");*/\n    \n\tpdkCustomScripts.appendCompanionAdBlock();\n    NBCUOmniture.initialize(null);\n    NBCUEndShareCard.Initialize();\n    NBCUMetaOverlay.initialize();\n}\n\npdkCustomScripts.applyPdkOverrides = function () {\n\tvar pageDivs = document.getElementsByTagName(\"div\");\n\tvar pdkDivs = [];\n\tfor ( var pageDivIndex=0;pageDivIndex<pageDivs.length;pageDivIndex++) {\n\t\tif ( pageDivs[pageDivIndex].className.indexOf(\"tp\") == 0) {\n\t\t\tpdkDivs.push(pageDivs[pageDivIndex]);\n\t\t}\n\t}\n\n\tfor ( var pdkDivIndex=0;pdkDivIndex<pdkDivs.length;pdkDivIndex++){\n\t\tfor ( pdkOverrideKey in pdkOverrides) {\n\t\t\tif ( pdkDivs[pdkDivIndex].id == pdkOverrideKey)   {\n\t\t\t\tfor ( pdkOverrideParameter in pdkOverrides[pdkOverrideKey] ) {\n\t\t\t\t\tif ( pdkDivs[pdkDivIndex].attributes[\"tp:\"+pdkOverrideParameter] != undefined) {\n\t\t\t\t\t\tpdkDivs[pdkDivIndex].attributes.removeNamedItem(\"tp:\"+pdkOverrideParameter);\n\t\t\t\t\t}\n\t\t\t\t\tpdkDivs[pdkDivIndex].setAttribute(\"tp:\"+pdkOverrideParameter, pdkOverrides[pdkOverrideKey][pdkOverrideParameter]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction tpExtCompanionAdScriptCallback (htmlAdContent,deprecatedParam,height,width,mimeType,slotCustomId) {\n\tif (typeof console != 'undefined') { console.log('calling tpExtCompanionAdScriptCallback()'); }\n\t\n\t// RF no companions for smartphones\n\tif (usa_deviceInfo.smartphone) {\n\t\treturn;\n\t}\n\t\n\tvar companionAdEventObj = {\n\t\thtmlAdContent : htmlAdContent,\n\t\theight : height,\n\t\twidth : width,\n\t\tmimeType : mimeType,\n\t\tslotCustomId : slotCustomId\n\t};\n\t$pdk.controller.dispatchEvent(\"OnCompanionAd\",companionAdEventObj);\n}\n\npdkCustomScripts.appendCompanionAdBlock = function () {\n\tif (typeof console != 'undefined') { console.log('calling appendCompanionAdBlock()'); }\n\t\n\t// RF no companions for smartphones\n\tif (usa_deviceInfo.smartphone) {\n\t\treturn;\n\t}\n\t\n\t// RF we are adding these to the player page inside the iframe to tell Freewheel how many slots are available\n\t//  ads will NOT be served in here, instead they will be transferred to the parent page using an event\n\tvar adBlockMarkup300x250 = '<span id=\"300x250slot\" class=\"_fwph\">' +\n\t\t\t\t\t\t\t\t'<form id=\"_fw_form_300x250slot\" style=\"display:none\">' +\n\t\t\t\t\t\t\t\t\t'<input type=\"hidden\" name=\"_fw_input_300x250slot\" id=\"_fw_input_300x250slot\" value=\"w=300&amp;h=250&amp;envp=g_js&amp;sflg=-nrpl;\">' +\n\t\t\t\t\t\t\t\t'</form>' +\n\t\t\t\t\t\t\t\t'<span id=\"_fw_container_300x250slot\" class=\"_fwac\">' +\n\t\t\t\t\t\t\t\t\t'<span style=\"display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;\"></span>' +\n\t\t\t\t\t\t\t\t'</span>' +\n\t\t\t\t\t\t\t'</span>';\n\t\n\tvar adBlockMarkup728x90 = '<span id=\"728x90slot\" class=\"_fwph\">' +\n\t\t\t\t\t\t\t\t'<form id=\"_fw_form_728x90slot\" style=\"display:none\">' +\n\t\t\t\t\t\t\t\t\t'<input type=\"hidden\" name=\"_fw_input_728x90slot\" id=\"_fw_input_728x90slot\" value=\"w=728&amp;h=90&amp;envp=g_js&amp;sflg=-nrpl;\">' +\n\t\t\t\t\t\t\t\t'</form>' +\n\t\t\t\t\t\t\t\t'<span id=\"_fw_container_728x90slot\" class=\"_fwac\">' +\n\t\t\t\t\t\t\t\t\t'<span style=\"display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;\"></span>' +\n\t\t\t\t\t\t\t\t'</span>' +\n\t\t\t\t\t\t\t'</span>';\n\t\n\tvar adBlockMarkup300x60 = '<span id=\"300x60slot\" class=\"_fwph\">' +\n\t\t\t\t\t\t\t\t'<form id=\"_fw_form_300x60slot\" style=\"display:none\">' +\n\t\t\t\t\t\t\t\t\t'<input type=\"hidden\" name=\"_fw_input_300x60slot\" id=\"_fw_input_300x60slot\" value=\"w=300&amp;h=60&amp;envp=g_js&amp;sflg=-nrpl;\">' +\n\t\t\t\t\t\t\t\t'</form>' +\n\t\t\t\t\t\t\t\t'<span id=\"_fw_container_300x60slot\" class=\"_fwac\">' +\n\t\t\t\t\t\t\t\t\t'<span style=\"display:inline-block; vertical-align:top; margin:0px 0px 0px 0px;\"></span>' +\n\t\t\t\t\t\t\t\t'</span>' +\n\t\t\t\t\t\t\t'</span>';\n\t\n\tjQuery('body').append(adBlockMarkup728x90);\n\tjQuery('body').append(adBlockMarkup300x250);\n\tjQuery('body').append(adBlockMarkup300x60);\n}\n\nwindow.onload = function() {\n\tpdkCustomScripts.configure();\n}",
    "includeDefaultCss": true,
    "regionWidths": {
        
    },
    "regionHeights": {
        
    },
    "customProperties": {
        "endCard": "none",
        "allowBandwidth": "false"
    },
    "enabledPlugIns": [
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/2148",
            "regionName": "player",
            "params": {
                "c2": "3000065",
                "priority": "1",
                "c4": "3000065",
                "trackEachChapter": "true"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/1887",
            "regionName": "player",
            "params": {
                "reminder": "20",
                "priority": "1",
                "path": "http://www2.usanetwork.com/videos/hub/latest/ratings",
                "delay": "10"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/2150",
            "regionName": "player",
            "params": {
                "enablecustomparse": "nbc",
                "sid": "2500011627",
                "displayfieldname": "season",
                "tfid": "1362",
                "vcid": "c07",
                "clientid": "us-800148",
                "category": "0",
                "displayprefix": "Season",
                "adsubcategory": "fw:subcategory",
                "priority": "1",
                "subcategory": "season",
                "sfcode": "us",
                "adcategory": "fw:category",
                "adurlfield": "fw:adurl",
                "prod": "vc,iag"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/1142",
            "regionName": "player",
            "params": {
                "dc": "112",
                "trackVars": "eVar9,eVar11,eVar12,eVar13,eVar14,eVar27,eVar36,eVar37,eVar38,eVar39,eVar40,eVar41,eVar42,eVar45,eVar47,eVar48,eVar50,prop2,prop8,prop9,prop20,prop42,prop43,prop44,prop45,prop46,prop50,products,events",
                "host": "oimg.nbcuni.com",
                "priority": "1",
                "visitorNamespace": "nbcuniversal",
                "account": "nbcuglobal",
                "trackEvents": "event20,event21,event22,event23,event24,event25,event26,event27,event28,event29,event30,event31,event81,event82,event70,event71,event72,event73,event74,event75,event76,event77,event78,event79,event80",
                "frequency": "25%",
                "secureHost": "osimg.nbcuni.com"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9379",
            "regionName": "player",
            "params": {
                "priority": "1"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9378",
            "regionName": "player",
            "params": {
                "priority": "1"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9381",
            "regionName": "player",
            "params": {
                "priority": "1"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9382",
            "regionName": "player",
            "params": {
                "priority": "1"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9380",
            "regionName": "player",
            "params": {
                "priority": "1"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/6333",
            "regionName": "player",
            "params": {
                "pemURLsSeparator": ",",
                "playerProfileHTML5": "nbcu_live_jsam",
                "siteSectionId": "usa_hub_index_short",
                "isLive": "false",
                "priority": "1",
                "networkId": "169843",
                "pemURLs": "http://adm.fwmrm.net/p/nbcu_live/AnalyticsExtension.swf,http://adm.fwmrm.net/p/nbcu_live/CountdownTimerExtension.swf",
                "adManagerUrl": "http://adm.fwmrm.net/p/nbcu_live/AdManager.{ext}",
                "autoPlay": "true",
                "serverUrl": "http://29773.v.fwmrm.net",
                "playerProfile": "nbcu_live_as3",
                "bannerScriptName": "tpExtCompanionAdScriptCallback"
            }
        },
        {
            "plugInId": "http://data.player.theplatform.com/player/data/PlugIn/9959",
            "regionName": "player",
            "params": {
                "customerName": "c3.NBCU-USA",
                "fallback": "switch%3Dprogressive",
                "customerId": "c3.NBCU-USA",
                "priority": "1",
                "manifest": "true",
                "serviceUrl": "http://livepass.conviva.com",
                "androidHLS": "true",
                "pluginType": "precision"
            }
        }
    ],
    "adminTags": [
        
    ],
    "enableExternalController": true,
    "autoInitialize": false,
    "allowRss": true,
    "customCssUrls": [
        "http://www2.usanetwork.com/_tp/css/customPlayerStyles.css"
    ],
    "customJavaScriptUrls": [
        "http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js",
        "http://www2.usanetwork.com/_tp/js/customOmnitureData.js",
        "http://www2.usanetwork.com/_tp/js/NBCUEndShareCard.js",
        "http://www2.usanetwork.com/_tp/js/NBCUMetaOverlay.js"
    ],
    "pid": "MRoIm4XSGo7E"
}