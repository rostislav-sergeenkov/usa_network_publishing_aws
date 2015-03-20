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
 * - $background_url - the URL of page background
 */
?>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_home"></div>

<?php
// @TODO: DV - Move this into usanetwork_microsite.module or wherever it should be.
$imagePath = '/' . $directory . '/usanetwork_microsite_themes/mrrobot/images/';
?>

<div id="mrrobot-home">
  <div id="" class="mr-forehead"><img src="<?php print $imagePath; ?>mrrobot_forehead.png" alt="forehead"></div>
  <div id="nav-about" class="mr-right-eye"><a href="<?php print $sitePath; ?>/about"><img src="<?php print $imagePath; ?>mrrobot_right_eye.png" alt="right eye"></a></div>
  <div id="nav-videos" class="mr-left-eye"><a href="<?php print $sitePath; ?>/videos"><img src="<?php print $imagePath; ?>mrrobot_left_eye.png" alt="left eye"></a></div>
  <div id="nav-characters" class="mr-nose-mouth"><a href="<?php print $sitePath; ?>/characters"><img src="<?php print $imagePath; ?>mrrobot_nose_mouth.png" alt="nose and mouth"></a></div>
  <div id="nav-galleries" class="mr-left-mouth"><a href="<?php print $sitePath; ?>/galleries"><img src="<?php print $imagePath; ?>mrrobot_left_mouth.png" alt="left part of mouth"></a></div>
  <div id="" class="mr-chin"><img src="<?php print $imagePath; ?>mrrobot_chin.png" alt="chin"></div>
</div>
