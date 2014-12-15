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
    <div class="meta-wrapper">
      <div class="meta-back"></div>
      <div class="meta-wrapper-inner">
        <?php if ($icon_type): ?>
          <div class="meta-icon <?php print $icon_type; ?>"></div>
        <?php endif; ?>
        <div class="meta">
          <div class="caption"><?php print $caption; ?></div>
          <div class="title"><?php print $title; ?></div>
        </div>
      </div>
    </div>
    <div class="asset-img">
      <?php print $image; ?>
    </div>
  </a>
  <?php if ($more_link): ?>
    <?php print $more_link; ?>
  <?php endif; ?>
</div>



