<?php
/**
 * $related_items_block - string (prerendered block of items)
 * $load_more_link - boolean (flag that requires the "Load more" link)
 */
?>
<div class="ajax-load-block show-latest-block show-border<?php print (empty($load_more_link))? ' infinity-finished': '' ;?>"<?php if (!empty($show_nid)): print ' data-show-nid="' . $show_nid . '"'; endif;?><?php if (!empty($items_pre_page_limit)): print ' data-show-items-limit="' . $items_pre_page_limit . '"'; endif; ?>>
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($title_override) ? $title_override : t('Best of ') . $movie_title; ?></span>
  </h2>
  <?php if (!empty($related_items_block)): ?>
    <?php print $related_items_block; ?>
  <?php endif; ?>
  <?php if (!empty($load_more_link)): ?>
    <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
  <?php endif; ?>
</div>
