<?php
/**
 * Template for blocks.
*/
?>
<div class="social-block">
  <div class="carousel-description-item start">
    <div class="description-wrapper">
      <div class="description-block">
        <?php if (!empty($caption)):?>
          <div class="caption"><?php print $caption; ?></div>
        <?php endif; ?>
        <?php if (!empty($title)):?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($additional)):?>
          <div class="additional-text"><?php print $additional; ?></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if (!empty($promos)): ?>
    <div class="carousel social-carousel carousel-left start" data-carousel-id="4">
      <ul class="slides">
        <?php foreach ($promos as $promo): ?>
          <li<?php if (!empty($promo['class'])): print ' class="' . $promo['class'] . '"'; endif;?>>
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
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev"></a>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next"></a>
    </div>
  <?php endif; ?>
</div>
