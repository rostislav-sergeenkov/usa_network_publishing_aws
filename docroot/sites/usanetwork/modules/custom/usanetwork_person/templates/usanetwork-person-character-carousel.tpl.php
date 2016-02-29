<?php
/**
 *
 */
?>

<div class="items-block-title characters-block-title">
  <h2><?php print !empty($block_title) ? $block_title : '';?></h2>
</div>
<?php if (!empty($items_v)): ?>
<div class="episodes-list-slider vertical">
  <ul class="slider-vertical">
    <?php foreach ($items_v as $item_v): ?>
      <?php print $item_v; ?>
    <?php endforeach; ?>
  </ul>
</div>
<?php endif; ?>
<?php if (!empty($items_h)): ?>
<div class="episodes-list-slider horizontal no-hidden-items" data-block-name="Right Rail Carousel">
  <ul class="slider-horizontal">
    <?php foreach ($items_h as $item_h): ?>
      <?php print $item_h; ?>
    <?php endforeach; ?>
  </ul>
  <div class="horizontal-controls">
    <div class="slide-next slide-control slick-disabled"></div>
    <div class="slide-prev slide-control slick-disabled"></div>
  </div>
</div>
<?php endif; ?>




