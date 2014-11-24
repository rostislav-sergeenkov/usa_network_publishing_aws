<?php
/*
 *  'show_code'
 *  'image'
 *  'icon_type'
 *  'title'
 *  'caption'
 */
?>
<div class="node node-usanetwork-promo show-color-border <?php print $show_code; ?>">
  <a href="<?php print $url; ?>">
    <div class="meta-wrap">
      <div class="meta-back"></div>
      <div class="meta">
        <div class="meta-icon <?php print $icon_type; ?>"></div>
        <div class="caption"><?php print $caption; ?></div>
        <div class="title"><?php print $title; ?></div>
      </div>
    </div>
    <div class="asset-img">
      <?php print $image; ?>
    </div>
  </a>
  <?php print $more_link; ?>
</div>




