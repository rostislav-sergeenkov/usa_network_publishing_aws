<?php
/**
 * Template for usanetwork_live_right_rail block.
 */
?>
<div class="items-block clips-block">
  <div class="items-block-title clips-block-title">
    <h2><?php print !empty($block_title) ? $block_title : '';?></h2>
  </div>
  <?php if (!empty($promos) && is_array($promos)): ?>
    <div class="episodes-list-slider" data-block-name="Right Rail Carousel">
      <ul class="usa-carousel swiper-wrapper">
        <?php foreach($promos as $promo):?>
          <li class="usa-carousel-item swiper-slide">
            <div class="node node-usanetwork-promo aspot-carousel-promo">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>" target="_blank">
                <?php if (!empty($promo['image_url_large'])): ?>
                  <div class="asset-img" data-picture data-alt="" data-class="tile-img">
                    <?php if (!empty($promo['image_url_large'])): ?>
                      <div data-src="<?php print $promo['image_url_large']; ?>"></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['image_url'])): ?>
                      <div data-media="(min-width: 1281px)" data-src="<?php print $promo['image_url']; ?>"></div>
                    <?php endif; ?>

                    <?php if (!empty($promo['image_url_large'])): ?>
                      <!--[if (IE 8) & (!IEMobile)]>
                      <div data-src="<?php print $promo['image_url_large']; ?>"></div>
                      <![endif]-->
                      <noscript><img src="<?php print $promo['image_url_large']; ?>" width="633" height="356" alt="" title=""/></noscript>
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
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
              </a>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="usa-carousel-controls-wrap">
        <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
        <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-clips show-color">
  <?php if (!empty($more_items_url)): print $more_items_url; endif;?>
</div>
