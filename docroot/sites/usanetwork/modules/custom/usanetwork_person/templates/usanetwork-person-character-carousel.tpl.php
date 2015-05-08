<?php
/**
 *
 */
?>
<div class="items-block-title characters-block-title">
  <h2><?php print !empty($video_type) ? $video_type : '';?></h2>
</div>
<div class="carousel">
  <?php if (!empty($items_h)): ?>
    <ul class="carousel-items horizontal">
      <?php foreach ($items_h as $item_h): ?>
        <?php print $item_h; ?>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
  <?php if (!empty($items_v)): ?>
    <ul class="carousel-items vertical">
      <?php foreach ($items_v as $item_v): ?>
        <?php print $item_v; ?>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>



