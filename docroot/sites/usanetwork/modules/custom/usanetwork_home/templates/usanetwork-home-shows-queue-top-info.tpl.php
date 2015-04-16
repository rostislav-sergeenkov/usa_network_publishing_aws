<?php
/**
 *
 */
?>
<div class="show-top-info">
  <div class="schedule">
    <?php if (!empty($show_title)): ?>
      <div class="title"><?php print $show_title; ?></div>
    <?php endif; ?>
    <?php if (!empty($tune_in_date)): ?>
      <div class="time">
        <span><?php print $tune_in_date; ?></span>
      </div>
    <?php endif; ?>
  </div>
</div>
