<h2 class="pane-title"><?php print t('Latest On Usa'); ?></h2>
<div class="movies-list-wrap">
  <div class="see-all-link">
    <a href="/news"><?php print t('See more News'); ?></a>
  </div>
  <div class="movies-list">
    <?php foreach ($items as $item) :?>
      <div class="node node-usanetwork-promo header-full-episodes-promo">
        <a href="<?php print $item['url']; ?>" class="movies-link">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta">
                <?php if (!empty($item['title'])): ?>
                  <div class="title"><?php print $item['title']; ?></div>
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
