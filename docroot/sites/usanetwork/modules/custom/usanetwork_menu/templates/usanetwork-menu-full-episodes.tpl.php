<h2 class="pane-title">latest full episodes</h2>
<div class="full-episodes-list-wrap">
  <div class="see-all-link">
    <a href="/videos">see more episodes</a>
  </div>
  <div class="full-episodes-list">
    <?php foreach ($items as $item) :?>
      <div class="node node-usanetwork-promo header-full-episodes-promo<?php print (!empty($item['sponsored']))? ' sponsored-enable': '';?>">
        <a href="<?php print $item['url']; ?>" class="full-episodes-link" data-name="<?php print $item['file_name']; ?>">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta">
                <div class="meta-icon <?php print !empty($item['icon_type']) ? $item['icon_type'] : 'video-icon'; ?>"></div>
                <?php if (!empty($item['logo'])): ?>
                  <div class="logo"><?php print $item['logo']; ?></div>
                <?php endif; ?>
                <?php if (!empty($item['sponsored'])) : ?>
                  <div class="sponsored" data-mpspath="<?php print $item['file_path']; ?>" data-scalemps="1"></div>
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
</div>

