<?php
/**
 * $head_image - image url
 * $second_image - image url
 * $description' - string (html)
 */
?>
<div class="block-usanetwork-person-usanetwork-person-cast-lmb-block show-border">
  <div class="cast-and-info-header-image">
    <?php if (!empty($head_image)): ?>
      <?php print $head_image; ?>
    <?php endif; ?>
  </div>
  <div class="cast-and-info-description">
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


