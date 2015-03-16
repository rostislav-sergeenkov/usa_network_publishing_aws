<?php if (!empty($question) && $question): ?>
  <div class="<?php print !empty($classes) ? $classes : ''; ?> clearfix"<?php print !empty($attributes) ? $attributes : ''; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if (!empty($image)): ?>
      <div class="question-image"><?php print $image; ?></div>
    <?php endif; ?>
    <?php if (!empty($video)): ?>
      <div class="question-video">
        <div class="video-player"><?php print $video; ?></div>
      </div>
    <?php endif; ?>
    <?php if (!empty($title)): ?>
      <div class="question-title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if (!empty($answers)): ?>
    <div class="answers">
      <?php foreach($answers as $delta => $answer): ?>
        <?php print $answer; ?>
      <?php endforeach; ?>
    </div>
    <?php endif; ?>
  </div>
<?php endif; ?>
