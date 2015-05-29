<div class="<?php print $classes; ?>"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
  <?php if ($header_image): ?>
    <div class="header">
      <?php print $header_image; ?>
    </div>
  <?php endif; ?>
  <div class="content-wrap">
    <div class="center">
      <?php foreach ($results as $result): ?>
        <?php print $result; ?>
      <?php endforeach; ?>
      <input type="button" value="<?php print $repeat_text; ?>" class="repeat-button button">
    </div>
    <div class="sidebar">
      <?php if ($sidebar): ?>
        <?php print $sidebar; ?>
      <?php endif; ?>
    </div>
  </div>
</div>
