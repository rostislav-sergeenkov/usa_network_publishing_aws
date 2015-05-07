<?php
/**
 *
 */
?>
<div class="items-block-title characters-block-title">
  <h2><?php print !empty($video_type) ? $video_type : '';?></h2>
</div>
<div class="carousel">
  <?php if (!empty($items)): ?>
    <ul class="carousel-items">
      <?php foreach ($items as $item): ?>
        <?php print $item; ?>
      <?php endforeach; ?>
    </ul>
  <?php else: ?>
    <div class="empty"></div>
  <?php endif; ?>
</div>



