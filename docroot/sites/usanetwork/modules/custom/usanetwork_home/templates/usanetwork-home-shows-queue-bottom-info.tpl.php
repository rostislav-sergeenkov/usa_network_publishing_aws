<?php
/**
 *
 */
?>
<?php if (!empty($inner_carousel_elements)): ?>
  <div class="show-bottom-info">
      <ul class="promos-list">
        <?php foreach ($inner_carousel_elements as $inner_carousel_element): ?>
          <li><?php print $inner_carousel_element; ?></li>
        <?php endforeach; ?>
      </ul>
  </div>
<?php endif; ?>
