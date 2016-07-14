<div class="node node-usanetwork-promo<?php if ($locked_video): ?> video-auth<?php endif; ?>">
  <a href="<?php print $url; ?>">
    <div class="meta-wrap">
      <div class="meta">
        <?php if (!empty($title)): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <div class="additional"><span><?php print $series_and_number; ?></span> <?php print $duration; ?></div>
        <div class="meta-icon video-icon"></div>
      </div>
    </div>
    <?php print $image; ?>
  </a>
</div>
