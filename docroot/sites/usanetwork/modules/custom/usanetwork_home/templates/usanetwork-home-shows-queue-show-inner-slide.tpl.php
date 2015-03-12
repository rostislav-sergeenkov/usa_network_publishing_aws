<?php
/**
 *
 */
?>
<h3><?php print $title; ?></h3>
<div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
  <a href="<?php print !empty($episode_url) ? $episode_url : 'javascript:void(0)'; ?>">
    <div class="meta-wrap">
      <div class="meta">
        <?php if (!empty($episode_title)): ?>
          <div class="meta-title"><?php print $episode_title; ?></div>
        <?php endif; ?>
        <div class="meta-icon photo-icon"></div>
      </div>
    </div>
    <?php if (!empty($image_url)): ?>
      <img alt="" src="<?php print $image_url; ?>">
    <?php endif; ?>
  </a>
</div>
