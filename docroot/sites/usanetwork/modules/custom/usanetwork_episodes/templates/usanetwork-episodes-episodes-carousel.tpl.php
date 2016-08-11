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
  <?php if (!empty($episodes['carousel'])): ?>
    <div class="episodes-list-slider no-hidden-items" data-block-name="Right Rail Carousel">
      <ul class="usa-carousel swiper-wrapper">
        <?php foreach ($episodes['carousel'] as $item): ?>
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
<div class="more-items more-episodes <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <a href="<?php print $all_episodes_link; ?>"><?php print t('View All episodes'); ?><?php if (!empty($new_design)): ?><span class="show-color show-font"></span><?php endif; ?></a>
</div>
