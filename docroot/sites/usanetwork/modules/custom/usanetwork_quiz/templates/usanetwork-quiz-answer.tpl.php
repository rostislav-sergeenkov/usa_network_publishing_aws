<?php if (!empty($answer) && $answer): ?>
  <div class="<?php print !empty($classes) ? $classes : ''; ?>"<?php print !empty($attributes) ? $attributes : ''; ?> value="<?php print $value; ?>">
    <div class="inner">
      <?php if (!empty($image) && !empty($type) && in_array($type, array('image', 'image_text'))): ?>
        <div class="answer-image"><?php print $image; ?></div>
      <?php endif; ?>
      <?php if (!empty($title) && !empty($type) && in_array($type, array('text', 'image_text'))): ?>
        <div class="answer-title"><?php print $title; ?></div>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
