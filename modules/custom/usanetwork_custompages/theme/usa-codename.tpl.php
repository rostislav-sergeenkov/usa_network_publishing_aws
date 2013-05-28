<?php
/**
 * @file
 * usa-codename.tpl.php
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

<div align="center"><div id="usa_noflash"><img src="<?php echo "/".$image_path;?>ncis_flash_sorry.png"></div>
  	<script type="text/javascript">
		var flashvars = {};

		var params =
		{
			wmode: "transparent"
		};

		var attributes = {};

		swfobject.embedSWF("<?php echo $base_url."/".$swf_path;?>NCIS_codename.swf", "usa_noflash", "678", "549", "9", "swf/expressInstall.swf", flashvars, params, attributes);

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