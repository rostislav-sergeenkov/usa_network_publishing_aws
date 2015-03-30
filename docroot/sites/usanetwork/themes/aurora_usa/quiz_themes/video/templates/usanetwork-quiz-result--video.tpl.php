<?php if ($result): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?> range_from=<?php print $range['from']; ?> range_to=<?php print $range['to']; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if ($image): ?>
      <div class="result-image">
        <?php print $image; ?>
      </div>
    <?php endif; ?>
    <div class="score-container"><?php print t('Score: !score out of !max', array('!score' => '<span class="score"></span>', '!max' => '<span class="max"></span>')); ?></div>
    <div class="result-description">
      <?php print $text; ?>
      <div class="share" style="display: none;"><?php print $share_text; ?></div>
    </div>
  </div>
<?php endif; ?>
