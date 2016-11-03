<?php
/**
 *
 */
?>
<div class="node-wrapper promo">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
    <a href="<?php if (!empty($episode_url)): print $episode_url; endif; ?>">
      <?php if (!empty($latest_episode_image_url)): ?>
      <div class="asset-img" data-alt="" data-class="tile-img">
        <?php if (!empty($latest_episode_image_url_mobile)): ?>
          <div data-src="<?php print $latest_episode_image_url_mobile; ?>"></div>
        <?php endif; ?>
        <div data-media="(min-width: 769px)" data-src="<?php print $latest_episode_image_url; ?>"></div>
        <!--[if (IE 8) & (!IEMobile)]>
        <div data-src="<?php print $latest_episode_image_url; ?>"></div>
        <![endif]-->
        <noscript><img src="<?php print $latest_episode_image_url ?>" width="2490" height="1418" alt="" title="" /></noscript>
      </div>
      <?php endif; ?>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner multiline-ellipsis-meta-wrapper">
          <div class="meta-icon<?php if (!empty($icon_type)): print ' ' . $icon_type; endif; ?>"></div>
          <div class="meta multiline-ellipsis-meta">
            <?php if (!empty($episode_title)): ?>
              <div class="title" data-text="<?php print $episode_title; ?>"><?php print $episode_title; ?></div>
            <?php endif; ?>
            <?php if (!empty($episode_description)): ?>
              <div class="additional" data-text="<?php print $episode_description; ?>">
                <?php print $episode_description; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <img class="lazyloader-icon" src="<?php print $loader_img; ?>">
    </a>
  </div>
</div>
