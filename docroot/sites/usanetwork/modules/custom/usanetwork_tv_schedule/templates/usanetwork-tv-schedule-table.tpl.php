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
      <?php if (!empty($filter['show_name']['list'])): ?>
        <ul class="filter-menu mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar">
          <div id="mCSB_1" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside">
            <div id="mCSB_1_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" dir="ltr">
              <?php foreach ($filter['show_name']['list'] as $node_nid => $node_title): ?>
                <li class="menu-item">
                  <a class="active" href="<?php print url('node/' . $node_nid); ?>" data-nid="<?php print $node_nid; ?>"><?php print $node_title; ?></a>
                </li>
              <?php endforeach; ?>
            </div>
          </div>
          <div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical">
            <div class="mCSB_draggerContainer">
              <div id="mCSB_1_dragger_vertical" class="mCSB_dragger" oncontextmenu="return false;">
                <div class="mCSB_dragger_bar"></div>
              </div>
              <div class="mCSB_draggerRail"></div>
            </div>
          </div>
        </ul>
      <?php endif; ?>
    </div>
    <div class="item-filter show-time-filter">
      <div class="filter-label"><?php print $filter['show_time']['selected']['title']; ?></div>
      <?php if (!empty($filter['show_time']['list'])): ?>
        <ul class="filter-menu mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar">
          <div id="mCSB_2" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside">
            <div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" dir="ltr">
              <?php foreach ($filter['show_time']['list'] as $key => $value): ?>
                <li class="menu-item">
                  <a class="" href="javascript:void(0)" data-key="<?php print $key; ?>"><?php print $value; ?></a>
                </li>
              <?php endforeach; ?>
            </div>
          </div>
          <div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical">
            <div class="mCSB_draggerContainer">
              <div id="mCSB_2_dragger_vertical" class="mCSB_dragger" oncontextmenu="return false;">
                <div class="mCSB_dragger_bar"></div>
              </div>
              <div class="mCSB_draggerRail"></div>
            </div>
          </div>
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
