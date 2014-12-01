<?php
/*
 *  'spot_class'
 *  'show_code'
 *  'spot_image'
 *  'icon_type'
 *  'title'
 *  'caption'
 *  'type'
 *  'time'
 */
?>

<div class="usa-home-<?php print $spot_class; ?>">
  <div class="node node-usanetwork-promo show-color-border <?php print $show_code; ?>">
    <a href="<?php print $url; ?>">
      <div class="asset-img" data-picture data-alt="" data-class="tile-img">
        <?php if (!empty($spot_image['mobile'])): ?>
          <div data-src="<?php print $spot_image['mobile']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($spot_image['mobile_retina'])): ?>
          <div data-media="(min-device-pixel-ratio: 2.0)" data-src="<?php print $spot_image['mobile_retina']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($spot_image['desktop'])): ?>
          <div data-media="(min-width: 960px)" data-src="<?php print $spot_image['desktop']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($spot_image['desktop_retina'])): ?>
          <div data-media="(min-width: 960px) and (min-device-pixel-ratio: 2.0)" data-src="<?php print $spot_image['desktop_retina']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($spot_image['desktop'])): ?>
          <noscript><img src="<?php print $spot_image['desktop']; ?>" width="833" height="469" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <?php if ($icon_type) : ?>
            <div class="meta-icon <?php print $icon_type; ?>"></div>
          <?php endif; ?>
          <div class="title-overlay meta">
            <div class="caption"><?php print $caption; ?></div>
            <div class="title"><?php print $title; ?></div>
            <div class="additional"><span><?php print $additional; ?></span> <?php print $time; ?></div>
            <div class="interset-indicator">
              <div class="indicator"></div>
              <div class="indicator-text"></div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>


