<div class="<?php print !empty($classes) ? $classes : ''; ?>"<?php print !empty($attributes) ? $attributes : ''; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
  <div class="page-note"></div>
  <?php if (!empty($header_image)): ?>
    <div class="header">
      <?php print $header_image; ?>
    </div>
  <?php endif; ?>
  <div class="content-wrap">
    <div class="center">
      <?php if (!empty($questions)): ?>
        <?php foreach ($questions as $delta => $question): ?>
          <?php print $question; ?>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <?php if (!empty($sidebar)): ?>
      <div class="sidebar">
        <?php print $sidebar; ?>
      </div>
    <?php endif; ?>
  </div>
</div>