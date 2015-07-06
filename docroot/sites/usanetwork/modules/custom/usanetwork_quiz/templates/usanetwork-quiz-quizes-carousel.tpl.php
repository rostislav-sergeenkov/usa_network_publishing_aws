<?php
?>
<div class="node-wrapper advert">
  <div class="advertisement">
    <div class="topbox"></div>
  </div>
</div>
<div class="items-block quizes-block">
  <div class="items-block-title quizes-block-title">
    <h2><?php print $block_title;?></h2>
  </div>
  <?php if (!empty($quizes['vertical'])): ?>
    <div class="episodes-list-slider vertical" data-mode="vertical">
      <ul class="slider-vertical">
        <?php foreach ($quizes['vertical'] as $item_v): ?>
          <?php print $item_v; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php if (!empty($quizes['horizontal'])): ?>
    <div class="episodes-list-slider horizontal no-hidden-items" data-mode="horizontal">
      <ul class="slider-horizontal">
        <?php foreach ($quizes['horizontal'] as $item_h): ?>
          <?php print $item_h; ?>
        <?php endforeach; ?>
      </ul>
      <div class="horizontal-controls">
        <a href="javascript:void(0)" class="jcarousel-control-prev link-color-reset"></a>
        <a href="javascript:void(0)" class="jcarousel-control-next link-color-reset"></a>
      </div>
    </div>
  <?php endif; ?>
</div>
