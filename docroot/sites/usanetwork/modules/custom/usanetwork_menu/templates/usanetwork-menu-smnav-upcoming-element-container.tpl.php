<?php
/**
 * $elements - array of pre rendered upcoming elements.
 */
?>

<?php if (!empty($elements)): ?>
  <div class="primetime">
    <?php foreach ($elements as $element): ?>
      <?php print $element; ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>
