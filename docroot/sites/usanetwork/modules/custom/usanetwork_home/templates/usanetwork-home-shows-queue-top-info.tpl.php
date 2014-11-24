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
    <?php if (!empty($schedule_day) && !empty($schedule_time)): ?>
      <div class="time">
        <span><?php print $schedule_day; ?></span><?php print $schedule_time; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
