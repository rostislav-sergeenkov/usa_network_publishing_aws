<?php
/**
 * $head_image - image url
 * $second_image - image url
 * $description' - string (html)
 */
?>
<div class="cast-and-info-header-image">
  <?php if (!empty($head_image)): ?>
    <div class="asset-img" data-picture data-alt="" data-class="tile-img">
      <?php if (!empty($head_image['mobile'])): ?>
        <div data-src="<?php print $head_image['mobile']; ?>"></div>
      <?php endif; ?>
      <?php if (!empty($head_image['desktop'])): ?>
        <div data-media="(min-width: 641px)" data-src="<?php print $head_image['desktop']; ?>"></div>
        <!--[if (IE 8) & (!IEMobile)]>
        <div data-src="<?php print $head_image['desktop']; ?>"></div>
        <![endif]-->
      <?php endif; ?>
      <?php if (!empty($head_image['desktop'])): ?>
        <noscript><img src="<?php print $head_image['desktop']; ?>" width="2880" height="1260" alt="" title="" /></noscript>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>
<div class="cast-and-info-description">
  <?php if (!empty($description)): ?>
    <div class="description">
      <?php print $description; ?>
    </div>
  <?php endif; ?>
  <div class="node-wrapper advert">
    <div class="advertisement"></div>
  </div>
  <?php if (!empty($second_image)): ?>
    <div class="back-image">
      <img src="<?php print $second_image; ?>" alt=""/>
    </div>
  <?php endif; ?>
</div>

