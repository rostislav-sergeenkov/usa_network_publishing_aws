<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
  <a class="show-open" href="#">
    <div class="meta-wrap">
      <div class="meta">
        <?php if (!empty($show_title)): ?>
          <div class="meta-show"><?php print $how_title; ?></div>
        <?php endif; ?>
        <?php if (!empty($show_schedule_day) && !empty($show_schedule_time)): ?>
          <div class="meta-show-schedule">
            <span><?php print $show_schedule_day; ?></span><?php print $schedule_time; ?>
          </div>
        <?php endif ;?>
      </div>
    </div>
    <?php if (!empty($desktop_image_url) || !empty($mobile_image_url)): ?>
      <div class="asset-img">
        <?php if (!empty($desktop_image_url)): ?>
          <img class="desktop" alt="" src="<?php print $desktop_image_url; ?>">
        <?php endif; ?>
        <?php if (!empty($mobile_image_url)): ?>
          <img class="mobile" alt="" src="<?php print $mobile_image_url; ?>">
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </a>
  <div class="show-info-block">
    <a class="close-button" href="#"></a>
    <div class="show-link">
      <?php if (!empty($show_url)): ?>
        <a class="show-color<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?> hover-avail" href="<?php print $show_url; ?>"><?php print t('Show Page'); ?></a>
      <?php endif; ?>
      <div class="social-icons">
        <a class="facebook" href="#"></a>
        <a class="twitter" href="#"></a>
        <a class="instagram" href="#"></a>
        <a class="pinterest" href="#"></a>
        <a class="youtube" href="#"></a>
        <a class="googleplus" href="#"></a>
      </div>
      <div class="show-info-block-wrapper">
        <?php if (!empty($top_info)): ?>
          <?php print $top_info; ?>
        <?php endif; ?>
        <?php if (!empty($central_info)): ?>
          <?php print $central_info; ?>
        <?php endif; ?>
        <?php if (!empty($bottom_info)): ?>
          <?php print $bottom_info; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
