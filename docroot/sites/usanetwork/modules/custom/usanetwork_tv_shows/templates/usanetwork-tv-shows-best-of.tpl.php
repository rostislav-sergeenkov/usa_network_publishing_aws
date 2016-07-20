<?php
/**
 * @file
 * Theme implementation for section of best of block.
 * 
 * Available variables:
 *  - $title
 *  - $layout_scheme: General layout scheme for separate block.
 *    - name
 *    - number_of_items
 *    - class
 *    - icon_path
 *    - items
 *  - $promos:
 *    - url
 *    - image
 *      - mobile
 *      - desktop
 *    - icon_type
 *    - icon_text
 *    - caption
 *    - title
 *    - description
 *    - more_link
 *    - layout_scheme: Specify layout scheme for a promo.
 *      - desktop_type
 *      - mobile_type
 *    - sponsored
 *    - content_id
 */
?>
<div class="best-of-block best-of-block-items <?php print (!empty($layout_scheme['number_of_items']))? 'best-of-block-items-'.$layout_scheme['number_of_items'].' ': ''; ?>show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print (!empty($title))? $title: t('Best of'); ?></span>
  </h2>
  <?php if (!empty($promos) && is_array($promos)):?>
    <ul>
      <?php foreach ($promos as $promo): ?>
        <li class="<?php print (!empty($promo['layout_scheme']['desktop_type']))? 'desktop-'.$promo['layout_scheme']['desktop_type']: 'desktop-quarter'; ?><?php print (!empty($promo['layout_scheme']['mobile_type']))? ' mobile-'.$promo['layout_scheme']['mobile_type']: ' mobile-quarter'; ?>">
          <div class="node node-usanetwork-promo <?php print (!empty($promo['class']))? $promo['class']: ''; ?>">
            <a href="<?php print (!empty($promo['url']))? $promo['url']: '#'; ?>">
              <div class="asset-img" data-alt="" data-class="tile-img">
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
              <?php if (!empty($promo['sponsored'])) : ?>
                <div class="sponsored" data-mpspath="<?php print $promo['content_id']; ?>" data-scalemps="1"></div>
              <?php endif; ?>
            </a>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>


