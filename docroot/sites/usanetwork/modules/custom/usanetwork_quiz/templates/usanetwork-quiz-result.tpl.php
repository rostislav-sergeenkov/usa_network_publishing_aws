<?php if ($result): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?> range_from=<?php print $range['from']; ?> range_to=<?php print $range['to']; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if ($image): ?>
      <div class="result-image">
        <?php print $image; ?>
      </div>
    <?php endif; ?>
    <?php if ($trivia): ?>
      <div class="score-container"><?php print t('You got !score right!', array('!score' => '<span class="score"></span>',)); ?></div>
    <?php endif; ?>
    <div class="result-title"><?php print $title; ?></div>
    <div class="result-description">
      <?php print $text; ?>
      <div class="share" style="display: none;"><?php print $share_text; ?></div>
    </div>
  </div>
<?php endif; ?>
