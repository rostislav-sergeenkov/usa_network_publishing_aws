<?php
/**
 * @file
 * Right rail template.
 *
 * Available variables:
 * - $sponsored
 * - $episodes_block_title
 * - $items
 * - $show_more_button
 * - $file_path
 */

?>

<div class="episodes-list shadow<?php print !empty($sponsored)? ' sponsored-enable' : ''; ?>">
  <?php if (!empty($episodes_block_title)): ?>
    <div class="title show-color">
      <div class="title-wrapper">
        <h2><?php print $episodes_block_title; ?></h2>
      </div>
      <?php if (!empty($sponsored)) : ?>
        <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <div class="episodes-list-slider show-border" data-block-name="Right Rail Carousel">
    <ul class="usa-carousel swiper-wrapper">
      <?php foreach ($items as $item): ?>
        <?php print $item; ?>
      <?php endforeach; ?>
    </ul>
    <div class="usa-carousel-controls-wrap">
      <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
      <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
    </div>
    <?php if($show_more_button): ?>
      <div class="more-button-wrapper">
        <div class="more-button more">
          <span class="more-text"><?php print t('Load More'); ?></span>
          <span class="close-text"><?php print t('Close'); ?></span>
        </div>
      </div>
    <?php endif; ?>
  </div>
</div>
