<?php if ($answer): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?> value="<?php print $value; ?>">
    <div class="inner">
      <?php if ($image && in_array($type, array('image', 'image_text'))): ?>
        <div class="answer-image"><?php print $image; ?></div>
      <?php endif; ?>
      <?php if ($title && in_array($type, array('text', 'image_text'))): ?>
        <div class="answer-title"><?php print $title; ?></div>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
