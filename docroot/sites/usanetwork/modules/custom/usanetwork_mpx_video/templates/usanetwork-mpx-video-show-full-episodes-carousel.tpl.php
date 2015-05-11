<div class="carousel-block carousel-block-left">

  <div class="carousel-description-item start">
    <div class="description-wrapper">
      <div class="description-block">
        <div class="caption">access all full episodes</div>
        <div class="title show-color show-color-border <?php print $carousel_border; ?>"><?php print $show_title; ?></div>
        <?php if (!empty($sponsored)) : ?>
          <div class="sponsored" data-mpspath="<?php print $file_path; ?>"></div>
        <?php endif; ?>
        <div class="additional-text"><?php print $videos_count; ?></div>
      </div>
    </div>
  </div>
  <div class="carousel carousel-left start" data-carousel-id="<?php print $carousel_id; ?>">
    <ul>
      <?php print $carousel_items; ?>
    </ul>
    <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev"></a>
    <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next"></a>
  </div>
  <a class="get-app" href="">Get the app to watch</a>
</div>
