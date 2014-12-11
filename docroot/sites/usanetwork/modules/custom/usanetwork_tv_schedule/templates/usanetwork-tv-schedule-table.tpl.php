<?php
/**
 *
 */
?>
<div class="page-title">
  <h2>Schedule</h2>
  <div class="shows-filters">
    <div class="item-filter show-filter">
      <div class="filter-label"><?php print $filter['show_name']['selected']['title']; ?></div>
    </div>
    <div class="item-filter show-time-filter">
      <div class="filter-label"><?php print $filter['show_time']['selected']['title']; ?></div>
    </div>
  </div>
</div>
<div class="schedule-wrapper">
  <?php if (!empty($navigation)): ?>
    <div class="schedule-navigation">
      <ul>
        <?php foreach ($navigation as $navigation_item): ?>
          <li<?php if($navigation_item['active']): print ' class="active"'; endif;?>>
            <a href="javascript:void(0)">
              <span class="week-day"><?php print $navigation_item['week_day']; ?></span>
              <span class="date"><?php print $navigation_item['date']; ?></span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
  <div class="time-zone">
    <a href=""><?php print t('Change Time Zone'); ?></a>
  </div>
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
