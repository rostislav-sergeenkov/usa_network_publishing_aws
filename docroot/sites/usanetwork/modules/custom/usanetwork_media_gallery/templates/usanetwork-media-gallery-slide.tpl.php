<?php
/**
 * 
 */
?>
<div class="slide">
  <div class="node node-gallery<?php if ($gigya_id): ?> end-cart<?php endif; ?>">
    <div class="asset-img">
      <?php if (!empty($image)): ?><?php print $image; ?><?php endif; ?>
    </div>
    <div class="slide-info">
      <div class="description">
        <?php if (isset($info['description'])): ?><?php print $info['description']; ?><?php endif; ?>
      </div>
      <?php if ($gigya_id): ?>
      <div class="social-bar">
        <div class="social-title">
          Share this image
        </div>
        <div class="social-icons icons-block" id="<?php print $gigya_id; ?>">
          <?php print print_r($field_gigya_share_bar); ?>
        </div>
      </div>
      <?php endif; ?>
      <div class="slider-counter"></div>
    </div>
  </div>
</div>
