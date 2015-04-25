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
<div class="header-nav-bar live-video-nav-bar">
  <div class="usa-logo show-color hover-avail"><a href="<?php print $main_url; ?>"></a></div>
  <div class="nav-bar-tabs">
    <div class="menu-item show-color hover-avail show-name">
      <a href="<?php print $show_url; ?>">
        <span><?php print $show_name; ?></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h1>
        <a class="no-refresh nolink" data-state>
          <?php print $episode['title']; ?>
        </a>
      </h1>
    </div>
  </div>
  <div class="tve-help-link signOut" data-ng-if="global.isAuthN">
    <?php print $authbar; ?>
  </div>
  <div class="tve-help-link signIn">
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
          <div class="meta-left">
            <div class="caption"><?php print $episode['video_type']; ?></div>
            <div class="title"><?php print $episode['title']; ?></div>
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

