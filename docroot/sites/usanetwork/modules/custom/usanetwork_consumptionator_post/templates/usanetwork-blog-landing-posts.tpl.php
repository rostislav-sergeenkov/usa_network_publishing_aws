<?php
/**
 *
 */
?>
<?php if (!empty($ad)): ?>
  <div class="midbanner" id="show-blog-landing-<?php print $ad_id; ?>"></div>
<?php endif; ?>
<?php if (!$ajax_load): ?>
<div class="landing-list-items-all blog-landing-list-items ajax-load-block<?php print (empty($load_more_link))? ' infinity-finished': '' ;?>" data-node-nid="<?php print $node_nid; ?>">
  <?php endif; ?>
  <div class="landing-list-items-one-item blog-landing-list-items-one-item">
    <?php if (!$ajax_load): ?>
      <div class="upper-bar">
        <div class="title">
          <h2><?php print $title; ?></h2>
        </div>
        <?php if (!empty($filters)): ?>
          <div class="all-seasons-filter item-filter">
            <div class="filter-label"><?php print !empty($active_filter_title) ? $active_filter_title : t('All seasons'); ?></div>
            <ul class="filter-menu">
              <?php foreach ($filters as $filter): ?>
                <li class="filter-item"><a href="<?php print $filter['url']; ?>" class="no-ajax <?php if ($filter['active'] == TRUE): print 'active'; endif; ?>"><?php print $filter['title']; ?></a>
                </li>
              <?php endforeach; ?>
            </ul>
          </div>
        <?php endif; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($items)): ?>
      <div class="list-items">
        <?php foreach ($items as $item): ?>
          <?php print $item; ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
  <?php if (!empty($load_more_link)): ?>
    <div class="load-more-link"><a href="javascript:void(0)" class="more-posts"><?php print t('Load more'); ?></a>
    </div>
  <?php endif; ?>
  <?php if (!$ajax_load): ?>
    </div>
<?php endif; ?>
