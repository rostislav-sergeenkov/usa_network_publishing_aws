<?php
/**
 *
 */
?>
<div class="landing-page-container page-schedule schedule-wrapper">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('Movies Schedule'); ?></span>
  </h2>
  <?php if (!empty($schedule)) : ?>
    <?php print $schedule; ?>
  <?php endif; ?>
</div>