<?php
?>
<li class="slide-item">
  <div class="node node-usanetwork-promo aspot-carousel-promo <?php if (!empty($active)): print ' active show-border'; endif; ?>">
    <?php if (!empty($url)): ?>
      <a href="<?php print $url; ?>">
        <?php if (!empty($image)): ?>
          <div class="asset-img"><img src="<?php print $image; ?>" alt="" title="<?php print $title; ?>" /></div>
        <?php endif; ?>
        <div class="meta-wrapper">
          <div class="meta-back"></div>
          <div class="meta-wrapper-inner">
            <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
            <div class="meta">
              <?php if (!empty($title)): ?>
                <div class="title"><?php print $title; ?></div>
              <?php endif; ?>
              <?php if (!empty($season_number) && !empty($episode_number)): ?>
                <div class="additional"><?php print t('S').$season_number.t(' episode ').$episode_number; ?></div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </a>
    <?php endif; ?>
  </div>
</li>
