<?php
/**
 * $gigya_id - id of Gigya
 * $image image url
 * $info => array(
 *   'description' => NULL, // Description of image
 * );
 */
?>
<div class="node node-gallery">
  <div class="asset-img">
    <?php if (!empty($image)): ?>
      <?php print $image; ?>
    <?php endif; ?>
  </div>
  <div class="slide-info">
    <div class="description"><?php if (!empty($info['description'])): ?><?php print $info['description']; ?><?php endif; ?></div>
    <div class="slider-counter">
      <?php if (empty($first_item)): ?>
        <span class="gallery-name">
          <?php if (!empty($info['gallery_name'])): ?><?php print $info['gallery_name']; ?><?php endif; ?>
        </span>
      <?php else: ?>
        <h1>
          <span class="gallery-name">
            <?php if (!empty($info['gallery_name'])): ?><?php print $info['gallery_name']; ?><?php endif; ?>
          </span>
        </h1>
      <?php endif; ?>
      <span class="slide-index"></span>
    </div>
  </div>
</div>
