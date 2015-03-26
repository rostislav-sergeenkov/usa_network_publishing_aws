<?php
/**
 * Videos player template
 */
?>

<?php if (!empty($h1) && $status == 'active'): ?>
  <div class="video-title"><h1><?php print $h1; ?></h1></div>
<?php elseif (!empty($h1)): ?>
  <div class="video-title"><?php print $h1; ?></div>
<?php else: ?>
  <?php if (!empty($title)): ?>
    <div class="video-title"><?php print $title; ?></div>
  <?php endif; ?>
<?php endif; ?>

<?php if (!empty($description)): ?>
  <div class="video-description"><?php print $description; ?></div>
<?php endif; ?>

<?php if (!empty($season_number) || !empty($episode_number)): ?>
  <div class="video-info">
    <?php if (!empty($season_number)): ?>
      <span class="video-season">S<?php print $season_number; ?></span>
    <?php endif; ?>
    <?php if (!empty($episode_number)): ?>
      <span class="video-episode">E<?php print $episode_number; ?></span>
    <?php endif; ?>
  </div>
<?php endif; ?>
<?php if (!empty($duration)): ?>
  <span class="video-duration"><?php print t('Duration'); ?>: <?php print $duration; ?></span>
<?php endif; ?>
