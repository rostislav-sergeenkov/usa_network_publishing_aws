<?php
/**
 * @file
 * usa-seeitlikeaspy.tpl.php
 *
 * Theme implementation for the seeitlikeaspy
 *
 * Available variables:
 *
 */
 $node_id = $data->nid;
 $current_path = '/node/'.$node_id.'/games/seeitlikeaspy/';
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
?>

<!-- added by RF for USA Club END -->	
<div id="usa_leftColumn" class="usa_column">
  <div id="module1" class="mod">
    <div class="modBody">
      <img src="/<?php echo $image_path;?>silas_logo.gif" border="0" height="33" width="321">
      <br>
      <br>
      <table align="" background="/<?php echo $image_path;?>seeit_bg.jpg" border="0" cellpadding="0" cellspacing="0" width="712">
        <tbody>
          <tr>
          <td rowspan="2"><img src="/<?php echo $image_path;?>shim.gif" border="0" height="578" width="210"></td>
          <td><img src="/<?php echo $image_path;?>shim.gif" border="0" height="338" width="506"></td>
          </tr>
          <tr>
            <td height="250" valign="top">
              <?php require_once("usa-seeitlikeaspy-menu.tpl.php");?>
            </td>
          </tr>
        </tbody>
      </table>
      <div align="center"><a href="http://burncircle.usanetwork.com"><img src="http://www.usanetwork.com/series/burnnotice/burncircle/images/ext-logo-236.png"  border="0" style="padding: 12px;"></a></div>
      <div class="clear"></div>
    </div>
  </div>
  <div class="clear"></div>
</div>
