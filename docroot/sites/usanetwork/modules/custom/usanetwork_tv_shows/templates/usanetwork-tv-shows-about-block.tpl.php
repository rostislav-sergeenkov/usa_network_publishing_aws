<?php
/**
 * Theme usanetwork_tv_shows_about_block
 */
?>
<div class="about-show-block">
  <?php if (!empty($about_image)): ?>
    <div class="about-show-image-block">
      <?php print $about_image; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($about_text)): ?>
    <div class="about-show-text-block">
      <?php print $about_text; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($advert_block)): ?>
    <div class="about-show-advert-block">
      <?php print $advert_block; ?>
    </div>
  <?php endif; ?>
</div>


