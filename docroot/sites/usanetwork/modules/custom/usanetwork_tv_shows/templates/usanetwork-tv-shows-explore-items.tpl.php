<?php
/**
 *
 */
?>
<div class="landing-page-container explore-landing-page-container">
  <h2 id="explore-landing-page-header" class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All items'); ?></span>
  </h2>
  <div class="upper-menu">
    <div class="all-items-filter item-filter">
      <?php if (!empty($explore_filters)): ?>
        <div class="filter-label"><?php print !empty($explore_filter_title) ? $explore_filter_title : t('All items'); ?></div>
        <ul class="filter-menu transform-filter">
          <?php foreach ($explore_filters as $explore_filter): ?>
            <li class="filter-item<?php if ($explore_filter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $explore_filter['url']; ?>#explore-landing-page-header"<?php if (isset($explore_filter['id'])):?> data-type="<?php print $explore_filter['id'];?>"<?php endif;?> class="no-ajax">
                <span class="title"><?php print $explore_filter['name']; ?></span> <span class="items-in">(<?php print $explore_filter['items_count']; ?>)</span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="sorter-items item-filter">
      <?php if (!empty($explore_sorters)): ?>
        <div class="filter-label"><?php print !empty($explore_sorter_title) ? $explore_sorter_title : t('Newest'); ?></div>
        <ul class="filter-menu">
          <?php foreach ($explore_sorters as $explore_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($explore_sorter['order'])): print ' order-' . $explore_sorter['order']; endif; ?><?php if ($explore_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $explore_sorter['url']; ?>#explore-landing-page-header" data-type="<?php print $explore_sorter['data_type']; ?>" class="no-ajax">
                <span class="title"><?php print $explore_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <?php if (!empty($tabs_description)): ?>
      <div class="sorters-description">
        <h1><?php print $tabs_description; ?></h1>
      </div>
    <?php endif; ?>
  </div>
  <div class="landing-items-blocks explore-items-blocks show-border ajax-load-block<?php print (empty($load_more_link))? ' infinity-finished': '' ;?>"
  <?php if (!empty($show_nid)): print ' data-show-nid="' . $show_nid . '"'; endif;?>
  <?php if (!empty($items_per_page_limit)): print ' data-show-items-limit="' . $items_per_page_limit . '"'; endif; ?>
  <?php if (isset($filter_tid)): print ' data-filter-tid="' . $filter_tid . '"'; endif; ?>
  <?php if (!empty($sorting_order)): print ' data-sorting-order="' . $sorting_order . '"'; endif; ?>>
    <?php if (!empty($explore_block)): ?>
      <?php print $explore_block; ?>
    <?php endif; ?>
    <?php if (!empty($load_more_link)): ?>
      <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
    <?php endif; ?>
  </div>
</div>
