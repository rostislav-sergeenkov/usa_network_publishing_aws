<?php
/**
 * $title - string
 * $video - rendered player
 * $button_url' - url for button
 */
?>

<div class="series-recap-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($title) ? $title : ''; ?></span>
  </h2>
  <div class="series-recap-video">
    <?php print !empty($video) ? $video : ''; ?>
  </div>
  <div class="series-recap-video-info">
    <div class="series-recap-video-meta">
      <?php if (!empty($video_description)): ?>
        <div class="video-description"><?php print $video_description; ?></div>
      <?php endif; ?>
      <?php if (!empty($video_title)): ?>
        <div class="video-title"><?php print $video_title; ?></div>
      <?php endif; ?>
    </div>
    <?php if (!empty($button_url)): ?>
      <div class="video-button show-color hover-avail">
        <?php print $button_url; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
