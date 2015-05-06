<?php
/**
 *
 */
?>
<div class="videos-landing-page-container">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print t('All videos'); ?></span>
  </h2>
  <div class="upper-menu">
    <div class="all-items-filter item-filter">
      <?php if (!empty($video_filters)): ?>
        <div class="filter-label">test</div>
        <ul class="filter-menu">
          <?php foreach ($video_filters as $video_filter): ?>
            <li class="filter-item<?php if ($video_filter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $video_filter['url']; ?>" data-type="<?php print $video_filter['tid']; ?>">
                <span class="title"><?php print $video_filter['name']; ?></span> <span class="items-in">(<?php print $video_filter['items_count']; ?>)</span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
    <div class="sorter-items item-filter">
      <?php if (!empty($video_sorters)): ?>
        <div class="filter-label">test</div>
        <ul class="filter-menu">
          <?php foreach ($video_sorters as $video_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($video_sorter['order'])): print ' order-' . $video_sorter['order']; endif; ?><?php if ($video_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $video_sorter['url']; ?>" data-type="<?php print $video_sorter['data_type']; ?>">
                <span class="title"><?php print $video_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
  <div class="video-items-blocks show-border ajax-load-block"><!--this tag with class "ajax-load-block" for data-attributes for ajax load><-->
    <?php if (!empty($videos_block)): ?>
      <?php print $videos_block; ?>
    <?php endif; ?>
    <?php if (!empty($load_more_link)): ?>
      <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
    <?php endif; ?>
  </div>
</div>
