<?php
/**
 *
 */
?>
<div class="videos-landing-page-container">
  <div class="upper-menu">
    <div class="filter-items">
      <?php if (!empty($video_filters)): ?>
        <ul>
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
    <div class="sorter-items">
      <?php if (!empty($video_sorters)): ?>
        <ul>
          <?php foreach ($video_sorters as $video_sorter): ?>
            <li class="sorter-item<?php if (!empty($video_sorter['order'])): print ' order-' . $video_sorter['order']; endif; ?><?php if ($video_sorter['active'] == TRUE): print ' active'; endif; ?>">
              <a href="<?php print $video_sorter['url']; ?>" data-type="<?php print $video_sorter['data_type']; ?>">
                <span class="title"><?php print $video_sorter['title']; ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </div>
  <div class="video-items-blocks">
    <?php if (!empty($videos_block)): ?>
      <?php print $videos_block; ?>
    <?php endif; ?>
  </div>
</div>
