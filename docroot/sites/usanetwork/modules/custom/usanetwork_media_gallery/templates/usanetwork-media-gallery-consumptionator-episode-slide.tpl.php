<?php
/**
 * $gallery_url - url of media gallery item
 * $image_mobile_url - image url
 * $image_url - image url
 * $title - gallery title
 * $season - season number
 * $episode - episode number
 */
?>
<div
  class="node node-usanetwork-promo <?php print (!empty($new_design)) ? 'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php if (!empty($active)): print ' active show-border'; endif; ?>">
  <a href="<?php print (!empty($gallery_url)) ? $gallery_url : '#'; ?>">
    <?php if (!empty($image_url)): ?>
      <div class="asset-img <?php if (!empty($active)): print ' active show-border'; endif; ?>"
           data-picture data-alt="" data-class="tile-img">
        <?php if (!empty($image_url)): ?>
          <div data-src="<?php print $image_url; ?>"></div>
        <?php endif; ?>
        <?php if (empty($new_design)): ?>
          <?php if (!empty($image_mobile_url)): ?>
            <div data-media="(min-width: 1281px)"
                 data-src="<?php print $image_mobile_url; ?>"></div>
          <?php endif; ?>
        <?php elseif (!empty($new_design)): ?>
          <?php if (!empty($image_mobile_url)): ?>
            <div data-media="(min-width: 1025px)"
                 data-src="<?php print $image_mobile_url; ?>"></div>
          <?php endif; ?>
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
      <?php if (empty($new_design)): ?>
        <div class="meta-back"></div>
      <?php endif; ?>
      <div class="meta-wrapper-inner<?php print (empty($new_design))? ' multiline-ellipsis-meta-wrapper': ''; ?>">
        <?php if (empty($new_design)): ?>
          <div class="meta-icon gallery-icon"></div>
        <?php endif; ?>
        <div class="meta<?php print (empty($new_design))? ' multiline-ellipsis-meta': ''; ?>">
          <?php if (!empty($title)): ?>
            <div class="title"<?php print (empty($new_design))? ' data-text="'.$title.'"': ''; ?>><?php print $title; ?></div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
            <div class="additional"<?php print (empty($new_design))? ' data-text="'.$description.'"': ''; ?>><?php print $description; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </a>
</div>
