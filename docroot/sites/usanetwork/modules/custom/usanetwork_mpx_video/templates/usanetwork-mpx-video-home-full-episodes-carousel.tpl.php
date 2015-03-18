<div class="carousel-description-item start <?php print $carousel_class; ?>">
  <div class="description-wrapper">
    <div class="description-block">
      <div class="title"><?php print $title; ?></div>
      <div class="additional-text"><?php print $additional_text; ?></div>
      <div class="link"><?php print $link; ?></div>
    </div>
  </div>
</div>
<div class="carousel carousel-left start">
  <ul>
    <?php foreach ($carousel_items as $key => $item): ?>
      <li<?php print ($key == 0) ? ' class="first"' : ''; ?>><?php print $item; ?></li>
    <?php endforeach; ?>
  </ul>
  <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev inactive" data-jcarouselcontrol="true"></a>
  <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next inactive" data-jcarouselcontrol="true"></a>
</div>
