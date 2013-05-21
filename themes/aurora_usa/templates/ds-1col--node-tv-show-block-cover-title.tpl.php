<?php

/**
 * @file
 * Display Suite 1 column template.
 */
 // redirect for social pages
 $show_url = 'node/' . $node->nid;
 if (arg(0) == 'social' || arg(2) == 'social') {
   $show_url = 'node/' . $node->nid . '/social';
 }
?>
<div class="ds-1col <?php print $classes;?> clearfix <?php print $ds_content_classes;?>">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>
  <?php print l($ds_content, $show_url, array('attributes' => array('class' => array('article-link')), 'html' => TRUE)); ?>
</div>