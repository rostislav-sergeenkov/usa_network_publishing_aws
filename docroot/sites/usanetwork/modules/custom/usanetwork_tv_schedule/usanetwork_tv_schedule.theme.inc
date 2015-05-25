<?php

/**
 * Theme function for a today's schedule block.
 */
function theme_usanetwork_tv_schedule_day_small($variables) {
  $items = $variables['items'];
  $timezone = $variables['timezone'];
  $link = $variables['link'];
  $output = '';

  if (!empty($items)) {
    $output .= '<div class="schedule-day-small">';
    $output .= '<div class="schedule-navigation"><a class="schedule-navigation-prev" href="#">&lt;</a><a class="schedule-navigation-next" href="#">&gt;</a></div>';
    $output .= '<div class="schedule-viewport"><div class="schedule-items">';
    foreach ($items as $item) {
      $classes = array('schedule-item');
      if (isset($item->on_now) && $item->on_now) {
        $classes[] = 'schedule-item-on-now';
      }
      $output .= '<div class="' . implode(' ', $classes) . '"><div class="schedule-item-content">';
//      $output .= '<div class="time">' . format_date($item->start_time, 'custom', 'h:i A', $timezone) . '</div>';
      $output .= '<div class="time">' . format_date($item->start_time, 'custom', 'h:i A') . '</div>';
      if ($link && $item->tv_show) {
        $program = l($item->program, 'node/' . $item->tv_show->nid);
      }
      else {
        $program = $item->program;
      }
      $output .= '<div class="program">' . $program . '</div>';
      $output .= '<div class="title">' . $item->title . '</div>';
      $output .= '</div></div>';
    }
    $output .= '</div></div>';
    $output .= '</div>';
  }

  return $output;
}
