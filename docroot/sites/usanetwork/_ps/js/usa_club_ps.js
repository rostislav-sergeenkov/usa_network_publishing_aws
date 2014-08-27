/* === Video Hub === */
/* JS file to handle JS communication to the USA Club sites */
/*
 * 
 * 
 * NOTE: This version is specifically for player services where the player will determine what show this is related to based on the JS var currentShowName
 * 
 * 
 * 
 */
var usa_club_timeOut;
var usa_club_playerInstance;
var usa_club_playerMetaData;
var usa_club_env = 'prod';
var clubDomainPrefix = '' // determined by PS
var usa_club_domain = ''; // determined by PS
var usa_club_welcomeShown = 0;
var usa_clubUser;
var usa_clubUserObj = function(personUUID) {
	this.personUUID = personUUID;
}
var usa_checkedLoggedInUser = false;
var usa_taskArgs = "";
var usa_club_logo = "";
var usa_club_name = "";
var usa_club_show_name = "";
var adPlaying = false;
var usa_club_playerMetaData;

function usa_club_debug_js(msg)
{
	if (typeof console != 'undefined' && usa_club_env == 'dev')
	{
		console.log(msg);
	}
}

function usa_club_checkUserLoggedIn()
{
	usa_club_debug_js('fn: usa_club_checkUserLoggedIn');
	
	var params = 'jsoncallback=?';
	jQuery.getJSON('http://' + usa_club_domain + '/accounts/ajax-is-user-logged-in?' + params, function(data) {
		usa_club_debug_js('fn: usa_club_checkUserLoggedInCallback');
		
		if (data.loggedIn == true)
		{
			usa_clubUser = new usa_clubUserObj(data.personUUID);
		}
		usa_checkedLoggedInUser = true;
		usa_club_setupVideoEvents();
	});
}

function usa_club_processWatchedVideo(e)
{
	usa_club_debug_js('fn: usa_club_processWatchedVideo');
	
	if (!adPlaying)
	{
		if (typeof usa_clubUser != 'undefined')
		{
			if (typeof usa_clubUser.personUUID != 'undefined')
			{
				usa_club_debug_js('Just watched: Video ID:' + usa_club_playerMetaData.guid + ', "' + encodeURIComponent((usa_club_playerMetaData.title).replace(/"/g, '&quot;')) + '"');
				
				var image = '';
				var vidUrl = usa_playerURLshare || '';
				/*if (typeof NBC.ShareLink != 'undefined')
				{
					vidUrl = NBC.ShareLink;
				}
				if (typeof usa_club_playerMetaData.media$thumbnails[1] != 'undefined')
				{
					image = usa_club_playerMetaData.media$thumbnails[1].plfile$url;
				}*/
							
				if ((currentShowName == 'Psych') ||
					(currentShowName == 'Burn Notice') ||
					(currentShowName == 'White Collar') ||
					(currentShowName == 'Royal Pains') || 
					(currentShowName == 'WWE Tough Enough') ||
					(currentShowName == 'Covert Affairs'))
				{
					
					if (usa_club_playerMetaData.guid != '')
					{
						var params = 'personUUID=' + usa_clubUser.personUUID + '&videoID=' + usa_club_playerMetaData.guid + '&videoTitle=' + encodeURIComponent((usa_club_playerMetaData.title).replace(/"/g, '&quot;')) + '&videoThumb=' + encodeURIComponent(image) + '&videoURL=' + encodeURIComponent(vidUrl) + '&jsoncallback=?';
						$.getJSON('http://' + usa_club_domain + '/challenges/ajax-process-video?' + params, function(data) {
							usa_club_debug_js('fn: usa_club_processWatchedVideoCallback');
							usa_club_debug_js('Response Success: ' + data.success);
							usa_club_debug_js('Response Error: ' + data.error);
						});
						usa_club_playerMetaData.guid = '';
						usa_club_playerMetaData.title = '';
					}
				}
				else
				{
					usa_club_debug_js('Non club video content');
				}
			}
			else
			{
				usa_club_debug_js('User not logged in to a club');
			}
		}
		else
		{
			usa_club_debug_js('User not logged in to a club');
		}
	}
	else
	{
		usa_club_debug_js('Ad Playing');
	}
}

function usa_club_setupNewVideo(e)
{
	usa_club_debug_js('fn: usa_club_setupNewVideo');
	usa_club_debug_js(e);
	
	if (e.data.baseClip.provider == 'freewheel') {
		// ad showing
		adPlaying = true;
	} else {
		// video playing
		adPlaying = false;
		usa_club_playerMetaData = {
			guid : e.data.baseClip.guid,
			title : e.data.baseClip.title	
		}

		/* workaround for PS PDK bug */
		if (usa_club_playerMetaData.title == null) {
			usa_club_playerMetaData.title = (typeof e.data.title != 'undefined') ? e.data.title : '';
		}

		usa_club_debug_js('About to watch: Video ID:' + usa_club_playerMetaData.guid + ', "' + usa_club_playerMetaData.title + '"');
	}
}

function usa_club_setupVideoEvents()
{
	usa_club_debug_js('fn: usa_club_setupVideoEvents');
	
	if (typeof tpController != 'undefined')
	{
		usa_club_debug_js('fn: setting event listeners');
					
		tpController.addEventListener("OnMediaStart", usa_club_setupNewVideo);
		tpController.addEventListener("OnMediaEnd", usa_club_processWatchedVideo);
	}
	else
	{
		usa_club_timeOut = setTimeout(usa_club_setupVideoEvents, 1000);
	}
} 

function usa_clubInit()
{
	usa_club_debug_js('fn: usa_clubInit');
	usa_checkedLoggedInUser = false;
	usa_clubUser = null;
	
	var url = window.location.href;
	
	// this has 
	if (typeof currentShowName == 'undefined')
	{
		return;
	}
	
	if (currentShowName == 'Psych')
	{
		usa_club_domain = clubDomainPrefix + 'clubpsych.usanetwork.com';
		usa_club_logo = 'http://' + usa_club_domain + '/themes/psych/images/ext-logo-50.png';
		usa_club_name = "Club Psych";
		usa_club_show_name = "Psych";
		usa_club_checkUserLoggedIn();
	}
	else if (currentShowName == 'Burn Notice')
	{
		usa_club_domain = clubDomainPrefix + 'burncircle.usanetwork.com';
		usa_club_logo = 'http://www.usanetwork.com/series/burnnotice/burncircle/images/ext-logo-50.png';
		usa_club_name = "Burn Circle";
		usa_club_show_name = "Burn Notice";
		usa_club_checkUserLoggedIn();
	}
	else if (currentShowName == 'White Collar')
	{
		usa_club_domain = clubDomainPrefix + 'whitecollarsociety.usanetwork.com';
		usa_club_logo = 'http://www.usanetwork.com/series/whitecollar/whitecollarsociety/images/ext-logo-50.png';
		usa_club_name = "White Collar Society";
		usa_club_show_name = "White Collar";
		usa_club_checkUserLoggedIn();
	}
	else if (currentShowName == 'Royal Pains')
	{
		usa_club_domain = clubDomainPrefix + 'royalrewards.usanetwork.com';
		usa_club_logo = 'http://www.usanetwork.com/series/royalpains/royalrewards/images/ext-logo-50.png';
		usa_club_name = "Royal Rewards";
		usa_club_show_name = "Royal Pains";
		usa_club_checkUserLoggedIn();
	}
	else if (currentShowName == 'WWE Tough Enough')
	{
		usa_club_domain = clubDomainPrefix + 'toughclub.usanetwork.com';
		usa_club_logo = 'http://www.usanetwork.com/series/toughenough/toughclub/images/ext-logo-50.png';
		usa_club_name = "Tough Club";
		usa_club_show_name = "Tough Enough";
		usa_club_checkUserLoggedIn();
	}
	else if (currentShowName == 'Covert Affairs')
	{
		usa_club_domain = clubDomainPrefix + 'covertoperatives.usanetwork.com';
		usa_club_logo = 'http://www.usanetwork.com/series/covertaffairs/covertoperatives/images/ext-logo-50.png';
		usa_club_name = "Covert Operatives";
		usa_club_show_name = "Covert Affairs";
		usa_club_checkUserLoggedIn();
	}
}

/*
(function() {
	usa_clubInit();
}());
*/