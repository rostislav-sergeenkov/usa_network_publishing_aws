<?php
/**
 *
 */
?>
<div class="landing-main-block show-photo-landing-main-block five-promo-item-block show-border">
  <?php if (!empty($promos) && is_array($promos)):?>
    <ul>
    <?php foreach ($promos as $promo): ?>
      <?php if ($promo['is_first']): ?>
        <li class="first">
          <div class="node node-usanetwork-promo<?php if (!empty($promo['class'])) : print ' ' . $promo['class']; endif; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner multiline-ellipsis-meta-wrapper">
                  <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
                  <div class="meta multiline-ellipsis-meta">
                    <?php if (!empty($promo['caption'])): ?>
                      <div class="caption" data-text="<?php print $promo['caption']; ?>"><?php print $promo['caption']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['title'])): ?>
                      <div class="title" data-text="<?php print $promo['title']; ?>"><?php print $promo['title']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['description'])): ?>
                      <div class="additional" data-text="<?php print $promo['description']; ?>"><?php print $promo['description']; ?></div>
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
        <li>
          <div class="node node-usanetwork-promo usanetwork-tv-shows-photo-lmb<?php if (!empty($promo['class'])) : print ' ' . $promo['class']; endif; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner multiline-ellipsis-meta-wrapper">
                  <div class="meta-icon <?php print (!empty($promo['icon_type']))? $promo['icon_type']: ''; ?>"></div>
                  <div class="meta multiline-ellipsis-meta">
                    <?php if (!empty($promo['caption'])): ?>
                      <div class="caption" data-text="<?php print $promo['caption']; ?>"><?php print $promo['caption']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['title'])): ?>
                      <div class="title" data-text="<?php print $promo['title']; ?>"><?php print $promo['title']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['description'])): ?>
                      <div class="additional" data-text="<?php print $promo['description']; ?>"><?php print $promo['description']; ?></div>
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
        </li>
      <?php endif; ?>
    <?php endforeach; ?>
    <?php if (!empty($ad)) : ?>
      <li class="advert-block">
        <div class="advertisement">
          <?php print $ad; ?>
        </div>
      </li>
    <?php endif; ?>
  </ul>
  <?php endif; ?>
</div>
