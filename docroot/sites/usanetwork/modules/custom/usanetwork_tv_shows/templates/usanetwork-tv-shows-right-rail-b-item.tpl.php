<?php
/**
 * @file
 * Right rail item template.
 *
 * Available variables:
 * - $url
 * - $image_mobile
 * - $logic_violator
 * - $image_desktop
 * - $title
 * - $content_count
 *
 */

?>

<div class="node node-usanetwork-promo usa-aspot-carousel-promo">
  <a href="<?php print !empty($url) ? $url : '#'; ?>">
    <div class="image-block">
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($image_mobile)): ?>
          <div data-src="<?php print $image_mobile; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($image_desktop)): ?>
          <div data-media="(min-width: 769px)" data-src="<?php print $image_desktop; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $image_desktop; ?>"></div>
          <![endif]-->
        <?php endif; ?>
        <?php if (!empty($image_desktop)): ?>
          <noscript><img src="<?php print $image_desktop; ?>" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <div class="item-number-border show-color show-font"></div>
      <div class="item-number">
        <?php if (!empty($content_count)): ?>
          <?php print $content_count; ?>
        <?php endif; ?>
      </div>
    </div>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <?php if (!empty($logic_violator)): ?>
            <div class="violator"><?php print $logic_violator; ?></div>
          <?php endif; ?>
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
