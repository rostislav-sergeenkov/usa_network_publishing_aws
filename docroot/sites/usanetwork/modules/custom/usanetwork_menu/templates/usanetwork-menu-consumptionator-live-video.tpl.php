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
      <a href="#">
        <span></span>
      </a>
    </div>
    <div class="menu-item tab video-title info">
      <h1>
        <a class="no-refresh nolink" data-state>
          <?php print t('Live: USA Live TV'); ?>
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
          <img src="" alt="">
        </div>
        <div class="title-overlay meta">
          <div class="meta-left">
            <div class="caption"></div>
            <div class="title"></div>
            <div class="additional"></div>
          </div>
          <div class="description"></div>
        </div>
      </div>
      <div class="social-bar">
        <h3 class="field-label"><?php print t('Share this video');?></h3>
        <div class="field-type-gigya-sharebar field-name-field-gigya-share-bar field-label-above" id="gigya-share-live-video"></div>
        <div>
      </div>
    </div>
  </div>
</div>

