<?php if ($question): ?>
  <div class="<?php print $classes; ?> clearfix"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if (!empty($image)): ?>
      <div class="question-image"><?php print $image; ?></div>
    <?php endif; ?>
    <?php if (!empty($video)): ?>
      <div class="question-video"><div class="video-player"><?php print $video; ?></div></div>
    <?php endif; ?>
    <?php if (!empty($title)): ?>
      <div class="question-title"><?php print $title; ?></div>
    <?php endif; ?>
    <div class="answers">
      <?php foreach($answers as $delta => $answer): ?>
        <?php print $answer; ?>
      <?php endforeach; ?>
    </div>
  </div>
<?php endif; ?>
