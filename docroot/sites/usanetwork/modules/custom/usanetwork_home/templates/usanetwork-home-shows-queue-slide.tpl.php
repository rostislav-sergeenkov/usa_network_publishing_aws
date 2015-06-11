<?php
/**
 *
 */
?>
<div class="node show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>" <?php if (!empty($content_id)): print 'data-mpspath=' . $content_id; endif ?>>
  <a class="close-button" href="javascript:void(0)"></a>
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
    <?php if (!empty($show_image_desktop) || !empty($show_image_retina)): ?>
      <div class="asset-img desktop" data-picture data-alt="" data-class="tile-img">
        <?php if (!empty($show_image_desktop)): ?>
          <div data-src="<?php print $show_image_desktop; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $show_image_desktop; ?>"></div>
          <![endif]-->
        <?php endif; ?>
        <?php if (!empty($show_image_retina)): ?>
          <div data-media="(min-device-pixel-ratio: 2.0)" data-src="<?php print $show_image_retina; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($show_image_desktop)): ?>
          <noscript><img src="<?php print $show_image_desktop; ?>" width="453" height="973" alt="" title="" /></noscript>
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
      <div class="social-icons social-follow">
        <?php if (!empty($social_icons['facebook'])): ?>
          <a class="facebook" data-name="facebook" href="<?php print $social_icons['facebook']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['twitter'])): ?>
          <a class="twitter" data-name="twitter" href="<?php print $social_icons['twitter']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['instagram'])): ?>
          <a class="instagram" data-name="instagram" href="<?php print $social_icons['instagram']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['pinterest'])): ?>
          <a class="pinterest" data-name="pinterest" href="<?php print $social_icons['pinterest']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['youtube'])): ?>
          <a class="youtube" data-name="youtube" href="<?php print $social_icons['youtube']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['googleplus'])): ?>
          <a class="googleplus" data-name="googleplus" href="<?php print $social_icons['googleplus']['url']; ?>"></a>
        <?php endif; ?>
        <?php if (!empty($social_icons['tumblr'])): ?>
          <a class="tumblr" data-name="tumblr" href="<?php print $social_icons['tumblr']['url']; ?>"></a>
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
