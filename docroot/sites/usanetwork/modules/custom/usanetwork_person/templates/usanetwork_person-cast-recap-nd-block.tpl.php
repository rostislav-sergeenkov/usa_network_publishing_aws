<?php
/**
 * $title - string
 * $video - rendered player
 * $button_url' - url for button
 */
?>

<div class="video-recap-block">
  <div class="usa-section-title show-border">
    <h2 class="title"><?php print !empty($title) ? $title : ''; ?></h2>
  </div>
  <div class="recap-video">
    <div class="recap-video-inner">
      <div class="recap-video-content">
        <?php print !empty($video) ? $video : ''; ?>
      </div>
    </div>
  </div>
  <?php if (!empty($button_url)): ?>
    <?php print $button_url; ?>
  <?php endif; ?>
</div>
