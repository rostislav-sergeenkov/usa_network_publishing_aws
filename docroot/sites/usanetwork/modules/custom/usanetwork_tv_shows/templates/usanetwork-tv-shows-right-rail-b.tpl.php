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

<div class="episodes-list episodes-list__b shadow">
  <?php if (!empty($episodes_block_title)): ?>
    <div class="title show-color">
      <div class="title-wrapper">
        <h2><?php print $episodes_block_title; ?></h2>
      </div>
    </div>
  <?php endif; ?>
  <div id="relevant-content-carousel" class="usa-carousel">
    <ul class="slider-list">
      <?php foreach ($items as $item): ?>
        <li class="slide slide-item">
          <?php print $item ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>
