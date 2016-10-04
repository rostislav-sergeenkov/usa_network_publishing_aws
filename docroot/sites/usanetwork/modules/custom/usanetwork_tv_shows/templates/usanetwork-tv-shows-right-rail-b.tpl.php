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
      <div id="relevant-content-carousel" class="usa-carousel">
        <ul class="slider-list">
          <?php foreach ($items as $item): ?>
            <li class="slide slide-item">
              <?php print $item ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </ul>
  </div>
</div>
