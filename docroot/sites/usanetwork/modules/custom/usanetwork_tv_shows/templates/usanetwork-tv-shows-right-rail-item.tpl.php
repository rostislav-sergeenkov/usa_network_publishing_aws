<?php
/**
 * @file
 * Right rail item template.
 *
 * Available variables:
 * - $url
 * - $icon
 * - $violator
 * - $title
 * - $description
 * - $image_url
 *
 */

?>

<li class="usa-carousel-item swiper-slide">
  <div class="node node-usanetwork-promo aspot-carousel-promo">
    <a href="<?php print !empty($url) ? $url : '#'; ?>">
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner multiline-ellipsis-meta-wrapper">
          <div class="meta-icon <?php (!empty($icon)) ? print $icon : 'video-icon'; ?>"></div>
          <div class="meta multiline-ellipsis-meta">
            <?php if (!empty($violator)): ?>
              <div class="caption" data-text="<?php print $violator; ?>"><?php print $violator; ?></div>
            <?php endif; ?>
            <?php if (!empty($title)): ?>
              <div class="title" data-text="<?php print $title; ?>"><?php print $title; ?></div>
            <?php endif; ?>
            <?php if (!empty($description)): ?>
              <div class="additional" data-text="<?php print $description; ?>"><?php print $description; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <?php if (!empty($image_url)): ?>
        <div class="asset-img"><?php print $image_url; ?></div>
      <?php endif; ?>
    </a>
  </div>
</li>
