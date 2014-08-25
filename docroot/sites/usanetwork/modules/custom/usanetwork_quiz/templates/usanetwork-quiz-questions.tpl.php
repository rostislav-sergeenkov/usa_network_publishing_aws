<div class="<?php print $classes; ?>"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
  <div class="page-note"></div>
  <?php if ($header_image): ?>
    <div class="header">
      <?php print $header_image; ?>
    </div>
  <?php endif; ?>
  <div class="content-wrap">
    <div class="center">
      <?php foreach ($questions as $delta => $question): ?>
        <?php print $question; ?>
      <?php endforeach; ?>
    </div>
    <?php if ($sidebar): ?>
      <div class="sidebar">
        <?php print $sidebar; ?>
      </div>
    <?php endif; ?>
  </div>
</div>