<?php
/**
 * TV Show video landing page videos filters block.
 */
?>

<div class="upper-menu">
  <div class="all-items-filter item-filter show-border">
    <?php if (!empty($video_filters)): ?>
      <div class="filter-label"><?php print !empty($video_filter_title) ? $video_filter_title : t('All videos'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu transform-filter show-border">
        <?php foreach ($video_filters as $video_filter): ?>
          <li class="filter-item<?php if ($video_filter['active'] == TRUE): print ' active'; endif; ?>">
            <a href="<?php print $video_filter['url']; ?>#videos-landing-page-header" data-type="<?php print $video_filter['tid']; ?>" class="no-ajax show-border">
              <?php if (empty($video_filter['first_item'])): ?>
                <span class="title"><?php print $video_filter['name']; ?></span>
              <?php else: ?>
                <h1><span class="title"><?php print $video_filter['name']; ?></span></h1>
              <?php endif; ?>
              <span class="items-in show-color show-font">(<?php print $video_filter['items_count']; ?>)</span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
  <div class="sorter-items item-filter show-border">
    <?php if (!empty($video_sorters)): ?>
      <div class="filter-label">
        <?php print !empty($video_sorter_title) ? $video_sorter_title : t('Newest'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu show-border">
        <?php foreach ($video_sorters as $video_sorter): ?>
          <li class="filter-item sorter-item<?php if (!empty($video_sorter['order'])): print ' order-' . $video_sorter['order']; endif; ?><?php if ($video_sorter['active'] == TRUE): print ' active'; endif; ?>">
            <a href="<?php print $video_sorter['url']; ?>#videos-landing-page-header" data-type="<?php print $video_sorter['data_type']; ?>" class="no-ajax">
              <span class="title"><?php print $video_sorter['title']; ?></span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
</div>
