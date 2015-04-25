<?php
/**
 *
 */
?>
<div class="schedule-wrapper">
  <?php if (!empty($navigation)): ?>
    <div class="schedule-navigation">
      <ul>
        <?php foreach ($navigation as $navigation_item): ?>
          <li<?php if($navigation_item['active']): print ' class="active"'; endif;?>>
            <a href="<?php print !empty($navigation_item['sdate_value']) ? $navigation_item['sdate_url'] : url('schedule'); ?>">
              <span class="week-day"><?php print $navigation_item['week_day']; ?></span>
              <span class="date"><?php print $navigation_item['date']; ?></span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php if (!empty($schedule_table)): ?>
    <div class="schedule-table">
      <ul>
        <?php foreach ($schedule_table as $schedule_table_item): ?>
          <?php print $schedule_table_item; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>
