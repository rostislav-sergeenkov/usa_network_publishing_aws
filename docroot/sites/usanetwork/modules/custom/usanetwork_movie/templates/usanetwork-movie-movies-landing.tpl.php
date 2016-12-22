<?php
/**
 *
 */
?>
<div class="landing-page-container all-movies-landing-page-container">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All Movies'); ?></span>
  </h2>
  <div class="landing-items-blocks all-movies-items-blocks show-border ajax-load-block">
    <?php if (!empty($movies_block)): ?>
      <?php print $movies_block; ?>
    <?php endif; ?>
  </div>
</div>
