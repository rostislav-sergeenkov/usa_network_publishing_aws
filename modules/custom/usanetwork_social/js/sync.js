/**
 * Sync js code
 * By Donna Vaughan, May 13, 2013
 * donna.vaughan@nbcuni.com
 */
var source = desktopUrl;

(function ($) {
Drupal.behaviors.sync_page = {
  attach: function(context){

			var refreshIframe = function(source)
			{
				if (jQuery('#sync').html().length > 0)
				{
					var iframe = document.getElementById('syncIframe');
					iframe.src = source;
				}
				else
				{
					setTimeout("refreshIframe('"+source+"')", 500);
				}
			}

			var displaySyncIframe = function()
			{
				// Check to make sure sniff.js has loaded
				if (typeof phone != 'undefined')
				{
					if (phone !== false)
					{
						source = phoneUrl;
					}

					refreshIframe(source);
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
