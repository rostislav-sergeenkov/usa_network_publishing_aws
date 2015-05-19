<?php
/**
 *
 */
?>
<div class="videos-landing-page-container">
  <h1 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All videos'); ?></span>
  </h1>
  <div class="upper-menu">
    <div class="all-items-filter item-filter">
      <?php if (!empty($video_filters)): ?>
        <div class="filter-label"><?php print !empty($video_filter_title) ? $video_filter_title : t('All videos'); ?></div>
        <ul class="filter-menu transform-filter">
          <?php foreach ($video_filters as $video_filter): ?>
            <li class="filter-item<?php if ($video_filter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $video_filter['url']; ?>" data-type="<?php print $video_filter['tid']; ?>" class="no-ajax">
                <span class="title"><?php print $video_filter['name']; ?></span> <span class="items-in">(<?php print $video_filter['items_count']; ?>)</span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="sorter-items item-filter">
      <?php if (!empty($video_sorters)): ?>
        <div class="filter-label"><?php print !empty($video_sorter_title) ? $video_sorter_title : t('Newest'); ?></div>
        <ul class="filter-menu">
          <?php foreach ($video_sorters as $video_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($video_sorter['order'])): print ' order-' . $video_sorter['order']; endif; ?><?php if ($video_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $video_sorter['url']; ?>" data-type="<?php print $video_sorter['data_type']; ?>" class="no-ajax">
                <span class="title"><?php print $video_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="sorters-description">
      <?php print $tabs_description; ?>
    </div>
  </div>
  <div class="video-items-blocks show-border ajax-load-block"
  <?php if (!empty($show_nid)): print ' data-show-nid="' . $show_nid . '"'; endif;?>
  <?php if (!empty($items_per_page_limit)): print ' data-show-items-limit="' . $items_per_page_limit . '"'; endif; ?>
  <?php print ' data-filter-tid="' . $filter_tid . '"'; ?>
  <?php if (!empty($sorting_column)): print ' data-sorting-column="' . $sorting_column . '"'; endif; ?>
  <?php if (!empty($sorting_order)): print ' data-sorting-order="' . $sorting_order . '"'; endif; ?>>
    <?php if (!empty($videos_block)): ?>
      <?php print $videos_block; ?>
    <?php endif; ?>
    <?php if (!empty($load_more_link)): ?>
      <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
    <?php endif; ?>
  </div>
</div>
