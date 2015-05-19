<?php
/**
 *
 */
?>

<div class="items-block-title characters-block-title">
  <h2><?php print !empty($video_type) ? $video_type : '';?></h2>
</div>
<?php if (!empty($items_v)): ?>
<div class="episodes-list-slider vertical" data-mode="vertical">
  <ul class="slider-vertical">
    <?php foreach ($items_v as $item_v): ?>
      <?php print $item_v; ?>
    <?php endforeach; ?>
  </ul>
</div>
<?php endif; ?>
<?php if (!empty($items_h)): ?>
<div class="episodes-list-slider horizontal no-hidden-items" data-mode="horizontal">
  <ul class="slider-horizontal">
    <?php foreach ($items_h as $item_h): ?>
      <?php print $item_h; ?>
    <?php endforeach; ?>
  </ul>
  <div class="horizontal-controls">
    <a href="javascript:void(0)" class="jcarousel-control-prev"></a>
    <a href="javascript:void(0)" class="jcarousel-control-next"></a>
  </div>
<?php endif; ?>




