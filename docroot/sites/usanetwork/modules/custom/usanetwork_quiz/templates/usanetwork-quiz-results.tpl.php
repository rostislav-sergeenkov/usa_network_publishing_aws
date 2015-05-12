<div class="<?php print !empty($classes) ? $classes : ''; ?>"<?php print !empty($attributes) ? $attributes : ''; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
  <?php if (!empty($header_image)): ?>
    <div class="header">
      <?php print $header_image; ?>
    </div>
  <?php endif; ?>
  <div class="content-wrap">
    <div class="center">
      <?php foreach ($results as $result): ?>
        <?php print $result; ?>
      <?php endforeach; ?>
    </div>
    <div class="sidebar">
      <?php if (!empty($sidebar)): ?>
        <?php print $sidebar; ?>
      <?php endif; ?>
      <?php if (!empty($repeat_text)): ?>
        <input type="button" value="<?php print $repeat_text; ?>" class="repeat-button button">
      <?php endif; ?>
    </div>
  </div>
</div>