<?php
/**
 *
 */
?>
<li<?php if (!empty($link_class)): print ' class="' . $link_class . '"'; endif; ?>>
  <div class="schedule-item show-color-border<?php if (!empty($show_class)): print ' '. $show_class; endif; ?>">
    <div class="visible-block">
      <?php if (!empty($time)): ?>
        <div class="time-wrapper">
          <div class="time">
            <?php print $time; ?>
          </div>
        </div>
      <?php endif; ?>
      <?php if (!empty($episode_show)): ?>
        <div class="episode-info">
          <div class="episode-show"><?php print $episode_show; ?></div>
          <div class="episode-title"><?php if(!empty($episode_title)): print $episode_title; endif;?></div>
        </div>
      <?php endif; ?>
        <div class="icons-block rating-wrapper">
          <?php if (!empty($rating)): ?>
            <div class="rating"><?php print $rating; ?></div>
          <?php endif; ?>
        </div>
    </div>
  </div>
</li>
