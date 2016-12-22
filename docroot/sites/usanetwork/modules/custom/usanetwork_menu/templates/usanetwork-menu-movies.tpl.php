<h2 class="pane-title">latest online movies</h2>
<div class="movies-list-wrap">
  <div class="see-all-link">
    <a href="/movies">see more movies</a>
  </div>
  <div class="movies-list">
    <?php foreach ($items as $item) :?>
      <div class="node node-usanetwork-promo header-full-episodes-promo<?php print (!empty($item['sponsored']))? ' sponsored-enable': '';?>">
        <a href="<?php print $item['url']; ?>" class="movies-link">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta">
                <div class="meta-icon full-video-icon-default"></div>
                <?php if (!empty($item['title'])): ?>
                  <div class="title"><?php print $item['title']; ?></div>
                <?php endif; ?>
                <?php if (!empty($item['sponsored'])) : ?>
                  <div class="sponsored" data-scalemps="1"></div>
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
