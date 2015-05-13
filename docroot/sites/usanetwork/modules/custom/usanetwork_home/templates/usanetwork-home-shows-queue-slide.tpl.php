<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>" <?php if (!empty($content_id)): print 'data-mpspath=' . $content_id; endif ?>>
  <a class="close-button" href="#"></a>
  <a class="show-open" href="javascript:void(0)">
    <div class="meta-wrapper">
      <div class="meta-back"></div>
      <div class="meta-wrapper-inner">
        <div class="meta">
          <?php if (!empty($show_title)): ?>
            <div class="title"><?php print $show_title; ?></div>
          <?php endif; ?>
          <?php if (!empty($show_schedule_date) && !empty($show_schedule_date)): ?>
            <div class="additional">
              <span><?php print $show_schedule_date; ?></span>
            </div>
          <?php endif ;?>
        </div>
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
    <div class="show-link">
      <?php if (!empty($show_url)): ?>
        <a class="show-color<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?> hover-avail" href="<?php print $show_url; ?>"><?php print t('Show Site'); ?></a>
      <?php endif; ?>
    </div>
    <?php if (!empty($social_icons_data)): ?>
      <div class="social-icons">
        <?php if (!empty($social_icons['facebook'])): ?>
          <a class="facebook" href="<?php print $social_icons['facebook']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['twitter'])): ?>
          <a class="twitter" href="<?php print $social_icons['twitter']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['instagram'])): ?>
          <a class="instagram" href="<?php print $social_icons['instagram']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['pinterest'])): ?>
          <a class="pinterest" href="<?php print $social_icons['pinterest']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['youtube'])): ?>
          <a class="youtube" href="<?php print $social_icons['youtube']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['googleplus'])): ?>
          <a class="googleplus" href="<?php print $social_icons['googleplus']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['tumblr'])): ?>
          <a class="tumblr" href="<?php print $social_icons['tumblr']['url']; ?>"></a>
        <?php endif; ?>
      </div>
    <?php endif; ?>
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
