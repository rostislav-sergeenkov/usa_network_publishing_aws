<?php
/**
 * BCD-Spot Item.
 *
 * Item of relevant content.
 * Variables:
 *  - $item
 *    - entity_id
 *    - entity_type
 *    - url
 *    - title
 *    - description
 *    - violator
 *    - type
 *    - image_desktop
 *    - image_mobile
 *  - $layout_scheme
 *    - desktop_type
 *    - mobile_type
 *
 * <?php print_r(!empty($item['links']) ? $item['links'] : ''); ?>
 * <?php print (!empty($layout_scheme['desktop_type']) ? $layout_scheme['desktop_type'] : ''); ?>
 * <?php print (!empty($layout_scheme['mobile_type']) ? $layout_scheme['mobile_type'] : ''); ?>
 * <?php print (!empty($item['violator']) ? $item['violator'] : ''); ?>
 * <?php print_r(!empty($item['bottom_link']) ? $item['bottom_link'] : ''); ?>
 * <?php print (!empty($item['title']) ? $item['title'] : ''); ?>
 * <?php print (!empty($item['url']) ? $item['url'] : ''); ?>
 * <?php print (!empty($item['entity_id']) ? $item['entity_id'] : ''); ?>
 * <?php print (!empty($item['image_desktop']) ? $item['image_desktop'] : ''); ?>
 * <?php print (!empty($item['image_mobile']) ? $item['image_mobile'] : ''); ?>
 * <?php print (!empty($item['description']) ? $item['description']: ''); ?>
 * <?php print (!empty($item['type']) ? $item['type']: ''); ?>
 */
?>
<div class="node node-usanetwork-promo usa-best-of-promo<?php print !empty($layout_scheme['desktop_type'])? ' ' . $layout_scheme['desktop_type'] : ''; ?><?php print !empty($layout_scheme['mobile_type'])? ' mobile-' . $layout_scheme['mobile_type'] : ''; ?>">
  <a href="<?php print !empty($item['url']) ? $item['url'] : '#'; ?>">
    <div class="image-block">
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($item['image_mobile'])): ?>
          <div data-src="<?php print $item['image_mobile']; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($item['image_desktop'])): ?>
          <div data-media="(min-width: 769px)" data-src="<?php print $item['image_desktop']; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $item['image_desktop']; ?>"></div>
          <![endif]-->
        <?php endif; ?>
        <?php if (!empty($item['image_desktop'])): ?>
          <noscript><img src="<?php print $item['image_desktop']; ?>" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
    </div>
  </a>
  <div class="meta-wrapper">
    <div class="meta-wrapper-inner">
      <div class="meta">
        <?php if (!empty($item['violator'])): ?>
          <div class="caption"><span class="show-color"><?php print $item['violator']; ?></span></div>
        <?php endif; ?>
        <?php if (!empty($item['title'])): ?>
          <div class="title"><?php print $item['title']; ?></div>
        <?php endif; ?>
        <?php if (!empty($item['links'])): ?>
          <div class="additional">
            <?php foreach ($item['links'] as $link): ?>
              <a href="<?php print $link['url']; ?>" class="additional-link"><?php print $link['title'] ?><span class="show-color show-font arrow"></span></a>
              <div class="dots"><div class="dots-inner">&#183<br>&#183<br>&#183<br>&#183<br>&#183<br>&#183</div></div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
        <?php if (!$item['bottom_link']): ?>
          <a href="<?php print $item['bottom_link']['url']; ?>" class="more-link"><span class="show-color show-font arrow"></span><?php print $item['bottom_link']['title']; ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>


