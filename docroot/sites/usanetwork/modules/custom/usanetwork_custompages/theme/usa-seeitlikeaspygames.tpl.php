<?php
/**
 * @file
 * usa-seeitlikeaspygames.tpl.php
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

<!-- added by RF for USA Club END -->	
<table width="720">
    <tbody>
        <tr>
            <td>
            <a href="#"><img src="/<?php echo $image_path;?>silas_logo.gif" border="0" height="33" width="321"></a>
            </td>
            <td align="right">
              <?php require_once("usa-seeitlikeaspy-menu.tpl.php");?>
            </td>
        </tr>
    </tbody>
</table>
<br>
<br>
<div align="center"><div id="usa_noflash"><img src="/<?php echo $image_path;?>flash_sorry.png"></div>
  	<script type="text/javascript">
		// <![CDATA[

		var flashvars = {};

		var params =
		{
			wmode: "transparent"
		};

		var attributes = {};

		swfobject.embedSWF("<?php echo $base_url."/".$swf_path.$swffile;?>", "usa_noflash", "720", "585", "7", "swf/expressInstall.swf", flashvars, params, attributes);

		function gameLoadDone()
		{
			gameDoneLoading();
		}

		function reloadAdUnit()
		{
			ReloadAd();
		}

		// ]]>
	</script>
</div>
