<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <h1 class="quiz-title"><?php print $node->title; ?></h1>
  <?php if ($splash): ?>
    <?php print $splash; ?>
  <?php endif; ?>
  <?php if ($questions): ?>
    <?php print $questions; ?>
  <?php endif; ?>
  <?php if ($results): ?>
    <?php print $results; ?>
  <?php endif; ?>
</div>