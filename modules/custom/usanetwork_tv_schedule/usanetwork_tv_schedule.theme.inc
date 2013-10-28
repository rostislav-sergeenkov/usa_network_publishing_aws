<?php

/**
 * Theme function for schedule header
 */
function theme_usanetwork_tv_schedule_navigation($variables) {
  $timestamp = $variables['timestamp'];
  $first_day = $variables['first_day'];
  if (!isset($timestamp)) {
    return '';
  }

  drupal_add_js('https://raw.github.com/lusever/TouchSlider/master/jquery.touchslider.js');
  drupal_add_js(drupal_get_path('module', 'usanetwork_tv_schedule') . '/js/usanetwork_tv_schedule.navigation.js');

  $past_weeks = variable_get('usanetwork_tv_schedule_past_weeks', 1);
  $future_weeks = variable_get('usanetwork_tv_schedule_future_weeks', 1);
  $current_time = REQUEST_TIME;

  $output = '';
  $output .= '<div class="schedule-header clearfix">';
  $output .= '<div class="schedule-header-navigation">';
  $output .= '<div class="schedule-header-navigation-weeks touchslider-viewport">';

  for($offset = -($past_weeks); $offset <= $future_weeks; $offset++) {
    $classes = 'touchslider-item';
    // check if it is selected week
    $selected_week = date('W', $timestamp);
    $printed_week = date('W', $current_time) + $offset;
    if ($first_day == 'sun') {
      if (date('w', $timestamp) == 0) {
        $selected_week++;
      }
      if (date('w', $current_time) == 0) {
        $printed_week++;
      }
    }
    if ($selected_week == $printed_week) {
      $classes .= ' current-week';
    }
    $classes = trim($classes);
    $output .= '<div' . (!empty($classes) ? ' class="' . $classes . '"' : '') . '>' . theme('usanetwork_tv_schedule_navigation_week', array('timestamp' => $current_time, 'first_day' => $first_day, 'offset' => $offset)) . '</div>';
  }
  $output .= '</div>';
  $output .= '<div><a class="touchslider-prev previous-week" href="#">&lt;</a><a class="touchslider-next next-week" href="#">&gt;</a></div>';
  $output .= '</div>';

  $output .= '</div>';

  return $output;
}

/**
 * Theme function for a week in schedule navigation
 */
function theme_usanetwork_tv_schedule_navigation_week($variables) {
  $timestamp = $variables['timestamp'];
  $offset = $variables['offset'];
  $first_day = strtolower($variables['first_day']);
  if (!isset($timestamp)) {
    return '';
  }
  $cpath = current_path();
  $sdate = (isset($_GET['sdate']) && !empty($_GET['sdate'])) ? check_plain($_GET['sdate']) : date('Y_m_d');
  $timestamp += $offset * 604800; // 604800 - seconds in a week
  if ($first_day == 'sun') {
    $first_day_timestamp = $timestamp - date('w', $timestamp) * 86400; // 86400 - seconds in a day
  }
  else {
    $first_day_timestamp = $timestamp - date('N', $timestamp) * 86400; // 86400 - seconds in a day
  }

  $output = '';
  $output .= '<ul class="schedule-header-navigation-week">';
  $day = $first_day_timestamp;
  for ($i = 0; $i < 7; $i++) {
    $date = date('Y_m_d', $day);
    $classes = '';
    if ($sdate == $date) {
      $classes .= ' active';
    }
    $classes = trim($classes);
    $link = l(theme('usanetwork_tv_schedule_navigation_weekday', array('timestamp' => $day)), $cpath, array('html' => true, 'query' => array('sdate' => $date)));
    $output .= '<li' . (!empty($classes) ? ' class="' . $classes . '"' : '') . '>' . $link . '</li>';
    $day += 86400; // 86400 - seconds in a day
  }
  $output .= '</ul>';

  return $output;
}

/**
 * Theme function for a day in schedule navigation
 */
function theme_usanetwork_tv_schedule_navigation_weekday($variables) {
  $timestamp = $variables['timestamp'];
  if (!isset($timestamp)) {
    return '';
  }
  $output = '';
  $output .= '<span class="week-day">' . date('D', $timestamp) . '</span>';
  $output .= '<span class="date">' . date('m/d', $timestamp) . '</span>';
  return $output;
}