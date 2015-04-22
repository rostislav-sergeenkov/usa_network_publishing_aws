<?php
/**
 * $slides - array of pre-rendered slides
 */
?>
<div id="usanetwork-consumptionator-episodes-gallery">
  <?php if (!empty($slides)): ?>
    <ul class="slides">
      <?php foreach ($slides as $slide): ?>
        <li class="slide">
          <?php print $slide; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>
