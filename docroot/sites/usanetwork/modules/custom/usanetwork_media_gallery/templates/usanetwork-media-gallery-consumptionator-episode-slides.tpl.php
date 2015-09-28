<?php
/**
 * $slides - array of pre-rendered slides
 * $block_title - string
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
      <div class="download-button show-color">
        <a href="/app" target="_self">
          Download the app
        </a>
      </div>
    </div>
  </div>
  <div class="items-block galleries-thumbs-block">
    <div class="items-block-title galleries-block-title">
      <?php if (!empty($block_title)): ?>
        <h2><?php print $block_title; ?></h2>
      <?php endif; ?>
    </div>
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
        <div class="episodes-list-slider horizontal" data-mode="horizontal" data-block-name="Right Rail Carousel">
          <ul class="slider-horizontal">
            <?php foreach ($slides_horizontal as $slide_horizontal): ?>
              <li class="slide-item">
                <?php print $slide_horizontal; ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <div class="horizontal-controls">
            <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev link-color-reset"></a>
            <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next link-color-reset"></a>
          </div>
        </div>
      <?php endif; ?>
    <?php endif; ?>
  </div>
  <!-- change link to special photo page for show-->
  <?php if (!empty($link)): ?>
    <div class="more-items more-photos show-color">
      <a href="<?php print $link; ?>"><?php print t('View all photos'); ?></a>
    </div>
  <?php endif; ?>
</div>
