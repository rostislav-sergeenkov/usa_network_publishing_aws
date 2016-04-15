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

<?php
// @TODO: DV -- SET THE FOLLOWING PATH IN THE MODULE FILE AND MAKE IT AVAILABLE
// TO ALL TEMPLATE FILES
$themePath = '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/royalpainsfarewell';
date_default_timezone_set('America/New_York');
$timestamp = time();
$showCountdown = true;
if ($timestamp > mktime(22, 0, 1, 5, 18, 2016)): // after May 18, 2016 10:00:01 PM ET, which is the start of the finale episode
  $showCountdown = false;
endif;
?>

<?php // Insert the home section HTML in the description field in the CMS ?>
<?php if (!empty($description)): ?>
<?php print $description; ?>
<?php endif; ?>


