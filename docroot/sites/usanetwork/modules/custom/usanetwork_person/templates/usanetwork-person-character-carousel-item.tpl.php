<?php
/**
 *
 */
?>
<li class="usa-carousel-item swiper-slide">
  <div class="node node-usanetwork-promo <?php print ($new_design)? 'usa-carousel-horizontal-promo': 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($target_url)): ?>
      <a href="<?php print $target_url; ?>">
        <?php if (!empty($image_url)): ?>
          <div class="asset-img <?php if (!empty($active)): print ' active show-border'; endif; ?>"
               data-picture data-alt="" data-class="tile-img">
            <?php if (!$new_design): ?>
              <?php if (!empty($image_url_mobile)): ?>
                <div data-src="<?php print $image_url_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image_url)): ?>
                <div data-media="(min-width: 641px)" data-src="<?php print $image_url; ?>"></div>
              <?php endif; ?>
            <?php elseif ($new_design): ?>
              <?php if (!empty($image_url)): ?>
                <div data-src="<?php print $image_url; ?>"></div>
              <?php endif; ?>
            <?php endif; ?>
            <?php if (!empty($image_url_mobile)): ?>
              <div data-media="(min-width: 1025px)" data-src="<?php print $image_url_mobile; ?>"></div>
            <?php endif; ?>

            <?php if (!empty($image_url)): ?>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $image_url; ?>"></div>
              <![endif]-->
              <noscript><img src="<?php print $image_url; ?>" width="633" height="356" alt="" title=""/></noscript>
            <?php endif; ?>
          </div>
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
