/**
 * 
 * usanetwork_block.js
 *
 * custom block javascript code
 ** 
 */
 
 /*
 * closing browser upgrade message popup
 */
 var mouse_is_inside = false;
	jQuery(document).ready(function()
	{
		jQuery(".lackOfFeaturesModal-close-modal").click(function()
		{
			document.getElementById('lackOfFeaturesModal').style.display = 'none';
      document.getElementById('lackOfFeaturesModal-main').style.display = 'none';
		});
		jQuery("#lackOfFeaturesModal-bullet-list1").click(function(){ 
			window.open('http://www.mozilla.org', '_blank');
		});
		jQuery("#lackOfFeaturesModal-bullet-list2").click(function(){ 
			window.open('http://www.apple.com/safari/', '_blank');
		});
		jQuery("#lackOfFeaturesModal-bullet-list3").click(function(){ 
			window.open('https://www.google.com/intl/en/chrome/browser/', '_blank');
		});
	});