<?php
/**
 *
 */
?>
<a href="<?php print !empty($episode_url) ? $episode_url : 'javascript:void(0)'; ?>">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?> show-inner">
    <div class="meta-icon <?php print !empty($icon_type) ? $icon_type : 'photo-icon'; ?>"></div>
    <div class="meta-wrapper">
      <div class="meta-wrapper-inner">
        <div class="meta">
          <?php if (!empty($topic)): ?>
            <div class="caption"><?php print $topic; ?></div>
          <?php endif; ?>
          <?php if (!empty($violator)): ?>
            <div class="title"><?php print $violator; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
    <?php if (!empty($image_url)): ?>
      <div class="asset-img">
        <img alt="" src="<?php print $image_url; ?>">
      </div>
    <?php endif; ?>
  </div>
</a>
