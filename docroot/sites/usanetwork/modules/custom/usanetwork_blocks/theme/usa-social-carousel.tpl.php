<?php
/**
 * Template for blocks.
*/
?>
<div class="social-block carousel-block" data-block-name="Social Carousel">
  <div class="carousel-description-item start">
    <div class="description-wrapper">
      <div class="description-block">
        <?php if (!empty($caption)):?>
          <div class="caption"><?php print $caption; ?></div>
        <?php endif; ?>
        <?php if (!empty($title)):?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($additional)):?>
          <div class="additional-text"><?php print $additional; ?></div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php $promos_length = 0; ?>
  <?php if (!empty($promos)): ?>
    <?php $promos_length = count($promos); ?>
    <div class="carousel social-carousel carousel-left start" data-carousel-id="4">
      <ul class="slides">
        <?php foreach ($promos as $promo): ?>
          <li<?php if (!empty($promo['class'])): print ' class="' . $promo['class'] . '"'; endif;?>>
            <div class="node node-usanetwork-promo social-promo">
              <a href="<?php print !empty($promo['url']) ? $promo['url'] : '#'; ?>">
                <?php if (!empty($promo['image'])): ?>
                  <div class="asset-img"><?php print $promo['image']; ?></div>
                <?php endif; ?>
                <div class="meta-wrapper show-color-border <?php print !empty($promo['color_class']) ? $promo['color_class'] : ''; ?>">
                  <div class="meta">
                    <?php if (!empty($promo['topic'])): ?>
                      <div class="topic"><?php print $promo['topic']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['show_name'])): ?>
                      <div class="show-title"><?php print $promo['show_name']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['promo_title'])): ?>
                      <div class="title"><?php print $promo['promo_title']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($promo['description'])): ?>
                      <div class="additional"><?php print $promo['description']; ?></div>
                    <?php endif; ?>
                  </div>
                  <?php if (!empty($promo['cta'])): ?>
                    <div class="meta-button show-color <?php print !empty($promo['color_class']) ? $promo['color_class'] : 'no-show'; ?>"><?php print $promo['cta']; ?></div>
                  <?php endif; ?>
                </div>
                <div class="meta-icon <?php print !empty($promo['icon_type']) ? $promo['icon_type'] : 'video-icon'; ?>"></div>
              </a>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-prev link-color-reset"></a>
      <a href="javascript:void(0)" class="jcarousel-controls jcarousel-control-next link-color-reset"></a>
    </div>
  <?php endif; ?>
  <?php if ($promos_length > 2): ?>
    <a href="javascript:void(0)" class="more-button more">
      <span class="more-text"><?php print t('More social'); ?></span>
      <span class="close-text"><?php print t('Close'); ?></span>
    </a>
  <?php endif; ?>
</div>
