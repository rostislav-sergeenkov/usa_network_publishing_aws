<?php
/**
 * Timeline gallery page template
 *
 * Variables:
 * - $section_title - the title of the section
 * - $content - the URL of page background
 * - $content - the URL of page background
 */
?>

<?php if (!empty($section_title)): ?>
  <!-- section title -->
  <h2 class="content"><?php print $section_title; ?></h2>
<?php endif; ?>

<?php if (!empty($description)): ?>
  <!-- section description -->
  <div class="section-description"><?php print $description; ?></div>
<?php endif; ?>

<?php
  print $content;
?>

<div class="ad-leaderboard dart-tag dart-name-728x90_ifr_reload_timeline_gallery"></div>
