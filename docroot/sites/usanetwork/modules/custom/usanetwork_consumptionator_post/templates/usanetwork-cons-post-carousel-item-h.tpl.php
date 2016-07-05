<?php
?>
<li class="slide-item">
  <div class="node node-usanetwork-promo <?php print (!empty($new_design)) ?  'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($url)): ?>
      <a href="<?php print $url; ?>">
        <?php if (!empty($image)): ?>
          <?php if (!$new_design): ?>
            <div class="asset-img" data-picture data-alt="" data-class="tile-img">
              <?php if (!empty($image_mobile)): ?>
                <div data-src="<?php print $image_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image)): ?>
                <div data-media="(min-width: 641px)" data-src="<?php print $image; ?>"></div>
                <!--[if (IE 8) & (!IEMobile)]>
                <div data-src="<?php print $image; ?>"></div>
                <![endif]-->
                <noscript><img src="<?php print $image; ?>" width="633" height="356" alt="" title="" /></noscript>
              <?php endif; ?>
            </div>
          <?php else: ?>
            <div class="asset-img">
              <img src="<?php print $image; ?>" alt="" title="" />
            </div>
          <?php endif; ?>
        <?php endif; ?>
        <div class="meta-wrapper">
          <?php if (empty($new_design)) : ?>
            <div class="meta-back"></div>
          <?php endif; ?>
          <div class="meta-wrapper-inner">
            <?php if (empty($new_design)) : ?>
              <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
            <?php endif; ?>
            <div class="meta">
              <?php if (!empty($title)): ?>
                <div class="title"><?php print $title; ?></div>
              <?php endif; ?>
              <?php if (empty($new_design)) : ?>
                <?php if (!empty($additional)): ?>
                  <div class="additional"><?php print $additional; ?></div>
                <?php endif; ?>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </a>
    <?php endif; ?>
  </div>
</li>
