<?php
/**
 *
 */
?>
<div class="page-title">
  <h2>Schedule</h2>
  <div class="shows-filters">
    <div class="item-filter show-filter">
      <div class="filter-label"><?php dpm($filter); print $filter['show_name']['selected']['title']; ?></div>
      <?php if (!empty($filter['show_name']['list'])): ?>
        <ul class="filter-menu">
          <?php foreach ($filter['show_name']['list'] as $node_nid => $node_title): ?>
            <li class="menu-item">
              <a href="<?php print url('node/' . $node_nid); ?>" data-nid="<?php print $node_nid; ?>"><?php print $node_title; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="item-filter show-time-filter">
      <div class="filter-label"><?php print $filter['show_time']['selected']['title']; ?></div>
      <?php if (!empty($filter['show_time']['list'])): ?>
        <ul class="filter-menu">
          <?php foreach ($filter['show_time']['list'] as $key => $value): ?>
            <li class="menu-item">
              <a class="" href="javascript:void(0)" data-key="<?php print $key; ?>"><?php print $value; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
</div>
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
  <div class="time-zone">
    <a><?php print t('Change Time Zone'); ?></a>
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
