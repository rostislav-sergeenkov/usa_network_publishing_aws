<?php
?>
<li class="slide-item">
  <div class="node node-usanetwork-promo small aspot-carousel-promo">
    <?php if (!empty($url)): ?>
      <a href="<?php print $url; ?>">
        <?php if (!empty($image)): ?>
          <div class="asset-img <?php if (!empty($active)): print ' active show-border'; endif; ?>"><img src="<?php print $image;?>" alt="" title="<?php print $title; ?>"></div>
        <?php endif; ?>
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
      </a>
    <?php endif; ?>
  </div>
</li>
