<?php
?>
<div class="node-wrapper advert">
  <div class="advertisement">
    <div class="topbox"></div>
  </div>
</div>
<div class="items-block quizes-block">
  <div class="items-block-title quizes-block-title<?php print !empty($new_design) ? ' show-color show-font' : ''; ?>">
    <h2><?php print $block_title;?></h2>
  </div>
  <?php if (!empty($quizes['carousel'])): ?>
    <div class="episodes-list-slider no-hidden-items" data-block-name="Right Rail Carousel">
      <ul class="usa-carousel swiper-wrapper">
        <?php foreach ($quizes['carousel'] as $item_h): ?>
          <?php print $item_h; ?>
        <?php endforeach; ?>
      </ul>
      <div class="usa-carousel-controls-wrap">
        <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
        <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-explore <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <?php if (!empty($show_explore_link)): ?>
    <?php print $show_explore_link; ?>
  <?php endif; ?>
</div>
