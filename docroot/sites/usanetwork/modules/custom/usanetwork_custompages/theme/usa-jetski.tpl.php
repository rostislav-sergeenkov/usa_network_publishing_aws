<?php
/**
 * @file
 * usa-jetski.tpl.php
 *
 * Theme implementation for the seeitlikeaspy games
 *
 * Available variables:
 *
 */
 global $base_url;
 $swf_path = drupal_get_path("module", "usanetwork_custompages")."/swf/";
 $image_path = drupal_get_path("module", "usanetwork_custompages")."/theme/images/";
 $loading_ad_path = $base_url."/".drupal_get_path("module", "usanetwork_custompages")."/theme/loading_ad.html";
 $ad728_path = $base_url."/".drupal_get_path("module", "usanetwork_custompages")."/theme/ad728.html";
 ?>

<div align="center">

  <!-- START CUT & PASTE FOR GAME FRAME -->

  <div id="gameContainer">

    <div id="gamePlay">

      <div id="flashcontent" style="width:0px; height:0px; color:#ffffff;">
        <strong>You need to get the current Flash Player</strong><br />To do so, go <a href="http://www.adobe.com/go/getflashplayer">here</a>.<br /><br />
      </div>

      <script type="text/javascript">
        // <![CDATA[

        var flashvars = {};

        var params =
        {
          allowScriptAccess: "always"
        };

        var attributes = {};

        swfobject.embedSWF("<?php echo $base_url."/".$swf_path;?>BurnNoticeGame.swf", "flashcontent", "0", "0", "10.0.0", "swf/expressInstall.swf", flashvars, params, attributes);

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
      <div id="a_content">
        <div style="position: absolute; top: 80px; left: 312px; width:300px; height:250px" ><iframe  src="<?php echo $loading_ad_path; ?>" width="300" height="250" id="adFrameRHS3" name="adFrameRHS3" scrolling="no" frameborder="0" allowtransparency="yes"></iframe></div>
        <div id="adStatus" style="position: absolute; top: 395px; left: 0px; width: 100%; height: 30px; font-family: Arial; font-size: 14px; color: #FFFFFF; text-align: center">GET READY! YOUR GAME IS LOADING...</div>
        <div style="position: absolute; top: 413px; left: 0px; width: 100%; height: 30px; font-family: Arial; font-size: 8px; color: #333333; text-align: center">CLICKING ON THE AD WILL NOT TAKE YOU OUT OF THE SITE.</div>
        <div id="cont" style="position: absolute; top: 385px; left: 755px;"><a href="#" onClick="show_game(); return false;"><img src="<?php echo "/".$image_path;?>button_continue.png" width="143" height="50" alt="Continue to Game" border="0" /></a></div><script type="text/javascript" charset="utf-8"> hide("cont"); </script>
       </div>

      <script type="text/javascript">
        do_wait();
      </script>

    </div>

    <div id="adBottomContainer">
        <div id="adBottom">
        <iframe src="<?php echo $ad728_path; ?>" width="728" height="90" id="adFrameRHS2" name="adFrameRHS2" scrolling="no"frameborder="0" allowtransparency="yes"></iframe>
        </div>
    </div>
  </div>
  <!-- END CUT & PASTE FOR GAME FRAME -->

</div>