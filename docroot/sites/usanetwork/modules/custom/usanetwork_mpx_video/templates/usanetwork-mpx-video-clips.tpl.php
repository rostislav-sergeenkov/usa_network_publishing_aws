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
    <div class="episodes-list-slider vertical">
      <ul class="slider-vertical">
        <?php foreach($promos as $promo):?>
          <li class="slide-item">
            <div class="node node-usanetwork-promo">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
                <?php if (!empty($promo['image_url'])): ?>
                  <div class="asset-img<?php print ($promo['active'] == true) ? ' active show-border' : '';?>"><img src="<?php print $promo['image_url'];?>" alt=""></div>
                <?php endif; ?>
                <div class="meta-wrapper">
                  <div class="meta-wrapper-inner">
                    <div class="meta">
                      <?php if (!empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional"><?php print $promo['description']; ?></div>
                        <?php endif; ?>
                      <?php endif; ?>
                      <?php if (!empty($promo['title'])): ?>
                        <div class="title"><?php print $promo['title']; ?></div>
                      <?php endif; ?>
                      <?php if (empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional"><?php print $promo['description']; ?></div>
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
    </div>
    <div class="episodes-list-slider horizontal" data-block-name="Right Rail Carousel">
      <ul class="slider-horizontal">
        <?php foreach($promos as $promo):?>
          <li class="slide-item">
            <div class="node node-usanetwork-promo <?php print (!empty($new_design)) ?  'usa-carousel-horizontal-promo' : 'aspot-carousel-promo'; ?><?php print ($promo['active'] == true) ? ' active show-border' : '';?>">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
                <?php if (!empty($promo['image_url_large'])): ?>
                  <div class="asset-img"><img src="<?php print $promo['image_url_large'];?>" alt=""></div>
                <?php endif; ?>
                <div class="meta-wrapper">
                  <?php if (empty($new_design)) : ?>
                    <div class="meta-back"></div>
                  <?php endif; ?>
                  <div class="meta-wrapper-inner">
                    <?php if (empty($new_design)) : ?>
                      <div class="meta-icon <?php print !empty($promo['icon_type']) ? $promo['icon_type'] : 'video-icon'; ?>"></div>
                    <?php endif; ?>
                    <div class="meta">
                      <?php if (!empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional"><?php print $promo['description']; ?></div>
                        <?php endif; ?>
                      <?php endif; ?>
                      <?php if (!empty($promo['title'])): ?>
                        <div class="title"><?php print $promo['title']; ?></div>
                      <?php endif; ?>
                      <?php if (empty($new_design)) : ?>
                        <?php if (!empty($promo['description'])): ?>
                          <div class="additional"><?php print $promo['description']; ?></div>
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
      <div class="horizontal-controls">
        <div class="slide-next slide-control slick-disabled"></div>
        <div class="slide-prev slide-control slick-disabled"></div>
      </div>
    </div>
  <?php endif; ?>
</div>
<div class="more-items more-clips <?php print (!empty($new_design)) ?  'show-border' : 'show-color'; ?>">
  <?php if (!empty($more_items_url)): print $more_items_url; endif;?>
</div>
