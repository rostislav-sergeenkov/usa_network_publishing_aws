<?php
/**
 * Template for usanetwork_mpx_video_clips block.
 */
?>
<div class="items-block clips-block">
  <div class="items-block-title clips-block-title">
    <h2><?php print !empty($block_title) ? $block_title : '';?></h2>
  </div>
  <?php if (!empty($promos) && is_array($promos)): ?>
    <div class="episodes-list-slider vertical">
      <ul class="slider-vertical">
        <?php foreach($promos as $promo):?>
          <li class="slide-item">
            <div class="node node-usanetwork-promo">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>" target="_blank">
                <?php if (!empty($promo['image_url'])): ?>
                  <div class="asset-img"><img src="<?php print $promo['image_url'];?>" alt=""></div>
                <?php endif; ?>
                <div class="meta-wrapper">
                  <div class="meta-wrapper-inner">
                    <div class="meta">
                      <?php if (!empty($promo['title'])): ?>
                        <div class="title"><?php print $promo['title']; ?></div>
                      <?php endif; ?>
                      <?php if (!empty($promo['description'])): ?>
                        <div class="additional"><?php print $promo['description']; ?></div>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div class="episodes-list-slider horizontal" data-block-name="Right Rail Carousel">
      <ul class="slider-horizontal">
        <?php foreach($promos as $promo):?>
          <li class="slide-item">
            <div class="node node-usanetwork-promo aspot-carousel-promo">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>" target="_blank">
                <div class="meta-wrapper">
                  <div class="meta-back"></div>
                  <div class="meta-wrapper-inner">
                    <div class="meta-icon <?php print !empty($promo['icon_type']) ? $promo['icon_type'] : 'video-icon'; ?>"></div>
                    <div class="meta">
                      <?php if (!empty($promo['title'])): ?>
                        <div class="title"><?php print $promo['title']; ?></div>
                      <?php endif; ?>
                      <?php if (!empty($promo['description'])): ?>
                        <div class="additional"><?php print $promo['description']; ?></div>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
                <?php if (!empty($promo['image_url_large'])): ?>
                  <div class="asset-img"><img src="<?php print $promo['image_url_large'];?>" alt=""></div>
                <?php endif; ?>
              </a>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="horizontal-controls">
        <div class="slide-next slide-control slick-disabled"></div>
        <div class="slide-prev slide-control slick-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-clips show-color">
  <?php if (!empty($more_items_url)): print $more_items_url; endif;?>
</div>
