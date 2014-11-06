<?php
/**
 * $title - The title of node.
 * $image - The URL to element image.
 * $cta_text - The call-to-action text of the node (description used).
 */
?>

<div class="container-element">
  <?php if (!empty($title)): ?>
    <h3 class="title"><?php print $title; ?></h3>
  <?php endif; ?>

  <?php if (!empty($image)): ?>
    <div class="image"><img src="<?php print $image; ?>" /></div>
  <?php endif; ?>

  <?php if (!empty($cta_text)): ?>
    <div class="cta-text"><?php print $cta_text; ?></div>
  <?php endif; ?>
</div>

<div class="node node-usanetwork-promo">
  <?php if (!empty($image)): ?>
    <a href="#" class="play-icon">
      <div class="asset-img show-color-border show-rush">
        <img src="<?php print $image; ?>" alt="">
      </div>
    </a>
  <?php endif; ?>
  <div class="title-overlay meta">
    <?php if (!empty($title)): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if (!empty($type) && !empty($time)): ?>
      <div class="type-and-time"><span><?php print $type; ?></span> <?php print $time; ?></div>
    <?php endif; ?>
    <?php if (!empty($cta_text)): ?>
       <div class="caption"><?php print $cta_text; ?></div>
    <?php endif; ?>
  </div>
</div>