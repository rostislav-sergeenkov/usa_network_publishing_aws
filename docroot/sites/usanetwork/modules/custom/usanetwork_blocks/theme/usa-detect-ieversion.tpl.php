<?php
/**
 * @file
 * usa-detect-ieversion.tpl.php
 *
 * Theme implementation for the ie browser upgrade 
 ** 
 */
 global $base_url;
 $image_path = drupal_get_path("module", "usanetwork_blocks")."/theme/images/";
?>
<!-- Error Modals -->
<!--[if lte IE 8]>
	<div id="lackOfFeaturesModal-main" style = "display:none;">
	<div id="lackOfFeaturesModal" class="reveal-modal modal authen-modal"> 
		<a class="lackOfFeaturesModal-close-modal">Close</a>
		<div id="lackOfFeaturesModal-modal-header-main">
			<div id="lackOfFeaturesModal-modal-header">
				<div class="group">
				  <h2 class="lackOfFeaturesModal-modal-head">Sorry! There's a Problem</h2>
				</div>	    
			</div>
		</div>
		<div id="lackOfFeaturesModal-modal-main-body">
			<h2>Your browser needs a tune up...</h2>
			<p>To play our content, your browser needs to be the latest version. <br>Please update your browser and reload the page.</p>
			<div id="lackOfFeaturesModalIE" class="lackOfFeaturesModal-ietext">
			  For IE8 users - IE8 is not currently supported. Please upgrade to a more recent version of Internet Explorer or use another browser.
			  <br />
				For IE9 users - IE9 is supported, but its Compatibility View feature is not. The fix is simple - turn off Compatibility View mode. Here's how&#58
				<ol class="lackOfFeaturesModal-ietextol">
					<li>Select Tools from the Menu bar (If it's not visible, press Alt on your keyboard)</li>
					<li>Select Compatibility View Settings. A panel will open. Uncheck all 3 options at the bottom of the panel.</li>
					<li>Select the Close button to save your changes.</li>
					<li>Reload the page, and enjoy.</li>
				</ol>
			</div>
			<div id="bullet-list">
				<div id="lackOfFeaturesModal-bullet-list1"><a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank"><img src="<?php echo $base_url."/".$image_path;?>firefox_150.png" alt="Firefox" /></a></div>
				<div id="lackOfFeaturesModal-bullet-list2"><a href="http://www.apple.com/safari/" target="_blank"><img src="<?php echo $base_url."/".$image_path;?>safari_150.png" alt="Safari" /></a></div>
				<div id="lackOfFeaturesModal-bullet-list3"><a href="https://www.google.com/intl/en/chrome/browser/" target="_blank"><img src="<?php echo $base_url."/".$image_path;?>chrome_150.png" alt="Chrome" /></a></div>
				<div id="lackOfFeaturesModal-bullet-list4"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank"><img src="<?php echo $base_url."/".$image_path;?>ielogo_150.png" alt="Chrome" /></a></div>
			</div>
		</div>
		<div id="lackOfFeaturesModal-modal-footer-main">
			<div id="lackOfFeaturesModal-modal-footer">
			</div>
		</div>
	</div>
</div>
<![endif]-->
