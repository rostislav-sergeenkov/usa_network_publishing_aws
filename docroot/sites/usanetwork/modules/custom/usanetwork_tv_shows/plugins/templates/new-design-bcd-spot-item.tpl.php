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
/*
<?php print (!empty($entity_id) ? $entity_id : ''); ?>
<?php print (!empty($entity_type) ? $entity_type : ''); ?>
<?php print (!empty($description) ? $description : ''); ?>
<?php print (!empty($type) ? $type : ''); ?></div>
<?php print (!empty($image_desktop) ? $image_desktop : ''); ?>
<?php print (!empty($image_mobile) ? $image_mobile : ''); ?>
<?php print (!empty($position) ? $position : ''); ?>*/
?>
<div class="node node-usanetwork-promo usa-bcd-carousel-promo">
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

