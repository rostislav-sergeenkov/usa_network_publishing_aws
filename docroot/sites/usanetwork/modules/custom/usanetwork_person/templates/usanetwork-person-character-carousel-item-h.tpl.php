<?php
/**
 *
 */
?>
<li class="slide-item<?php if (!empty($active)): print ' active'; endif; ?>">
  <div class="node node-usanetwork-promo aspot-carousel-promo">
    <?php if (!empty($target_url)): ?>
      <a href="<?php print $target_url; ?>">
        <div class="meta-wrapper">
          <div class="meta-back"></div>
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
        <?php if (!empty($image_url)): ?>
          <div class="asset-img"><img src="<?php print $image_url; ?>" alt="" title="<?php print $title; ?>" /></div>
        <?php endif; ?>
      </a>
    <?php endif; ?>
  </div>
</li>
