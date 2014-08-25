<?php
/**
 * @file
 * usa-80schallenge.tpl.php
 *
 * Theme implementation for the seeitlikeaspy games
 *
 * Available variables:
 *
 */
 global $base_url;
 $swf_path = drupal_get_path("module", "usanetwork_custompages")."/swf/";
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 ?>

<div align="center"><div id="usa_noflash"><img src="<?php echo "/".$image_path;?>psych_flash_sorry.png"></div>
  	<script type="text/javascript">
		var flashvars = {};

		var params =
		{
			wmode: "transparent"
		};

		var attributes = {};

		swfobject.embedSWF("<?php echo $base_url."/".$swf_path;?>PSYCH_80s_challenge.swf", "usa_noflash", "909", "784", "7", "swf/expressInstall.swf", flashvars, params, attributes);

		function gameLoadDone()
		{
			gameDoneLoading();
		}

		function reloadAdUnit()
		{
			ReloadAd();
		}
	</script>
  </div>