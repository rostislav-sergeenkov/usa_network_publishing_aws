<?php foreach ($items as $item) :?>
  <div class="node node-usanetwork-promo header-full-episodes-promo">
    <a href="<?php print $item['url']; ?>">
      <div class="meta-wrapper">
        <div class="meta-back"></div>
        <div class="meta-wrapper-inner">
          <div class="meta-icon video-icon"></div>
          <div class="meta">
            <?php if (!empty($item['logo'])): ?>
              <div class="logo"><?php print $item['logo']; ?></div>
            <?php endif; ?>
            <?php if (!empty($item['additional'])): ?>
              <div class="additional"><?php print $item['additional']; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <div class="asset-img">
        <?php print $item['image']; ?>
      </div>
    </a>
  </div>
<?php endforeach; ?>
<a href="/videos"><div>View All Full Episodes</div></a>
<a href="/videos/live"><div>Watch Live TV</div></a>