<?php
/**
 * Home page template
 *
 * Variables:
 * - $aspots - array of pre-rendered A-Spot elements
 * - $bspots - pre-rendered B-Spot element
 * - $cspots - pre-rendered C-Spot element
 * - $characters - characters variables
 * -    $characters[n]['url'] - machine-readable part of url for person
 * -    $characters[n]['title'] - name of person
 * -    $characters[n]['image_url'] - url for profile image
 * - $promo_carousel - array of pre-rendered promo-carousel items
 * - $background_url - the URL of page background
 */
?>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>

<?php
$imagePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/mrrobot/images/';
$sitePath = '/node/56352/microsite';
?>
<style>
html, body {
  background-color: #000;
  font-size: 16px;
  line-height: 18px;
}
#mrrobot-home {
  width: 641px;
  height: 844px;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
}
#mr-forehead,
#mr-right-eye,
#mr-left-eye,
#mr-nose-mouth,
#mr-left-mouth,
#mr-chin {
  position: absolute;
  height: auto;
}
#mr-forehead {
  width: 100%;
  top: 0;
  left: 0;
}
#mr-right-eye {
  width: 37.0%;
  top: 7.8%;
  left: 14.2%;
}
#mr-left-eye {
  width: 52.3%;
  top: 17.5%;
  left: 47.3%;
}
#mr-nose-mouth {
  width: 72.8%;
  top: 38.6%;
  left: 4.7%;
}
#mr-left-mouth {
  width: 41.2%;
  top: 54.5%;
  left: 54.6%;
}
#mr-chin {
  width: 71.3%;
  top: 68.5%;
  left: 13.4%;
}
#mr-right-eye img,
#mr-left-eye img,
#mr-nose-mouth img,
#mr-left-mouth img {
  max-width: 100%;
  height: auto;
}
</style>

<div id="mrrobot-home">
  <div id="mr-forehead"><img src="<?php print $imagePath; ?>mrrobot_forehead.png" alt="forehead"></div>
  <div id="mr-right-eye"><a href="<?php print $sitePath; ?>/about"><img src="<?php print $imagePath; ?>mrrobot_right_eye.png" alt="right eye"></a></div>
  <div id="mr-left-eye"><a href="<?php print $sitePath; ?>/videos"><img src="<?php print $imagePath; ?>mrrobot_left_eye.png" alt="left eye"></a></div>
  <div id="mr-nose-mouth"><a href="<?php print $sitePath; ?>/characters"><img src="<?php print $imagePath; ?>mrrobot_nose_mouth.png" alt="nose and mouth"></a></div>
  <div id="mr-left-mouth"><a href="<?php print $sitePath; ?>/galleries"><img src="<?php print $imagePath; ?>mrrobot_left_mouth.png" alt="left part of mouth"></a></div>
  <div id="mr-chin"><img src="<?php print $imagePath; ?>mrrobot_chin.png" alt="chin"></div>
</div>
