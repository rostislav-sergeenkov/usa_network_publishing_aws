<?php
/**
 *
 */
?>
<div class="shows-block" data-block-name="Show Card Carousel">
  <div class="carousel-description-item start">
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
          <li data-slide-id="<?php print $slide['data_attr']; ?>" <?php (!empty($slide['class'])) ? print 'class="' . $slide['class'] . '"' : ''; ?>>
            <?php if (!empty($slide['content'])): ?>
              <?php print $slide['content']; ?>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev link-color-reset"></a>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next link-color-reset"></a>
    </div>
  <?php endif; ?>
</div>
