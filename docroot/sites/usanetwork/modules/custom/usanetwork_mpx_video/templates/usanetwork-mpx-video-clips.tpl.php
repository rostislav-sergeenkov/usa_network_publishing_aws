<?php
/**
 * Template for usanetwork_mpx_video_clips block.
 */
?>
<div class="items-block clips-block">
  <div class="items-block-title clips-block-title<?php print !empty($new_design) ? ' show-color show-font show-border' : ''; ?>">
    <h2><?php print !empty($video_type) ? $video_type : '';?></h2>
  </div>
  <?php if (!empty($promos) && is_array($promos)): ?>
    <div class="episodes-list-slider" data-block-name="Right Rail Carousel">
      <ul class="usa-carousel swiper-wrapper">
        <?php foreach($promos as $promo):?>
          <li class="usa-carousel-item swiper-slide">
            <div class="node node-usanetwork-promo <?php print (!empty($new_design)) ?  'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php print ($promo['active'] == true) ? ' active show-border' : '';?>">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
                <?php if (!empty($promo['image_url_large'])): ?>
                  <div class="asset-img<?php print ($promo['active'] == true) ? ' active show-border' : '';?>"
                       data-picture data-alt="" data-class="tile-img">
                    <?php if (!$new_design): ?>
                      <?php if (!empty($promo['image_url_large'])): ?>
                        <div data-src="<?php print $promo['image_url_large']; ?>"></div>
                      <?php endif; ?>
                      <?php if (!empty($promo['image_url'])): ?>
                        <div data-media="(min-width: 1025px)"
                             data-src="<?php print $promo['image_url']; ?>"></div>
                      <?php endif; ?>
                    <?php elseif ($new_design): ?>
                      <?php if (!empty($promo['image_url_large'])): ?>
                        <div data-src="<?php print $promo['image_url_large']; ?>"></div>
                      <?php endif; ?>
                      <?php if (!empty($promo['image_url'])): ?>
                        <div data-media="(min-width: 769px)"
                             data-src="<?php print $promo['image_url']; ?>"></div>
                      <?php endif; ?>
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
                  <?php if (empty($new_design)) : ?>
                    <div class="meta-back"></div>
                  <?php endif; ?>
                  <div class="meta-wrapper-inner<?php print (empty($new_design))? ' multiline-ellipsis-meta-wrapper': ''; ?>">
                    <?php if (empty($new_design)) : ?>
                      <div class="meta-icon <?php print !empty($promo['icon_type']) ? $promo['icon_type'] : 'video-icon'; ?>"></div>
                    <?php endif; ?>
                    <div class="meta<?php print (empty($new_design))? ' multiline-ellipsis-meta': ''; ?>">
                      <?php if (!empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional"><?php print $promo['description']; ?></div>
                        <?php endif; ?>
                      <?php endif; ?>
                      <?php if (!empty($promo['title'])): ?>
                        <div class="title"<?php print (empty($new_design))? ' data-text="'.$promo['title'].'"': ''; ?>><?php print $promo['title']; ?></div>
                      <?php endif; ?>
                      <?php if (empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional" data-text="<?php print $promo['description']; ?>"><?php print $promo['description']; ?></div>
                        <?php endif; ?>
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
<div class="more-items more-clips <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <?php if (!empty($more_items_url)): print $more_items_url; endif;?>
</div>
