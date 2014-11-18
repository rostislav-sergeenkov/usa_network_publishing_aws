<?php
/**
 * $title - The title of node.
 * $image - The URL to element image.
 * $cta_text - The call-to-action text of the node (description used).
 */
?>

<div class="node node-usanetwork-promo">
  <?php if (!empty($image)): ?>
    <a href="<?php print !empty($node_url) ? $node_url : '#'; ?>" class="play-icon">
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
