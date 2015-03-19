<div class="full-episodes-block carousel-block">
  <div class="carousel-description-item start">
    <div class="description-wrapper">
      <div class="description-block">
        <div class="title"><?php print $title; ?></div>
        <div class="additional-text"><?php print $additional_text; ?></div>
        <div class="link"><?php print $link; ?></div>
      </div>
    </div>
  </div>
  <div class="carousel full-episodes-carousel carousel-left start <?php print $carousel_class; ?>" data-carousel-id="2">
    <ul class="slides">
      <?php foreach ($carousel_items as $key => $item): ?>
        <li<?php print ($key == 0) ? ' class="first"' : ''; ?>><?php print $item; ?></li>
      <?php endforeach; ?>
    </ul>
    <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev"></a>
    <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next"></a>
  </div>
  <a href="javascript:void(0)" class="more-button more">
    <span class="more-text"><?php print t('More full episodes'); ?></span>
    <span class="close-text"><?php print t('Close'); ?></span>
  </a>
</div>
