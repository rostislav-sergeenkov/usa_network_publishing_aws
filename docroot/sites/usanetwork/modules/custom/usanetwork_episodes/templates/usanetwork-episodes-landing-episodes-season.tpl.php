<?php
/**
 *
 */
?>
<?php if (!empty($ad)): ?>
  <div class="midbanner" id="show-episodes-landing-<?php print $ad_id; ?>"></div>
<?php endif; ?>
<?php if (!empty($is_global_block)): ?>
  <div class="episode-landing-list-items-seasons" data-show-nid="<?php print $show_nid; ?>">
<?php endif; ?>
<div class="episode-landing-list-items-season" data-season-number="<?php print $season_number; ?>">
  <div class="upper-bar">
    <div class="title">
      <h2><?php print $title; ?></h2>
    </div>
    <?php if (!empty($filters)): ?>
      <div class="all-seasons-filter item-filter">
        <div class="filter-label"><?php print t('All seasons'); ?></div>
        <ul class="filter-menu">
          <?php foreach($filters as $filter): ?>
            <li class="filter-item"><a href="<?php print $filter['url']; ?>"<?php if ($filter['active'] == TRUE): print ' class="active"'; endif; ?>><?php print $filter['title']; ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endif; ?>
  </div>
  <?php if (!empty($items)): ?>
    <div class="list-items">
      <?php foreach ($items as $item): ?>
        <?php print $item; ?>
      <?php endforeach; ?>
    </div>
    <?php if (!empty($load_more_link)): ?>
      <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
    <?php endif; ?>
  <?php endif; ?>
</div>
<?php if (!empty($is_global_block)): ?>
  </div>
<?php endif; ?>