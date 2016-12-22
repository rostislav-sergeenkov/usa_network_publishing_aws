<?php
/**
 * @file
 * usa-findthepineapple.tpl.php
 *
 * Theme implementation for the findthepineapple games
 *
 * Available variables:
 *
 */
 global $base_url;
 $node_id = $data->nid;
 $swf_path = drupal_get_path("module", "usanetwork_custompages")."/swf/";
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 ?>

<!-- added by RF for USA Club END -->	
<div align="center">
  <div id="usa_noflash"><img src="/<?php echo $image_path;?>psych_flash_sorry.png"></div>
  	<script type="text/javascript">
		// <![CDATA[

		var flashvars = {};

		var params =
		{
			wmode: "transparent"
		};

		var attributes = {};

		swfobject.embedSWF("<?php echo $base_url."/".$swf_path;?>PSYCH_pineapple58.swf", "usa_noflash", "739", "766", "8", "swf/expressInstall.swf", flashvars, params, attributes);

		function gameLoadDone()
		{
			gameDoneLoading();
		}

		function reloadAdUnit()
		{
			ReloadAd();
		} 
  </script>
  <div align="center"><br><br><?php require_once("usa-findthepineapple-menu.tpl.php");?></div>
</div>


