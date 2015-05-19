<?php
/**
 * $slides - array of pre-rendered slides
 * $gallery_type - string value of gallery type
 */
?>
<div class="consum-sidebar">
  <div class="node-wrapper advert">
    <?php if (!empty($ad)) : ?>
    <div class="advertisement">
      <?php print $ad; ?>
    </div>
    <?php endif; ?>
  </div>
  <div class="download-app">
    <div class="download-app-wrapper">
      <div class="image-block"></div>
      <div class="text-block">Get USA NOW to watch full episodes from any device.</div>
      <div class="download-button show-color">Download the app</div>
    </div>
  </div>
  <div class="items-block gallaries-thumbs-block">
    <?php if (!empty($gallery_type)): ?>
      <div class="items-block-title galleries-block-title">
        <h2><?php print $gallery_type; ?></h2>
      </div>
    <?php endif; ?>
    <?php if (!empty($slides_vertical) && !empty($slides_horizontal)): ?>
      <?php if (!empty($slides_vertical)): ?>
        <div class="episodes-list-slider vertical" data-mode="vertical">
          <ul class="slider-vertical">
            <?php foreach ($slides_vertical as $slide_vertical): ?>
              <li class="slide-item">
                <?php print $slide_vertical; ?>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      <?php endif; ?>
      <?php if (!empty($slides_horizontal)): ?>
        <div class="episodes-list-slider horizontal" data-mode="horizontal">
          <ul class="slider-horizontal">
            <?php foreach ($slides_horizontal as $slide_horizontal): ?>
              <li class="slide-item">
                <?php print $slide_horizontal; ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <div class="horizontal-controls">
            <a href="javascript:void(0)" class="jcarousel-control-prev"></a>
            <a href="javascript:void(0)" class="jcarousel-control-next"></a>
          </div>
        </div>
      <?php endif; ?>
    <?php endif; ?>
  </div>
  <!-- change link to special photo page for show-->
  <div class="more-items more-photos show-color">
    <a href="/photos"><?php print t('View all photos'); ?></a>
  </div>
</div>
