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
  <div class="usa-logo show-color hover-avail"><a href="<?php print $main_url; ?>"></a></div>
  <div class="show-title-wrapper">
    <div class="show-title-block">
      <div class="tab show-color hover-avail show-name">
        <a href="<?php print $show_url; ?>">
          <span><?php print $show_name; ?></span>
        </a>
      </div>
      <div class="tab video-title">
        <h1><?php print $episode['title']; ?></h1>
      </div>
    </div>
  </div>
  <div class="nav-bar-tabs">
    <div class="tab info"><a data-state="active" href="#" class="no-refresh active"></a></div>
    <!--<div class="tab share"><a href="#" class="no-refresh"></a></div>-->
  </div>
  <div class="tve-help-link signIn"></div>
  <div class="tve-help-link signOut" data-ng-if="global.isAuthN">
    <?php print $authbar; ?>
  </div>
</div>
<div style="display: block;" class="tab-item info-tab active">
  <div class="show-info">
    <div class="node node-usanetwork-promo">
      <a href="#">
        <div class="asset-img">
          <img src="<?php print $episode['image_url']; ?>" alt="">
        </div>
      </a>
      <div class="title-overlay meta">
        <div class="meta-left">
          <div class="caption"><?php print $episode['video_type']; ?></div>
          <div class="title"><?php print $episode['title']; ?></div>
          <?php if (!empty($episode['season_number']) && !empty($episode['episode_number'])): ?>
            <div class="type-and-time">
              <span>S<?php print $episode['season_number'] ?> <?php print t('episode') . ' ' . $episode['episode_number']; ?></span>
              <?php print $episode['running_time']; ?>
            </div>
          <?php endif; ?>
        </div>
        <div class="description">
          <?php print $episode['description']; ?>
        </div>
      </div>
    </div>
    <div class="sharebar">
      <?php print $sharebar; ?>
    </div>
  </div>
</div>
