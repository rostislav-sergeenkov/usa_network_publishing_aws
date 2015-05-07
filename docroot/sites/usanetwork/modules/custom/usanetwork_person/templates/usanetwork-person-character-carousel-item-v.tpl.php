<?php
/**
 *
 */
?>
<li class="carousel-item<?php if (!empty($active)): print ' active'; endif; ?>">
  <div class="node node-usanetwork-promo small show-latest-promo">
    <?php if (!empty($target_url)): ?>
      <a href="<?php print $target_url; ?>">
        <div class="meta-wrapper">
          <div class="meta-wrapper-inner">
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
        <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
          <?php if (!empty($image_mobile)): ?>
            <div data-src="<?php print $image_mobile; ?>"></div>
          <?php endif; ?>
          <?php if (!empty($image_desktop)): ?>
            <div data-media="(min-width: 641px)" data-src="<?php print $image_desktop; ?>"></div>
            <!--[if (IE 8) & (!IEMobile)]>
            <div data-src="<?php print $image_desktop; ?>"></div>
            <![endif]-->
            <noscript><img src="<?php print $image_desktop; ?>" alt="" title="" /></noscript>
          <?php endif; ?>
        </div>
      </a>
    <?php endif; ?>
  </div>
</li>
