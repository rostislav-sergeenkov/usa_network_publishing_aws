/* === USA NETWORK === */
/* JS file to handle JS communication to the USA Club sites */
(function (jQuery) {
	Drupal.behaviors.usanetwork_nitro = {
		attach: function(context){

			// DEFAULTS
			var usa_club_domain;
			var usa_clubUser;
			var usa_clubUserObj = function(personUUID) {
				this.personUUID = personUUID;
			}
			var usa_checkedLoggedInUser = false;
			var usa_taskArgs = '';

			// ENVIRONMENT DETECTION
			var url = window.location.href;
			var clubDomainPrefix = '';

			if (url.indexOf('www.usanetwork.com') != -1 ||
					url.indexOf('beta.usanetwork.com') != -1 ||
					url.indexOf('usanetwork.prod.acqiua-sites.com') != -1)
			{
				// already set
			}
			else if (url.indexOf('stage.usanetwork.com') != -1 || url.indexOf('usanetworkstg.prod.acqiua-sites.com') != -1)
			{
				clubDomainPrefix = 'stage.';
			}
			else
			{
				clubDomainPrefix = 'dev.';
			}

			// CLUB DETECTION
			var club = '';
			if (typeof usanetwork_nitro_path != 'undefined')
			{
				var urlPath = usanetwork_nitro_path.replace('-', '');
				if (urlPath.indexOf('burnnotice') != -1)
				{
					club = 'burncircle';
				}
				else if (urlPath.indexOf('psych') != -1)
				{
					club = 'clubpsych';
				}
				else if (urlPath.indexOf('covertaffairs') != -1)
				{
					club = 'covertoperatives';
				}
				else if (urlPath.indexOf('whitecollar') != -1)
				{
					club = 'whitecollarsociety';
				}
				else if (urlPath.indexOf('royalpains') != -1)
				{
					club = 'royalrewards';
				}
			}
			usa_club_domain = clubDomainPrefix + club+'.usanetwork.com';

			// CODE
			var usa_debug_flag = false;
			var usa_debug = function(msg)
			{
				if (usa_debug_flag)
				{
					if (typeof console != 'undefined')
					{
						console.log(msg);
					}
					else
					{
						//alert(msg);
					}
				}
				return;
			}

			var usa_club_checkUserLoggedIn = function()
			{
				//usa_debug('fn: usa_club_checkUserLoggedIn()');

				var params = 'jsoncallback=?';
				var queryUrl = 'http://' + usa_club_domain + '/accounts/ajax-is-user-logged-in?' + params;
				//usa_debug(queryUrl);
				jQuery.getJSON(queryUrl, function(data)
				{
					if (data.loggedIn == true)
					{
						usa_clubUser = new usa_clubUserObj(data.personUUID);
						if (typeof usanetwork_nitro_action_name != 'undefined'
								&& usanetwork_nitro_action_name != ''
								&& typeof usa_club_trackSimpleActivity == "function")
						{
							var args = '{"source":"'+usanetwork_nitro_action_name+'","activity":"complete"}';
							usa_club_trackSimpleActivity(args);
						}
					}
					else
					{
						usa_debug('USER NOT LOGGED IN');
					}
					usa_checkedLoggedInUser = true;
				});
			}

			var usa_club_trackSimpleActivity = function(args)
			{
				//usa_debug('fn: usa_club_trackSimpleActivity()');

				if (typeof args == 'undefined')
				{
					args = usa_taskArgs;
				}

				if (!usa_checkedLoggedInUser)
				{
					usa_taskArgs = args;
					usa_club_timeOut = setTimeout(usa_club_trackSimpleActivity, 1000);
				}
				else
				{
					if (typeof usa_clubUser == 'undefined')
					{
						usa_debug('user not logged in');
						return;
					}
					else
					{
						var params = 'personUUID=' + usa_clubUser.personUUID + '&jsonData=' + escape(String(args)) + '&jsoncallback=?';
						jQuery.getJSON('http://' + usa_club_domain + '/challenges/ajax-process-task?' + params, function(data) {
							usa_debug('Nitro response success: ' + data.success + '\nerror: ' + data.error);
						});
					}
				}
			}

			if (club != '') usa_club_checkUserLoggedIn();
		}
	}
})(jQuery);
