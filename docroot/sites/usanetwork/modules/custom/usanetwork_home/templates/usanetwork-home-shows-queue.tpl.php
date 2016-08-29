<?php
/**
 *
 */
?>
<div class="shows-block carousel-block" data-block-name="Show Card Carousel">
  <?php if (!empty($slides)): ?>
    <div class="show-carousel carousel carousel-left" data-carousel-id="1">
      <ul class="usa-carousel-left swiper-wrapper">
        <li class="carousel-item swiper-slide description-item">
          <div class="carousel-description-item">
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
        </li>
        <?php foreach ($slides as $slide): ?>
          <li class="carousel-item swiper-slide <?php (!empty($slide['class'])) ? print $slide['class'] : ''; ?>" data-slide-id="<?php print $slide['data_attr']; ?>">
            <?php if (!empty($slide['content'])): ?>
              <?php print $slide['content']; ?>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div class="carousel-controls-wrap">
      <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-prev link-color-reset usa-carousel-button-disabled"></a>
      <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-next link-color-reset usa-carousel-button-disabled"></a>
    </div>
  <?php endif; ?>
</div>
