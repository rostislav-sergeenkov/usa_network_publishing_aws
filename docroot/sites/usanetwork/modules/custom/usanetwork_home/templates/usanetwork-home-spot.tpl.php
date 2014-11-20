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
  <div class="node node-usanetwork-promo show-color-border show-<?php print $show_code; ?>">
    <a href="<?php print $url; ?>">
      <div class="asset-img"><?php print $spot_image; ?></div>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <div class="meta-icon <?php print $icon_type; ?>-icon"></div>
        <div class="title-overlay meta">
          <div class="title"><?php print $title; ?></div>
          <div class="caption"><?php print $caption; ?></div>
          <div class="type-and-time"><span><?php print $type; ?></span> <?php print $time; ?></div>
          <div class="interset-indicator">
            <div class="indicator"></div>
            <div class="indicator-text"></div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>


