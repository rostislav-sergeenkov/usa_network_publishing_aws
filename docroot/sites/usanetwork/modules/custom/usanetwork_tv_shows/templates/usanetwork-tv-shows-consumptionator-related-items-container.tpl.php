<?php
?>
<div class="ajax-load-block related-content-block show-border<?php print (empty($load_more_link))? ' infinity-finished': '' ;?><?php !empty($new_design) ? print ' related-new-design' : ''; ?>"
    <?php if (!empty($show_nid)): print ' data-show-nid="' . $show_nid . '"'; endif;?>
    <?php if (!empty($items_pre_page_limit)): print ' data-show-items-limit="' . $items_pre_page_limit . '"'; endif; ?>
    <?php if (!empty($node_nid)): print ' data-node-nid="' . $node_nid . '"'; endif; ?>
    <?php if (!empty($file_fid)): print ' data-file-fid="' . $file_fid . '"'; endif; ?>>
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print t('Related')?><span class="desktop-title"><?php print t(' content')?></span></span>

  </h2>
  <?php if (!empty($related_items_block)): ?>
    <?php print $related_items_block; ?>
  <?php endif; ?>
  <?php if (!empty($load_more_link)): ?>
    <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
  <?php endif; ?>
</div>
