<?php
/**
 *
 */
?>
<div class="landing-page-container photos-landing-page-container">
  <?php if (!$is_new_design) : ?>
    <h2 id="photos-landing-page-header" class="section-title">
      <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All galleries'); ?></span>
    </h2>
  <?php endif; ?>
  <div class="upper-menu">
    <?php if ($is_new_design) : ?>
      <?php if (!empty($tabs_description)): ?>
        <div class="sorters-description">
          <h1><?php print $tabs_description; ?></h1>
        </div>
      <?php endif; ?>
    <?php endif; ?>
    <div class="all-items-filter item-filter<?php print ($is_new_design)? ' show-border': ''; ?>">
      <?php if (!empty($photo_filters)): ?>
        <div class="filter-label"><?php print !empty($photo_filter_title) ? $photo_filter_title : t('All galleries'); ?>
          <?php if ($is_new_design) : ?>
            <span class="show-color show-font"></span>
          <?php endif; ?>
        </div>
        <ul class="filter-menu transform-filter<?php print ($is_new_design)? ' show-border': ''; ?>">
          <?php foreach ($photo_filters as $photo_filter): ?>
            <li class="filter-item<?php if ($photo_filter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $photo_filter['url']; ?>#photos-landing-page-header"<?php if (isset($photo_filter['id'])):?> data-type="<?php print $photo_filter['id'];?>"<?php endif;?> class="no-ajax<?php print ($is_new_design) ? ' show-border' : '' ?>">
                <span class="title"><?php print $photo_filter['name']; ?></span> <span class="items-in<?php print ($is_new_design) ? ' show-color show-font' : '' ?>">(<?php print $photo_filter['items_count']; ?>)</span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="sorter-items item-filter<?php print ($is_new_design)? ' show-border': ''; ?>">
      <?php if (!empty($photo_sorters)): ?>
        <div class="filter-label"><?php print !empty($photo_sorter_title) ? $photo_sorter_title : t('Newest'); ?>
          <?php if ($is_new_design) : ?>
            <span class="show-color show-font"></span>
          <?php endif; ?>
        </div>
        <ul class="filter-menu<?php print ($is_new_design)? ' show-border': ''; ?>">
          <?php foreach ($photo_sorters as $photo_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($photo_sorter['order'])): print ' order-' . $photo_sorter['order']; endif; ?><?php if ($photo_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $photo_sorter['url']; ?>#photos-landing-page-header" data-type="<?php print $photo_sorter['data_type']; ?>" class="no-ajax">
                <span class="title"><?php print $photo_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <?php if (!$is_new_design) : ?>
      <?php if (!empty($tabs_description)): ?>
        <div class="sorters-description">
          <h1><?php print $tabs_description; ?></h1>
        </div>
      <?php endif; ?>
    <?php endif; ?>
  </div>
  <div class="landing-items-blocks photo-items-blocks show-border ajax-load-block<?php print (empty($load_more_link))? ' infinity-finished': '' ;?>"
  <?php if (!empty($show_nid)): print ' data-show-nid="' . $show_nid . '"'; endif;?>
  <?php if (!empty($items_per_page_limit)): print ' data-show-items-limit="' . $items_per_page_limit . '"'; endif; ?>
  <?php if (isset($filter_tid)): print ' data-filter-tid="' . $filter_tid . '"'; endif; ?>
  <?php if (!empty($sorting_order)): print ' data-sorting-order="' . $sorting_order . '"'; endif; ?>>
    <?php if (!empty($photos_block)): ?>
      <?php print $photos_block; ?>
    <?php endif; ?>
    <?php if (!empty($load_more_link)): ?>
      <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
    <?php endif; ?>
  </div>
</div>
