<?php
/**
 * Videos page template
 *
 * Variables:
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
<?php endif; ?>
  <div class="left-pane">
    LEFT PANE CONTENT GOES HERE
  </div>
  <div class="right-pane">
    RIGHT PANE CONTENT GOES HERE
    <div class="ad300x250"><?php print render($ad300x250); ?></div>
  </div>
<?php if (!empty($background_url)): ?>
</div>
<?php endif; ?>
