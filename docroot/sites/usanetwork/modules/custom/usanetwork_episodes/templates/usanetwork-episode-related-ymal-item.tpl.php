<?php
/*$topic, $show-name, $promo_title, $description, $color_class, $icon_type I use for social promo in usa-social-carousel.tpl.php */
?>
<div class="node node-usanetwork-promo social-promo<?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($image_mobile)): ?>
          <div data-src="<?php print $image_mobile; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($image_desktop)): ?>
          <div data-media="(min-width: 641px)" data-src="<?php print $image_desktop; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $image_desktop; ?>"></div>
          <![endif]-->
          <noscript><img src="<?php print $image_desktop; ?>" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <div class="meta-wrapper show-color-border <?php print !empty($color_class) ? $color_class : ''; ?>">
        <div class="meta">
          <?php if (!empty($ymal_about)): ?>
            <div class="caption"><?php print $ymal_about; ?></div>
          <?php endif; ?>
          <?php if (!empty($topic)): ?>
            <div class="topic"><?php print $topic; ?></div>
          <?php endif; ?>
          <?php if (!empty($show_name)): ?>
            <div class="show-title"><?php print $show_name; ?></div>
          <?php endif; ?>
          <?php if (!empty($promo_title)): ?>
            <div class="title"><?php print $promo_title; ?></div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
            <div class="additional"><?php print $description; ?></div>
          <?php endif; ?>
        </div>
        <?php if (!empty($cta)): ?>
          <div class="meta-button show-color tertiary <?php print !empty($color_class) ? $color_class : ''; ?>"><?php print $cta; ?></div>
        <?php endif; ?>
      </div>
      <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'video-icon'; ?>"></div>
    </a>
  <?php endif; ?>
</div>
