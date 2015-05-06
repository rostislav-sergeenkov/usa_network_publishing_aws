<div class="<?php print !empty($classes) ? $classes : ''; ?>"<?php print !empty($attributes) ? $attributes : ''; ?>>
  <?php if (!empty($splash)): ?>
    <?php print $splash; ?>
  <?php endif; ?>
  <?php if (!empty($questions)): ?>
    <?php print $questions; ?>
  <?php endif; ?>
  <?php if (!empty($results)): ?>
    <?php print $results; ?>
  <?php endif; ?>
</div>