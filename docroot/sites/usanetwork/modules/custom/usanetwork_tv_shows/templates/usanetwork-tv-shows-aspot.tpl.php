<?php
/**
 *
 */
?>
<div class="aspot-and-episodes <?php print !empty($episodes)? 'episodes-'.count($episodes): 'episodes-empty'; ?>">
  <div class="show-aspot">
    <?php if (!empty($show)): ?>
      <?php print $show ?>
    <?php endif; ?>
  </div>
  <?php if (!empty($episodes)): ?>
    <div class="episodes-list shadow<?php print !empty($sponsored)? ' sponsored-enable' : ''; ?>">
      <?php if (!empty($episodes_block_title)): ?>
        <div class="title show-color">
          <div class="title-wrapper">
            <h2><?php print $episodes_block_title; ?></h2>
          </div>
          <?php if (!empty($sponsored)) : ?>
            <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
          <?php endif; ?>
        </div>
      <?php endif; ?>
      <div class="episodes-list-slider show-border" data-block-name="Right Rail Carousel">
        <ul class="usa-carousel swiper-wrapper">
          <?php foreach ($episodes as $episode): ?>
            <li class="usa-carousel-item swiper-slide">
              <div class="node node-usanetwork-promo aspot-carousel-promo">
                <a href="<?php print !empty($episode['url']) ? $episode['url'] : '#'; ?>">
                  <div class="meta-wrapper">
                    <div class="meta-wrapper-inner">
                      <div class="meta-icon <?php (!empty($episode['icon'])) ? print $episode['icon'] : 'video-icon'; ?>"></div>
                      <div class="meta">
                        <?php if (!empty($episode['violator'])): ?>
                          <div class="caption"><?php print $episode['violator']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['title'])): ?>
                          <div class="title"><?php print $episode['title']; ?></div>
                        <?php endif; ?>
                        <?php if (!empty($episode['description'])): ?>
                          <div class="additional"><?php print $episode['description']; ?></div>
                        <?php endif; ?>
                      </div>
                    </div>
                  </div>
                  <?php if (!empty($episode['image_url'])): ?>
                    <div class="asset-img"><?php print $episode['image_url']; ?></div>
                  <?php endif; ?>
                </a>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
        <div class="usa-carousel-controls-wrap">
          <div class="usa-carousel-control-next usa-carousel-controls usa-carousel-control-disabled"></div>
          <div class="usa-carousel-control-prev usa-carousel-controls usa-carousel-control-disabled"></div>
        </div>
        <?php if($show_more_button): ?>
          <div class="more-button-wrapper">
            <div class="more-button more">
              <span class="more-text"><?php print t('Load More'); ?></span>
              <span class="close-text"><?php print t('Close'); ?></span>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  <?php endif; ?>
</div>

