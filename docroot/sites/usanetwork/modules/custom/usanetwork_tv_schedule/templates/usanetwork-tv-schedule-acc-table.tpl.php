<?php
/**
 *
 */
?>
<div class="page-title">
  <?php if (!empty($accessibility_text)): ?>
    <div class="accesibility-header"><?php print $accessibility_text; ?></div>
  <?php endif; ?>
</div>
<div class="schedule-wrapper">
  <?php if (!empty($navigation)): ?>
    <div class="schedule-navigation">
      <ul class="slider">
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
    <div class="slide-next slide-control schedule-navigation-controls" style="display: block;"></div>
    <div class="slide-prev slide-control schedule-navigation-controls" style="display: block;"></div>
  <?php endif; ?>
  <?php if (!empty($schedule_rows)): ?>
    <div class="schedule-table">
      <ul>
        <?php foreach ($schedule_rows as $schedule_row): ?>
          <?php print $schedule_row; ?>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>
