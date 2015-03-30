<?php
/**
 *
 */
?>
<li<?php if (!empty($class)): print ' class="' . $class . '"'; endif; ?>>
  <div class="node node-usanetwork-promo<?php if (!empty($node_classes)): print ' ' . implode(' ', $node_classes); endif; ?>">
    <a href="javascript:void(0)">
      <div class="meta-wrap">
        <div class="meta">
          <?php if (!empty($title)): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <?php if (!empty($additional['span']) && !empty($additional['normal'])): ?>
            <div class="additional"><span><?php print $additional['span']; ?></span> <?php print $additional['normal']; ?></div>
          <?php endif; ?>
          <?php if (!empty($media_player_icon) && $media_player_icon): ?>
            <div class="meta-icon play-icon"></div>
          <?php endif; ?>
        </div>
      </div>
    </a>
  </div>
</li>
