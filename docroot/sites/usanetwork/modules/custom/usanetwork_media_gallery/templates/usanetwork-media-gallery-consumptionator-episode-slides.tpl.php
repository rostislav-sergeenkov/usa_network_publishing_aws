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
  <?php if(empty($new_design)) : ?>
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
  <?php endif; ?>
  <div class="items-block galleries-thumbs-block">
    <div class="items-block-title galleries-block-title<?php print !empty($new_design) ? ' show-color show-font show-border' : ''; ?>">
      <?php if (!empty($block_title)): ?>
        <h2><?php print $block_title; ?></h2>
      <?php endif; ?>
    </div>
    <?php if (!empty($slides_carousel)): ?>
      <div class="episodes-list-slider" data-block-name="Right Rail Carousel">
        <ul class="usa-carousel swiper-wrapper">
          <?php foreach ($slides_carousel as $slide): ?>
            <li class="usa-carousel-item swiper-slide">
              <?php print $slide; ?>
            </li>
          <?php endforeach; ?>
        </ul>
        <div class="usa-carousel-controls-wrap">
          <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
          <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
        </div>
      </div>
    <?php endif; ?>
  </div>
  <!-- change link to special photo page for show-->
  <?php if (!empty($link)): ?>
    <div class="more-items more-photos <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
      <a href="<?php print $link; ?>"><?php print t('View all photos'); ?><?php if (!empty($new_design)): ?><span class="show-color show-font"></span><?php endif; ?></a>
    </div>
  <?php endif; ?>
</div>
