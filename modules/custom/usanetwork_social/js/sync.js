/**
 * Sync js code
 * By Donna Vaughan, May 13, 2013
 * donna.vaughan@nbcuni.com
 */
var source = desktopUrl;
var usa_deviceInfo = '';

(function ($) {
Drupal.behaviors.sync_page = {
  attach: function(context){

			var refreshIframe = function(source)
			{
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

			var displaySyncIframe = function()
			{
				// Check to make sure device detection has loaded
				if (typeof usa_detectCurrentDevice == 'function')
				{
					usa_deviceInfo = usa_detectCurrentDevice();
					if (usa_deviceInfo.smartphone)
					{
						source = phoneUrl;
					}
					refreshIframe(source);

/*				// Check to make sure sniff.js has loaded
				if (typeof phone != 'undefined')
				{
					if (phone !== false)
					{
						source = phoneUrl;
					}

					refreshIframe(source);
*/
				}
				else
				{
					setTimeout(displaySyncIframe, 1000);
				}
			}
			displaySyncIframe();

		}
	}
})(jQuery)
