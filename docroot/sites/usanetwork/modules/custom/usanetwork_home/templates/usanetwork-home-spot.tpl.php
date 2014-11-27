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
      <div class="asset-img"><?php print $spot_image; ?></div>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <?php if ($icon_type) : ?>
          <div class="meta-icon <?php print $icon_type; ?>"></div>
        <?php endif;?>
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
    </a>
  </div>
</div>


