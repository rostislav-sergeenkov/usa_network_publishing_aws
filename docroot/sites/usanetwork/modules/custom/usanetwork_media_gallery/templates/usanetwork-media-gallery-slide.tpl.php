<?php
/**
 * 
 */
?>
<div class="slide">
  <div class="node node-gallery">
    <div class="asset-img">
      <?php if (!empty($image)): ?><?php print $image; ?><?php endif; ?>
    </div>
    <div class="slide-info">
      <div class="description">
        <?php if (isset($info['description'])): ?><?php print $info['description']; ?><?php endif; ?>
      </div>
      <div class="social-bar">
        <div class="social-title">
          Share this image
        </div>
        <div class="social-icons icons-block">
          <a href="javascript:void(0)" class="facebook"></a>
          <a href="javascript:void(0)" class="twitter"></a>
          <a href="javascript:void(0)" class="tumblr"></a>
          <a href="javascript:void(0)" class="pinterest"></a>
          <a href="javascript:void(0)" class="plus-icon"></a>
        </div>
      </div>
      <div class="slider-counter"></div>
    </div>
  </div>
</div>
