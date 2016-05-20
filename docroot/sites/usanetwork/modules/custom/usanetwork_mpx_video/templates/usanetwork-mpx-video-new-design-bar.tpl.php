<?php
/**
 * Template for Video New Design Bar.
 */
?>
<div class="usa-helper-top">
  <div class="usa-episode-info">
    <span class="season-number">
      <?php if (!empty($season_number)) : ?><?php print $season_number; ?><?php endif; ?>
    </span>
    <span class="episode-number">
      <?php if (!empty($episode_number)) : ?><?php print $episode_number; ?><?php endif; ?>
    </span>
    <span class="delimiter"><i class="show-color"></i></span>
    <span class="running-time">
      <?php if (!empty($running_time)) : ?><?php print $running_time; ?><?php endif; ?>
    </span>
  </div>
  <div class="usa-episode-share">
    <?php if (!empty($sharebar)) : ?><?php print $sharebar; ?><?php endif; ?>
  </div>
  <div class="usa-tve-login">
    <?php if (!empty($tve_login)) : ?><?php print $tve_login; ?><?php endif; ?>
  </div>
  <div class="usa-episode-title">
    <?php if (!empty($title)) : ?><?php print $title; ?><?php endif; ?>
  </div>
</div>
<div class="usa-helper-bottom">
  <div class="usa-episode-description">
    <?php if (!empty($description)) : ?><?php print $description; ?><?php endif; ?>
  </div>
</div>
