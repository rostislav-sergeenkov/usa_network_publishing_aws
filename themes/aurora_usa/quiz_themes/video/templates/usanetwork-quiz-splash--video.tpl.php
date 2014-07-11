<?php if ($splash_image || $description): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <div class="content-wrap">
      <div class="center">
        <?php if ($splash_image): ?>
          <div class="image">
            <?php print $splash_image; ?>
          </div>
        <?php endif; ?>
        <?php if ($description): ?>
          <div class="description">
            <?php print $description; ?>
          </div>
        <?php endif; ?>
        <input type="button" value="<?php print $entry_text; ?>" class="entry-button button">
      </div>
      <?php if ($sidebar): ?>
        <div class="sidebar">
          <?php print $sidebar; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
