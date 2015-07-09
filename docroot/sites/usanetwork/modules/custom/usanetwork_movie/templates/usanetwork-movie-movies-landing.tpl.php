<?php
/**
 *
 */
?>
<div class="landing-page-container all-movies-landing-page-container">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($block_title) ? $block_title : t('All Movies'); ?></span>
  </h2>
  <div class="upper-menu">
    <div class="sorter-items item-filter">
      <?php if (!empty($movie_sorters)): ?>
        <div class="filter-label"><?php print $movie_sorter_title; ?></div>
        <ul class="filter-menu">
          <?php foreach ($movie_sorters as $movie_sorter): ?>
            <li class="filter-item sorter-item<?php if (!empty($movie_sorter['order'])): print ' order-' . $movie_sorter['order']; endif; ?><?php if ($movie_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $movie_sorter['url']; ?>" class="no-ajax">
                <span class="title"><?php print $movie_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
  <div class="landing-items-blocks all-movies-items-blocks show-border ajax-load-block<?php print (empty($load_more_link))? ' infinity-finished': '' ;?>"
  <?php if (!empty($items_per_page_limit)): print ' data-show-items-limit="' . $items_per_page_limit . '"'; endif; ?>
  <?php if (!empty($sorting_order)): print ' data-sorting-order="' . $sorting_order . '"'; endif; ?>>
    <?php if (!empty($movies_block)): ?>
      <?php print $movies_block; ?>
    <?php endif; ?>
  </div>
</div>
