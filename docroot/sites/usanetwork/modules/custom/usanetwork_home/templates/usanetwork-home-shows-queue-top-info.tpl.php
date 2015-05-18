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
    <?php if (!empty($time)): ?>
      <div class="time">
        <?php if (!empty($weekday)): ?>
          <span><?php print $weekday; ?></span>
        <?php endif; ?>
        <?php print $time; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
