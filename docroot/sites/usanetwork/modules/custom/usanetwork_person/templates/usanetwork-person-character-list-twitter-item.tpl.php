<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo small twitter-item show-latest-promo<?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="meta-wrapper">
        <div class="last-updated"><?php print !empty($last_updated) ? $last_updated : ''; ?></div>
        <div class="post-image"><?php print !empty($post_image) ? $post_image : ''; ?></div>
        <div class="sender"><?php print !empty($sender) ? $sender : ''; ?></div>
        <div class="action"><?php print !empty($action) ? $action : t('tweeted'); ?></div>
        <?php if (!empty($retweeted_by)): ?>
          <div class="retweeted-by"><?php print $retweeted_by; ?></div>
        <?php endif; ?>
        <div class="content"><?php print !empty($content) ? $content : ''; ?></div>
        <div class="twitter-icon"></div>
      </div>
    </a>
  <?php endif; ?>
</div>
