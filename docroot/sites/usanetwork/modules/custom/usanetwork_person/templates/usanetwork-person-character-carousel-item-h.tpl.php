<?php
/**
 *
 */
?>
<li class="slide-item">
  <div class="node node-usanetwork-promo <?php print ($new_design)? 'usa-carousel-horizontal-promo': 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($target_url)): ?>
      <a href="<?php print $target_url; ?>">
        <?php if (!empty($image_url)): ?>
          <?php if (!$new_design): ?>
            <div class="asset-img" data-picture data-alt="" data-class="tile-img">
              <?php if (!empty($image_url_mobile)): ?>
                <div data-src="<?php print $image_url_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image_url)): ?>
                <div data-media="(min-width: 641px)" data-src="<?php print $image_url; ?>"></div>
                <!--[if (IE 8) & (!IEMobile)]>
                <div data-src="<?php print $image_url; ?>"></div>
                <![endif]-->
                <noscript><img src="<?php print $image_url; ?>" width="633" height="356" alt="" title="" /></noscript>
              <?php endif; ?>
            </div>
          <?php else: ?>
            <div class="asset-img">
              <img src="<?php print $image_url; ?>" alt="" title="" />
            </div>
          <?php endif; ?>
        <?php endif; ?>
        <div class="meta-wrapper">
          <?php if (!$new_design): ?>
            <div class="meta-back"></div>
          <?php endif; ?>
          <div class="meta-wrapper-inner">
            <?php if (!$new_design): ?>
              <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
            <?php endif; ?>
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
