<?php
?>
<div class="node-wrapper advert">
  <div class="advertisement">
    <div class="topbox"></div>
  </div>
</div>
<div class="items-block posts-block">
  <div class="items-block-title posts-block-title">
    <h2><?php print $block_title;?></h2>
  </div>
  <?php if (!empty($posts['vertical'])): ?>
    <div class="episodes-list-slider vertical" data-mode="vertical">
      <ul class="slider-vertical">
        <?php foreach ($posts['vertical'] as $item_v): ?>
          <?php print $item_v; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php if (!empty($posts['horizontal'])): ?>
    <div class="episodes-list-slider horizontal no-hidden-items" data-mode="horizontal" data-block-name="Right Rail Carousel">
      <ul class="slider-horizontal">
        <?php foreach ($posts['horizontal'] as $item_h): ?>
          <?php print $item_h; ?>
        <?php endforeach; ?>
      </ul>
      <div class="horizontal-controls">
        <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev link-color-reset"></a>
        <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next link-color-reset"></a>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-posts show-color">
  <?php if (!empty($posts_landing_link)): ?>
    <?php print $posts_landing_link; ?>
  <?php endif; ?>
</div>
