<?php
/**
 *
 */
?>
<div class="shows-block">
  <div class="carousel-description-item start">
    <a href="javascript:void(0)" class="description-button"></a>

    <div class="description-wrapper">
      <div class="description-block">
        <?php if (!empty($caption)): ?>
          <div class="caption"><?php print $caption; ?></div>
        <?php endif; ?>
        <?php if (!empty($title)): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($additional_text)): ?>
          <div class="additional-text"><?php print $additional_text; ?></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if (!empty($slides)): ?>
    <div class="show-carousel carousel carousel-left start" data-carousel-id="1">
      <ul class="slides">
        <?php foreach ($slides as $slide): ?>
          <li<?php if (!empty($slide['class'])): print ' class="' . $slide['class'] . '"'; endif;?>>
            <?php if (!empty($slide['content'])): ?>
              <?php print $slide['content']; ?>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev"></a>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next"></a>
    </div>
  <?php endif; ?>
</div>
