<?php if ((!empty($splash_image) && $splash_image) || (!empty($description) && $description)): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?><?php print !$visible ? ' style="display: none;"' : ''; ?>>
    <?php if (!empty($splash_image)): ?>
      <div class="image">
        <?php print $splash_image; ?>
      </div>
    <?php endif; ?>
    <div class="content-wrap">
      <div class="center">
        <?php if (!empty($description)): ?>
          <div class="description">
            <?php print $description; ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($entry_text)): ?>
          <input type="button" value="<?php print $entry_text; ?>" class="entry-button button">
        <?php endif; ?>
      </div>
      <?php if (!empty($sidebar)): ?>
        <div class="sidebar">
          <?php print $sidebar; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
