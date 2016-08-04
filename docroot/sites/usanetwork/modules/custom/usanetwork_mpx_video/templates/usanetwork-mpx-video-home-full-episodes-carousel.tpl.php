<div class="full-episodes-block carousel-block" data-block-name="Full Episodes Carousel">
  <div class="carousel full-episodes-carousel carousel-left <?php print $carousel_class; ?>" data-carousel-id="2">
    <ul class="usa-carousel-left swiper-wrapper">
      <li class="carousel-item swiper-slide description-item">
        <div class="carousel-description-item">
          <div class="description-wrapper">
            <div class="description-block">
              <div class="title"><?php print $title; ?></div>
              <div class="additional-text"><?php print $additional_text; ?></div>
              <div class="link"><?php print $link; ?></div>
            </div>
          </div>
        </div>
      </li>
      <?php foreach ($carousel_items as $key => $item): ?>
        <li class="carousel-item swiper-slide"><?php print $item; ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class="carousel-controls-wrap">
    <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-prev link-color-reset"></a>
    <a href="javascript:void(0)" class="usa-carousel-controls usa-carousel-control-next link-color-reset"></a>
  </div>
  <?php if($show_more): ?>
    <a href="javascript:void(0)" class="more-button more">
      <span class="more-text"><?php print t('More full episodes'); ?></span>
      <span class="close-text"><?php print t('Close'); ?></span>
    </a>
  <?php endif; ?>
</div>
