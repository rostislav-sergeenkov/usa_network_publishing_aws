<?php
/**
 *
 */
?>
<div class="node-wrapper promo">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
    <a href="<?php if (!empty($episode_url)): print $episode_url; endif; ?>">
      <?php if (!empty($latest_episode_image_url)): ?>
      <div class="asset-img" data-picture data-alt="" data-class="tile-img">
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
        <div class="meta-wrapper-inner">
          <div class="meta-icon<?php if (!empty($icon_type)): print ' ' . $icon_type; endif; ?>"></div>
          <div class="meta">
            <?php if (!empty($episode_title)): ?>
              <div class="title"><?php print $episode_title; ?></div>
            <?php endif; ?>
            <?php if (!empty($episode_description)): ?>
              <div class="additional">
                <?php print $episode_description; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>
