<?php
/**
 * BCD-Spot Item.
 *
 * Item of relevant content.
 * Variables:
 *  - $entity_id
 *  - $entity_type
 *  - $url
 *  - $title
 *  - $description
 *  - $violator
 *  - $type
 *  - $image_desktop
 *  - $image_mobile
 *  - $position
 */
?>
<div class="node node-usanetwork-promo usa-bcd-carousel-promo">
  <a href="<?php print !empty($url) ? $url : '#'; ?>">
    <div class="image-block">
      <div class="asset-img" data-alt="" data-class="tile-img">
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
    </div>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <?php if (!empty($violator)): ?>
            <div class="caption"><span class="show-color"><?php print $violator; ?></span></div>
          <?php endif; ?>
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </a>
</div>
<!--div><?php print (!empty($entity_id) ? $entity_id : ''); ?></div>
<div><?php print (!empty($entity_type) ? $entity_type : ''); ?></div>
<div><?php print (!empty($description) ? $description : ''); ?></div>
<div><?php print (!empty($type) ? $type : ''); ?></div>
<div><?php print (!empty($image_desktop) ? $image_desktop : ''); ?></div>
<div><?php print (!empty($image_mobile) ? $image_mobile : ''); ?></div>
<div><?php print (!empty($position) ? $position : ''); ?></div-->