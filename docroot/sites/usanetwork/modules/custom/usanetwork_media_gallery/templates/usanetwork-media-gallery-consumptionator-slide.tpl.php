<?php
/**
 * $gigya_id - id of Gigya
 * $image image url
 * $info => array(
 *   'description' => NULL, // Description of image
 * );
 */
?>
<div class="node node-gallery<?php if (!$gigya_id): ?> end-cart<?php endif; ?>">
  <div class="asset-img">
    <?php if (!empty($image)): ?>
      <?php if (!empty($endcard_path)) : ?>
        <a href="<?php print $endcard_path; ?>" <?php (!empty($target_blank)) ? print "target=\"_blank\"": ''; ?>>
          <?php print $image; ?>
        </a>
      <?php else : ?>
        <?php print $image; ?>
      <?php endif; ?>
    <?php endif; ?>
  </div>
  <div class="slide-info">
    <div class="description">
      <?php if (!empty($info['description'])): ?><?php print $info['description']; ?><?php endif; ?>
    </div>
    <div class="slider-counter">
      <span class="gallery-name">
        <?php if (!empty($info['gallery_name'])): ?><?php print $info['gallery_name']; ?><?php endif; ?>
      </span>
      <span class="slide-index"></span>
    </div>
  </div>
</div>
