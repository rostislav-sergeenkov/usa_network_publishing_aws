<div class="node node-usanetwork-promo show-color-border video-promo <?php print $show_class; ?>">
  <a href="<?php print $url; ?>">
    <div class="meta-wrapper">
      <div class="meta-back"></div>
      <div class="meta-wrapper-inner">
        <div class="meta-icon <?php (!empty($icon)) ? print $icon : 'video-icon'; ?>"></div>
        <div class="meta">
          <?php if (!empty($caption)): ?>
            <?php if (!empty($new_design)) :?>
              <div class="caption"><span class="show-color"><?php print $caption; ?></span></div>
            <?php else : ?>
              <div class="caption"><?php print $caption; ?></div>
            <?php endif; ?>
          <?php endif; ?>
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <?php if (!empty($additional)): ?>
            <div class="additional"><?php print $additional; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
    <div class="asset-img">
      <?php print $image; ?>
    </div>
  </a>
</div>

