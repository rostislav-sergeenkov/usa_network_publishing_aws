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
    <?php if (!empty($image)): ?><?php print $image; ?><?php endif; ?>
  </div>
  <div class="slide-info">
    <div class="description">
      <?php if (isset($info['description'])): ?><?php print $info['description']; ?><?php endif; ?>
    </div>
    <div class="slider-counter"></div>
    <?php if ($gigya_id): ?>
      <div class="social-bar">
        <div class="social-icons icons-block" id="<?php print $gigya_id; ?>">
        </div>
      </div>
    <?php endif; ?>
  </div>
</div>
