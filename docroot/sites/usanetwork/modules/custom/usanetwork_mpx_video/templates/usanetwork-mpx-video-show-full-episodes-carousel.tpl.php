<div class="carousel-block carousel-block-left " data-block-name="<?php print $show_title; ?> Carousel">
  <div class="carousel carousel-left start" data-carousel-id="<?php print $carousel_id; ?>">
    <ul class="usa-carousel-left swiper-wrapper">
      <li class="carousel-item swiper-slide description-item">
        <div class="carousel-description-item <?php print !empty($sponsored)? ' sponsored-enable' : ''; ?>">
          <div class="description-wrapper">
            <div class="description-block">
              <div class="title show-color show-color-border <?php print $carousel_border; ?>">
                <?php print $show_title; ?>
                <?php if (!empty($sponsored)) : ?>
                  <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
                <?php endif; ?>
              </div>
              <div class="additional-text"><?php print $videos_count; ?></div>
            </div>
          </div>
        </div>
      </li>
      <?php print $carousel_items; ?>
    </ul>
  </div>
  <div class="carousel-controls-wrap">
    <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-prev link-color-reset usa-carousel-button-disabled"></a>
    <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-next link-color-reset usa-carousel-button-disabled"></a>
  </div>
  <a class="get-app" href="">Get the app to watch</a>
</div>
