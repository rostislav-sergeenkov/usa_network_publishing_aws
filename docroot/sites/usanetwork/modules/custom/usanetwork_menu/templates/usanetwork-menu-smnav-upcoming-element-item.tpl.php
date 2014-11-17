<?php
/**
 * $image - image (the priority is higher than image_url)
 * $image_url - URL to image file
 * $show_name - current show name
 * $episode_title - upcoming episode title
 * $episode_day - weekday of upcomming episode
 * $episode_time - "g:i" formatted time of upcomming episode
 * $episode_interval - "A" formatted time of upcomming episode
 * $episode_description - a short description of episode
 */
?>

<div class="node node-usanetwork-promo upcoming-episode show-<?php print strtolower($show_name); ?>">
  <?php if (!empty($image) || !empty($image_url)): ?>
    <a href="#">
      <div class="asset-img show show-<?php print strtolower($show_name); ?>">
        <?php if (!empty($image)): ?>
          <?php print $image; ?>
        <?php else: ?>
          <img src="<?php print $image_url; ?>" alt="">
        <?php endif; ?>
      </div>
    </a>
  <?php endif; ?>
  <?php if (!empty($episode_title) || !empty($episode_description)): ?>
    <div class="title-overlay meta">
      <?php if (!empty($episode_title)): ?>
        <div class="title"><?php print $episode_title; ?></div>
      <?php endif; ?>
      <?php if (!empty($episode_day) && !empty($episode_time) && !empty($episode_interval)): ?>
        <div class="caption"><?php print $episode_day; ?>
          <span class="time">
            <span><?php print $episode_time; ?></span>
            <?php print $episode_interval; ?>
          </span>
        </div>
      <?php endif; ?>
      <?php if (!empty($episode_description)): ?>
        <div class="description"><?php print $episode_description; ?></div>
      <?php endif; ?>
    </div>
  <?php else: ?>
    <div class="empty"></div>
  <?php endif; ?>
  <div class="icons-block">
    <a class="live icon" href="#"></a>
    <?php if (!empty($syndicated_url)): ?>
      <a class="episode-description icon" href="<?php print $syndicated_url; ?>" target="_blank"></a>
    <?php endif; ?>
    <a class="calendar-reminder icon" href="#"></a>
  </div>
</div>
