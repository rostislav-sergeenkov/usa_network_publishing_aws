<?php
/**
 * $gallery_url - url of media gallery item
 * $image_url - image url
 * $title - gallery title
 * $season - season number
 * $episode - episode number
 */
?>
<div class="node node-usanetwork-promo <?php print (!empty($new_design)) ?  'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
  <a href="<?php print (!empty($gallery_url))? $gallery_url: '#'; ?>">
    <?php if (!empty($image_url)): ?>
      <div class="asset-img"><img src="<?php print $image_url; ?>" alt="" title="<?php print $title; ?>" /></div>
    <?php endif; ?>
    <div class="meta-wrapper">
      <?php if (empty($new_design)): ?>
        <div class="meta-back"></div>
      <?php endif; ?>
      <div class="meta-wrapper-inner">
        <?php if (empty($new_design)): ?>
          <div class="meta-icon gallery-icon"></div>
        <?php endif; ?>
        <div class="meta">
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
            <div class="additional"><?php print $description; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </a>
</div>
