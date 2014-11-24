<?php
/**
 * $title - The title of node.
 * $image - The URL to element image.
 * $cta_text - The call-to-action text of the node (description used).
 */
?>

<div class="node node-usanetwork-promo">
  <?php if (!empty($image)): ?>
    <a href="<?php print !empty($url) ? $url : '#'; ?>" class="<?php print $icon_type; ?>">
      <div class="asset-img show-color-border <?php print $show_class; ?>">
        <?php print $image; ?>
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
    <?php if (!empty($subtitle)): ?>
      <div class="type-and-time"><?php print $subtitle; ?></div>
    <?php endif; ?>
    <?php if (!empty($cta_text)): ?>
       <div class="caption"><?php print $cta_text; ?></div>
    <?php endif; ?>
  </div>
</div>
