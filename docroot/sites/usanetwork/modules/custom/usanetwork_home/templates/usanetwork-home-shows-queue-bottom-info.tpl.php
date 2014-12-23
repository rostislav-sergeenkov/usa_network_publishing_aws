<?php
/**
 *
 */
?>
<?php if (!empty($inner_carousel_elements)): ?>
  <div class="show-bottom-info">
    <div class="carousel-block carousel-block-left">
      <div class="carousel inner-carousel carousel-left">
        <ul>
          <?php foreach ($inner_carousel_elements as $inner_carousel_element): ?>
            <li><?php print $inner_carousel_element; ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
<?php endif; ?>
