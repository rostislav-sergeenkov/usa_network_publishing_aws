<?php
/**
 * Template for usanetwork_mpx_video_clips block.
 */
?>
<div class="items-block-title clips-block-title">
  <h2><?php print !empty($video_type) ? $video_type : '';?></h2>
</div>
<?php if (!empty($promos) && is_array($promos)): ?>

  <div class="episodes-list-slider vertical" data-mode="vertical">
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
  <div class="episodes-list-slider horizontal" data-mode="horizontal">
    <ul class="slider-horizontal">
      <?php foreach($promos as $promo):?>
        <li class="slide-item">
          <div class="node node-usanetwork-promo aspot-carousel-promo<?php print ($promo['active'] == true) ? ' active show-border' : '';?>">
            <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-back"></div>
                <div class="meta-wrapper-inner">
                  <div class="meta-icon video-icon"></div>
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
  </div>
<?php endif; ?>
