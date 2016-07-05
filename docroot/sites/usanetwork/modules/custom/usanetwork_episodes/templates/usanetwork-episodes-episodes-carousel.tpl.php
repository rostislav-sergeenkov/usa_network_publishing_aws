<?php
?>
<div class="node-wrapper advert">
  <div class="advertisement">
    <?php if (!empty($advert_block)): ?>
      <?php print $advert_block; ?>
    <?php endif; ?>
  </div>
</div>
<div class="items-block episodes-block">
  <div class="items-block-title episodes-block-title<?php print !empty($new_design) ? ' show-color show-font' : ''; ?>">
    <h2><?php print t('Season ') . $season_number ; ?><?php if (!empty($new_design)) : print t(' recaps'); else :  print t(' episode guides'); endif; ?></h2>
  </div>
  <?php if (!empty($episodes['vertical'])): ?>
    <div class="episodes-list-slider vertical">
      <ul class="slider-vertical">
        <?php foreach ($episodes['vertical'] as $item_v): ?>
          <?php print $item_v; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php if (!empty($episodes['horizontal'])): ?>
    <div class="episodes-list-slider horizontal no-hidden-items" data-block-name="Right Rail Carousel">
      <ul class="slider-horizontal">
        <?php foreach ($episodes['horizontal'] as $item_h): ?>
          <?php print $item_h; ?>
        <?php endforeach; ?>
      </ul>
      <div class="horizontal-controls">
        <div class="slide-next slide-control slick-disabled"></div>
        <div class="slide-prev slide-control slick-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-episodes <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <a href="<?php print $all_episodes_link; ?>"><?php print t('View All episodes'); ?><?php if (!empty($new_design)): ?><span class="show-color show-font"></span><?php endif; ?></a>
</div>
