<?php
/*
 *  'show_code'
 *  'image'
 *  'icon_type'
 *  'title'
 *  'caption'
 */
?>
<div class="node node-usanetwork-promo show-color-border <?php print $show_code; ?><?php print !empty($class) ? (' '.$class) : ''; ?>">
  <a href="<?php print $url; ?>">
    <?php if (!empty($sponsored)) : ?>
      <div class="sponsored" data-mpspath="<?php print $content_id; ?>" data-scalemps="1"></div>
    <?php endif; ?>
    <div class="meta-wrapper">
      <div class="meta-back"></div>
      <div class="meta-wrapper-inner">
        <?php if ($icon_type && !$is_first): ?>
          <div class="meta-icon <?php print $icon_type; ?>"></div>
        <?php endif; ?>
        <div class="meta">
          <?php if ($icon_type && $is_first): ?>
            <div class="meta-icon <?php print $icon_type; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($caption)): ?>
            <div class="caption"><?php print $caption; ?></div>
          <?php endif; ?>
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
            <div class="additional"><?php print $description; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
    <div class="asset-img">
      <?php print $image; ?>
    </div>
  </a>
</div>
