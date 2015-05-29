<?php
/**
 *
 */
?>
<li class="slide-item">
  <div class="node node-usanetwork-promo aspot-carousel-promo <?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($target_url)): ?>
      <a href="<?php print $target_url; ?>">
        <?php if (!empty($image_url)): ?>
          <div class="asset-img"><img src="<?php print $image_url; ?>" alt="" title="<?php print $title; ?>" /></div>
        <?php endif; ?>
        <div class="meta-wrapper">
          <div class="meta-back"></div>
          <div class="meta-wrapper-inner">
            <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
            <div class="meta">
              <?php if (!empty($title)): ?>
                <div class="title"><?php print $title; ?></div>
              <?php endif; ?>
              <?php if (!empty($additional)): ?>
                <div class="additional"><?php print $additional; ?></div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </a>
    <?php endif; ?>
  </div>
</li>
