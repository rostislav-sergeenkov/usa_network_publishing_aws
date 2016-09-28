<?php
/**
 *
 */
?>

<div class="items-block-title characters-block-title<?php print !empty($new_design) ? ' show-color show-font' : ''; ?>">
  <h2><?php print !empty($block_title) ? $block_title : '';?></h2>
</div>
<?php if (!empty($items_carousel)): ?>
<div class="episodes-list-slider no-hidden-items" data-block-name="Right Rail Carousel">
  <ul class="usa-carousel swiper-wrapper">
    <?php foreach ($items_carousel as $item_carousel): ?>
      <?php print $item_carousel; ?>
    <?php endforeach; ?>
  </ul>
  <div class="usa-carousel-controls-wrap">
    <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
    <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
  </div>
</div>
<?php endif; ?>




