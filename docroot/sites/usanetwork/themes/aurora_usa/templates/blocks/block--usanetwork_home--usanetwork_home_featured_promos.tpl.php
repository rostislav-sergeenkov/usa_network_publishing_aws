<?php if (!empty($content)): ?>
  <div id="block-usanetwork-blocks-usanetwork-featured-carousel"
       data-block-name="Themed Carousel" <?php print !empty($attributes_array['data-url']) ? (' data-url="' . $attributes_array['data-url'] . '"') : ''; ?>>
    <div class="featured-block carousel-block carousel-block-left">
      <?php print $content; ?>
      <div class="carousel-controls-wrap">
        <a href="javascript:void(0)"
           class="usa-carousel-controls usa-carousel-control-prev link-color-reset usa-carousel-button-disabled"></a>
        <a href="javascript:void(0)"
           class="usa-carousel-controls usa-carousel-control-next link-color-reset usa-carousel-button-disabled"></a>
      </div>
      <?php if (!empty($items_count) && $items_count > 3): ?>
        <a href="javascript:void(0)" class="more-button more">
          <span class="more-text"><?php print t('More'); ?></span>
          <span class="close-text"><?php print t('Close'); ?></span>
        </a>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
