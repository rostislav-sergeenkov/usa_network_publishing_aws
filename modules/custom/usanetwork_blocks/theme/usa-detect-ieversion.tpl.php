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
				  <h1 class="lackOfFeaturesModal-modal-head">Sorry! There's a Problem</h1>
				</div>	    
			</div>
		</div>
		<div id="lackOfFeaturesModal-modal-main-body">
			<h2>Your browser needs a tune up...</h2>
			<p>To play our content, your browser needs to be the latest version. <br>Please update your browser and reload the page.</p>
			<div id="lackOfFeaturesModalIE" class="lackOfFeaturesModal-ietext">
				For IE9 users - IE9 is supported, but its Compatibility View feature is not. The fix is simple - turn off Compatibility View mode. Here's how&#58
				<ol class="lackOfFeaturesModal-ietextol">
					<li>Select Tools from the Menu bar (If it's not visible, press Alt on your keyboard)</li>
					<li>Select Compatibility View Settings. A panel will open. Uncheck all 3 options at the bottom of the panel.</li>
					<li>Select the Close button to save your changes.</li>
					<li>Reload the page, and enjoy.</li>
				</ol>
			</div>
			<div id="bullet-list">
				<div id="lackOfFeaturesModal-bullet-list1"><img src="<?php echo $base_url."/".$image_path;?>firefox.png" alt="Firefox" /></div>
				<div id="lackOfFeaturesModal-bullet-list2"><img src="<?php echo $base_url."/".$image_path;?>safari.png" alt="Safari" /></div>
				<div id="lackOfFeaturesModal-bullet-list3"><img src="<?php echo $base_url."/".$image_path;?>chrome.png" alt="Chrome" /></div>
			</div>
		</div>
		<div id="lackOfFeaturesModal-modal-footer-main">
			<div id="lackOfFeaturesModal-modal-footer">
			</div>
		</div>
	</div>
</div>
<![endif]-->
