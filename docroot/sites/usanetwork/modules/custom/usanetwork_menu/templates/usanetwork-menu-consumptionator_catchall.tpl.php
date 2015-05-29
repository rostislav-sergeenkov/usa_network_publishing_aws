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
  <div class="nav-bar-tabs">
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
          <span><?php print $catchall_name; ?></span>
        </a>
      </h2>
    </div>
  </div>
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
        <div class="title-overlay meta">
          <div class="title">
            <h1><?php print !empty($h1) ? $h1 : $catchall_name;?></h1>
          </div>
          <div class="description">
            <?php print $details['description']; ?>
          </div>
          <?php if (!empty($details['sharebar'])): ?>
            <div class="sharebar">
              <?php print $details['sharebar']; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
