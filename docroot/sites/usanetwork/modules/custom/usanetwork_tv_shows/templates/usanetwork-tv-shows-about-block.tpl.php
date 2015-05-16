<?php
/**
 * Theme usanetwork_tv_shows_about_block
 */
?>
<div class="about_show_block">
  <?php if (!empty($advert_block)): ?>
    <?php print $advert_block; ?>
  <?php endif; ?>

  <?php if (!empty($about_image)): ?>
    <?php print $about_image; ?>
  <?php endif; ?>

  <?php if (!empty($about_text)): ?>
    <?php print $about_text; ?>
  <?php endif; ?>
</div>


