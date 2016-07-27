<?php
/**
 * TV Show photos landing page filters block.
 */
?>

<div class="upper-menu">
  <div class="all-items-filter item-filter show-border">
    <?php if (!empty($photo_filters)): ?>
      <div class="filter-label"><?php print !empty($photo_filter_title) ? $photo_filter_title : t('All galleries'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu transform-filter show-border">
        <?php foreach ($photo_filters as $photo_filter): ?>
          <li class="filter-item<?php if ($photo_filter['active'] == TRUE): print ' active'; endif; ?>">
            <a href="<?php print $photo_filter['url']; ?>#photos-landing-page-header"<?php if (isset($photo_filter['id'])):?> data-type="<?php print $photo_filter['id'];?>"<?php endif;?> class="no-ajax show-border">
              <?php if (empty($photo_filter['first_item'])): ?>
                <span class="title"><?php print $photo_filter['name']; ?></span>
              <?php else: ?>
                <h1><span class="title"><?php print $photo_filter['name']; ?></span></h1>
              <?php endif; ?>
              <span class="items-in show-color show-font">(<?php print $photo_filter['items_count']; ?>)</span>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
  <div class="sorter-items item-filter show-border">
    <?php if (!empty($photo_sorters)): ?>
      <div class="filter-label"><?php print !empty($photo_sorter_title) ? $photo_sorter_title : t('Newest'); ?>
        <span class="show-color show-font"></span>
      </div>
      <ul class="filter-menu show-border">
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
</div>
