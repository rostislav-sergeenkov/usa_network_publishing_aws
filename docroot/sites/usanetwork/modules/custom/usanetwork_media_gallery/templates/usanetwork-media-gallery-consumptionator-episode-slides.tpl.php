<?php
/**
 * $slides - array of pre-rendered slides
 * $gallery_type - string value of gallery type
 */
?>
<div class="consum-sidebar">
  <div class="node-wrapper advert">
    <div class="advertisement">
    </div>
  </div>
  <div class="download-app">
    <div class="download-app-wrapper">
      <div class="image-block"></div>
      <div class="text-block">Get USA NOW to watch full episodes from any device.</div>
      <div class="download-button show-color">Download the app</div>
    </div>
  </div>
  <div class="items-block clips-block">
    <?php if (!empty($gallery_type)): ?>
      <div class="items-block-title galleries-block-title">
        <h2><?php print $gallery_type; ?></h2>
      </div>
    <?php endif; ?>

    <?php if (!empty($slides)): ?>

      <div class="episodes-list-slider vertical" data-mode="vertical">
        <ul class="slider-vertical">
          <?php foreach ($slides as $slide): ?>
            <li class="slide-item">
              <?php print $slide; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div class="episodes-list-slider horizontal" data-mode="horizontal">
        <ul class="slider-horizontal">
          <?php foreach ($slides as $slide): ?>
            <li class="slide-item">
              <?php print $slide; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>



  </div>
  <!-- change link to special photo page for show-->
  <div class="more-items more-clips show-color">
    <a href="/photos"><?php print t('View all photos'); ?></a>
  </div>
</div>
