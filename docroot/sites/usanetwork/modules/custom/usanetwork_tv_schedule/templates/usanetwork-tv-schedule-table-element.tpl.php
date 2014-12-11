<?php
/**
 *
 */
?>
<a name="<?php print $link_name; ?>"></a>
<li<?php if (!empty($link_class)): print ' class="' . $link_class . '"'; endif; ?>>
  <div class="schedule-item show-color-border<?php if (!empty($show_class)): print ' '. $show_class; endif; ?>">
    <div class="visible-block">
      <?php if (!empty($time) && !empty($day_part)): ?>
        <div class="time-wrapper">
          <div class="time">
            <span><?php print $time; ?></span>
            <?php print $day_part; ?>
          </div>
        </div>
      <?php endif; ?>
      <?php if (!empty($episode_show) && !empty($episode_title)): ?>
        <div class="episode-info">
          <div class="episode-show"><?php print $episode_show; ?></div>
          <div class="episode-title"><?php print $episode_title; ?></div>
        </div>
      <?php endif; ?>
      <div class="icons-block">
        <?php if (!empty($icon_reminder_url)): ?>
          <div class="icons-schedule">
            <a class="seeit-reminder calendar-reminder icon" href="javascript:void(0)" data-url="<?php print $icon_reminder_url; ?>"></a>
          </div>
        <?php endif; ?>
        <?php if (!empty($rating)): ?>
          <div class="rating"><?php print $rating; ?></div>
        <?php endif; ?>
        <a class="open-description icon" href="javascript:void(0)"></a>
      </div>
    </div>
    <div class="hidden-block">
      <div class="node node-usanetwork-promo">
        <a href="<?php print $episode_url; ?>">
          <?php if (!empty($image_url)): ?>
            <div class="asset-img">
              <img alt="" src="<?php print $image_url; ?>">
            </div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
            <div class="meta">
              <div class="description"><?php print $description; ?></div>
            </div>
          <?php endif; ?>
        </a>
      </div>
    </div>
  </div>
</li>
