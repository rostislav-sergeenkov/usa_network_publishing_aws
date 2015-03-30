<?php if (isset($block_title)): ?><h3><?php print $block_title; ?></h3><?php endif; ?>
<div class="node node-usanetwork-promo<?php if ($show_class): ?> <?php print $show_class; ?><?php endif; ?>">
  <a href="<?php print $url; ?>">
    <div class="meta-wrap">
      <div class="meta-wrapper-inner">
        <?php if ($icon_type): ?>
          <div class="meta-icon <?php print $icon_type; ?>"></div>
        <?php endif; ?>
        <div class="meta">
          <div class="title"><?php print $show_title; ?></div>
          <div class="additional"><span><?php print $additional; ?></span> <?php print $duration; ?></div>
        </div>
      </div>
    </div>
    <?php print $image; ?>
  </a>
</div>
