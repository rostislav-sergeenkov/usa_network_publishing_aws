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
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h2>
        <a class="no-refresh nolink" data-state>
          <?php print $episode['video_type'];?>: <?php print $episode['title']; ?>
        </a>
      </h2>
    </div>
    <?php if (!empty($sponsored)) : ?>
      <div class="sponsored" data-mpspath="<?php print $file_path; ?>" data-scalemps="1"></div>
    <?php endif; ?>
  </div>
  <div class="tve-help-link signOut" data-ng-if="global.isAuthN">
    <?php print $authbar; ?>
  </div>
  <div class="tve-help-link signIn no-auth">
    <a href="javascript:void(o)" class="loginButton clean"
       data-ng-if="!global.isAuthN"
       data-ng-click="openLoginWindow()" data-ng-cloak="">
    </a>
    <div class="tve-help-sign ng-scope" data-tve-sign-in-button="" data-ng-if="!global.isAuthN"></div>
  </div>
</div>
<div class="tab-content">
  <div class="tab-item info-tab">
    <div class="tab-item-content">
      <div class="node node-usanetwork-promo">
        <div class="asset-img">
          <img src="<?php print $episode['image_url']; ?>" alt="">
        </div>
        <div class="title-overlay meta">
          <div class="meta-info">
            <div class="caption"><?php print $episode['video_type']; ?></div>
            <div class="title">
              <h1><?php print !empty($h1) ? $h1 : $episode['title']; ?></h1>
            </div>
            <?php if (!empty($episode['season_number']) && !empty($episode['episode_number'])): ?>
              <div class="additional">
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
      <div class="social-bar">
        <?php print $sharebar; ?>
      </div>
    </div>
  </div>
</div>
