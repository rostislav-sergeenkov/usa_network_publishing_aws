<?php
/**
 * Theme usanetwork_tv_shows_about_block
 */
?>
<div class="about-show-block show-border">
  <div class="about-show-block-inner">
    <?php if (!empty($about_image)): ?>
      <div class="about-show-image-block">
        <?php print $about_image; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($about_text)): ?>
      <div class="about-show-text-block">
        <div class="about-show-text-block-title"><?php print t('About the show'); ?></div>
        <div class="about-show-text-block-description"><?php print $about_text; ?></div>
        <div class="about-show-text-block-more">
          <a href="<?php print (!empty($url))? $url: '#';?>" class="show-color hover-avail"><?php print t('read more'); ?></a>
        </div>
      </div>
    <?php endif; ?>
    <?php if (!empty($advert_block)): ?>
      <div class="about-show-advert-block">
        <?php print $advert_block; ?>
      </div>
    <?php endif; ?>
  </div>
</div>


