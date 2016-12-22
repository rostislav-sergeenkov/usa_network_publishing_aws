
<div class="node node-usanetwork-promo">
  <a href="<?php print $url; ?>">
    <?php if (isset($image)): ?>
      <div class="asset-img">
        <?php print $image; ?>
      </div>
    <?php endif; ?>
    <div class="meta-wrap">
      <div class="meta">
        <div class="title">
          <?php print $title; ?>
        </div>
        <?php if (isset($additional)): ?>
          <div class="additional"><span><?php print $additional; ?></span></div>
        <?php endif; ?>
      </div>
    </div>
  </a>
</div>
