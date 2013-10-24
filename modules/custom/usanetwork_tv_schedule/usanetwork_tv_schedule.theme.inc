<?php

/**
 * Theme function for schedule header
 */
function theme_usanetwork_tv_schedule_navigation($variables) {
  $cpath = current_path();
  $timestamp = $variables['timestamp'];
  $first_day = $variables['first_day'];
  if (!isset($timestamp)) {
    return '';
  }

  $output = '';
  $output .= '<div class="schedule-header">';
  $output .= '<div class="schedule-header-navigation">';
  $output .= '<a class="previous-week" href="#">&lt;</a>';
  $output .= '<div class="schedule-header-navigation-wrapper">';
  $output .= '<ul class="schedule-header-navigation-weeks">';
  $output .= '<li class="previous-week">' . theme('usanetwork_tv_schedule_navigation_week', array('timestamp' => $timestamp, 'first_day' => $first_day, 'offset' => -1)) . '</li>';
  $output .= '<li class="current-week">' . theme('usanetwork_tv_schedule_navigation_week', array('timestamp' => $timestamp, 'first_day' => $first_day)) . '</li>';
  $output .= '<li class="next-week">' . theme('usanetwork_tv_schedule_navigation_week', array('timestamp' => $timestamp, 'first_day' => $first_day, 'offset' => 1)) . '</li>';
  $output .= '</ul><div class="clearfix"></div>';
  $output .= '</div>';
  $output .= '<a class="next-week" href="#">&gt;</a>';
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