<?php
/**
 * Template for blocks.
*/
?>
<div class="social-block <?php print !empty($episodes)? 'episodes-'.count($episodes): 'episodes-empty'; ?>">
  <div class="social-text">
      <?php print $title?>
      <br>
      <?php print $additional?>
  </div>
  <?php if (!empty($promos)): ?>
    <div class="promos-list">
      <ul>
        <?php foreach ($promos as $promo): ?>
          <li>
            <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
              <div class="meta">
                <?php if (!empty($promo['title'])): ?>
                  <div class="title"><?php print $promo['title']; ?></div>
                <?php endif; ?>
                <?php if (!empty($promo['series_and_number']) && !empty($promo['duration'])): ?>
                  <div class="additional"><span><?php print $promo['series_and_number']; ?></span> <?php print $promo['duration']; ?></div>
                <?php elseif (!empty($promo['additional'])) : ?>
                  <div class="additional"><span><?php print $promo['additional']; ?></span></div>
                <?php endif; ?>
                <div class="meta-icon play-icon resize-avail-1024"></div>
              </div>
              <?php if (!empty($promo['image_url'])): ?>
                <div class="asset-img"><img src="<?php print $promo['image_url']; ?>" alt=""></div>
              <?php endif; ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>
