<?php
/**
 * Games page template
 *
 * Variables:
 * - $pages - array of games pages data:
 * -  - $pages['html'] - pre-rendered HTML of game page
 * - $background_url - the URL of page background
 */
?>

<?php // Print the description field in the CMS ?>
<?php if (!empty($description)): ?>
<?php print $description; ?>
<?php endif; ?>
