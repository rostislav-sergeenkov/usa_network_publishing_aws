<h2 class="pane-title"><?php print t('Latest On Usa'); ?></h2>
<div class="news-list-wrap">
  <div class="see-all-link">
    <a href="/news"><?php print t('See more News'); ?></a>
  </div>
  <div class="news-list">
    <?php foreach ($items as $item) :?>
      <div class="node node-usanetwork-promo header-news-promo">
        <a href="<?php print $item['url']; ?>" class="news-link">
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
