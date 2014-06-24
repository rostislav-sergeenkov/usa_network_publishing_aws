<?php if ($question): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <div class="question-title"><?php print $title; ?></div>
    <div class="answers">
      <?php foreach($answers as $delta => $answer): ?>
        <?php print $answer; ?>
      <?php endforeach; ?>
    </div>
  </div>
<?php endif; ?>
