<?php
/**
 *
 */
?>
<div class="best-of-block five-promo-item-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print (!empty($title))? $title: t('Best of'); ?></span>
  </h2>
  <?php if (!empty($promos) && is_array($promos)):?>
  <ul>
    <?php $second_item = true;?>
    <?php foreach ($promos as $promo): ?>
    <?php if ($promo['is_first']): ?>
    <li class="first">
      <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
        <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
          <?php if (!empty($promo['sponsored'])) : ?>
            <div class="sponsored" data-mpspath="<?php print $promo['content_id']; ?>" data-scalemps="1"></div>
          <?php endif; ?>
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
          <div class="asset-img" data-alt="" data-class="tile-img">
            <?php if (!empty($promo['image']['mobile'])): ?>
              <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
            <?php endif; ?>
            <?php if (!empty($promo['image']['desktop'])): ?>
              <div data-media="(min-width: 641px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
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
          <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <?php if (!empty($promo['sponsored'])) : ?>
                <div class="sponsored" data-mpspath="<?php print $promo['content_id']; ?>" data-scalemps="1"></div>
              <?php endif; ?>
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
              <div class="asset-img" data-alt="" data-class="tile-img">
                <?php if (!empty($promo['image']['mobile'])): ?>
                  <div data-src="<?php print $promo['image']['mobile']; ?>"></div>
                <?php endif; ?>
                <?php if (!empty($promo['image']['desktop'])): ?>
                  <div data-media="(min-width: 641px)" data-src="<?php print $promo['image']['desktop']; ?>"></div>
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
        </li>
      <?php endif; ?>
      <?php endif; ?>
</div>


