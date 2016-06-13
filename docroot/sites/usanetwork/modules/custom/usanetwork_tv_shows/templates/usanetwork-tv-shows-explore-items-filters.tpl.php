<?php
/**
 * TV Show explore items landing page filters block.
 */
?>

<div class="upper-menu">
  <div class="all-items-filter item-filter show-border">
    <?php if (!empty($explore_filters)): ?>
      <div class="filter-label"><?php print !empty($explore_filter_title) ? $explore_filter_title : t('All items'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu transform-filter show-border'l">
        <?php foreach ($explore_filters as $explore_filter): ?>
          <li class="filter-item<?php if ($explore_filter['active'] == TRUE): print ' active'; endif; ?>">
            <a href="<?php print $explore_filter['url']; ?>#explore-landing-page-header"<?php if (isset($explore_filter['id'])):?> data-type="<?php print $explore_filter['id'];?>"<?php endif;?> class="no-ajax show-border">
              <?php if (empty($explore_filter['first_item'])): ?>
                <span class="title"><?php print $explore_filter['name']; ?></span>
              <?php else: ?>
                <h1><span class="title"><?php print $explore_filter['name']; ?></span></h1>
              <?php endif; ?>
              <span class="items-in show-color show-font">(<?php print $explore_filter['items_count']; ?>)</span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
  <div class="sorter-items item-filter show-border">
    <?php if (!empty($explore_sorters)): ?>
      <div class="filter-label"><?php print !empty($explore_sorter_title) ? $explore_sorter_title : t('Newest'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu show-border">
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
</div>
