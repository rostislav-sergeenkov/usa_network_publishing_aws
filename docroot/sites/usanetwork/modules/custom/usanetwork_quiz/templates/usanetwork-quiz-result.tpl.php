<?php if (!empty($result) && $result): ?>
  <div class="<?php print !empty($classes) ? $classes : ''; ?>"<?php print !empty($attributes) ? $attributes : ''; ?> range_from=<?php print $range['from']; ?> range_to=<?php print $range['to']; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if (!empty($image)): ?>
      <div class="result-image">
        <?php print $image; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($trivia)): ?>
      <div class="score-container"><?php print t('You got !score right!', array('!score' => '<span class="score"></span>',)); ?></div>
    <?php endif; ?>
    <?php if (!empty($title)): ?>
      <div class="result-title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if (!empty($text)): ?>
      <div class="result-description">
        <?php print $text; ?>
        <?php if (!empty($share_text)): ?>
          <div class="share" style="display: none;"><?php print $share_text; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>
<?php endif; ?>
