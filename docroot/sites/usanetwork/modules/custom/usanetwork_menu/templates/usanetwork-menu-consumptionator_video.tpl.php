<?php
/**
 *  $main_url
 *  $show_url
 *  $show_name
 *  $episode['video_type']
 *  $episode['image_url']
 *  $episode['title']
 *  $episode['full_title']
 *  $episode['season_and_number']
 *  $episode['running_time']
 *  $episode['description']
 */
?>
<div class="header-nav-bar">
  <div class="usa-logo show-color hover-avail"><a class="logo" href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs<?php print (!empty($sponsored))? ' sponsored-enable': '';?>">
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h2>
        <a class="no-refresh nolink" data-state>
          <div class="table-wrapper">
            <span>
              <?php if ($episode['is_show_related']): ?>
                <?php print $episode['video_type'];?>: <?php print $episode['title']; ?>
              <?php else: ?>
                <?php print $episode['title']; ?>
              <?php endif; ?>
            </span>
          </div>
        </a>
      </h2>
    </div>
    <?php if (!empty($sponsored)) : ?>
      <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
    <?php endif; ?>
  </div>
  <?php if (!empty($authbar)) : ?>
    <?php print $authbar; ?>
  <?php endif; ?>
</div>
<div class="tab-content">
  <div class="tab-item info-tab">
    <div class="tab-item-content tab-item-wrapper">
      <div class="node node-usanetwork-promo">
        <div class="asset-img">
          <img src="<?php print $episode['image_url']; ?>" alt="">
        </div>
        <div class="meta">
          <div class="meta-info">
            <div class="caption"><?php print $episode['video_type']; ?></div>
            <div class="title">
              <h1><?php print !empty($h1) ? $h1 : $episode['title']; ?></h1>
            </div>
            <?php if (!empty($episode['season_number']) && !empty($episode['episode_number'])): ?>
              <div class="additional">
                <?php if ($episode['is_show_related']): ?>
                  <span>S<?php print $episode['season_number'] ?> <?php print t('episode') . ' ' . $episode['episode_number']; ?></span>
                <?php else: ?>
                  <span><?php print $episode['season_number'] ?></span>
                <?php endif; ?>
                <?php print $episode['running_time']; ?>
              </div>
            <?php endif; ?>
          </div>
          <div class="description">
            <?php print $episode['description']; ?>
          </div>
        </div>
      </div>
      <div class="social-bar">
        <?php print $sharebar; ?>
      </div>
    </div>
  </div>
</div>
