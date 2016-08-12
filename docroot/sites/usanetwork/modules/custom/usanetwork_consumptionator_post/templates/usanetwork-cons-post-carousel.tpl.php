<?php
?>
<div class="node-wrapper advert">
  <div class="advertisement">
    <div class="topbox"></div>
  </div>
</div>
<div class="items-block posts-block">
  <div class="items-block-title posts-block-title<?php !empty($new_design) ? print ' show-color show-font' : ''; ?>">
    <h2><?php print $block_title;?></h2>
  </div>
  <?php if (!empty($posts['carousel'])): ?>
    <div class="episodes-list-slider no-hidden-items" data-block-name="Right Rail Carousel">
      <ul class="usa-carousel swiper-wrapper">
        <?php foreach ($posts['carousel'] as $item): ?>
          <?php print $item; ?>
        <?php endforeach; ?>
      </ul>
      <div class="usa-carousel-controls-wrap">
        <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
        <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-posts <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <?php if (!empty($posts_landing_link)): ?>
    <?php print $posts_landing_link; ?>
  <?php endif; ?>
</div>
