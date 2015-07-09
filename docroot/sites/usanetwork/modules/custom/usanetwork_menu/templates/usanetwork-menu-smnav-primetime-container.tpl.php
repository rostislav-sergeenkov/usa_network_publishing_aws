<?php
/**
 * $elements - array of pre rendered schedule elements.
 */
?>

<?php if (!empty($elements)): ?>
  <div class="schedule">
    <?php foreach ($elements as $element): ?>
      <?php print $element; ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>
