/**
 * Sync js code
 * By Donna Vaughan, May 13, 2013
 * donna.vaughan@nbcuni.com
 */
var source = desktopUrl;

(function ($) {
Drupal.behaviors.sync_page = {
  attach: function(context){


			var usa_debugFlag = false; // Set to true for console logging
			var usa_debug = function(msg)
			{
				if (usa_debugFlag && typeof console != 'undefined')
				{
					console.log(msg);
				}
			}

			var refreshIframe = function(source)
			{
				//usa_debug('fn: refreshIframe('+source+')');
				if ($('#sync').html().length > 0)
				{
					var iframe = document.getElementById('syncIframe');
					iframe.src = source;




// @TODO: REMOVE THE FOLLOWING QA CODE BEFORE DEPLOYING
// QA CODE START
var url = window.location.href;
// In case this is accidentally deplayed, to prevent border from showing anywhere except local and dev
if (url.search('local') > -1 || url.search('dev.usanetwork.com') > -1)
{
	if (usa_deviceInfo.smartphone)
	{
		$('#sync').css('border', '10px solid red'); // phone -> red border around sync
	}
	else
	{
		$('#sync').css('border', '10px solid green'); // desktop or tablet -> green border around sync
	}
}
// QA CODE END




				}
				else
				{
					setTimeout("refreshIframe('"+source+"')", 500);
				}
			}

			var displaySyncIframeCount = 0;
			var displaySyncIframe = function()
			{
				//usa_debug('fn: displaySyncIframe()');
				// Check to make sure device detection has loaded
				if (typeof usa_deviceInfo != 'undefined')
				{
					if (typeof usa_deviceInfo.smartphone != 'undefined' && usa_deviceInfo.smartphone)
					{
						source = phoneUrl;
					}
					refreshIframe(source);
				}
				else if (displaySyncIframeCount < 30) // to stop this from repeating after 30 secs
				{
					setTimeout(displaySyncIframe, 1000);
					displaySyncIframeCount++;
				}
			}
			displaySyncIframe();

		}
	}
})(jQuery)
