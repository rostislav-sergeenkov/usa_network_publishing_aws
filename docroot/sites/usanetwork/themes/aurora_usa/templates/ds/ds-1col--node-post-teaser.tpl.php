<?php
/**
 * @file
 * Display Suite 1 column template.
 */
?>
<div class="node node-post" id="node-<?php print $nid; ?>">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <div class="post-top">
    <div class="field-title">
      <?php print l($title, $node_url); ?>
    </div>
    <div class="field-author">
      <?php print render($content['author'][0]); ?>
    </div>
  </div>
  <div class="field-post-cover">
    <a href="<?php print $node_url; ?>">
      <?php if (isset($post_image)): ?>
        <div class="asset-img">
          <?php print $post_image; ?>
        </div>
      <?php endif; ?>
    </a>
  </div>
  <div class="field-summary">
    <?php print $summary; ?>
  </div>
  <div class="post-bottom">
    <div class="comments-count">
      <a href="javascript:void(0)"><span><?php print $comment_count; ?></span> Comments</a>
    </div>
    <div class="social-bar">
      <div class="social-icons icons-block">
        <?php print render($content['field_gigya_share_bar']); ?>
      </div>
    </div>
  </div>
</div>
