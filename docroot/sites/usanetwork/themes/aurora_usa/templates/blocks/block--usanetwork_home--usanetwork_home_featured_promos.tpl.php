<div class="featured-block carousel-block carousel-block-left"<?php print !empty($attributes_array['data-url']) ? (' data-url="' . $attributes_array['data-url'] . '"') : ''; ?>>
  <?php print $content; ?>
  <a href="javascript:void(0)" class="more-button more">
    <span class="more-text"><?php print t('More action packed moments'); ?></span>
    <span class="close-text"><?php print t('Close'); ?></span>
  </a>
</div>
