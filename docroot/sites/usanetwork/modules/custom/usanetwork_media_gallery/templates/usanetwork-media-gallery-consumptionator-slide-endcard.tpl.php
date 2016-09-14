<?php
/**
 * $gigya_id - id of Gigya
 * $image image url
 * $info => array(
 *   'description' => NULL, // Description of image
 * );
 */
?>
<div class="node node-gallery end-card">
  <div class="asset-img">
    <?php if (!empty($image)): ?>
      <?php print $image; ?>
    <?php endif; ?>
  </div>
  <div class="slide-info">
    <div class="description"><?php if (!empty($info['description'])): ?><?php print $info['description']; ?><?php endif; ?></div>
    <div>
      <div><?php if (!empty($endcard['image'])): ?><?php print $endcard['image']; ?><?php endif; ?></div>
      <div><?php if (!empty($endcard['title'])): ?><?php print $endcard['title']; ?><?php endif; ?></div>
      <div><?php if (!empty($endcard['caption'])): ?><?php print $endcard['caption']; ?><?php endif; ?></div>
      <div><?php if (!empty($endcard['url'])): ?><?php print $endcard['url']; ?><?php endif; ?></div>
      <div><?php if (!empty($endcard['share_bar'])): ?><?php print $endcard['share_bar']; ?><?php endif; ?></div>
    </div>
    <div class="slider-counter">
      <span class="gallery-name">
        <?php if (!empty($info['gallery_name'])): ?><?php print $info['gallery_name']; ?><?php endif; ?>
      </span>
      <span class="slide-index"></span>
    </div>
  </div>
</div>
