<?php
/**
 *
 */
?>
<div class="landing-main-block show-all-shows-main-block five-promo-item-block show-border">
  <?php if (!empty($promos) && is_array($promos)):?>
  <ul>
    <?php $second_item = true;?>
    <?php foreach ($promos as $promo): ?>
    <?php if ($promo['is_first']): ?>
    <li class="first">
      <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
        <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
          <div class="meta-wrapper">
            <div class="meta-wrapper-inner">
              <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
              <div class="meta">
                <?php if (!empty($promo['caption'])): ?>
                  <div class="caption"><?php print $promo['caption']; ?></div>
                <?php endif; ?>
                <?php if (!empty($promo['title'])): ?>
                  <div class="title"><?php print $promo['title']; ?></div>
                <?php endif; ?>
                <?php if (!empty($promo['description'])): ?>
                  <div class="additional"><?php print $promo['description']; ?></div>
                <?php endif; ?>
              </div>
            </div>
          </div>
          <div class="asset-img" data-picture data-alt="" data-class="tile-img">
            <?php if (!empty($promo['image']['mobile'])): ?>
              <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($promo['image']['desktop'])): ?>
              <div data-media="(min-width: 1281px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
              <!--[if (IE 8) & (!IEMobile)]>
              <div data-src="<?php print $promo['image']['desktop']; ?>"></div>
              <![endif]-->
            <?php endif; ?>
            <?php if (!empty($promo['image']['desktop'])): ?>
              <noscript><img src="<?php print $promo['image']['desktop']; ?>" alt="" title="" /></noscript>
            <?php endif; ?>
          </div>
        </a>
      </div>
    </li>
      <?php else: ?>
        <?php if ($second_item == true): ?>
          <li class="last">
          <?php $second_item = false; ?>
        <?php endif; ?>
          <div class="node node-usanetwork-promo usanetwork-tv-shows-all-shows-lmb <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
                  <div class="meta">
                    <?php if (!empty($promo['caption'])): ?>
                      <div class="caption"><?php print $promo['caption']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['title'])): ?>
                      <div class="title"><?php print $promo['title']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['description'])): ?>
                      <div class="additional"><?php print $promo['description']; ?></div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
              <div class="asset-img" data-picture data-alt="" data-class="tile-img">
                <?php if (!empty($promo['image']['mobile'])): ?>
                  <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
                <?php endif; ?>
                <?php if (!empty($promo['image']['desktop'])): ?>
                  <div data-media="(min-width: 769px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
                  <!--[if (IE 8) & (!IEMobile)]>
                  <div data-src="<?php print $promo['image']['desktop']; ?>"></div>
                  <![endif]-->
                <?php endif; ?>
                <?php if (!empty($promo['image']['desktop'])): ?>
                  <noscript><img src="<?php print $promo['image']['desktop']; ?>" alt="" title="" /></noscript>
                <?php endif; ?>
              </div>
            </a>
          </div>
      <?php endif; ?>
      <?php endforeach; ?>
      <?php if ($second_item == false): ?>
      <div class="node advert-block">
        <?php if (!empty($ad)) : ?>
        <div class="advertisement">
          <?php print $ad; ?>
        </div>
        <?php endif; ?>
      </div>
    </li>
      <?php endif; ?>
      <?php endif; ?>
</div>
