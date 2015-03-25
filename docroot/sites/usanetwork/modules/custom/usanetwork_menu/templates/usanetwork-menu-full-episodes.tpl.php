<div class="links-block">
  <a href="/videos"><div><span>View All</span> Full<br> Episodes <i class="eye-icon icon"></i></div></a>
  <a href="/videos/live"><div><span>Watch</span> Live TV <i class="live-icon icon">live</i></div></a>
</div>
<div class="full-episodes-list">
  <?php foreach ($items as $item) :?>
    <div class="node node-usanetwork-promo header-full-episodes-promo">
      <a href="<?php print $item['url']; ?>">
        <div class="meta-wrapper">
          <div class="meta-wrapper-inner">
            <div class="meta">
              <div class="meta-icon video-icon"></div>
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
</div>

