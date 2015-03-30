<?php
/**
 * Videos player template
 */
?>


<?php if (empty($h1) && !empty($title) && $status == 'active'): ?>
<h1><?php print $title; ?></h1>
<?php else: ?>
<h3><?php print $title; ?></h3>
<?php endif; ?>

<?php if (!empty($h1)): ?>
<?php if ($status == 'active'): ?>
<h1 class="seo-h1"><?php print $h1; ?></h1>
<?php else: ?>
<h3 class="seo-h1"><?php print $h1; ?></h3>
<?php endif; ?>
<?php endif; ?>



<?php /* if (!empty($h1) && $status == 'active'): ?>
  <h1><?php print $h1; ?></h1>
  <?php if (!empty($title)): ?>
    <div class="video-title"><?php print $title; ?></div>
  <?php endif; ?>
<?php elseif (empty($h1) && $status == 'active'): ?>
  <?php if (!empty($title)): ?>
    <div class="h1-place"></div>
    <h1><?php print $title; ?></h1>
  <?php endif; ?>
<?php else: ?>
  <?php if (!empty($title)): ?>
    <div class="h1-place"><?php print $h1 ?></div>
    <div class="video-title"><?php print $title; ?></div>
  <?php endif; ?>
<?php endif; */ ?>

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
