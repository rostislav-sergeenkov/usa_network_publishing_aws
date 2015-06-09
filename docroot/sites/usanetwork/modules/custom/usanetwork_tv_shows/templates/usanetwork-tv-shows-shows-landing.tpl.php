<?php
/**
 *
 */
?>
<div class="landing-page-container all-shows-landing-page-container">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All galleries'); ?></span>
  </h2>
  <div class="upper-menu">
    <div class="sorter-items item-filter">
      <?php if (!empty($show_sorters)): ?>
        <div class="filter-label"><?php print $show_sorter_title; ?></div>
        <ul class="filter-menu">
          <?php foreach ($show_sorters as $show_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($show_sorter['order'])): print ' order-' . $show_sorter['order']; endif; ?><?php if ($show_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $show_sorter['url']; ?>" class="no-ajax">
                <span class="title"><?php print $show_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
  <div class="landing-items-blocks all-shows-items-blocks show-border ajax-load-block"
  <?php if (!empty($items_per_page_limit)): print ' data-show-items-limit="' . $items_per_page_limit . '"'; endif; ?>
  <?php if (!empty($sorting_order)): print ' data-sorting-order="' . $sorting_order . '"'; endif; ?>>
    <?php if (!empty($shows_block)): ?>
      <?php print $shows_block; ?>
    <?php endif; ?>
  </div>
</div>
