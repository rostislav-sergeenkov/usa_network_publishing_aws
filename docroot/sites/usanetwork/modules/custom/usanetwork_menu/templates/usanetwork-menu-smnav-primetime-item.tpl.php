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

<div class="schedule-item show-color-border <?php print $show_class; ?>">
  <?php if (!empty($time)): ?>
    <div class="time">
      <span><?php print $time['value']; ?></span>
      <?php print $time['interval']; ?> <?php print t('ET'); ?>
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
    <?php if (!empty($syndicated_url)): ?>
      <a class="calendar-reminder icon" href="<?php print $syndicated_url; ?>" target="_blank"></a>
    <?php endif; ?>
    <?php if (!empty($episode_full_url)): ?>
      <a class="episode-description icon" href="<?php print $episode_full_url; ?>"></a>
    <?php endif; ?>
  </div>
</div>
