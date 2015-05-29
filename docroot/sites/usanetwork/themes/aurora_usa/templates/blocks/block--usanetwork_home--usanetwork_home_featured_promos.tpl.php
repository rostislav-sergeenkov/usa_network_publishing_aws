<?php if (!empty($content)): ?>
  <div class="featured-block carousel-block carousel-block-left"<?php print !empty($attributes_array['data-url']) ? (' data-url="' . $attributes_array['data-url'] . '"') : ''; ?>>
    <?php print $content; ?>
    <?php if (!empty($items_count) && $items_count > 3): ?>
      <a href="javascript:void(0)" class="more-button more">
        <span class="more-text"><?php print t('More'); ?></span>
        <span class="close-text"><?php print t('Close'); ?></span>
      </a>
    <?php endif; ?>
  </div>
<?php endif; ?>
