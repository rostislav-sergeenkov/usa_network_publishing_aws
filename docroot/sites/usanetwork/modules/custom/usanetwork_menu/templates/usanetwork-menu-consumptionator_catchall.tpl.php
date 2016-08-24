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
  <div class="nav-bar-tabs<?php print (!empty($node_path))? ' sponsored-enable': '';?>">
    <?php if (!empty($show_name)): ?>
      <div class="menu-item show-color hover-avail show-name">
        <a href="<?php print $show_url; ?>">
          <span><?php print $show_name; ?></span>
        </a>
      </div>
    <?php endif; ?>
    <div class="menu-item tab video-title info">
      <h2>
        <a class="no-refresh nolink" data-state>
          <div class="table-wrapper">
            <span><?php print $catchall_name; ?></span>
          </div>
        </a>
      </h2>
    </div>
    <?php if (!empty($node_path)) : ?>
      <div class="sponsored" data-mpspath="<?php print $node_path; ?>" data-scalemps="1"></div>
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
        <?php if (!empty($details['image'])): ?>
          <div class="asset-img">
            <img src="<?php print $details['image']; ?>" alt="">
          </div>
        <?php endif; ?>
        <div class="meta">
          <div class="title">
            <h1><?php print !empty($h1) ? $h1 : $catchall_name;?></h1>
          </div>
          <div class="description">
            <?php print $details['description']; ?>
          </div>
        </div>
      </div>
      <?php if (!empty($details['sharebar'])): ?>
        <div class="sharebar">
          <?php print $details['sharebar']; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>
