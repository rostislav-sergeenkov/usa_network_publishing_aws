<?php
/**
 * $head_image - image url
 * $second_image - image url
 * $description' - string (html)
 */
?>
<div class="block-usanetwork-movie-usanetwork-lmb-block show-border">
  <?php if (!empty($head_image)): ?>
    <div class="movie-info-header-image">
      <?php print $head_image; ?>
    </div>
  <?php endif; ?>

  <div class="movie-info-description no-image">
    <?php if (!empty($description)): ?>
      <div class="description">
        <?php print $description; ?>
      </div>
    <?php endif; ?>
    <div class="node-wrapper advert">
      <div class="advertisement">
        <?php if (!empty($advert_block)): ?>
          <?php print $advert_block; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>


