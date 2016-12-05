<?php
?>
<li class="usa-carousel-item swiper-slide">
  <div class="node node-usanetwork-promo <?php print ($new_design) ? 'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($url)): ?>
      <a href="<?php print $url; ?>">
        <?php if (!empty($image)): ?>
          <div class="asset-img<?php if (!empty($active)): print ' active show-border'; endif; ?>"
            data-picture data-alt="" data-class="tile-img">
            <?php if (!$new_design): ?>
              <?php if (!empty($image_mobile)): ?>
                <div data-src="<?php print $image_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image)): ?>
                <div data-media="(min-width: 641px)"
                     data-src="<?php print $image; ?>"></div>
              <?php endif; ?>
            <?php elseif ($new_design): ?>
              <?php if (!empty($image)): ?>
                <div data-src="<?php print $image; ?>"></div>
              <?php endif; ?>
            <?php endif; ?>
            <?php if (!empty($image_mobile)): ?>
              <div data-media="(min-width: 1025px)"
                   data-src="<?php print $image_mobile; ?>"></div>
            <?php endif; ?>

            <?php if (!empty($image)): ?>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $image; ?>"></div>
              <![endif]-->
              <noscript><img src="<?php print $image; ?>" width="633" height="356" alt="" title=""/></noscript>
            <?php endif; ?>
          </div>
        <?php endif; ?>
        <div class="meta-wrapper">
          <?php if (!$new_design): ?>
            <div class="meta-back"></div>
          <?php endif; ?>
          <div class="meta-wrapper-inner<?php print (!$new_design)? ' multiline-ellipsis-meta-wrapper': ''; ?>">
            <?php if (!$new_design): ?>
              <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
            <?php endif; ?>
            <div class="meta<?php print (!$new_design)? ' multiline-ellipsis-meta': ''; ?>">
              <?php if (!empty($title)): ?>
                <div class="title"<?php print (!$new_design)? ' data-text="'.$title.'"': ''; ?>><?php print $title; ?></div>
              <?php endif; ?>
              <?php if (!empty($season_number) && !empty($episode_number)): ?>
                <div
                  class="additional"<?php print (!$new_design)? ' data-text="'.t('S') . $season_number . t(' episode ') . $episode_number.'"': ''; ?>><?php print t('S') . $season_number . t(' episode ') . $episode_number; ?></div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </a>
    <?php endif; ?>
  </div>
</li>
