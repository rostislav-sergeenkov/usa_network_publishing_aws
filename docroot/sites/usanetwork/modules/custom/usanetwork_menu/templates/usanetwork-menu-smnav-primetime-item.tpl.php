<?php
/**
 * 'time' => NULL,
'show_title' => NULL,
'show_episode' => NULL,
'data' => NULL,
 *
 * $time - array of time data:
 * $time['value'] - clocks and minutes like '8:00',
 * $time['interval'] - day interval like 'AM' or 'PM'
 * $show_title - the title name
 * $show_episode - the episode name
 * $data - array of custom data
 */
?>

<div class="schedule-item show-color-border <?php print !empty($show_title) ? (' show-' . strtolower($show_title)) : ''; ?>">
  <?php if (!empty($time)): ?>
    <div class="time">
      <span><?php print $time['value']; ?></span>
      <?php print $time['interval']; ?>
    </div>
  <?php endif; ?>
  <div class="episode-info">
    <?php if (!empty($show_title)): ?>
      <div class="episode-show"><?php print $show_title; ?></div>
    <?php endif; ?>
    <?php if (!empty($show_episode)): ?>
      <div class="episode-title"><?php print $show_episode; ?></div>
    <?php endif; ?>
  </div>
  <div class="icons-block">
    <a class="live icon" href="#"></a>
    <?php if (!empty($syndicated_url)): ?>
      <a class="episode-description icon" href="<?php print $syndicated_url; ?>" target="_blank"></a>
    <?php endif; ?>
    <a class="calendar-reminder icon" href="#"></a>
  </div>
</div>
