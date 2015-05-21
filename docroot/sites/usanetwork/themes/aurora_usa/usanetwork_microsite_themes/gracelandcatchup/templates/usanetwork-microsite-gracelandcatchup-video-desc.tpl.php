<?php
/**
 * Videos player template
 *
 * Variables:
 * - $h1 - the H1 override
 * - $title - the title of the active video
 * - $status - the status of the video
 * - $description - the description for the active video
 * - $season_number - the season number for the active video
 * - $episode_number - the episoder number for the active video
 * - $duration - the duration of the active video
 */
?>

<?php if (empty($h1) && !empty($title) && $status == 'active'): ?>
<h1 class="video-title"><?php print $title; ?></h1>
<?php else: ?>
<h3 class="video-title"><?php print $title; ?></h3>
<?php endif; ?>

<?php if (!empty($h1)): ?>
  <?php if ($status == 'active'): ?>
  <h1 class="seo-h1"><?php print $h1; ?></h1>
  <?php else: ?>
  <h3 class="seo-h1"><?php print $h1; ?></h3>
  <?php endif; ?>
<?php endif; ?>

<?php if (!empty($description)): ?>
  <div class="video-description"><?php print $description; ?></div>
<?php endif; ?>

<?php /* if (!empty($season_number) || !empty($episode_number)): ?>
  <div class="video-info">
    <?php if (!empty($season_number)): ?>
      <span class="video-season">S<?php print $season_number; ?></span>
    <?php endif; ?>
    <?php if (!empty($episode_number)): ?>
      <span class="video-episode">E<?php print $episode_number; ?></span>
    <?php endif; ?>
  </div>
<?php endif; */ ?>
<?php /* if (!empty($duration)): ?>
  <span class="video-duration"><?php print t('Duration'); ?>: <?php print $duration; ?></span>
<?php endif; */ ?>
