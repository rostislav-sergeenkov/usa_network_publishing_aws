<?php
/**
 * $galleries - pre-rendered HTML array of galleries
 */
?>
<?php if (!empty($galleries)): ?>
  <div class="homepage-galleries">
    <?php foreach ($galleries as $gallery): ?>
      <?php print $gallery; ?>
    <?php endforeach; ?>
  </div>
<?php endif;?>
