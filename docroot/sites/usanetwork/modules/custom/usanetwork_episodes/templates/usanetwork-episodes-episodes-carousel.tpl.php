<?php
/**
* $season_number - integer
* $all_episodes_link - URL
* $episodes - array
* $episode['title'] - string
* $episode['episode_number'] - integer
* $episode['image'] - image url
* $episode['url'] - url to episode
*/
?>
<div class="node-wrapper advert">
  <div class="advertisement">
  </div>
</div>
<div class="items-block episodes-block">
  <div class="items-block-title episodes-block-title">
    <h2><?php print t('Season ').$season_number.t(' episode guides')?></h2>
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
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-characters show-color">
  <a href="<?php print $all_episodes_link; ?>"> View All episodes</a>
</div>
